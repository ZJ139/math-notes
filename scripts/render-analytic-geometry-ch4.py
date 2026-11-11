"""Exact coordinate diagrams for Chapter 4; optional PNG preview directory."""
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
 'svg.hashsalt': 'analytic-geometry-ch4', 'axes.unicode_minus': False})
BLUE, TEAL, INK, GRAY = '#2563eb', '#237b7b', '#252a30', '#8793a0'

def save(fig, name):
    OUT.mkdir(parents=True, exist_ok=True)
    target = OUT / (name + '.svg')
    fig.savefig(target, bbox_inches='tight', pad_inches=.1, facecolor='white',
                metadata={'Date': None, 'Creator': 'Exact coordinate construction; Matplotlib'})
    target.write_text('\n'.join(line.rstrip() for line in target.read_text().splitlines()) + '\n')
    if PREVIEW:
        PREVIEW.mkdir(parents=True, exist_ok=True)
        fig.savefig(PREVIEW / (name + '.png'), dpi=150, bbox_inches='tight', pad_inches=.1)
    plt.close(fig)

def scene(elev=24, azim=-58):
    fig = plt.figure(figsize=(6.3, 5.6))
    ax = fig.add_subplot(111, projection='3d')
    ax.view_init(elev=elev, azim=azim)
    ax.set_axis_off()
    fig.subplots_adjust(0, 0, 1, 1)
    return fig, ax

def line(ax, xyz, color=BLUE, lw=2.5, ls='-'):
    ax.plot(*xyz, color=color, lw=lw, ls=ls)

def ray(ax, end, label='', color=INK, label_scale=1.1):
    end=np.array(end, dtype=float)
    ax.quiver(0, 0, 0, *end, color=color, linewidth=1.8, arrow_length_ratio=.09)
    if label:
        ax.text(*(end*label_scale), label, color=color, fontsize=21)

def frame_limits(ax, limits):
    ax.set_xlim(limits[0]); ax.set_ylim(limits[1]); ax.set_zlim(limits[2])
    ax.set_box_aspect([b-a for a,b in limits], zoom=.92)

# 4.3.13: l1=4x+3y-7, l2=-3x+4y+6, epsilon=+1.
fig, ax = plt.subplots(figsize=(6.3, 5.6))
o=np.array([46/25, -3/25]); ex=np.array([4/5,3/5]); ey=np.array([-3/5,4/5])
for end,label in [((4.6,0),'$x$'),((0,3.6),'$y$')]:
    start=(-.7,0) if label=='$x$' else (0,-1.3)
    ax.annotate('',end,start,arrowprops={'arrowstyle':'->','color':GRAY,'lw':1.3})
    ax.text(end[0]+.04,end[1]+.04,label,color=GRAY,fontsize=21)
for d,label,off in [(ex,r"$x'\ (l_2)$",(-.05,-.35)),(ey,r"$y'\ (l_1)$",(-.5,.08))]:
    start=o-1.05*d;end=o+3.05*d
    ax.annotate('',end,start,arrowprops={'arrowstyle':'->','color':BLUE,'lw':2})
    ax.text(end[0]+off[0],end[1]+off[1],label,color=BLUE,fontsize=20)
p=o+1.5*ex+1.35*ey
ax.plot(*np.array([o+1.5*ex,p,o+1.35*ey]).T,ls='--',color=TEAL,lw=1.5)
for pos,label,off in [(o,"$O'$",(.06,-.35)),(p,'$P$',(.1,.08)),(np.zeros(2),'$O$',(-.32,-.3))]:
    ax.scatter(*pos,s=20,color=INK);ax.text(*(pos+off),label,fontsize=21)
corner=np.array([o+.23*ex,o+.23*(ex+ey),o+.23*ey])
ax.plot(*corner.T,color=INK,lw=1)
ax.set_aspect('equal');ax.set_xlim(-.85,4.9);ax.set_ylim(-1.45,3.9);ax.axis('off')
save(fig,'ch4-plane-axes')

# 4.4.7: exact rotation about w using a perpendicular orthonormal frame.
u=np.array([1.,-1,0])/np.sqrt(2);v=np.array([1.,1,-2])/np.sqrt(6);w=np.ones(3)/np.sqrt(3)
def rot(t):
    S=np.column_stack((u,v,w))
    return S@np.array([[np.cos(t),-np.sin(t),0],[np.sin(t),np.cos(t),0],[0,0,1]])@S.T
R=rot(np.pi/3)
assert np.allclose(R, np.array([[2,-1,2],[2,2,-1],[-1,2,2]])/3)
fig,ax=scene(22,38)
for i,label in enumerate(['x','y','z']):
    e=np.eye(3)[:,i]
    ray(ax,1.28*e,'$'+label+'$',GRAY,1.18)
    ray(ax,1.28*R[:,i],"$"+label+"'$",BLUE)
    arc=np.array([rot(t)@e for t in np.linspace(0,np.pi/3,100)]).T
    line(ax,arc,TEAL,1.6)
ray(ax,1.65*w,'$(1,1,1)$',TEAL,1.02)
ax.text2D(.5,.94,r'$\theta=\pi/3$',transform=ax.transAxes,ha='center',fontsize=22)
frame_limits(ax,[(-.65,1.55)]*3)
save(fig,'ch4-axis-rotation')

# 4.4.10: three orthogonal generators on x^2+y^2=2z^2.
fig,ax=scene(19,-62)
th,zz=np.meshgrid(np.linspace(0,2*np.pi,37),np.linspace(-1.3,1.3,19))
xx=np.sqrt(2)*zz*np.cos(th);yy=np.sqrt(2)*zz*np.sin(th)
ax.plot_wireframe(xx,yy,zz,color=GRAY,lw=.6,alpha=.35)
U=np.array([[np.sqrt(2/3),0,1/np.sqrt(3)],[-1/np.sqrt(6),1/np.sqrt(2),1/np.sqrt(3)],[-1/np.sqrt(6),-1/np.sqrt(2),1/np.sqrt(3)]])
assert np.allclose(U@U.T,np.eye(3))
assert np.allclose(U[:,0]**2+U[:,1]**2-2*U[:,2]**2,0)
for i,(d,col) in enumerate(zip(U,[BLUE,TEAL,INK]),1):
    line(ax,d[:,None]*np.linspace(-2.1,2.1,80),col,2.5)
    p=1.7*d;ax.scatter(*p,s=20,color=col,depthshade=False)
    ax.text(*(p+np.array([.04,.04,.12])),f'$P_{i}$',color=col,fontsize=21)
ax.text2D(.5,.94,r'$x^2+y^2=2z^2$',transform=ax.transAxes,ha='center',fontsize=22)
frame_limits(ax,[(-2,2),(-2,2),(-1.5,1.5)])
save(fig,'ch4-orthogonal-generators')

# 4.4.11: mesh and one pair of perpendicular planes, all points exact.
fig,ax=scene(24,-35)
ang,xx=np.meshgrid(np.linspace(0,2*np.pi,33),np.linspace(-2,2,15))
rad=np.sqrt(1+xx*xx/2)
yy=np.sqrt(2/3)*rad*np.cos(ang);zz=rad*np.sin(ang)
assert np.allclose(1.5*yy*yy+zz*zz-.5*xx*xx,1)
ax.plot_wireframe(xx,yy,zz,color=GRAY,lw=.55,alpha=.35)
s=.5;c=np.sqrt(3)/2;lam=1/np.sqrt(2)
t=np.linspace(-1.7,1.7,80)
line(ax,[c*t,s*t,0*t+1],INK,2.7);line(ax,[c*t,-s*t,0*t-1],TEAL,2.7)
ax.text(c*1.8,s*1.8,1.13,'$l_1$',fontsize=21)
ax.text(c*1.8,-s*1.8,-1.13,'$l_2$',fontsize=21,color=TEAL)
gx,gy=np.meshgrid(np.linspace(-1,1,2),np.linspace(-.9,.4,2))
for gz,col in [(1-(s*gx-c*gy)/lam,BLUE),(-1-(s*gx+c*gy)/lam,TEAL)]:
    ax.plot_surface(gx,gy,gz,color=col,alpha=.07,shade=False,edgecolor=col,linewidth=.45)
zline=np.linspace(-1.05,1.05,120)
line(ax,[-np.sqrt(2)*zline,np.full_like(zline,-np.sqrt(2/3)),zline],BLUE,3)
ax.text(-1.45,-.9,1.2,'$L$',color=BLUE,fontsize=23)
ax.text2D(.5,.94,r'$\frac{3}{2}y^2+z^2-\frac{1}{2}x^2=1$',transform=ax.transAxes,ha='center',fontsize=22)
frame_limits(ax,[(-2.1,2.1),(-1.8,1.8),(-2.2,2.2)])
save(fig,'ch4-skew-plane-locus')

# 4.4.12: old/new axes, node line and the three exact angle arcs.
def Z(t):return np.array([[np.cos(t),-np.sin(t),0],[np.sin(t),np.cos(t),0],[0,0,1]])
def X(t):return np.array([[1,0,0],[0,np.cos(t),-np.sin(t)],[0,np.sin(t),np.cos(t)]])
psi=np.pi/6;theta=np.pi/3;phi=np.pi/4
A=Z(psi);B=A@X(theta);C=B@Z(phi)
fig,ax=scene(26,28)
for i,label in enumerate(['x','y','z']):
    ray(ax,1.4*np.eye(3)[:,i],'$'+label+'$',GRAY)
    ray(ax,1.4*C[:,i],"$"+label+"'$",BLUE)
ray(ax,1.6*A[:,0],"$x''=x'''$",TEAL,1.05)
arcs=[(.7*np.array([Z(t)[:,0] for t in np.linspace(0,psi,80)]).T,r'$\psi$',TEAL),
      (.92*np.array([(A@X(t))[:,2] for t in np.linspace(0,theta,80)]).T,r'$\theta$',INK),
      (.85*np.array([(B@Z(t))[:,0] for t in np.linspace(0,phi,80)]).T,r'$\varphi$',BLUE)]
for xyz,label,col in arcs:
    line(ax,xyz,col,2)
    p=xyz[:,len(xyz[0])//2]
    ax.text(*(p*1.16),label,color=col,fontsize=24)
ax.text2D(.5,.95,r'$Z(\psi)X(\theta)Z(\varphi)$',transform=ax.transAxes,ha='center',fontsize=22)
frame_limits(ax,[(-.55,1.85),(-1.5,1.7),(-.2,1.9)])
save(fig,'ch4-euler-stages')
print('Wrote 5 SVG diagrams; exact coordinate assertions passed.')
