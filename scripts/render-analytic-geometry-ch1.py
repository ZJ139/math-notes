"""Reproducible coordinate diagrams for the eight Chapter 1 starred exercises.
Run with Python + matplotlib + numpy. SVG text is outlined for portable CM glyphs.
"""
from pathlib import Path
import itertools
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Arc

OUT = Path(__file__).resolve().parents[1] / 'public/figures/analytic-geometry'
OUT.mkdir(parents=True, exist_ok=True)
plt.rcParams.update({'font.family':'serif','font.serif':['DejaVu Serif'],
    'mathtext.fontset':'cm','font.size':15,'svg.fonttype':'path',
    'svg.hashsalt':'analytic-geometry-ch1','axes.unicode_minus':False})
BLUE='#2563eb'; INK='#20252b'; GREY='#7c8794'; TEAL='#2c7a7b'; PALE='#e5edff'

def setup(ax):
    ax.set_aspect('equal'); ax.axis('off')

def save(fig, name):
    fig.savefig(OUT/name, bbox_inches='tight',pad_inches=.2,facecolor='white',
                metadata={'Date':None,'Creator':'Coordinate construction with Matplotlib'})
    if len(sys.argv)>1:
        preview=Path(sys.argv[1]);preview.mkdir(parents=True,exist_ok=True)
        fig.savefig(preview/(Path(name).stem+'.png'),dpi=150,bbox_inches='tight',pad_inches=.2,facecolor='white')
    plt.close(fig)

def p3(q):
    x,y,z=np.array(q,dtype=float)
    return np.array([x-.65*y, .30*x+.35*y+z])

def line(ax,a,b,c=INK,lw=1.4,ls='-',three=False,**kw):
    a,b=(p3(a),p3(b)) if three else (np.array(a),np.array(b))
    ax.plot([a[0],b[0]],[a[1],b[1]],color=c,lw=lw,ls=ls,**kw)

def point(ax,q,label='',offset=(5,6),three=False,c=INK):
    q=p3(q) if three else np.array(q)
    ax.plot(*q,'o',ms=4,color=c,zorder=8)
    if label:ax.annotate(label,q,xytext=offset,textcoords='offset points',color=c,zorder=9)

def poly3(ax,qs,c=BLUE,alpha=.1,edge=True):
    ax.add_patch(Polygon([p3(q) for q in qs],closed=True,fc=c,alpha=alpha,ec='none',zorder=0))
    if edge:
        for a,b in zip(qs,qs[1:]+qs[:1]):line(ax,a,b,c,lw=1,three=True)

def axes3(ax, ext=2, neg=.25):
    for i,name in enumerate(['x','y','z']):
        a=np.zeros(3);b=np.zeros(3);a[i]=-neg;b[i]=ext
        line(ax,a,b,GREY,.8,three=True,zorder=1)
        ax.annotate('$'+name+'$',p3(b),xytext=(4,3),textcoords='offset points',color=GREY)

def limits(ax, qs, margin=.35):
    a=np.array([p3(q) for q in qs]);lo=a.min(axis=0)-margin;hi=a.max(axis=0)+margin
    ax.set_xlim(lo[0],hi[0]);ax.set_ylim(lo[1],hi[1])

# 1.1.18: a regular pentagon, deliberately odd-sided.
fig,ax=plt.subplots(figsize=(7,5));setup(ax)
theta=np.pi/2+2*np.pi*np.arange(5)/5
V=np.c_[np.cos(theta),np.sin(theta)]
ax.add_patch(Polygon(V,fc=PALE,ec=INK,lw=1.6))
for i,q in enumerate(V):
    line(ax,[0,0],q,GREY,.8,':')
    point(ax,q,f'$A_{{{i+1}}}$',tuple(12*q))
line(ax,[-1.3,0],[1.3,0],GREY,.8);line(ax,[0,-1.2],[0,1.3],GREY,.8)
ax.text(1.33,0,'$x$');ax.text(.04,1.3,'$y$');point(ax,[0,0],'$O$',(-19,-17))
ax.add_patch(Arc((0,0),.65,.65,theta1=90,theta2=162,color=BLUE,lw=1.6))
ax.text(-.54,.38,r'$2\pi/5$',color=BLUE)
ax.set_xlim(-1.45,1.5);ax.set_ylim(-1.25,1.48)
save(fig,'ch1-18.svg')

# 1.1.19: an interior generator is included to avoid implying independence.
fig,ax=plt.subplots(figsize=(7.2,4.6));setup(ax)
V=np.array([[0,0],[4,0],[4.4,2.8],[.6,3.4],[1.55,2.35]])
ax.add_patch(Polygon(V[:4],fc=PALE,ec=INK,lw=1.6))
for i,q in enumerate(V):point(ax,q,f'$A_{{{i+1}}}$',(-15,-24) if i<2 else (6,7))
alpha=np.array([.5,.1,.1,.1,.2]);beta=np.array([.05,.25,.35,.25,.1])
P=alpha@V;Q=beta@V;R=.6*P+.4*Q
line(ax,P,Q,BLUE,2.8);point(ax,P,'$P$',(-20,10),c=BLUE);point(ax,Q,'$Q$',(7,6),c=BLUE)
point(ax,R,'$R$',(1,14),c=BLUE)
ax.text(.3,-.95,r'$\gamma_i=(1-t)\alpha_i+t\beta_i\geq 0$',fontsize=17)
ax.set_xlim(-.45,4.95);ax.set_ylim(-1.25,3.85)
save(fig,'ch1-19.svg')

# 1.3.16: both configurations are coordinate constructions.
fig,axs=plt.subplots(1,2,figsize=(10,4.8))
a=np.array([1.,0,0]);b=np.array([0,1.,0])
for ax,c,title in zip(axs,[np.array([1.,1,0]),np.array([.3,.2,1.])],[r'$\det G=0$',r'$\det G=1$']):
    setup(ax);axes3(ax,1.65)
    if c[2]==0:
        poly3(ax,[[-.2,-.2,0],[1.4,-.2,0],[1.4,1.4,0],[-.2,1.4,0]])
    else:
        poly3(ax,[c.tolist(),(c+a).tolist(),(c+a+b).tolist(),(c+b).tolist()],TEAL,.12)
        for coeff in itertools.product([0,1],repeat=3):
            q=coeff[0]*a+coeff[1]*b+coeff[2]*c
            for k,v in enumerate([a,b,c]):
                if coeff[k]==0:line(ax,q,q+v,GREY,1,':',True)
    for v,name,offset in [(a,'a',(6,-15)),(b,'b',(-18,3)),(c,'c',(5,9))]:
        line(ax,[0,0,0],v,BLUE,2,three=True);point(ax,v,'$'+name+'$',offset,True,BLUE)
    point(ax,[0,0,0],'$O$',(-15,-18),True)
    ax.set_title(title,fontsize=21,pad=14);ax.set_xlim(-1.4,1.8);ax.set_ylim(-.4,2.1)
fig.tight_layout(w_pad=3)
save(fig,'ch1-gram.svg')

# 1.4.12: x=1,y=0 is the complete locus for a=(0,0,2), b=(0,2,0).
fig,ax=plt.subplots(figsize=(7,5.2));setup(ax);axes3(ax,1.8,.4)
poly3(ax,[[-.2,-.2,0],[1.6,-.2,0],[1.6,1.3,0],[-.2,1.3,0]],GREY,.08)
line(ax,[1,0,-.8],[1,0,2.2],BLUE,2.8,three=True)
point(ax,[0,0,0],'$O$',(-15,-18),True)
point(ax,[1,0,0],'$P_0=(1,0,0)$',(9,-18),True,BLUE)
point(ax,[1,0,1.3],'$P=(1,0,t)$',(10,0),True,BLUE)
ax.text(*p3([1,0,2.35]),'$L$',color=BLUE,fontsize=20)
limits(ax,[[-.5,1.8,-.8],[2.8,-.1,2.4]],.2)
save(fig,'ch1-cross-locus.svg')

# 1.4.13: all three cases use the same vertical line L.
fig,axs=plt.subplots(1,3,figsize=(12,5.2))
planes=[[[.15,-.6,1],[1.8,-.6,1],[1.8,.6,1],[.15,.6,1]],
        [[1,-.7,-.25],[1,.7,-.25],[1,.7,2],[1,-.7,2]],
        [[2,-.7,-.25],[2,.7,-.25],[2,.7,2],[2,-.7,2]]]
for i,(ax,plane,title) in enumerate(zip(axs,planes,[r'$z=1$',r'$x=1$',r'$x=2$'])):
    setup(ax);poly3(ax,plane,TEAL,.16)
    line(ax,[1,0,-.5],[1,0,2.25],BLUE,2.8,three=True)
    ax.text(*p3([1,0,2.4]),'$L$',color=BLUE,fontsize=20)
    if i==0:point(ax,[1,0,1],'$P$',(8,-15),True,BLUE)
    ax.set_title(title,fontsize=22,pad=15)
    ax.text(.5,-.03,[r'$t=1$',r'$t\in\mathbb{R}$',r'$\varnothing$'][i],transform=ax.transAxes,ha='center',fontsize=22)
    limits(ax,[[-.4,1,-.65],[2.8,-.6,2.5]],.15)
fig.tight_layout(w_pad=2)
save(fig,'ch1-line-plane.svg')

# 1.5.7: span(a,b):z=0; span(c,d):z=x+y, intersection direction (1,-1,0).
fig,ax=plt.subplots(figsize=(7.5,5.4));setup(ax)
poly3(ax,[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],BLUE,.11)
poly3(ax,[[-.75,-.75,-1.5],[.75,-.75,0],[.75,.75,1.5],[-.75,.75,0]],TEAL,.16)
line(ax,[-1.12,1.12,0],[1.12,-1.12,0],INK,2.7,three=True)
point(ax,[0,0,0],'$O$',(5,-20),True)
ax.text(*p3([1.1,.5,0]),'$z=0$',color=BLUE)
ax.text(*p3([.3,.8,1.6]),'$z=x+y$',color=TEAL)
ax.text(*p3([.8,-.8,-.3]),'$(1,-1,0)$',fontsize=17)
ax.set_xlim(-2.2,2.3);ax.set_ylim(-2.3,2.45)
save(fig,'ch1-double-cross.svg')

# 1.5.8: example d=a+b+c shown by the component box, with no position-vector notation.
fig,ax=plt.subplots(figsize=(7.4,5.3));setup(ax)
poly3(ax,[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],BLUE,.1)
for q in itertools.product([0,1],repeat=3):
    for k in range(3):
        if q[k]==0:
            r=list(q);r[k]=1;line(ax,q,r,GREY,1.4,':',True)
for start,end in [([0,0,0],[1,0,0]),([1,0,0],[1,1,0]),([1,1,0],[1,1,1])]:line(ax,start,end,BLUE,2.5,three=True)
for q,label,ofs in [([0,0,0],'O',(-18,-18)),([1,0,0],'A=(1,0,0)',(7,-16)),([0,1,0],'B=(0,1,0)',(-100,0)),([0,0,1],'C=(0,0,1)',(-100,0)),([1,1,1],'D=(1,1,1)',(9,9))]:
    point(ax,q,'$'+label+'$',ofs,True)
limits(ax,[[-1,1,-.1],[1.6,-.8,1.7]],.2)
save(fig,'ch1-four-vectors.svg')

# 1.5.14: three exact planes, normal determinant 2, unique point (1,1,1).
fig,ax=plt.subplots(figsize=(7.5,5.5));setup(ax)
planes=[[[0,2,0],[2,0,0],[2,0,2],[0,2,2]],
        [[0,0,2],[2,0,2],[2,2,0],[0,2,0]],
        [[0,0,2],[2,0,0],[2,2,0],[0,2,2]]]
for qs,c in zip(planes,[BLUE,TEAL,GREY]):poly3(ax,qs,c,.10)
for direction in [[1,-1,1],[1,1,-1],[1,-1,-1]]:
    p=np.ones(3);v=np.array(direction);line(ax,p-.7*v,p+.7*v,INK,1.25,':',True)
point(ax,[1,1,1],'$P=(1,1,1)$',(12,-5),True,BLUE)
ax.text(*p3([2.1,-.2,.3]),'$x+y=2$',color=BLUE)
ax.text(*p3([1.2,-.2,2.3]),'$y+z=2$',color=TEAL)
ax.text(*p3([-.8,1.5,1.9]),'$z+x=2$',color=GREY)
limits(ax,[[-1.0,2,0],[2.6,-.4,2.4]],.25)
save(fig,'ch1-three-planes.svg')
print('Rendered 8 coordinate diagrams.')
