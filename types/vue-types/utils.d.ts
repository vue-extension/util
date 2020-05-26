export declare const hasOwn: (v: string | number | symbol) => boolean;
export declare const getType: (fn: any) => any;
export declare const getNativeType: (value: any) => any;
/**
 * No-op function
 */
export declare const noop: (...msg: any[]) => void;
/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */
export declare const has: (obj: any, prop: any) => any;
/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */
export declare const isInteger: (number: unknown) => boolean;
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */
export declare const isArray: (value: any) => boolean;
/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */
export declare const isFunction: (value: any) => boolean;
/**
 * Adds a `def` method to the object returning a new object with passed in argument as `default` property
 *
 * @param {object} type - Object to enhance
 */
export declare const withDefault: (type: any) => void;
/**
 * Adds a `isRequired` getter returning a new object with `required: true` key-value
 *
 * @param {object} type - Object to enhance
 */
export declare const withRequired: (type: any) => void;
/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 * @returns {object}
 */
export declare const toType: (name: any, obj: any) => any;
/**
 * Validates a given value against a prop type object
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 * @returns {boolean}
 */
export declare const validateType: (type: any, value: any, silent?: boolean) => boolean;
declare let warn: (...msg: any[]) => void;
export { warn };
