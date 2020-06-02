export declare const cssList: {
    _lists: {
        transformsBase: string[];
        transforms3D: string[];
    };
    transformGroup: {
        translate: number;
        translate3d: number;
        scale: number;
        scale3d: number;
        rotate: number;
        rotate3d: number;
        skew: number;
    };
    filter: string[];
    filterConvert: {
        grayScale: string;
        hueRotate: string;
    };
};
export declare function toCssLowerCase(d: string): string;
export declare function toStyleUpperCase(d: string): string;
export declare function toFixed(num: any, length?: number): number;
export declare function createMatrix(style: any): any;
export declare function checkStyleName(p: string): string;
export declare function getGsapType(_p: string): string;
export declare function parseColor(_v: string | number): number[];
export declare function parseShadow(v: string): Array<number | string>;
export declare function getColor(v: number[]): string;
export declare function isTransform(p: string): string;
export declare function isConvert(p: string): string;
export declare function splitFilterToObject(data: string): {};
export declare class Matrix {
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
}
export declare function getMatrix(t: string): Matrix;
export declare class Transform {
    translateX: number;
    translateY: number;
    translateZ: number;
    rotate: number;
    rotateX: number;
    rotateY: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    skewX: number;
    skewY: number;
    perspective: number;
}
export declare function getTransform(transform: string): Transform;
export declare function stylesToCss(key: string, value: number | string): any;
export declare function getUnit(p: string, v: any): string;
export declare function getValues(p: any, d: any, u: any): string;
export declare function findStyleByName(cssArray: string[], name: string): string;
export declare function mergeStyle(current: string, change: string): string;
