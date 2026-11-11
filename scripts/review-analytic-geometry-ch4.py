"""Independent symbolic and numerical checks; supplements the written proofs."""
import sympy as S
import numpy as np

# 4.3.13: perpendicular axis equations, both choices of orientation.
a,b,t,c1,c2,xp,yp=S.symbols('a b t c1 c2 xp yp',real=True)
r=S.sqrt(a*a+b*b)
x0=(b*c2-t*a*c1)/(t*(a*a+b*b))
y0=(-a*c2-t*b*c1)/(t*(a*a+b*b))
for eps in [-1,1]:
    x=x0+eps*(a*xp-b*yp)/r;y=y0+eps*(b*xp+a*yp)/r
    assert S.simplify(a*x+b*y+c1-eps*r*xp)==0
    assert S.simplify(-t*b*x+t*a*y+c2-eps*t*r*yp)==0
    R=S.Matrix([[eps*a/r,-eps*b/r],[eps*b/r,eps*a/r]])
    assert S.simplify(R.T*R)==S.eye(2) and S.simplify(R.det())==1
print('4.3.13: both axis choices, origins, equations and orientation passed')

# 4.4.7: verify the rotation independently by its axis and planar action.
R=S.Matrix([[2,-1,2],[2,2,-1],[-1,2,2]])/3
u=S.Matrix([1,-1,0])/S.sqrt(2);v=S.Matrix([1,1,-2])/S.sqrt(6);w=S.ones(3,1)/S.sqrt(3)
assert R.T*R==S.eye(3) and R.det()==1 and R*w==w
assert S.simplify(R*u-u/2-S.sqrt(3)*v/2)==S.zeros(3,1)
assert S.simplify(R*v+S.sqrt(3)*u/2-v/2)==S.zeros(3,1)
print('4.4.7: axis, signed angle, inverse and orientation passed')

# 4.4.10: exact example and 80 trace-zero forms, including rank-two cases.
aa,bb,cc=S.symbols('A B C',real=True,nonzero=True)
root1=(-bb+S.sqrt(bb**2-aa*cc))/cc
root2=(bb+S.sqrt(aa**2+bb**2))/aa
assert S.simplify(aa+2*bb*root1+cc*root1**2)==0
assert S.simplify(aa+2*bb*root2-aa*root2**2)==0
U=S.Matrix([[S.sqrt(S.Rational(2,3)),0,1/S.sqrt(3)],[-1/S.sqrt(6),1/S.sqrt(2),1/S.sqrt(3)],[-1/S.sqrt(6),-1/S.sqrt(2),1/S.sqrt(3)]])
assert S.simplify(U*U.T)==S.eye(3)
assert all(S.simplify((U*S.diag(1,1,-2)*U.T)[i,i])==0 for i in range(3))
rng=np.random.default_rng(4410)
def zero_between(A,u,v):
    def q(t):
        d=u*np.cos(t)+v*np.sin(t);return d@A@d
    lo=0.;hi=np.pi/2;flo=q(lo)
    if abs(flo)<1e-13:return u
    if abs(q(hi))<1e-13:return v
    assert flo*q(hi)<0
    for _ in range(65):
        mid=(lo+hi)/2
        if flo*q(mid)>0:lo=mid
        else:hi=mid
    return u*np.cos((lo+hi)/2)+v*np.sin((lo+hi)/2)
for k0 in range(80):
    H,_=np.linalg.qr(rng.normal(size=(3,3)))
    A=H@np.diag([1.,-1.,0.])@H.T if k0<20 else rng.normal(size=(3,3))
    A=(A+A.T)/2;A-=np.eye(3)*np.trace(A)/3
    d=np.diag(A);u0=zero_between(A,np.eye(3)[np.argmax(d)],np.eye(3)[np.argmin(d)])
    e=np.eye(3)[np.argmin(abs(u0))];v0=e-u0*(e@u0);v0/=np.linalg.norm(v0)
    w0=np.cross(u0,v0);u2=zero_between(A,v0,w0);u3=np.cross(u0,u2)
    V=np.stack([u0,u2,u3])
    assert np.allclose(V@V.T,np.eye(3),atol=1e-11)
    assert np.max(abs(np.diag(V@A@V.T)))<1e-10
print('4.4.10: exact orthogonal generators and 80 trace-zero forms passed')

# 4.4.11: all finite and exceptional plane parameters; reverse reconstruction.
x,y,z,h,ss,cc,kk=S.symbols('x y z h s c k',real=True)
A=ss*x-cc*y;B=z-h;C=ss*x+cc*y;D=z+h
n1=S.Matrix([B*ss,-B*cc,-A]);n2=S.Matrix([D*ss,D*cc,-C])
assert S.expand(n1.dot(n2)-(A*C-(cc*cc-ss*ss)*B*D))==0
for alpha in [.05,.3,.7]:
    s=np.sin(alpha);c=np.cos(alpha);k=c*c-s*s;h0=1.3
    d1=np.array([c,s,0]);d2=np.array([c,-s,0])
    for _ in range(60):
        x0=rng.uniform(-3,3);ang=rng.uniform(0,2*np.pi)
        rad=np.sqrt(1+s*s*x0*x0/(k*h0*h0))
        y0=np.sqrt(k)*h0/c*rad*np.cos(ang);z0=h0*rad*np.sin(ang)
        p=np.array([x0,y0,z0]);a=s*x0-c*y0;b=z0-h0;C0=s*x0+c*y0;D0=z0+h0
        m=np.array([b*s,-b*c,-a]);n=np.array([D0*s,D0*c,-C0])
        assert abs(m@n)<1e-10
        assert abs(m@d1)<1e-10 and abs(n@d2)<1e-10
        assert abs(m@(p-np.array([0,0,h0])))<1e-10
        assert abs(n@(p-np.array([0,0,-h0])))<1e-10
    for sign,direction in [(1,d1),(-1,d2)]:
        for tau in [-2.,0.,1.7]:
            p=tau*direction+np.array([0,0,sign*h0])
            other=d2 if sign==1 else d1
            n=np.cross(other,p-np.array([0,0,-sign*h0]));m=np.cross(direction,n)
            assert np.linalg.norm(m)>1e-8 and np.linalg.norm(n)>1e-8
            assert abs(m@n)<1e-10 and abs(m@direction)<1e-10
    # a=0: z=h and s*x+c*y=0, and its z=-h counterpart.
    for z0,sgn in [(h0,-1),(-h0,1)]:
        for x0 in [-2.,0.,3.]:
            y0=sgn*s*x0/c
            assert abs(c*c*y0*y0+k*z0*z0-s*s*x0*x0-k*h0*h0)<1e-10
print('4.4.11: general locus, line points and exceptional horizontal planes passed')

# 4.4.12: expand the three given substitutions and test singular-angle limits.
p,t,f=S.symbols('psi theta phi',real=True)
def Z(b):return S.Matrix([[S.cos(b),-S.sin(b),0],[S.sin(b),S.cos(b),0],[0,0,1]])
def X(b):return S.Matrix([[1,0,0],[0,S.cos(b),-S.sin(b)],[0,S.sin(b),S.cos(b)]])
cp,sp,ct,st,cf,sf=S.cos(p),S.sin(p),S.cos(t),S.sin(t),S.cos(f),S.sin(f)
M=S.Matrix([[cp*cf-sp*ct*sf,-cp*sf-sp*ct*cf,sp*st],[sp*cf+cp*ct*sf,cp*ct*cf-sp*sf,-cp*st],[st*sf,st*cf,ct]])
assert S.simplify(M-Z(p)*X(t)*Z(f))==S.zeros(3)
assert S.trigsimp(M.T*M)==S.eye(3)
assert S.trigsimp(M.subs(t,0)-Z(p+f))==S.zeros(3)
assert S.trigsimp(M.subs(t,S.pi)-Z(p-f)*X(S.pi))==S.zeros(3)
print('4.4.12: all 9 coefficients, orthogonality and degenerate angles passed')
print('PASS: all 5 exercise groups')
