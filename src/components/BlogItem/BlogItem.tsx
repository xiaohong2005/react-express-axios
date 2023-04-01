import colors = require('color-name');

export type RGB = [number, number, number];
export type HSL = [number, number, number];
export type HSV = [number, number, number];
export type HWB = [number, number, number];
export type CMYK = [number, number, number, number];
export type XYZ = [number, number, number];
export type LAB = [number, number, number];
export type LCH = [number, number, number];
export type HEX = string;
export type KEYWORD = keyof typeof colors;
export type ANSI16 = number;
export type ANSI256 = number;
export type HCG = [number, number, number];
export type APPLE = [number, number, number];
export type GRAY = [number];

export namespace rgb {
    const channels: 3;
    const labels: 'rgb';
    function hsl(rgb: RGB): HSL;
    function hsl(...rgb: RGB): HSL;
    function hsv(rgb: RGB): HSV;
    function hsv(...rgb: RGB): HSV;
    function hwb(rgb: RGB): HWB;
    function hwb(...rgb: RGB): HWB;
    function cmyk(rgb: RGB): CMYK;
    function cmyk(...rgb: RGB): CMYK;
    functi