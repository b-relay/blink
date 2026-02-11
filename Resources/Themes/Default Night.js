var black =      "#000000";
var red =        "#CC0000";
var green =      "#4E9A06";
var yellow =     "#C4A000";
var blue =       "#8059AD";
var magenta =    "#6D4F8A";
var cyan =       "#5F6E93";
var white =      "#D3D7CF";
var lightBlack = "#555753";
var lightRed =   "#EF2929";
var lightGreen = "#00BA13";
var lightYellow ="#FCE94F";
var lightBlue =  "#9974BE";
var lightMagenta="#9C6ABB";
var lightCyan =  "#7686A9";
var lightWhite = "#EEEEEC";

var paletteOverrides = {
  0: black, 1: red, 2: green, 3: yellow,
  4: blue, 5: magenta, 6: cyan, 7: white,
  8: lightBlack, 9: lightRed, 10: lightGreen, 11: lightYellow,
  12: lightBlue, 13: lightMagenta, 14: lightCyan, 15: lightWhite,

  // 256-color blues/cyans that often appear in CLIs (e.g. 39, 45, 75, 81).
  17: "#4E4A84", 18: "#55508C", 19: "#5B5794", 20: "#625D9C", 21: "#6964A4",
  24: "#4E5D78", 25: "#55657F", 26: "#5D6D87", 27: "#64758F",
  31: "#5A6C86", 32: "#62748E", 33: "#697C96",
  38: "#6A7F98", 39: "#7287A0",
  44: "#7287A0", 45: "#7A8FA8", 51: "#8397B0",
  69: "#705C9E", 75: "#7965A7", 81: "#836EB0", 87: "#8D77B9",
  111: "#806AAA", 117: "#8973B3", 123: "#927CBC",
  159: "#9A86C3", 195: "#A391CB"
};

term_set('color-palette-overrides', paletteOverrides);

term_set('cursor-color', 'rgba(63, 222, 233, 0.5)');
term_set('cursor-blink', true);
