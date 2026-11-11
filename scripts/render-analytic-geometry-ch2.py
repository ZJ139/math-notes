"""Coordinate diagrams for all five Chapter 2 starred exercises.
Run: python3 scripts/render-analytic-geometry-ch2.py [optional PNG preview directory]
Only coordinate geometry is illustrated; no generative image assets are used.
"""
from pathlib import Path
import itertools
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon

OUT=Path(__file__).resolve().parents[1]/'public/figures/analytic-geometry'
OUT.mkdir(parents=True,exist_ok=True)
plt.rcParams.update({'font.family':'serif','font.serif':['DejaVu Serif'],
    'mathtext.fontset':'cm','font.size':19,'svg.fonttype':'path',
    'svg.hashsalt':'analytic-geometry-ch2','axes.unicode_minus':False})
BLUE='#2563eb'; INK='#20252b'; GREY='#89929c'; TEAL='#2c7a7b'
def save(fig,name):
    fig.savefig(OUT/(name+'.svg'),bbox_inches='tight',pad_inches=.18,
                facecolor='white',metadata={'Date':None,'Creator':'Coordinate construction with Matplotlib'})
    if len(sys.argv)>1:
        preview=Path(sys.argv[1]);preview.mkdir(parents=True,exist_ok=True)
        fig.savefig(preview/(name+'.png'),dpi=160,bbox_inches='tight',pad_inches=.18,facecolor='white')
    plt.close(fig)
def setup(ax):
    ax.set_aspect('equal');ax.axis('off')
def proj(q):
    x,y,z=np.asarray(q,dtype=float)
    return np.array([x-.65*y,.30*x+.35*y+z])
def line(ax,a,b,c=INK,lw=1.7,ls='-',three=False,**kw):
    a,b=(proj(a),proj(b)) if three else (np.array(a),np.array(b))
    ax.plot([a[0],b[0]],[a[1],b[1]],color=c,lw=lw,ls=ls,**kw)
def point(ax,q,label='',offset=(7,7),three=False,c=INK,hollow=False):
    q=proj(q) if three else np.asarray(q)
    ax.plot(*q,'o',ms=6,color=c,mfc='white' if hollow else c,zorder=8)
    if label:ax.annotate(label,q,xytext=offset,textcoords='offset points',color=c,zorder=9)
def plane(ax,qs,c=BLUE,alpha=.09):
    ax.add_patch(Polygon([proj(q) for q in qs],closed=True,fc=c,alpha=alpha,ec='none',zorder=0))
    for a,b in zip(qs,qs[1:]+qs[:1]):line(ax,a,b,c,lw=.8,three=True)

# 2.2.13: cross sections of planes, ratio d1/d2=2 in both panels.
fig,axs=plt.subplots(1,2,figsize=(9,4.1))
ax=axs[0];setup(ax)
line(ax,[-2.6,0],[2.6,0],GREY,1.5);line(ax,[0,-1.6],[0,1.6],GREY,1.5)
line(ax,[-2.5,-1.25],[2.5,1.25],BLUE,2.5)
line(ax,[-2.5,1.25],[2.5,-1.25],BLUE,2.5)
point(ax,[0,0],hollow=True,c=BLUE)
ax.text(2.7,-.1,'$x$',color=GREY);ax.text(.12,1.45,'$y$',color=GREY)
ax.text(1.2,1.45,'$x=2y$',color=BLUE,fontsize=21)
ax.text(.75,-1.65,'$x=-2y$',color=BLUE,fontsize=21)
ax.set_xlim(-2.8,3.0);ax.set_ylim(-1.85,1.9)
ax=axs[1];setup(ax)
for x,c,lw in [(0,GREY,1.5),(3,GREY,1.5),(2,BLUE,2.5),(6,BLUE,2.5)]:
    line(ax,[x,-1.8],[x,1.8],c,lw)
    ax.text(x,-2.3,f'${x}$',ha='center',color=c)
line(ax,[-.8,0],[6.7,0],GREY,.8)
ax.text(3,2.12,r'$|x|=2|x-3|$',ha='center',fontsize=21)
ax.set_xlim(-1.1,7);ax.set_ylim(-2.65,3.1)
fig.tight_layout(w_pad=1.4);save(fig,'ch2-distance-ratio')

# 2.2.15: the regular octahedron with a=1.
fig,ax=plt.subplots(figsize=(6.6,5.8));setup(ax)
V=[np.array(v,float) for v in [(1,0,0),(-1,0,0),(0,1,0),(0,-1,0),(0,0,1),(0,0,-1)]]
for signs in itertools.product([-1,1],repeat=3):
    qs=[(signs[0],0,0),(0,signs[1],0),(0,0,signs[2])]
    ax.add_patch(Polygon([proj(q) for q in qs],closed=True,fc=BLUE,alpha=.025,ec='none'))
plane(ax,[(1,0,0),(0,1,0),(0,0,1)],BLUE,.16)
for i,a in enumerate(V):
    for j,b in enumerate(V):
        if j>i and np.dot(a,b)==0:line(ax,a,b,INK,1.25,three=True)
for a,b,label,off in [([-1.35,0,0],[1.4,0,0],'x',(4,0)),([0,-1.4,0],[0,1.4,0],'y',(-14,0)),([0,0,-1.35],[0,0,1.45],'z',(5,0))]:
    line(ax,a,b,GREY,.8,':',True)
    # Vertex labels already identify the axes; keep the dotted axes uncluttered.
labels=[('$X_+$',(8,-1)),('$X_-$',(-30,-3)),('$Y_+$',(-35,5)),('$Y_-$',(7,-17)),('$Z_+$',(7,4)),('$Z_-$',(7,-4))]
for q,(lab,off) in zip(V,labels):point(ax,q,lab,off,True)
point(ax,[0,0,0],'$O$',(-19,-18),True)
ax.annotate(r'$x+y+z=a$',(.15,.65),xytext=(-1.45,1.4),fontsize=19,color=BLUE,arrowprops={'arrowstyle':'-','color':BLUE,'lw':.9})
ax.set_xlim(-1.65,1.7);ax.set_ylim(-1.45,1.65)
save(fig,'ch2-octahedron')

# 2.2.16: the sign of z along line segments.
fig,ax=plt.subplots(figsize=(6.8,5.2));setup(ax)
plane(ax,[[-1.9,-.6,0],[1.9,-.6,0],[1.9,1.7,0],[-1.9,1.7,0]],GREY,.12)
P=np.array([-1.,0,1.35]);Q=np.array([1.45,.35,1.05]);R=np.array([.4,.7,-1.1])
t=P[2]/(P[2]-R[2]);H=(1-t)*P+t*R
line(ax,P,Q,BLUE,2.5,three=True);line(ax,P,R,TEAL,2.2,'--',True)
for q,lab,off,c in [(P,'P',(-25,8),BLUE),(Q,'Q',(7,5),BLUE),(R,'R',(8,-14),TEAL),(H,'H',(8,5),TEAL)]:point(ax,q,'$'+lab+'$',off,True,c)
ax.text(1.45,-.02,r'$\pi:z=0$',fontsize=21,color=GREY)
ax.text(-1.85,1.5,r'$z>0$',fontsize=21,color=BLUE)
ax.text(-1.85,-.7,r'$z<0$',fontsize=21,color=TEAL)
ax.set_xlim(-3.1,2.8);ax.set_ylim(-1.3,2.0)
save(fig,'ch2-same-side')

# 2.3.15: y axis and x axis meet at P; a horizontal and a vertical plane.
fig,ax=plt.subplots(figsize=(6.7,5.2));setup(ax)
plane(ax,[[-1.6,-1.4,0],[1.6,-1.4,0],[1.6,1.4,0],[-1.6,1.4,0]],BLUE,.08)
plane(ax,[[0,-1.4,-.65],[0,1.4,-.65],[0,1.4,1.5],[0,-1.4,1.5]],TEAL,.08)
line(ax,[0,-1.9,0],[0,1.9,0],BLUE,2.5,three=True)
line(ax,[-2,0,0],[2,0,0],TEAL,2.5,three=True)
point(ax,[0,0,0],'$P$',(8,9),True)
ax.annotate('$l_1$',proj([0,1.9,0]),xytext=(-20,10),textcoords='offset points',color=BLUE)
ax.annotate('$l_2$',proj([2,0,0]),xytext=(6,0),textcoords='offset points',color=TEAL)
ax.text(-.55,1.85,'$x=0$',color=TEAL,fontsize=22)
ax.text(1.1,-.55,'$z=0$',color=BLUE,fontsize=22)
ax.set_xlim(-2.9,2.8);ax.set_ylim(-1.3,2.3)
save(fig,'ch2-intersecting-lines')

# 2.3.19: parallel direction is the z direction; M0=(1,1,0).
fig,ax=plt.subplots(figsize=(6.5,5.8));setup(ax)
plane(ax,[[0,-1.1,-.65],[0,1.65,-.65],[0,1.65,1.65],[0,-1.1,1.65]],TEAL,.09)
plane(ax,[[-.8,0,-.65],[1.65,0,-.65],[1.65,0,1.65],[-.8,0,1.65]],GREY,.1)
line(ax,[0,0,-.9],[0,0,2.0],GREY,1.5,'--',True)
line(ax,[1,1,-1.0],[1,1,1.8],BLUE,2.8,three=True)
point(ax,[1,1,0],'$M_0$',(10,-5),True,BLUE)
point(ax,[0,0,0],'$O$',(-22,-10),True)
ax.text(-1.15,1.75,'$x=0$',color=TEAL,fontsize=22)
ax.text(1.16,1.55,'$y=0$',color=GREY,fontsize=22)
ax.annotate('$l$',proj([1,1,1.8]),xytext=(10,-4),textcoords='offset points',color=BLUE)
ax.set_xlim(-1.55,2.0);ax.set_ylim(-1.25,2.8)
save(fig,'ch2-parallel-planes-line')
