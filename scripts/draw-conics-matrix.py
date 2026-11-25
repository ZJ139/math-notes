#!/usr/bin/env python3
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
R=Path(__file__).resolve().parents[1]
plt.rcParams.update({'font.family':'DejaVu Serif','mathtext.fontset':'cm','font.size':11,'svg.fonttype':'path','axes.spines.top':False,'axes.spines.right':False})
navy='#20278a'; green='#237a68'; red='#c64f48'; gray='#929292'
def save(fig,name):
 fig.savefig(R/'print/conics-matrix-figures'/f'{name}.pdf',bbox_inches='tight')
 svg=R/'public/figures/conics-matrix'/f'{name}.svg'
 fig.savefig(svg,bbox_inches='tight')
 svg.write_text('\n'.join(line.rstrip() for line in svg.read_text().splitlines())+'\n')
 plt.close(fig)
def axes(ax,xlim,ylim):
 ax.set_aspect('equal');ax.set_xlim(*xlim);ax.set_ylim(*ylim)
 ax.spines['left'].set_position('zero');ax.spines['bottom'].set_position('zero')
 for s in ['left','bottom']:ax.spines[s].set_color('#aaaaaa')
 ax.tick_params(labelsize=9,colors='#777777');ax.grid(alpha=.13)
 ax.text(xlim[1]-.3,-.55,'$x$',fontsize=13);ax.text(.18,ylim[1]-.4,'$y$',fontsize=13)
def line(ax,n,d,style='--',color=gray,lw=1):
 if abs(n[1])>1e-8:
  xx=np.array(ax.get_xlim()); ax.plot(xx,(d-n[0]*xx)/n[1],style,c=color,lw=lw)
 else:ax.axvline(d/n[0],ls=style,c=color,lw=lw)
def point(ax,p,label,shift=(.18,.2)):
 ax.plot(*p,'o',color=red,ms=4);ax.text(p[0]+shift[0],p[1]+shift[1],label,fontsize=11)
t=np.linspace(0,2*np.pi,400);Q=np.array([[2,1],[-1,2]])/np.sqrt(5);C=np.array([2,3])
fig,axs=plt.subplots(1,4,figsize=(12,3.0))
curves=[np.array([np.cos(t),np.sin(t)]),np.array([3*np.cos(t),2*np.sin(t)]),Q@np.array([3*np.cos(t),2*np.sin(t)]),C[:,None]+Q@np.array([3*np.cos(t),2*np.sin(t)])]
for i,(ax,curve) in enumerate(zip(axs,curves)):
 ax.set_aspect('equal');ax.plot(*curve,c=navy,lw=1.7);ax.set_xlim(-4,6);ax.set_ylim(-3,7);ax.axis('off')
 ax.annotate('',xy=(5.6,0),xytext=(-3.7,0),arrowprops={'arrowstyle':'->','color':'#bbbbbb','lw':.7});ax.annotate('',xy=(0,6.5),xytext=(0,-2.7),arrowprops={'arrowstyle':'->','color':'#bbbbbb','lw':.7})
 if i:
  f=np.array([[np.sqrt(5),-np.sqrt(5)],[0,0]])
  if i>=2:f=Q@f
  if i==3:f=C[:,None]+f
  ax.plot(*f,'o',c=red,ms=3)
 ax.set_title(['$u^2+v^2=1$','$C_0$','$QC_0$','$QC_0+x_0$'][i],y=-.08)
for x,txt in [(0.31,'$D=\\mathrm{diag}(3,2)$'),(.515,'$Q$'),(.72,'$+x_0$')]:fig.text(x,.68,txt,ha='center',fontsize=11)
fig.subplots_adjust(wspace=.05);save(fig,'transport')
fig,ax=plt.subplots(figsize=(7.0,6.0));axes(ax,(-4,8),(-2,8))
curve=C[:,None]+Q@np.array([3*np.cos(t),2*np.sin(t)]);ax.plot(*curve,color=navy,lw=2)
line(ax,Q[:,1],Q[:,1]@C,'-',green);line(ax,Q[:,0],Q[:,0]@C,'-',green)
for s in [1,-1]:line(ax,Q[:,0],Q[:,0]@C+s*9/np.sqrt(5),'--','#a37e4d')
point(ax,(4,2),'$F_+(4,2)$');point(ax,(0,4),'$F_-(0,4)$');ax.plot(*C,'o',c='black',ms=3);ax.text(2.1,3.15,"$O'(2,3)$")
ax.text(6.6,.55,"$x'$",c=green);ax.text(3.7,7,"$y'$",c=green)
ax.text(-3.8,6.6,'$2x-y+8=0$',rotation=63,color='#896b42');ax.text(6.1,3,'$2x-y-10=0$',rotation=63,color='#896b42')
save(fig,'ellipse')
fig,axs=plt.subplots(1,2,figsize=(12.5,6))
ax=axs[0];axes(ax,(-3,8),(-3,8));e1=np.array([1,1])/np.sqrt(2);e2=np.array([-1,1])/np.sqrt(2);v=np.array([1,1]);tt=np.linspace(-4.2,4.2,500);curve=v[:,None]+e1[:,None]*tt**2/(2*np.sqrt(2))+e2[:,None]*tt;ax.plot(*curve,c=navy,lw=1.8)
line(ax,np.array([1,-1]),0,'-',green);line(ax,np.array([1,1]),1,'--','#a37e4d')
point(ax,(1,1),'$V(1,1)$',(-2,-.5));point(ax,(1.5,1.5),'$F(3/2,3/2)$',(.3,-.1));ax.text(5.8,6.5,"$x'$",color=green);ax.text(-2,2.3,'$x+y=1$',rotation=-45,color='#896b42');ax.set_title('$y^{\prime 2}=2\sqrt{2}\,x^{\prime}$',pad=12)
ax=axs[1];axes(ax,(-8,10),(-8,8));c=np.array([1,-1]);q=np.array([[4,-3],[3,4]])/5
for s in [-1,1]:
 tt=np.linspace(-1.5,1.5,400);cv=c[:,None]+q@np.array([s*3*np.cosh(tt),4*np.sinh(tt)]);ax.plot(*cv,c=navy,lw=1.8)
line(ax,np.array([1,0]),1);line(ax,np.array([7,24]),-17)
line(ax,np.array([3,-4]),7,'-',green)
for d in [10,-8]:line(ax,np.array([4,3]),d,'--','#a37e4d')
point(ax,(5,2),'$F_+(5,2)$');point(ax,(-3,-4),'$F_-(-3,-4)$',(-3.7,-1.0));ax.plot(*c,'o',c='black',ms=3);ax.text(1.25,-1.7,"$O'$",fontsize=11)
ax.set_title('$x^{\prime 2}/9-y^{\prime 2}/16=1$',pad=12);fig.subplots_adjust(wspace=.25);save(fig,'parabola-hyperbola')
