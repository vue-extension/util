declare const VuePropTypes: {
    readonly any: any;
    readonly func: any;
    readonly bool: any;
    readonly string: any;
    readonly number: any;
    readonly array: any;
    readonly object: any;
    readonly integer: any;
    readonly symbol: any;
    custom(validatorFn: any, warnMsg?: string): any;
    oneOf(arr: any): any;
    instanceOf(instanceConstructor: any): any;
    oneOfType(arr: any): any;
    arrayOf(type: any): any;
    objectOf(type: any): any;
    shape(obj: any): any;
};
export default VuePropTypes;
