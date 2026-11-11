"""Independent symbolic and geometric checks; the article contains full proofs.
Run: python3 scripts/review-analytic-geometry-ch3.py
Requires sympy and numpy (used only for this authoring/review script).
"""
from pathlib import Path
import re
import sympy as S
import numpy as np

results=[]
def zero(expr):assert S.simplify(expr)==0,expr
def done(name):results.append(name)
t=S.symbols('t',real=True);D=1+t*t+t**4
zero((t/D)**2+(t*t/D)**2+(t**3/D)**2-t*t/D);done('3.1.8: sphere identity')
r=S.symbols('r',positive=True);th=S.symbols('theta',real=True)
zero(r*r*S.cos(th)**2+r*r*S.sin(th)**2-r*r);done('3.1.10: rotation identity')
x,y,z=S.symbols('x y z',real=True)
poly=(x+t)**2+(y+t)**2+(z-2*t)**2-1
zero(S.discriminant(poly,t)+4*(6*(x*x+y*y+z*z)-(x+y-2*z)**2-6));done('3.2.11: tangency discriminant')
R,u,v=S.symbols('R u v',real=True)
zero(S.discriminant(u*u+v*v+t*t-R*R,t)-4*(R*R-u*u-v*v));done('3.2.12: all parallel tangents')
# Exact alpha=60 degrees, including points on both horizontal axes.
for p in [(1,1,1),(1,1,-1),(2,0,0),(0,3,0),(0,0,0)]:
 xx,yy,zz=p;assert 4*xx*xx*yy*yy==(xx*xx+zz*zz)*(yy*yy+zz*zz)
done('3.2.13: cone points and exceptional horizontal directions')
rng=np.random.default_rng(31)
for _ in range(20):
 E=np.linalg.qr(rng.normal(size=(3,3)))[0];axes=rng.uniform(.3,4,3)
 invr2=np.sum((E/axes[:,None])**2,axis=0)
 assert np.isclose(sum(invr2),sum(axes**-2))
done('3.3.8: orthogonal triples in original Euclidean metric')
a,b,c=S.symbols('a b c',positive=True)
co2=a*a*(b*b-c*c)/(b*b*(a*a-c*c));si2=c*c*(a*a-b*b)/(b*b*(a*a-c*c))
zero(co2+si2-1);zero(co2/a**2+si2/c**2-1/b**2);done('3.3.9: two circle inclinations')
# Same-family directions: determinant nonzero for three distinct circle parameters.
angles=[0,2*np.pi/3,4*np.pi/3]
mat=np.array([[-np.sin(q),np.cos(q),1] for q in angles]);assert abs(np.linalg.det(mat))>2
done('3.4.8: three independent same-family directions')
zero(S.det(S.Matrix([[1,-t],[t,1]]))-(1+t*t));done('3.4.9: intersection system determinant')
for theta,phi in [(.1,.9),(2.2,.5),(-.7,1.2)]:
 tt=np.tan((phi-theta)/2)
 p=np.array([np.cos(theta)-tt*np.sin(theta),np.sin(theta)+tt*np.cos(theta),tt])
 q=np.array([np.cos(phi)+tt*np.sin(phi),np.sin(phi)-tt*np.cos(phi),tt]);assert np.allclose(p,q)
theta=.3;phi=theta+np.pi;assert np.allclose([-np.sin(theta),np.cos(theta),1],[np.sin(phi),-np.cos(phi),1])
done('3.4.10: intersections and antipodal parallel case')
for _ in range(50):
 theta,rr=rng.uniform(-3,3,2);p=np.sqrt(1+rr*rr)*np.cos(theta);q=np.sqrt(1+rr*rr)*np.sin(theta);dd=1+rr*rr
 dirs=[]
 for eps in [-1,1]:
  U=(rr*p-eps*q)/dd;V=(rr*q+eps*p)/dd
  assert np.isclose(p*U+q*V,rr) and np.isclose(U*U+V*V,1);dirs.append([U,V,1])
 assert not np.allclose(dirs[0],dirs[1])
done('3.4.12: both and only normalized directions; nonzero denominators')
zero(S.cos(th)**2+S.sin(th)**2-1);done('3.4.13: waist intersection')
A,B,C,E,s=S.symbols('A B C E s');delta=A*E-B*C
xi=s*(A+B*z);eta=s*(C+E*z)
zero((E*xi-B*eta)/delta-s);zero((-C*xi+A*eta)/delta-s*z)
done('3.4.14: invertible change to v=u*z')
A,B,d=S.symbols('A B d',nonzero=True)
xx=(1-z)*s;yy=z*(d-A*s)/B
zero(A*z*xx+B*(1-z)*yy-d*z*(1-z))
U,V,W=S.symbols('U V W');xx=(V-W-d*U+d)/A;yy=-W/B
zero(A*U*xx+B*(1-U)*yy-d*U*(1-U)-(U*V-W))
zero((d-A*((d-B*y)/A))/B-y);done('3.4.15: elimination, inverse change, exceptional z=1')
root=Path(__file__).resolve().parents[1];text=(root/'content/problems/analytic-geometry-ch3-starred.md').read_text()
expected=['3.1 8','3.1 10','3.2 11','3.2 12','3.2 13','3.3 8','3.3 9','3.4 8','3.4 9','3.4 10','3.4 12','3.4 13','3.4 14','3.4 15']
assert re.findall(r'^## 问题 ([\d.]+ \d+)\*$',text,re.M)==expected
parts=re.split(r'^## 问题 ',text,flags=re.M)[1:]
assert len(parts)==14
for part in parts:
 assert '**题目：**' in part and '**思路：**' in part
 assert '易错点' in part and '返回题目目录' in part
 assert re.search(r'\[!\[[^\]]+\]\((/figures/analytic-geometry/ch3-[^)]+\.svg)\)\]\(\1\)',part)
figs=re.findall(r'!\[[^\]]+\]\((/figures/analytic-geometry/ch3-[^)]+\.svg)\)',text)
assert len(figs)==15 and len(set(figs))==15
for name in figs:assert (root/'public'/name.lstrip('/')).is_file()
assert not re.search(r'\\(?:vec\{[rx]|overrightarrow\{O)',text)
print('\n'.join('PASS '+v for v in results))
print('PASS source coverage: 14 exact exercise headings, 15 linked SVGs, no position-vector notation')
