export const palette = [
  ["0", [0, 0, 0, 255]],
  ["1", [255/2, 255/2, 255/2, 255]],
  ["L", [255/3, 255/3, 255/3, 255]],
  ["2", [255, 255, 255, 255]],
  ["3", [255, 0, 0, 255]],
  ["4", [0, 255, 0, 255]],
  ["5", [0, 0, 255, 255]],
  ["6", [255, 255, 0, 255]],
  ["7", [0, 255, 255, 255]],
  ["8", [255, 0, 255, 255]],
  [".", [0, 0, 0, 0]]
].map(([k, v]) => [k, v.map(Math.round)]);
