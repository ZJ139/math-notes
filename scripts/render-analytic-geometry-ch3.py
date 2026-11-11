"""Exact coordinate constructions for the 14 Chapter 3 starred exercises.
Run: python3 scripts/render-analytic-geometry-ch3.py [PNG preview directory]
No generated raster illustrations; all public assets are reproducible SVGs.
"""
from pathlib import Path
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

OUT=Path(__file__).resolve().parents[1]/'public/figures/analytic-geometry'
PREVIEW=Path(sys.argv[1]) if len(sys.argv)>1 else None
plt.rcParams.update({'font.family':'serif','font.serif':['DejaVu Serif'],
 'mathtext.fontset':'cm','font.size':17,'svg.fonttype':'path',
 'svg.hashsalt':'analytic-geometry-ch3','axes.unicode_minus':False})
BLUE='#2563eb'; TEAL='#237b7b'; INK='#252a30'; GRAY='#9aa5b1'

def scene(elev=23,azim=-58):
 fig=plt.figure(figsize=(6.2,5.6));ax=fig.add_subplot(111,projection='3d')
 ax.view_init(elev=elev,azim=azim);ax.set_axis_off()
 fig.subplots_adjust(0,0,1,1)
 return fig,ax

def finish(fig,ax,name,limits,title=None):
 for axis,lim in zip([ax.set_xlim,ax.set_ylim,ax.set_zlim],limits):axis(lim)
 ax.set_box_aspect([b-a for a,b in limits],zoom=.9)
 if title:ax.text2D(.5,.93,title,transform=ax.transAxes,ha='center',fontsize=21)
 OUT.mkdir(parents=True,exist_ok=True)
 fig.savefig(OUT/(name+'.svg'),bbox_inches='tight',pad_inches=.05,facecolor='white',metadata={'Date':None,'Creator':'Exact coordinate construction; Matplotlib'})
 svg=OUT/(name+'.svg')
 svg.write_text('\n'.join(line.rstrip() for line in svg.read_text().splitlines())+'\n')
 if PREVIEW:
  PREVIEW.mkdir(parents=True,exist_ok=True);fig.savefig(PREVIEW/(name+'.png'),dpi=140,bbox_inches='tight',pad_inches=.05)
 plt.close(fig)

def curve(ax,xyz,c=BLUE,lw=2.7,ls='-'):
 ax.plot(*xyz,color=c,lw=lw,ls=ls,zorder=6)

def point(ax,p,label,c=INK,offset=(.08,.08,.08)):
 ax.scatter(*p,color=c,s=25,depthshade=False,zorder=9)
 ax.text(*(np.array(p)+offset),label,color=c,fontsize=20,zorder=10)

def ellipsoid(ax,abc=(1,1,1),center=(0,0,0),alpha=.25):
 u,v=np.meshgrid(np.linspace(0,2*np.pi,29),np.linspace(0,np.pi,17))
 a,b,c=abc;h,k,l=center
 ax.plot_wireframe(h+a*np.cos(u)*np.sin(v),k+b*np.sin(u)*np.sin(v),l+c*np.cos(v),color=GRAY,lw=.55,alpha=alpha)

def hyperboloid(ax,abc=(1.4,1,1),T=1.45):
 theta,t=np.meshgrid(np.linspace(0,2*np.pi,33),np.linspace(-T,T,15));a,b,c=abc
 ax.plot_wireframe(a*np.sqrt(1+t*t)*np.cos(theta),b*np.sqrt(1+t*t)*np.sin(theta),c*t,color=GRAY,lw=.55,alpha=.36)

def ruling(theta,eps,t,abc=(1.4,1,1)):
 a,b,c=abc
 return np.array([a*(np.cos(theta)-eps*t*np.sin(theta)),b*(np.sin(theta)+eps*t*np.cos(theta)),c*t])

def waist(ax,abc=(1.4,1,1)):
 th=np.linspace(0,2*np.pi,240);curve(ax,[abc[0]*np.cos(th),abc[1]*np.sin(th),0*th],GRAY,1.3)

# 3.1.8: entire finite-parameter curve, with the common limiting point marked.
fig,ax=scene(22,-55);ellipsoid(ax,(.5,.5,.5),(0,.5,0),.35)
for sign,c in [(1,BLUE),(-1,TEAL)]:
 t=sign*np.tan(np.linspace(0,np.pi/2-1e-5,800));d=1+t*t+t**4
 xyz=np.array([t/d,t*t/d,t**3/d]);assert np.max(abs(np.sum(xyz**2,axis=0)-xyz[1]))<1e-12
 curve(ax,xyz,c)
point(ax,(0,0,0),'$O$',offset=(-.06,-.08,-.05));point(ax,(0,.5,0),'$C$',offset=(.03,.03,.04))
finish(fig,ax,'ch3-spherical-curve',[(-.55,.55),(-.05,1.05),(-.55,.55)],r'$x^2+(y-\frac{1}{2})^2+z^2=\frac{1}{4}$')

# 3.1.10: r>0, z>0; the cropped mesh is not a boundary.
fig,ax=scene(19,-60)
th,r=np.meshgrid(np.linspace(0,2*np.pi,37),np.linspace(.55,2.1,22))
ax.plot_wireframe(r*np.cos(th),r*np.sin(th),1/r**2,color=GRAY,lw=.6,alpha=.5)
r=np.linspace(.55,2.1,200);curve(ax,[r,r*0,1/r**2]);curve(ax,[[0,0],[0,0],[0,3.5]],INK,1,'--')
ax.text(0,0,3.6,'$z$',fontsize=22);ax.text(1.7,0,.6,r'$\Gamma$',color=BLUE,fontsize=22)
finish(fig,ax,'ch3-revolution',[(-2.3,2.3),(-2.3,2.3),(0,3.7)],r'$z=(x^2+y^2)^{-1}$')

# 3.2.11 and 12: cylinders as all parallel tangents to a sphere.
for name,oblique in [('ch3-tangent-cylinder',True),('ch3-cylinder-theorem',False)]:
 fig,ax=scene(22,-52)
 if oblique:
  d=np.array([1,1,-2])/np.sqrt(6); e=np.array([1,-1,0])/np.sqrt(2);f=np.array([-1,-1,-1])/np.sqrt(3)
 else:d=np.array([0,0,1.]);e=np.array([1.,0,0]);f=np.array([0,1.,0])
 th,t=np.meshgrid(np.linspace(0,2*np.pi,33),np.linspace(-1.5,1.5,13))
 xyz=e[:,None,None]*np.cos(th)+f[:,None,None]*np.sin(th)+d[:,None,None]*t
 ax.plot_wireframe(*xyz,color=GRAY,lw=.6,alpha=.4);ellipsoid(ax,alpha=.35)
 th=np.linspace(0,2*np.pi,200);circle=e[:,None]*np.cos(th)+f[:,None]*np.sin(th);curve(ax,circle,TEAL,2)
 t=np.linspace(-1.65,1.65,100);curve(ax,e[:,None]+d[:,None]*t,BLUE);curve(ax,d[:,None]*np.array([-1.8,1.8]),INK,1,'--')
 point(ax,e,'$H$',BLUE,offset=(.1,.06,.1));curve(ax,np.array([np.zeros(3),e]).T,INK,1.3)
 finish(fig,ax,name,[(-1.7,1.7)]*3,r'$(1,1,-2)$' if oblique else r'$x^2+y^2=R^2$')

# 3.2.13: alpha=pi/3, including both horizontal axes.
fig,ax=scene(26,-48)
th,r=np.meshgrid(np.linspace(0,2*np.pi,65),np.linspace(0,1.8,10))
x=r*np.cos(th);y=r*np.sin(th);zz=np.sqrt(np.maximum(0,(-(x*x+y*y)+np.sqrt((x*x+y*y)**2+12*x*x*y*y))/2))
assert np.max(abs(x*x*y*y-.25*(x*x+zz*zz)*(y*y+zz*zz)))<1e-12
for sign in [-1,1]:ax.plot_wireframe(x,y,sign*zz,color=GRAY,lw=.6,alpha=.45)
s=np.linspace(-1.7,1.7,150);curve(ax,[s/np.sqrt(2),s/np.sqrt(2),s/np.sqrt(2)],BLUE,3)
curve(ax,[[-1.9,1.9],[0,0],[0,0]],TEAL,1.5);curve(ax,[[0,0],[-1.9,1.9],[0,0]],TEAL,1.5)
point(ax,(0,0,0),'$O$',offset=(.15,-.15,-.1))
finish(fig,ax,'ch3-angle-cone',[(-2,2),(-2,2),(-1.5,1.5)],r'$\alpha=\pi/3$')

# 3.3.8: three genuinely orthogonal radii in the original Euclidean metric.
fig,ax=scene(-8,9);abc=np.array([3.,2.,1.]);ellipsoid(ax,abc,alpha=.35)
E=np.array([[1,1,1],[1,-1,0],[1,1,-2]],float);E/=np.linalg.norm(E,axis=1)[:,None];assert np.allclose(E@E.T,np.eye(3))
for i,(e,c) in enumerate(zip(E,[BLUE,TEAL,INK]),1):
 rad=1/np.sqrt(np.sum((e/abc)**2));p=rad*e;curve(ax,np.array([np.zeros(3),p]).T,c,3);point(ax,p,f'$P_{i}$',c,offset=(.1,.08,.1))
point(ax,(0,0,0),'$O$',offset=(-.2,-.1,-.1))
finish(fig,ax,'ch3-orthogonal-radii',[(-3.2,3.2),(-2.2,2.2),(-1.35,1.35)])

# 3.3.9: both exact Euclidean circles, radius b=2.
fig,ax=scene(22,-60);ellipsoid(ax,abc,alpha=.3)
t=np.linspace(0,2*np.pi,360);co=np.sqrt(27/32);si=np.sqrt(5/32)
for sign,c in [(1,BLUE),(-1,TEAL)]:
 xyz=np.array([2*co*np.cos(t),2*np.sin(t),sign*2*si*np.cos(t)])
 assert np.allclose(np.sum((xyz/abc[:,None])**2,axis=0),1);assert np.allclose(np.sum(xyz**2,axis=0),4)
 curve(ax,xyz,c)
curve(ax,[[0,0],[-2.4,2.4],[0,0]],INK,1,'--');ax.text(0,2.5,0,'$y$',fontsize=22)
finish(fig,ax,'ch3-circular-sections',[(-3.2,3.2),(-2.6,2.6),(-1.35,1.35)],r'$a=3,\ b=2,\ c=1$')

# 3.4.8--13: exact family parameters; two separate figures for question 10.
t=np.linspace(-1.5,1.5,200)
configs=[('ch3-three-generators',[(.15,1,BLUE,'$l_1$'),(2.1,1,TEAL,'$l_2$'),(4.25,1,INK,'$l_3$')]),
 ('ch3-skew-generators',[(.2,1,BLUE,'$l_1$'),(2.2,1,TEAL,'$l_2$')]),
 ('ch3-opposite-intersect',[(0,1,BLUE,'$L_+$'),(1.2,-1,TEAL,'$L_-$')]),
 ('ch3-opposite-parallel',[(.2,1,BLUE,'$L_+$'),(.2+np.pi,-1,TEAL,'$L_-$')]),
 ('ch3-two-through-point',[(0,1,BLUE,'$L_+$'),(2*np.arctan(.7),-1,TEAL,'$L_-$')]),
 ('ch3-waist-intersection',[(.65,1,BLUE,'$l$')])]
for name,lines in configs:
 fig,ax=scene(20,-57);hyperboloid(ax);waist(ax)
 for theta,eps,color,label in lines:
  xyz=ruling(theta,eps,t);assert np.allclose((xyz[0]/1.4)**2+xyz[1]**2-xyz[2]**2,1)
  curve(ax,xyz,color);p=ruling(theta,eps,1.5);ax.text(*p,label,color=color,fontsize=20)
 if name=='ch3-opposite-intersect':point(ax,ruling(0,1,np.tan(.6)),'$P$',offset=(.1,.08,.1))
 if name=='ch3-two-through-point':point(ax,ruling(0,1,.7),'$M_0$',offset=(.12,-.25,.1))
 if name=='ch3-waist-intersection':point(ax,ruling(.65,1,0),'$H$',offset=(.1,.1,.05))
 finish(fig,ax,name,[(-2.8,2.8),(-2.1,2.1),(-1.8,1.8)])

# 3.4.14: l1=(0,0,z), l2=(1,z,z), horizontal connections give y=xz.
fig,ax=scene(27,-20)
x,z=np.meshgrid(np.linspace(-.6,1.6,16),np.linspace(-1.4,1.4,18));y=x*z
ax.plot_wireframe(x,y,z,color=GRAY,lw=.6,alpha=.5)
for zz in [-1.15,-.55,0,.55,1.15]:
 xx=np.linspace(-.5,1.5,100);curve(ax,[xx,xx*zz,np.full_like(xx,zz)],BLUE,1.5)
z=np.linspace(-1.5,1.5,100);curve(ax,[0*z,0*z,z],INK,3);curve(ax,[1+0*z,z,z],TEAL,3)
ax.text(0,0,1.6,'$l_1$',fontsize=21);ax.text(1,1.55,1.6,'$l_2$',fontsize=21,color=TEAL)
finish(fig,ax,'ch3-two-directrices',[(-.8,1.8),(-2.1,2.1),(-1.7,1.8)],r'$y=xz$')

# 3.4.15: z=0,x=0; z=1,y=0; z=2,x+y=1, all pairwise skew.
fig,ax=scene(26,20)
s,z=np.meshgrid(np.linspace(-1.2,1.3,19),np.linspace(-.4,2.4,23));x=z*(1-s)/2;y=s*(z-1)
assert np.allclose(2*x*(z-1)+z*y,z*(z-1))
ax.plot_wireframe(x,y,z,color=GRAY,lw=.6,alpha=.4)
for ss in [-1,-.45,.1,.65,1.2]:
 zz=np.linspace(-.3,2.3,100);curve(ax,[zz*(1-ss)/2,ss*(zz-1),zz],BLUE,1.6)
s=np.linspace(-1.3,1.4,120)
for zz,c,label in [(0,INK,'$l_1$'),(1,TEAL,'$l_2$'),(2,INK,'$l_3$')]:
 xyz=np.array([zz*(1-s)/2,s*(zz-1),0*s+zz]);curve(ax,xyz,c,3);p=xyz[:,-1];ax.text(*p,label,fontsize=20,color=c)
finish(fig,ax,'ch3-three-directrices',[(-.9,2.8),(-2.1,2.1),(-.6,2.6)],r'$2x(z-1)+zy=z(z-1)$')
print('Wrote 15 SVG coordinate diagrams for 14 exercises.')
