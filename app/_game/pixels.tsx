type Sprite = { rows: readonly string[]; palette: Record<string, string> };

const items = {
  grass: {
    rows: ["GGGGGGGG", "GgGGGgGG", "gdgGdgdg", "dddDdddD", "dDdddDdd", "ddddDddd", "dDddddDd", "dddDdddd"],
    palette: { G: "#6aaa3a", g: "#4f8a2b", d: "#8b5a3c", D: "#6b4429" },
  },
  book: {
    rows: ["........", ".DDDDDD.", ".DPPPPDW", ".DPMPPDW", ".DPPMPDW", ".DPPPPDW", ".DDDDDD.", "........"],
    palette: { D: "#4a2a6b", P: "#8e4ec6", M: "#e2b5ff", W: "#f2efe4" },
  },
  diamond: {
    rows: ["........", ".111111.", "12222221", "12333321", ".123321.", "..1221..", "...11...", "........"],
    palette: { "1": "#0f5e5a", "2": "#2bd9c8", "3": "#a8fff3" },
  },
  chest: {
    rows: ["11111111", "12222221", "12222221", "11133111", "12233221", "12222221", "12222221", "11111111"],
    palette: { "1": "#4b2f12", "2": "#a46c2a", "3": "#d8d8d8" },
  },
  feather: {
    rows: ["......11", ".....121", "....121.", "...121..", "..121...", ".121....", ".3......", "3......."],
    palette: { "1": "#bdbdbd", "2": "#ffffff", "3": "#7a6a55" },
  },
  clock: {
    rows: ["..YYYY..", ".YssssY.", "YsssSssY", "YssssssY", "YnnnnnnY", "YnnMnnnY", ".YnnnnY.", "..YYYY.."],
    palette: { Y: "#c9a227", s: "#5fb3ff", S: "#fff26b", n: "#1b1f4b", M: "#e8e8e8" },
  },
  redstone: {
    rows: ["........", "...1....", "..121.1.", ".12321..", "..1211..", ".1.121..", "...1....", "........"],
    palette: { "1": "#6e0000", "2": "#c40000", "3": "#ff4b4b" },
  },
  compass: {
    rows: ["..GGGG..", ".GwwwwG.", "GwwwwrwG", "GwwwrwwG", "GwwKwwwG", "GwKwwwwG", ".GwwwwG.", "..GGGG.."],
    palette: { G: "#7d7d7d", w: "#e6e6e6", r: "#d02020", K: "#404040" },
  },
  head: {
    rows: ["WBWWWWBW", "BWWWWWWB", "WWWWWWWW", "WBWWWWBW", "WWWWWWWW", "WWWWWWWW", "WWWBWWWW", "WWWWWWWW"],
    palette: { W: "#f4f4f4", B: "#4a2e14" },
  },
} satisfies Record<string, Sprite>;

export type ItemIcon = keyof typeof items;

function SpriteSvg({ sprite, size, className }: { sprite: Sprite; size: number; className?: string }) {
  const width = sprite.rows[0].length;
  return (
    <svg
      viewBox={`0 0 ${width} ${sprite.rows.length}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {sprite.rows.flatMap((row, y) =>
        [...row].map((char, x) =>
          sprite.palette[char] ? (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={sprite.palette[char]} />
          ) : null,
        ),
      )}
    </svg>
  );
}

export function ItemSprite({ icon, size = 32, className }: { icon: ItemIcon; size?: number; className?: string }) {
  return <SpriteSvg sprite={items[icon]} size={size} className={className} />;
}

