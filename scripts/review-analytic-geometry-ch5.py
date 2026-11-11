"""Independent exact identities and numerical constructions, supplementing the proofs."""
import sympy as S
import numpy as np

# 5.4.13: determine the entire quadratic from the six reflected points.
rt=S.sqrt(2)
points=[(-rt,0),(rt,0)]+[(e/rt,3*d/rt) for e in [-1,1] for d in [-1,1]]
rows=S.Matrix([[u*u,2*u*v,v*v,2*u,2*v,1] for u,v in points])
assert rows.rank()==5
assert rows*S.Matrix([1,0,S.Rational(1,3),0,0,-2])==S.zeros(6,1)
x,y=S.symbols('x y',real=True)
u=(x+y+1)/rt;v=(-x+y-1)/rt
assert S.expand(3*(u*u/2+v*v/6-1)-(x*x+x*y+y*y+2*x+y-2))==0
R=S.Matrix([[1,1],[-1,1]])/rt
assert R*R.T==S.eye(2) and R.det()==1
print('5.4.13 PASS: all reflected points, rank, orientation and original equation')

# 5.5.8: polynomial converse identity and both individual focal pedal circles.
a,b,c,xi,eta=S.symbols('a b c xi eta',real=True)
for eps in [-1,1]:
    expr=(a*a-eps*c*xi)**2-a*a*(xi-eps*c)**2-b*b*eta*eta
    assert S.expand(expr).subs(c*c,a*a-b*b).expand()==S.expand(b*b*(a*a-xi*xi-eta*eta))
for aa,bb in [(3.,2.),(2.,2.),(5.,.7)]:
    cc=np.sqrt(aa*aa-bb*bb)
    for theta in np.linspace(0,2*np.pi,73):
        n,m=np.cos(theta),np.sin(theta);h=np.hypot(aa*n,bb*m)
        for eps in [-1,1]:
            focus=np.array([eps*cc,0.]);foot=focus+(h-eps*cc*n)*np.array([n,m])
            assert np.isclose(foot@foot,aa*aa)
            assert np.isclose(np.array([n,m])@foot,h)
            target=aa*np.array([n,m]);normal=target-focus;constant=aa*aa-eps*cc*target[0]
            assert constant>0 and np.isclose(normal@target,constant)
            assert np.isclose(constant**2,aa*aa*normal[0]**2+bb*bb*normal[1]**2)
print('5.5.8 PASS: converse identity, both foci, axial tangents and coincident foci')

# 5.5.9: construct both tangent directions independently from a symmetric matrix.
for aa,bb in [(3.,2.),(2.,3.),(2.,2.)]:
    radius=np.hypot(aa,bb)
    tests=[radius*np.array([np.cos(t),np.sin(t)]) for t in np.linspace(0,2*np.pi,81)]
    tests += [np.array([sx*aa,sy*bb]) for sx in [-1,1] for sy in [-1,1]]
    for P in tests:
        Q=np.outer(P,P)-np.diag([aa*aa,bb*bb])
        vals,V=np.linalg.eigh(Q)
        assert vals[0]<0<vals[1] and np.isclose(vals.sum(),0)
        normals=[(V[:,0]+V[:,1])/np.sqrt(2),(V[:,0]-V[:,1])/np.sqrt(2)]
        assert np.isclose(normals[0]@normals[1],0)
        contacts=[]
        for normal in normals:
            h=normal@P
            assert abs(h)>1e-10 and np.isclose(h*h,aa*aa*normal[0]**2+bb*bb*normal[1]**2)
            T=np.array([aa*aa*normal[0],bb*bb*normal[1]])/h;contacts.append(T)
            assert np.isclose((T[0]/aa)**2+(T[1]/bb)**2,1)
            assert np.isclose(normal@T,h)
        assert np.isclose((contacts[0]-P)@(contacts[1]-P),0,atol=1e-10)
print('5.5.9 PASS: entire director circle, exceptional axis directions and circular ellipse')

# 5.5.10: exact tangent intersection, contact chord and full directrix converse.
p,t1,t2=S.symbols('p t1 t2',real=True)
A=S.Matrix([p*t1*t1/2,p*t1]);B=S.Matrix([p*t2*t2/2,p*t2])
C=S.Matrix([p*t1*t2/2,p*(t1+t2)/2])
for t in [t1,t2]:
    assert S.expand(C[0]-t*C[1]+p*t*t/2)==0
for T in [A,B]:
    assert S.expand(2*T[0]-(t1+t2)*T[1]+p*t1*t2)==0
assert S.simplify((p+p*t1*t2).subs(t2,-1/t1))==0
for pp in [.1,1.2,4.]:
    for yy in [-8.,-1.,0.,1.,8.]:
        r=np.roots([1.,-2*yy/pp,-1.])
        assert np.isclose(r.prod(),-1) and np.isclose(pp*r.sum()/2,yy)
print('5.5.10 PASS: both tangent equations, focal chord and every directrix point')

# 5.5.11: midpoint, strict separation and triangle nondegeneracy.
E=(A+B)/2
assert S.expand(E[1]-C[1])==0
assert S.expand(E[0]-C[0]-p*(t1-t2)**2/4)==0
area=S.det(S.Matrix.hstack(A-C,B-C))
assert S.factor(area)==-p**2*(t1-t2)**3/4
for q1,q2 in [(0,2),(-2,0),(-1,1),(-1.4,2)]:
    assert float((E[0]-C[0]).subs({p:1.2,t1:q1,t2:q2}))>0
print('5.5.11 PASS: midpoint identity, distinctness, vertex and vertical-chord cases')

# 5.5.17: exact determinant and center; distances in original Euclidean coordinates.
A1,B1,C1,A2,B2,C2=S.symbols('A1 B1 C1 A2 B2 C2',real=True)
delta=A1*B2-A2*B1
alpha=A1*A1-A2*A2;beta=A1*B1-A2*B2;gamma=B1*B1-B2*B2
assert S.expand(alpha*gamma-beta*beta+delta*delta)==0
x0=(B1*C2-B2*C1)/delta;y0=(A2*C1-A1*C2)/delta
assert S.simplify(A1*x0+B1*y0+C1)==0 and S.simplify(A2*x0+B2*y0+C2)==0
assert S.det(S.Matrix([[A1-A2,B1-B2],[A1+A2,B1+B2]]))==2*delta
for mat in [np.array([[1.1,.35],[.25,.95]]),np.array([[0.,2.],[3.,0.]]),np.array([[1.,4.],[2.,3.]])]:
    constants=np.array([-.6,.3]);center=np.linalg.solve(mat,-constants)
    assert np.allclose(mat@center+constants,0)
    vals=np.linalg.eigvalsh(mat.T@np.diag([1.,-1.])@mat)
    assert vals[0]<0<vals[1]
    for end in [0,1]:
        for sign in [-1,1]:
            distances=[]
            for scale in [10.,100.,1000.]:
                w,z=(1/(sign*scale),sign*scale) if end==0 else (sign*scale,1/(sign*scale))
                point=np.linalg.solve(mat,np.array([(w+z)/2,(z-w)/2])-constants)
                L=mat@point+constants
                assert np.isclose(L[0]**2-L[1]**2,1,atol=1e-7)
                row=mat[0]-mat[1] if end==0 else mat[0]+mat[1]
                value=L[0]-L[1] if end==0 else L[0]+L[1]
                distance=abs(value)/np.linalg.norm(row);distances.append(distance)
                assert np.isclose(distance,1/(scale*np.linalg.norm(row)),rtol=1e-6)
            assert distances[0]>distances[1]>distances[2]
print('5.5.17 PASS: exact center and determinants; all four ends and Euclidean distances')
