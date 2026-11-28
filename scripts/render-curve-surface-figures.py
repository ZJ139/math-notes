#!/usr/bin/env python3
"""Exact geometric figures for the curve/surface-integral lecture.

Write SVGs for the website and vector PDFs for the lecture. An optional argument
selects a temporary PNG-preview directory. No source-text or appendix edits.
"""
from pathlib import Path
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle, Wedge
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / 'public/figures/curve-surface'
PDF = ROOT / 'print/curve-surface-figures'
PREVIEW = Path(sys.argv[1]) if len(sys.argv)>1 else None
for p in [WEB,PDF,PREVIEW]:
    if p: p.mkdir(parents=True,exist_ok=True)
INK,ORANGE,BLUE,GRAY,PALE = '#343A40','#D97757','#3D6F83','#9AA1A7','#EFF4F5'
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':12,
    'mathtext.fontset':'cm','axes.labelcolor':INK,'text.color':INK,
    'svg.fonttype':'path','svg.hashsalt':'curve-surface-integral-v1',
    'pdf.fonttype':42,'ps.fonttype':42,'axes.unicode_minus':False})


def save(fig,name):
    fig.savefig(WEB/(name+'.svg'),bbox_inches='tight',pad_inches=.12,
        facecolor='white',metadata={'Date':None,'Creator':'Exact mathematical construction, Matplotlib'})
    svg=WEB/(name+'.svg')
    svg.write_text('\n'.join(line.rstrip() for line in svg.read_text().splitlines())+'\n')
    fig.savefig(PDF/(name+'.pdf'),bbox_inches='tight',pad_inches=.12,
        facecolor='white',metadata={'CreationDate':None,'ModDate':None,'Creator':'Exact mathematical construction'})
    if PREVIEW: fig.savefig(PREVIEW/(name+'.png'),dpi=150,bbox_inches='tight',pad_inches=.12,facecolor='white')
    plt.close(fig)


def flat(xlim,ylim,size=(7,4.3)):
    fig,ax=plt.subplots(figsize=size)
    ax.set_xlim(*xlim);ax.set_ylim(*ylim);ax.set_aspect('equal');ax.axis('off')
    return fig,ax


def axis2(ax,xlim,ylim):
    ax.annotate('',(xlim[1],0),(xlim[0],0),arrowprops={'arrowstyle':'->','lw':.9,'color':GRAY})
    ax.annotate('',(0,ylim[1]),(0,ylim[0]),arrowprops={'arrowstyle':'->','lw':.9,'color':GRAY})
    ax.text(xlim[1]-.12,-.17,'$x$',fontsize=14)
    ax.text(.08,ylim[1]-.1,'$y$',fontsize=14)


def spatial(lim=1.5,size=(7,4.7),elev=23,azim=-58):
    fig=plt.figure(figsize=size);ax=fig.add_subplot(111,projection='3d')
    ax.set_xlim(-lim,lim);ax.set_ylim(-lim,lim);ax.set_zlim(-lim,lim)
    ax.set_box_aspect((1,1,1),zoom=1.3);ax.view_init(elev=elev,azim=azim);ax.set_axis_off()
    return fig,ax


def axis3(ax,ends=(1.4,1.4,1.4),origin=(0,0,0)):
    p=np.asarray(origin,dtype=float)
    for i,(end,label) in enumerate(zip(ends,['$x$','$y$','$z$'])):
        v=np.zeros(3);v[i]=end
        ax.quiver(*p,*v,color=GRAY,linewidth=.8,arrow_length_ratio=.05)
        q=p+v*1.06;ax.text(*q,label,fontsize=13,color=INK)


def arrow3(ax,p,v,color=ORANGE,label=None,offset=(0,0,0)):
    p=np.array(p,dtype=float);v=np.array(v,dtype=float)
    ax.quiver(*p,*v,color=color,linewidth=1.8,arrow_length_ratio=.18)
    if label: ax.text(*(p+v+np.array(offset)),label,color=color,fontsize=14)


def circle_basis(n):
    n=np.asarray(n,dtype=float);n/=np.linalg.norm(n)
    e=np.cross(n,[0.,0.,1.])
    if np.linalg.norm(e)<1e-10:e=np.cross(n,[0.,1.,0.])
    e/=np.linalg.norm(e);f=np.cross(n,e)
    assert np.allclose(np.cross(e,f),n)
    return e,f,n


def sphere_wire(ax,r=1,color=GRAY,alpha=.3):
    u=np.linspace(0,2*np.pi,65);v=np.linspace(0,np.pi,33)
    U,V=np.meshgrid(u,v);X=r*np.cos(U)*np.sin(V);Y=r*np.sin(U)*np.sin(V);Z=r*np.cos(V)
    ax.plot_wireframe(X,Y,Z,rstride=5,cstride=8,color=color,alpha=alpha,lw=.55)


# 1. Arc-length subdivision and the positively oriented unit tangent.
fig,ax=flat((-.25,5.5),(-.8,1.7))
axis2(ax,(-.2,5.35),(-.65,1.6))
f=lambda t:.65*np.sin(1.25*t)+.2*t
x=np.linspace(.15,4.85,500);ax.plot(x,f(x),color=BLUE,lw=2.1)
knots=[.35,1.3,2.3,3.3,4.65]
for j,t in enumerate(knots):
    ax.plot(t,f(t),'o',color=INK,ms=3.5)
    ax.text(t-.1,f(t)+(.18 if j%2 else -.28),rf'$P_{{{j}}}$',fontsize=14)
a,b=knots[1:3];t=np.linspace(a,b,100);ax.plot(t,f(t),color=ORANGE,lw=3.6)
ax.text(1.75,1.42,r'$\Delta s_i$',color=ORANGE,fontsize=16)
t0=3.85;p=np.array([t0,f(t0)]);v=np.array([1,.8125*np.cos(1.25*t0)+.2]);v/=np.linalg.norm(v)
ax.annotate('',p+v*.9,p,arrowprops={'arrowstyle':'->','color':ORANGE,'lw':1.8})
ax.text(*(p+v*.83+[.08,.13]),r'$\boldsymbol{\tau}$',color=ORANGE,fontsize=17)
ax.text(.65,-.65,r'$ds=\sqrt{x^{\prime 2}+y^{\prime 2}+z^{\prime 2}}\,dt$',fontsize=16)
save(fig,'arc-tangent')

# 2. A regular graph chart and the two coordinate tangents.
fig,ax=spatial(1.8,elev=26,azim=-59)
u=np.linspace(-1.25,1.25,27);v=np.linspace(-1.1,1.1,25);U,V=np.meshgrid(u,v)
ax.plot_surface(U,V,.25*(U*U+V*V),color=BLUE,alpha=.16,linewidth=0,shade=False)
ax.plot_wireframe(U,V,.25*(U*U+V*V),rstride=6,cstride=6,color=BLUE,lw=.55,alpha=.5)
p=np.array([.2,-.35,.25*(.2**2+.35**2)])
uv=np.array([[.2,-.35],[.9,-.35],[.9,.35],[.2,.35]])
poly=np.c_[uv,.25*np.sum(uv**2,axis=1)]
ax.add_collection3d(Poly3DCollection([poly],facecolor=ORANGE,alpha=.35,edgecolor=ORANGE,lw=1.4))
ru=np.array([1,0,.1]);rv=np.array([0,1,-.175]);normal=np.cross(ru,rv)
arrow3(ax,p,.95*ru,BLUE,r'$\mathbf{r}_u$',offset=(.1,-.08,-.05))
arrow3(ax,p,.95*rv,BLUE,r'$\mathbf{r}_v$',offset=(-.1,.1,.05))
arrow3(ax,p,1.1*normal,ORANGE,r'$\mathbf{r}_u\times\mathbf{r}_v$',offset=(-.45,-.15,.13))
axis3(ax,(1.65,1.65,1.4))
ax.text2D(.12,.04,r'$dS=|\mathbf{r}_u\times\mathbf{r}_v|\,du\,dv$',transform=ax.transAxes,fontsize=16)
save(fig,'surface-patch')

# 3. Annulus: positive outer and negative inner orientations.
fig,ax=flat((-2.65,2.65),(-2.35,2.35),size=(6.5,5.2))
ax.add_patch(Wedge((0,0),2,0,360,width=1.1,facecolor=PALE,edgecolor='none'))
t=np.linspace(0,2*np.pi,400)
for r,color in [(2,BLUE),(.9,ORANGE)]:ax.plot(r*np.cos(t),r*np.sin(t),color=color,lw=2)
for r,sgn,color,angles in [(2,1,BLUE,[.3,2.4,4.5]),(.9,-1,ORANGE,[.6,2.8,4.9])]:
    for a in angles:
        aa=np.linspace(a,a+sgn*.3,20)
        ax.annotate('',(r*np.cos(aa[-1]),r*np.sin(aa[-1])),(r*np.cos(aa[0]),r*np.sin(aa[0])),arrowprops={'arrowstyle':'->','color':color,'lw':2,'connectionstyle':f'arc3,rad={sgn*.15}'})
ax.text(1.0,.25,'$D$',fontsize=23,color=BLUE)
ax.text(-.32,-.1,r'$D^c$',fontsize=18)
ax.text(-2.5,1.88,r'$C_{\rm out}$',color=BLUE,fontsize=16)
ax.text(.98,-1.05,r'$C_{\rm in}$',color=ORANGE,fontsize=16)
ax.text(-1.62,-2.3,r'$\partial D=C_{\rm out}+C_{\rm in}$',fontsize=16)
save(fig,'annulus-orientation')

# 4. Exact conical spiral, t from zero to 2 pi.
fig,ax=spatial(6.7,size=(7,5),elev=24,azim=-57)
T=np.linspace(0,2*np.pi,500);X=T*np.cos(T);Y=T*np.sin(T)
R,A=np.meshgrid(np.linspace(0,2*np.pi,14),np.linspace(0,2*np.pi,25))
ax.plot_wireframe(R*np.cos(A),R*np.sin(A),R,rstride=4,cstride=3,color=GRAY,alpha=.25,lw=.55)
ax.plot(X,Y,T,color=ORANGE,lw=2.7)
for tt in [1.5,3.6,5.5]:
    p=[tt*np.cos(tt),tt*np.sin(tt),tt];v=[np.cos(tt)-tt*np.sin(tt),np.sin(tt)+tt*np.cos(tt),1]
    v=np.array(v);v=v/np.linalg.norm(v)*.7;arrow3(ax,p,v,ORANGE)
axis3(ax,(7,7,7));ax.set_zlim(-.5,7)
ax.text(0,0,-.6,'$O$',fontsize=14);ax.text(2*np.pi,.2,2*np.pi+.4,r'$t=2\pi$',fontsize=14,color=ORANGE)
ax.text2D(.08,.04,r'$(x,y,z)=(t\cos t,t\sin t,t)$',transform=ax.transAxes,fontsize=16)
save(fig,'cone-spiral')

# 5. Unit sphere and the great circle in x+y+z=0.
fig,ax=spatial(1.35,elev=22,azim=-15)
sphere_wire(ax)
e,f,n=circle_basis([1,1,1]);t=np.linspace(0,2*np.pi,400);q=np.cos(t)[:,None]*e+np.sin(t)[:,None]*f
assert np.max(abs(q.sum(axis=1)))<1e-12 and np.allclose(np.sum(q*q,axis=1),1)
ax.add_collection3d(Poly3DCollection([q[::8]],facecolor=BLUE,alpha=.12,edgecolor='none'))
ax.plot(*q.T,color=ORANGE,lw=2.5)
axis3(ax,(1.35,1.35,1.35));arrow3(ax,[0,0,0],n*.95,BLUE,r'$\mathbf{n}$',offset=(.1,.08,.05))
ax.text2D(.09,.04,r'$x^2+y^2+z^2=1,\quad x+y+z=0$',transform=ax.transAxes,fontsize=16)
save(fig,'great-circle')

# 6. One cycloid arch, including its cusp endpoints.
fig,ax=flat((-.5,7),(-.5,2.75),size=(7,3.5))
axis2(ax,(-.3,6.9),(-.35,2.65))
t=np.linspace(0,2*np.pi,600);x=t-np.sin(t);y=1-np.cos(t)
ax.plot(x,y,color=ORANGE,lw=2.6)
ax.plot([0,2*np.pi],[0,0],'o',color=INK,ms=4)
ax.text(-.15,-.32,'$0$',fontsize=13);ax.text(2*np.pi-.1,-.32,r'$2\pi a$',fontsize=14)
ax.plot([np.pi,np.pi],[0,2],color=GRAY,ls='--',lw=.8)
ax.text(np.pi-.15,2.2,r'$(\pi a,2a)$',fontsize=15)
for tt in [1.3,4.7]:
    p=np.array([tt-np.sin(tt),1-np.cos(tt)]);v=np.array([1-np.cos(tt),np.sin(tt)]);v/=np.linalg.norm(v)
    ax.annotate('',p+.38*v,p-.05*v,arrowprops={'arrowstyle':'->','color':ORANGE,'lw':2})
ax.text(.7,.55,r'$x=a(t-\sin t)$',fontsize=15)
ax.text(3.8,.55,r'$y=a(1-\cos t)$',fontsize=15)
save(fig,'cycloid')

# 7. Paraboloid patch and its single-valued projection to the unit disk.
fig,ax=spatial(1.4,elev=24,azim=-55)
r=np.linspace(0,1,30);t=np.linspace(0,2*np.pi,80);T,R=np.meshgrid(t,r)
X,Y=R*np.cos(T),R*np.sin(T);Z=R*R
ax.plot_surface(X,Y,Z,color=BLUE,alpha=.25,linewidth=0,shade=False)
ax.plot_surface(X,Y,np.zeros_like(X),color=ORANGE,alpha=.12,linewidth=0,shade=False)
ax.plot(np.cos(t),np.sin(t),np.ones_like(t),color=BLUE,lw=2)
ax.plot(np.cos(t),np.sin(t),np.zeros_like(t),color=ORANGE,lw=1.6)
for th in [.2,1.7,3.7,5.1]:ax.plot([np.cos(th)]*2,[np.sin(th)]*2,[0,1],ls='--',color=GRAY,lw=.8)
axis3(ax,(1.4,1.4,1.6));ax.set_zlim(-.4,1.6)
ax.text2D(.09,.04,r'$S:\ z=x^2+y^2\leq1,\quad D:\ x^2+y^2\leq1$',transform=ax.transAxes,fontsize=15)
save(fig,'paraboloid-projection')

# 8. Tetrahedron with exterior normals on all four faces.
fig,ax=spatial(1.05,elev=23,azim=-20)
O=np.zeros(3);A=np.array([1,0,0]);B=np.array([0,1,0]);C=np.array([0,0,1])
faces=[[A,B,C],[O,A,B],[O,B,C],[O,C,A]]
ax.add_collection3d(Poly3DCollection(faces,facecolors=[BLUE,PALE,PALE,PALE],edgecolor=INK,alpha=.22,lw=1))
for p,v in [(np.ones(3)/3,np.ones(3)*.27),([.25,.25,0],[0,0,-.28]),([0,.25,.25],[-.28,0,0]),([.25,0,.25],[0,-.28,0])]:arrow3(ax,p,v)
ax.set_xlim(-.38,1.25);ax.set_ylim(-.38,1.25);ax.set_zlim(-.38,1.25)
for p,label,off in [(O,'$O$',[-.08,-.08,-.09]),(A,'$(1,0,0)$',[.07,-.12,-.06]),(B,'$(0,1,0)$',[-.12,.07,-.03]),(C,'$(0,0,1)$',[.05,.03,.06])]:ax.text(*(p+off),label,fontsize=13)
ax.text2D(.15,.04,r'$V=\{x,y,z\geq0,\ x+y+z\leq1\}$',transform=ax.transAxes,fontsize=16)
save(fig,'tetrahedron')

# 9. Close a paraboloid with the top disk; both normals point out of V.
fig,ax=spatial(1.4,elev=22,azim=-61)
ax.plot_surface(X,Y,Z,color=BLUE,alpha=.22,linewidth=0,shade=False)
ax.plot_surface(X,Y,np.ones_like(X),color=ORANGE,alpha=.2,linewidth=0,shade=False)
ax.plot(np.cos(t),np.sin(t),np.ones_like(t),color=ORANGE,lw=2)
arrow3(ax,[0,0,1],[0,0,.55],ORANGE,r'$\mathbf{n}_{D}=\mathbf{k}$',offset=(.08,.03,.05))
p=np.array([.65,-.5,.65**2+.5**2]);v=np.array([1.3,-1,-1]);v=v/np.linalg.norm(v)*.6
arrow3(ax,p,v,BLUE,r'$\mathbf{n}_S$',offset=(.05,-.1,-.08))
ax.text(0,0,.55,'$V$',fontsize=18)
axis3(ax,(1.4,1.4,1.8));ax.set_zlim(-.3,1.8)
ax.text2D(.14,.04,r'$\partial V=S_{\rm down}+D_{\rm up}$',transform=ax.transAxes,fontsize=16)
save(fig,'cap-orientation')

# 10. Unit sphere cut by x+y+z=1, oriented toward the observer at the origin.
fig,ax=spatial(1.4,elev=22,azim=-15)
sphere_wire(ax,alpha=.22)
e,f,n=circle_basis([-1,-1,-1]);c=np.ones(3)/3;rho=np.sqrt(2/3)
t=np.linspace(0,2*np.pi,400);q=c+rho*(np.cos(t)[:,None]*e+np.sin(t)[:,None]*f)
assert np.allclose(q.sum(axis=1),1) and np.allclose(np.sum(q*q,axis=1),1)
ax.add_collection3d(Poly3DCollection([q[::5]],facecolor=BLUE,alpha=.22,edgecolor='none'))
ax.plot(*q.T,color=ORANGE,lw=2.4)
arrow3(ax,c,n*.75,BLUE,r'$\mathbf{n}$',offset=(-.35,-.12,-.22))
for tt in [1,3.2,5.2]:
    p=c+rho*(np.cos(tt)*e+np.sin(tt)*f);v=rho*(-np.sin(tt)*e+np.cos(tt)*f);arrow3(ax,p,v*.22,ORANGE)
axis3(ax,(1.35,1.35,1.35))
ax.text2D(.03,.04,r'$x^2+y^2+z^2=1,\quad x+y+z=1,\quad \mathbf{n}=-\frac{(1,1,1)}{\sqrt{3}}$',transform=ax.transAxes,fontsize=13)
save(fig,'stokes-disk')

# 11. A meridian section of the punctured region, showing outward domain normals.
fig,ax=flat((-2.65,2.65),(-2.4,2.4),size=(6.5,5.3))
ax.add_patch(Wedge((0,0),1.85,0,360,width=1.15,facecolor=PALE,edgecolor='none'))
for r,c0 in [(1.85,BLUE),(.7,ORANGE)]:ax.add_patch(Circle((0,0),r,fill=False,edgecolor=c0,lw=1.8))
for th in [.25,1.3,2.45,3.65,4.8,5.8]:
    e=np.array([np.cos(th),np.sin(th)])
    p=1.85*e;ax.annotate('',p+.4*e,p,arrowprops={'arrowstyle':'->','color':BLUE,'lw':1.6})
    p=.7*e;ax.annotate('',p-.25*e,p,arrowprops={'arrowstyle':'->','color':ORANGE,'lw':1.6})
# Field arrows on one radial ray point oppositely to the inner boundary normal.
for r in [1.0,1.35]:
    p=np.array([r,0]);ax.annotate('',p+[.25,0],p,arrowprops={'arrowstyle':'->','color':INK,'lw':1.1})
ax.plot(0,0,'o',color=INK,ms=3);ax.text(-.2,-.25,'$O$',fontsize=15)
ax.text(-.42,.28,r'$B_\varepsilon$',fontsize=16)
ax.text(-2.55,1.85,r'$\mathbf{n}=+\mathbf{e}_r$',color=BLUE,fontsize=15)
ax.text(.78,-.85,r'$\mathbf{n}=-\mathbf{e}_r$',color=ORANGE,fontsize=15)
ax.text(-1.62,-2.35,r'$\Omega= B_R\setminus\overline{B_\varepsilon}$',fontsize=17)
ax.text(.95,.25,r'$\mathbf{F}$',fontsize=15)
save(fig,'punctured-flux')

# 12. Standard Mobius band: the same point at t=0 and t=2 pi has opposite normals.
fig,ax=spatial(1.65,elev=27,azim=-62)
t=np.linspace(0,2*np.pi,145);w=np.linspace(-.35,.35,17);T,W=np.meshgrid(t,w)
XX=(1+W*np.cos(T/2))*np.cos(T);YY=(1+W*np.cos(T/2))*np.sin(T);ZZ=W*np.sin(T/2)
ax.plot_surface(XX,YY,ZZ,color=BLUE,alpha=.53,linewidth=0,shade=True,rstride=1,cstride=2)
for ww in [-.35,.35]:ax.plot((1+ww*np.cos(t/2))*np.cos(t),(1+ww*np.cos(t/2))*np.sin(t),ww*np.sin(t/2),color=INK,lw=1)
ax.plot(np.cos(t),np.sin(t),np.zeros_like(t),color=ORANGE,lw=2)
for tt in [0,1.5,3,4.5,2*np.pi]:
    p=np.array([np.cos(tt),np.sin(tt),0]);rt=np.array([-np.sin(tt),np.cos(tt),0]);rw=np.array([np.cos(tt/2)*np.cos(tt),np.cos(tt/2)*np.sin(tt),np.sin(tt/2)])
    n=np.cross(rt,rw);arrow3(ax,p,n*.4,ORANGE)
ax.text(1.3,.03,-.53,r'$\mathbf{n}(0)$',fontsize=14,color=ORANGE)
ax.text(1.2,.03,.57,r'$-\mathbf{n}(0)$',fontsize=14,color=ORANGE)
ax.text2D(.19,.035,r'$\mathbf{r}(0,0)=\mathbf{r}(2\pi,0),\quad \mathbf{n}(2\pi)=-\mathbf{n}(0)$',transform=ax.transAxes,fontsize=14)
save(fig,'mobius')
print('Wrote 12 SVGs and 12 PDFs.')
