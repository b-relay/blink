var black =      "#000000";
var red =        "#CC0000";
var green =      "#4E9A06";
var yellow =     "#C4A000";
var blue =       "#C4548C";
var magenta =    "#75507B";
var cyan =       "#C86D49";
var white =      "#D3D7CF";
var lightBlack = "#555753";
var lightRed =   "#EF2929";
var lightGreen = "#00BA13";
var lightYellow ="#FCE94F";
var lightBlue =  "#E47BB4";
var lightMagenta="#F200CB";
var lightCyan =  "#D99879";
var lightWhite = "#EEEEEC";

var paletteOverrides = {
  0: black, 1: red, 2: green, 3: yellow,
  4: blue, 5: magenta, 6: cyan, 7: white,
  8: lightBlack, 9: lightRed, 10: lightGreen, 11: lightYellow,
  12: lightBlue, 13: lightMagenta, 14: lightCyan, 15: lightWhite,

  // 256-color blues/cyans that often appear in CLIs (e.g. 39, 45, 75, 81).
  17: "#6B4A82", 18: "#74528B", 19: "#7D5A95", 20: "#86639E", 21: "#8E6BA7",
  24: "#76564F", 25: "#7F5E58", 26: "#876762", 27: "#906F6B",
  31: "#946D5D", 32: "#9D7666", 33: "#A67E6F",
  38: "#AC7F6B", 39: "#B48874",
  44: "#B48874", 45: "#BD917D", 51: "#C69A86",
  69: "#B584A8", 75: "#BF8FB3", 81: "#C89ABE", 87: "#D1A5C9",
  111: "#BE8EAF", 117: "#C799BA", 123: "#D0A4C5",
  159: "#CFABC8", 195: "#D8B5D2"
};

term_set('color-palette-overrides', paletteOverrides);

term_set('cursor-color', 'rgba(63, 222, 233, 0.5)');
term_set('cursor-blink', true);
