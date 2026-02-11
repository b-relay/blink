var black =      "#000000";
var red =        "#CC0000";
var green =      "#4E9A06";
var yellow =     "#C4A000";
var blue =       "#C4548C";
var magenta =    "#75507B";
var cyan =       "#D27A58";
var white =      "#D3D7CF";
var lightBlack = "#555753";
var lightRed =   "#EF2929";
var lightGreen = "#00BA13";
var lightYellow ="#FCE94F";
var lightBlue =  "#F78FC7";
var lightMagenta="#F200CB";
var lightCyan =  "#F0B190";
var lightWhite = "#EEEEEC";

var paletteOverrides = {
  0: black, 1: red, 2: green, 3: yellow,
  4: blue, 5: magenta, 6: cyan, 7: white,
  8: lightBlack, 9: lightRed, 10: lightGreen, 11: lightYellow,
  12: lightBlue, 13: lightMagenta, 14: lightCyan, 15: lightWhite,

  // 256-color blues/cyans that often appear in CLIs (e.g. 39, 45, 75, 81).
  17: "#7E5B99", 18: "#8A66A4", 19: "#9672B0", 20: "#A27DBB", 21: "#AE89C6",
  24: "#8A675F", 25: "#96726A", 26: "#A27D76", 27: "#AE8981",
  31: "#AA826F", 32: "#B78E7A", 33: "#C39A86",
  38: "#CA9A84", 39: "#D6A68F",
  44: "#D6A68F", 45: "#E3B29B", 51: "#F0BFA8",
  69: "#D6A3C5", 75: "#E2B1D1", 81: "#EEC0DD", 87: "#FACFE9",
  111: "#DEAFCF", 117: "#EABEDB", 123: "#F6CDE7",
  159: "#F2D8EE", 195: "#FBE8F6"
};

term_set('color-palette-overrides', paletteOverrides);

term_set('cursor-color', 'rgba(63, 222, 233, 0.5)');
term_set('cursor-blink', true);
