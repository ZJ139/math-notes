"""Exact equation-based figures for 二次曲线（曲面）. No image editing.

Run from any directory with Python, NumPy and Matplotlib installed.
"""
from pathlib import Path
import sys
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/figures/quadrics'
PREVIEW = Path(sys.argv[1]) if len(sys.argv) > 1 else None
FONT = FontProperties(fname=ROOT / 'assets/fonts/fandol/FandolSong-Regular.otf')
plt.rcParams.update({'font.family': 'serif', 'mathtext.fontset': 'cm',
                     'font.size': 16, 'svg.fonttype': 'path',
                     'svg.hashsalt': 'quadrics-20261120', 'axes.unicode_minus': False})
BLUE, TEAL, GRAY = '#2563eb', '#187f82', '#77818f'

def save(fig, name):
    OUT.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT / f'{name}.svg', bbox_inches='tight', pad_inches=.14,
                metadata={'Date': None, 'Creator': 'Exact parametric equations; Matplotlib'})
    if PREVIEW:
        PREVIEW.mkdir(parents=True, exist_ok=True)
        fig.savefig(PREVIEW / f'{name}.png', dpi=120, bbox_inches='tight', pad_inches=.14)
    plt.close(fig)

def frame(ax, title, lim=3):
    ax.set_aspect('equal')
    ax.set_xlim(-lim, lim); ax.set_ylim(-lim, lim)
    ax.spines[['top', 'right']].set_visible(False)
    ax.spines[['left', 'bottom']].set_position('zero')
    ax.spines[['left', 'bottom']].set_color(GRAY)
    ax.set_xticks([-2, -1, 1, 2]); ax.set_yticks([-2, -1, 1, 2])
    ax.tick_params(labelsize=12, color=GRAY)
    ax.set_title(title, fontproperties=FONT, fontsize=20, pad=22)
    ax.text(lim-.3, .15, '$x$'); ax.text(.12, lim-.3, '$y$')

t = np.linspace(0, 2*np.pi, 500)
s = np.linspace(-1.6, 1.6, 300)
for name, title in [('ellipse', '椭圆'), ('hyperbola', '双曲线'), ('parabola', '抛物线')]:
    fig, ax = plt.subplots(figsize=(6.3, 5.4))
    frame(ax, title)
    if name == 'ellipse':
        x, y = 2*np.cos(t), np.sin(t)
        assert np.allclose(x*x/4+y*y, 1)
        ax.plot(x, y, color=BLUE, lw=2.5)
        equation = '$x^2/4+y^2=1$'
    elif name == 'hyperbola':
        for sign in [-1, 1]:
            x, y = sign*np.cosh(s), np.sinh(s)
            assert np.allclose(x*x-y*y, 1)
            ax.plot(x, y, color=BLUE, lw=2.5)
        ax.plot([-3, 3], [-3, 3], '--', color=GRAY, lw=1)
        ax.plot([-3, 3], [3, -3], '--', color=GRAY, lw=1)
        equation = '$x^2-y^2=1$'
    else:
        x = np.linspace(-2.4, 2.4, 400); y = x*x/2
        ax.plot(x, y, color=BLUE, lw=2.5)
        equation = '$x^2=2y$'
    fig.text(.5, .01, equation, ha='center', fontsize=21)
    save(fig, name)

fig, axes = plt.subplots(3, 2, figsize=(10.2, 13.5))
cases = [('点', '$x^2+y^2=0$'), ('空集（虚椭圆）', '$x^2+y^2=-1$'),
         ('两条相交直线', '$x^2-y^2=0$'), ('两条平行直线', '$x^2=1$'),
         ('重合直线', '$x^2=0$'), ('空集（虚平行线）', '$x^2=-1$')]
for i, (ax, (title, equation)) in enumerate(zip(axes.flat, cases)):
    frame(ax, title, 2.6)
    if i == 0: ax.scatter([0], [0], s=75, color=BLUE, zorder=4)
    if i in [1, 5]: ax.text(.6, .7, r'$\varnothing$', fontsize=36, color=BLUE)
    if i == 2:
        ax.plot([-2.6, 2.6], [-2.6, 2.6], color=BLUE, lw=2)
        ax.plot([-2.6, 2.6], [2.6, -2.6], color=TEAL, lw=2)
    if i == 3:
        ax.axvline(-1, color=BLUE, lw=2); ax.axvline(1, color=BLUE, lw=2)
    if i == 4: ax.axvline(0, color=BLUE, lw=3)
    ax.text(.5, -.13, equation, transform=ax.transAxes, ha='center', fontsize=20)
fig.subplots_adjust(hspace=.48, wspace=.28)
save(fig, 'conic-degeneracies')

fig, ax = plt.subplots(figsize=(7.1, 6.2))
frame(ax, '旋转后的椭圆与主轴', 3.2)
u, v = 2*np.cos(t), np.sin(t)
x, y = (u-v)/np.sqrt(2), (u+v)/np.sqrt(2)
assert np.allclose(5*x*x-6*x*y+5*y*y, 8)
ax.plot(x, y, color=BLUE, lw=2.5)
ax.plot([-2, 2], [-2, 2], '--', color=TEAL, lw=1.6)
ax.plot([-1.7, 1.7], [1.7, -1.7], '--', color=GRAY, lw=1.6)
ax.text(2.05, 2.05, '$u$'); ax.text(-1.95, 1.8, '$v$')
fig.text(.5, .01, '$5x^2-6xy+5y^2=8$', ha='center', fontsize=22)
save(fig, 'rotated-ellipse')

fig = plt.figure(figsize=(11.6, 6.4))
for i, name in enumerate(['cylinder', 'paraboloid']):
    ax = fig.add_subplot(1, 2, i+1, projection='3d')
    theta = np.linspace(0, 2*np.pi, 90)
    if name == 'cylinder':
        T, Z = np.meshgrid(theta, np.linspace(-1, 2, 38))
        X, Y = np.cos(T), np.sin(T)
        assert np.allclose(X*X+Y*Y, 1)
        title, equation = '椭圆柱面', '$x^2+y^2=1$'
    else:
        T, R = np.meshgrid(theta, np.linspace(0, np.sqrt(2), 40))
        X, Y = R*np.cos(T), R*np.sin(T); Z = R*R
        assert np.allclose(X*X+Y*Y, Z)
        title, equation = '椭圆抛物面', '$x^2+y^2=z$'
    ax.plot_surface(X, Y, Z, color=BLUE, alpha=.76, linewidth=.15, edgecolor='#b0c5df')
    ax.set(xlim=(-1.6, 1.6), ylim=(-1.6, 1.6), zlim=(-1, 2.2))
    ax.set_box_aspect((1, 1, 1)); ax.view_init(22, -55)
    ax.set_xlabel('$x$'); ax.set_ylabel('$y$')
    ax.text2D(.96, .56, '$z$', transform=ax.transAxes)
    ax.tick_params(labelsize=10)
    ax.set_title(title, fontproperties=FONT, fontsize=21, pad=13)
fig.subplots_adjust(left=.01, right=.92, wspace=.15, bottom=.22, top=.9)
for ax, equation in zip(fig.axes, ['$x^2+y^2=1$', '$x^2+y^2=z$']):
    bounds = ax.get_position()
    fig.text(bounds.x0+bounds.width/2, .045, equation, ha='center', fontsize=23)
save(fig, 'cylinder-vs-paraboloid')
print('Generated 6 SVG figures; exact equation checks passed.')
