"""Six exact, equal-scale Chapter 5 diagrams. Optional argument: PNG preview folder."""
from pathlib import Path
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

OUT = Path(__file__).resolve().parents[1] / 'public/figures/analytic-geometry'
PREVIEW = Path(sys.argv[1]) if len(sys.argv) > 1 else None
plt.rcParams.update({'font.family': 'serif', 'font.serif': ['DejaVu Serif'],
                    'mathtext.fontset': 'cm', 'font.size': 16, 'svg.fonttype': 'path',
                    'svg.hashsalt': 'analytic-geometry-ch5', 'axes.unicode_minus': False})
BLUE, TEAL, INK, GRAY = '#2563eb', '#237b7b', '#252a30', '#8793a0'

def frame(xlim, ylim, title):
    fig, ax = plt.subplots(figsize=(6.4, 6.1))
    ax.set_aspect('equal'); ax.set_xlim(xlim); ax.set_ylim(ylim); ax.axis('off')
    ax.set_title(title, fontsize=21, pad=16)
    return fig, ax

def save(fig, name):
    OUT.mkdir(parents=True, exist_ok=True)
    target = OUT / (name + '.svg')
    fig.savefig(target, bbox_inches='tight', pad_inches=.16, facecolor='white',
                metadata={'Date': None, 'Creator': 'Exact coordinate construction; Matplotlib'})
    target.write_text('\n'.join(s.rstrip() for s in target.read_text().splitlines()) + '\n')
    if PREVIEW:
        PREVIEW.mkdir(parents=True, exist_ok=True)
        fig.savefig(PREVIEW / (name + '.png'), dpi=150, bbox_inches='tight', pad_inches=.16)
    plt.close(fig)

def plot(ax, points, color=INK, lw=1.8, ls='-', **kw):
    q=np.asarray(points); ax.plot(q[:,0],q[:,1],color=color,lw=lw,ls=ls,**kw)

def mark(ax, p, label, offset=(.1,.1), color=INK, size=21):
    p=np.asarray(p); ax.scatter(*p,s=19,color=color,zorder=6)
    ax.text(*(p+offset),label,color=color,fontsize=size,zorder=7)

def right_angle(ax, vertex, a, b, length=.18, color=INK):
    vertex=np.asarray(vertex); a=np.asarray(a); b=np.asarray(b)
    a=a/np.linalg.norm(a); b=b/np.linalg.norm(b)
    assert abs(a@b)<1e-10
    plot(ax,[vertex+length*a,vertex+length*(a+b),vertex+length*b],color,lw=1)

def ellipse(ax,a,b,color=BLUE):
    t=np.linspace(0,2*np.pi,600)
    plot(ax,np.column_stack([a*np.cos(t),b*np.sin(t)]),color,lw=2.3)

def circle(ax,r):
    t=np.linspace(0,2*np.pi,600)
    plot(ax,np.column_stack([r*np.cos(t),r*np.sin(t)]),GRAY,lw=1.6,ls='--')

def axes(ax,xlim,ylim):
    ax.annotate('',(xlim[1]-.1,0),(xlim[0]+.1,0),arrowprops={'arrowstyle':'->','lw':.8,'color':GRAY})
    ax.annotate('',(0,ylim[1]-.1),(0,ylim[0]+.1),arrowprops={'arrowstyle':'->','lw':.8,'color':GRAY})
    ax.text(xlim[1]-.25,.12,'$x$',color=GRAY,fontsize=18)
    ax.text(.12,ylim[1]-.3,'$y$',color=GRAY,fontsize=18)

# 5.4.13: inverse of the right-handed orthogonal coordinate change.
fig,ax=frame((-4.1,2.1),(-2.85,2.85),r'$x^2+xy+y^2+2x+y-2=0$')
axes(ax,(-4.1,2.1),(-2.85,2.85))
t=np.linspace(0,2*np.pi,600);u=np.sqrt(2)*np.cos(t);v=np.sqrt(6)*np.sin(t)
x=-1+(u-v)/np.sqrt(2);y=(u+v)/np.sqrt(2)
assert np.allclose(x*x+x*y+y*y+2*x+y-2,0)
plot(ax,np.column_stack([x,y]),BLUE,2.4)
plot(ax,[(-3.6,2.6),(1.6,-2.6)],TEAL,1.25,'--')
plot(ax,[(-3.6,-2.6),(1.6,2.6)],INK,1.25,':')
ax.text(-3.85,2.38,r'$x+y+1=0$',color=TEAL,fontsize=17,rotation=-45,rotation_mode='anchor')
ax.text(-.35,1.45,r'$x-y+1=0$',color=INK,fontsize=17,rotation=45,rotation_mode='anchor')
mark(ax,(-1,0),"$O'$",(-.42,.13));mark(ax,(-2,-1),'$P(-2,-1)$',(-1.75,-.38),size=18)
mark(ax,(0,-2),'$Q(0,-2)$',(.15,-.6),size=18)
save(fig,'ch5-symmetry-ellipse')

# 5.5.8: both feet on the same tangent; no approximate geometry.
a,b=3.,2.;c=np.sqrt(a*a-b*b);theta=.85;n=np.cos(theta);m=np.sin(theta)
h=np.sqrt(a*a*n*n+b*b*m*m);M=np.array([a*a*n/h,b*b*m/h])
fig,ax=frame((-3.8,3.8),(-3.5,3.8),r'$x^2+y^2=a^2$')
circle(ax,a);ellipse(ax,a,b)
direction=np.array([-m,n]);base=h*np.array([n,m])
plot(ax,[base-5*direction,base+5*direction],INK,1.65)
for eps,label in [(-1,'1'),(1,'2')]:
    F=np.array([eps*c,0.]);T=F+(h-eps*c*n)*np.array([n,m])
    assert np.isclose(T@T,a*a) and np.isclose(n*T[0]+m*T[1],h)
    plot(ax,[F,T],TEAL,1.5,'--')
    right_angle(ax,T,F-T,direction if eps==1 else -direction,.19,TEAL)
    mark(ax,F,'$F_'+label+'$',(-.17,-.42))
    mark(ax,T,'$T_'+label+'$',(-.35,.2) if eps==-1 else (.16,-.12),TEAL)
mark(ax,M,'$M$',(-.3,-.38),BLUE);mark(ax,(0,0),'$O$',(-.3,-.35))
ax.text(-2.4,-2.65,r'$a=3,\ b=2$',fontsize=17,color=GRAY)
save(fig,'ch5-focal-pedal')

# 5.5.9: unit normals are orthogonal; the selected tangent rays meet at a right angle.
theta=np.pi/5;n=np.cos(theta);m=np.sin(theta)
h=np.sqrt(a*a*n*n+b*b*m*m);k=np.sqrt(a*a*m*m+b*b*n*n)
P=np.array([h*n-k*m,h*m+k*n]);M=np.array([a*a*n/h,b*b*m/h]);N=np.array([-a*a*m/k,b*b*n/k])
assert np.isclose(P@P,a*a+b*b)
fig,ax=frame((-4.15,4.15),(-3.95,4.25),r'$x^2+y^2=a^2+b^2$')
circle(ax,np.sqrt(a*a+b*b));ellipse(ax,a,b)
for T in [M,N]:plot(ax,[P-.3*(T-P),P+1.8*(T-P)],INK,1.65)
plot(ax,[(0,0),P],GRAY,1.2,':');right_angle(ax,P,M-P,N-P,.24)
mark(ax,P,'$P$',(.16,.13));mark(ax,M,'$M$',(.18,-.08),BLUE);mark(ax,N,'$N$',(-.4,.04),BLUE)
mark(ax,(0,0),'$O$',(-.35,-.35));ax.text(-2.6,-2.8,r'$a=3,\ b=2$',fontsize=17,color=GRAY)
save(fig,'ch5-director-circle')

def parabola(ax,p,ys):
    yy=np.linspace(*ys,500);plot(ax,np.column_stack([yy*yy/(2*p),yy]),BLUE,2.4)

def contact(p,t):return np.array([p*t*t/2,p*t])

# 5.5.10: t1*t2=-1, with an explicit focal chord and a right-angle marker.
p=1.2;t1=-.5;t2=2.;A=contact(p,t1);B=contact(p,t2);C=np.array([p*t1*t2/2,p*(t1+t2)/2]);F=np.array([p/2,0])
fig,ax=frame((-1.55,4.2),(-2.1,3.2),r'$y^2=2px,\quad t_1t_2=-1$')
axes(ax,(-1.55,4.2),(-2.1,3.2));parabola(ax,p,(-2.1,3.2))
plot(ax,[(-p/2,-2.1),(-p/2,3.1)],GRAY,1.5,'--')
for T in [A,B]:plot(ax,[C-.25*(T-C),C+1.35*(T-C)],INK,1.6)
plot(ax,[A-.2*(B-A),B+.15*(B-A)],TEAL,1.65)
right_angle(ax,C,A-C,B-C,.18)
mark(ax,C,'$C$',(-.4,.05));mark(ax,A,'$A$',(.14,-.25),BLUE);mark(ax,B,'$B$',(.14,.1),BLUE)
mark(ax,F,'$F$',(.12,-.35),TEAL)
ax.text(-1.48,2.65,r'$x=-\frac{p}{2}$',fontsize=19,color=GRAY)
save(fig,'ch5-parabola-right-tangents')

# 5.5.11: the whole triangle, midpoint ticks, and a horizontal EC segment.
t1=-1.4;t2=2.;A=contact(p,t1);B=contact(p,t2);C=np.array([p*t1*t2/2,p*(t1+t2)/2]);E=(A+B)/2
assert np.isclose(E[1],C[1]) and E[0]>C[0]
fig,ax=frame((-2.4,4.2),(-2.25,3.05),r'$y_E=y_C,\quad x_E-x_C>0$')
axes(ax,(-2.4,4.2),(-2.25,3.05));parabola(ax,p,(-2.25,3.05))
plot(ax,[A,C,B],INK,1.7);plot(ax,[A,B],TEAL,1.6)
ax.annotate('',E,C,arrowprops={'arrowstyle':'->','lw':1.8,'color':BLUE})
normal=np.array([-(B-A)[1],(B-A)[0]]);normal=normal/np.linalg.norm(normal)*.09
for q in [(A+E)/2,(B+E)/2]:plot(ax,[q-normal,q+normal],TEAL,1.2)
for q,label,offset in [(A,'$A$',(.15,-.24)),(B,'$B$',(.13,.08)),(C,'$C$',(-.36,.1)),(E,'$E$',(.14,.12))]:mark(ax,q,label,offset)
ax.text(.25,.68,r'$EC\parallel x$',fontsize=18,color=BLUE)
save(fig,'ch5-parabola-midpoint')

# 5.5.17: L1 and L2 need not be orthogonal; the original x,y plane stays equal-scale.
mat=np.array([[1.1,.35],[.25,.95]]);constants=np.array([-.6,.3]);center=np.linalg.solve(mat,-constants)
fig,ax=frame((-3.65,4.5),(-4.4,3.7),r'$L_1^2-L_2^2=1$')
for sign in [-1,1]:
    t=np.linspace(-2.,2.,600);uv=np.vstack([sign*np.cosh(t),np.sinh(t)])
    xy=np.linalg.solve(mat,uv-constants[:,None]).T
    assert np.allclose((xy@mat[0]+constants[0])**2-(xy@mat[1]+constants[1])**2,1)
    plot(ax,xy,BLUE,2.4)
for sign,col,ls in [(-1,TEAL,'--'),(1,INK,':')]:
    row=mat[0]+sign*mat[1];d=np.array([-row[1],row[0]]);d/=np.linalg.norm(d)
    plot(ax,[center-8*d,center+8*d],col,1.4,ls)
mark(ax,center,'$O_0$',(.15,.15))
ax.annotate(r'$L_1-L_2=0$',xy=(2.8,(.85*2.8-.9)/.6),xytext=(-.9,2.65),color=TEAL,fontsize=18,arrowprops={'arrowstyle':'-','color':TEAL,'lw':.8})
ax.annotate(r'$L_1+L_2=0$',xy=(2.8,(.3-1.35*2.8)/1.3),xytext=(-.8,-3.1),color=INK,fontsize=18,arrowprops={'arrowstyle':'-','color':INK,'lw':.8})
save(fig,'ch5-hyperbola-asymptotes')
