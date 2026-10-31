import argparse


def tail_values(r, x0, burn, keep):
    if not (0 < r < 4 and 0 < x0 < 1):
        raise ValueError("require 0 < r < 4 and 0 < x0 < 1")
    if burn < 0 or keep < 8:
        raise ValueError("require burn >= 0 and keep >= 8")
    x = x0
    for _ in range(burn):
        x = r * x * (1 - x)
    values = []
    for _ in range(keep):
        x = r * x * (1 - x)
        values.append(x)
    return values


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--r", type=float, nargs="+",
                        default=[0.8, 1, 2, 2.9, 3, 3.2, 3.5, 3.9])
    parser.add_argument("--x0", type=float, default=0.2)
    parser.add_argument("--burn", type=int, default=20000)
    parser.add_argument("--keep", type=int, default=1000)
    args = parser.parse_args()
    for r in args.r:
        values = tail_values(r, args.x0, args.burn, args.keep)
        print(f"r={r:g}, min={min(values):.12g}, "
              f"max={max(values):.12g}")
        print("last 8:", " ".join(f"{x:.10f}" for x in values[-8:]))


if __name__ == "__main__":
    main()
