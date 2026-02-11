var black =      "#000000";
var red =        "#CC0000";
var green =      "#4E9A06";
var yellow =     "#C4A000";
var blue =       "#4F3B83";
var magenta =    "#593C89";
var cyan =       "#3E4F78";
var white =      "#D3D7CF";
var lightBlack = "#555753";
var lightRed =   "#EF2929";
var lightGreen = "#00BA13";
var lightYellow ="#FCE94F";
var lightBlue =  "#6851A0";
var lightMagenta="#7755A8";
var lightCyan =  "#55668F";
var lightWhite = "#EEEEEC";

var paletteOverrides = {
  0: black, 1: red, 2: green, 3: yellow,
  4: blue, 5: magenta, 6: cyan, 7: white,
  8: lightBlack, 9: lightRed, 10: lightGreen, 11: lightYellow,
  12: lightBlue, 13: lightMagenta, 14: lightCyan, 15: lightWhite,

  // 256-color blues/cyans that often appear in CLIs (e.g. 39, 45, 75, 81).
  17: "#35356B", 18: "#3A3A72", 19: "#3E3E79", 20: "#434380", 21: "#484887",
  24: "#2F4A68", 25: "#35506F", 26: "#3B5676", 27: "#415D7D",
  31: "#3E5875", 32: "#44607D", 33: "#4A6885",
  38: "#4A6887", 39: "#50708F",
  44: "#50708F", 45: "#567896", 51: "#5C809E",
  69: "#4E4B89", 75: "#565391", 81: "#5E5B99", 87: "#6663A1",
  111: "#5B5898", 117: "#6360A0", 123: "#6B68A8",
  159: "#7370B0", 195: "#7B78B8"
};

term_set('color-palette-overrides', paletteOverrides);

term_set('cursor-color', 'rgba(63, 222, 233, 0.5)');
term_set('cursor-blink', true);
