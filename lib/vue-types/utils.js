"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.validateType = exports.toType = exports.withRequired = exports.withDefault = exports.isFunction = exports.isArray = exports.isInteger = exports.has = exports.noop = exports.getNativeType = exports.getType = exports.hasOwn = void 0;

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

const ObjProto = Object.prototype;
const toString = ObjProto.toString;
const hasOwn = ObjProto.hasOwnProperty;
exports.hasOwn = hasOwn;
const FN_MATCH_REGEXP = /^\s*function (\w+)/; // https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L159

const getType = fn => {
  const type = fn !== null && fn !== undefined ? fn.type ? fn.type : fn : null;
  const match = type && type.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

exports.getType = getType;

const getNativeType = value => {
  if (value === null || value === undefined) return null;
  const match = value.constructor.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};
/**
 * No-op function
 */


exports.getNativeType = getNativeType;

const noop = (...msg) => {};
/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */


exports.noop = noop;

const has = (obj, prop) => hasOwn.call(obj, prop);
/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */


exports.has = has;

const isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */


exports.isInteger = isInteger;

const isArray = Array.isArray || function (value) {
  return toString.call(value) === '[object Array]';
};
/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */


exports.isArray = isArray;

const isFunction = value => toString.call(value) === '[object Function]';
/**
 * Adds a `def` method to the object returning a new object with passed in argument as `default` property
 *
 * @param {object} type - Object to enhance
 */


exports.isFunction = isFunction;

const withDefault = function (type) {
  Object.defineProperty(type, 'def', {
    value(def) {
      if (def === undefined && this.default === undefined) {
        this.default = undefined;
        return this;
      }

      if (!isFunction(def) && !validateType(this, def)) {
        warn(`${this._vueTypes_name} - invalid default value: "${def}"`, def);
        return this;
      }

      this.default = isArray(def) || (0, _isPlainObject.default)(def) ? function () {
        return def;
      } : def;
      return this;
    },

    enumerable: false,
    writable: false
  });
};
/**
 * Adds a `isRequired` getter returning a new object with `required: true` key-value
 *
 * @param {object} type - Object to enhance
 */


exports.withDefault = withDefault;

const withRequired = function (type) {
  Object.defineProperty(type, 'isRequired', {
    get() {
      this.required = true;
      return this;
    },

    enumerable: false
  });
};
/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 * @returns {object}
 */


exports.withRequired = withRequired;

const toType = (name, obj) => {
  Object.defineProperty(obj, '_vueTypes_name', {
    enumerable: false,
    writable: false,
    value: name
  });
  withRequired(obj);
  withDefault(obj);

  if (isFunction(obj.validator)) {
    obj.validator = obj.validator.bind(obj);
  }

  return obj;
};
/**
 * Validates a given value against a prop type object
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 * @returns {boolean}
 */


exports.toType = toType;

const validateType = (type, value, silent = false) => {
  let typeToCheck = type;
  let valid = true;
  let expectedType;

  if (!(0, _isPlainObject.default)(type)) {
    typeToCheck = {
      type
    };
  }

  const namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : '';

  if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
    if (isArray(typeToCheck.type)) {
      valid = typeToCheck.type.some(type => validateType(type, value, true));
      expectedType = typeToCheck.type.map(type => getType(type)).join(' or ');
    } else {
      expectedType = getType(typeToCheck);

      if (expectedType === 'Array') {
        valid = isArray(value);
      } else if (expectedType === 'Object') {
        valid = (0, _isPlainObject.default)(value);
      } else if (expectedType === 'String' || expectedType === 'Number' || expectedType === 'Boolean' || expectedType === 'Function') {
        valid = getNativeType(value) === expectedType;
      } else {
        valid = value instanceof typeToCheck.type;
      }
    }
  }

  if (!valid) {
    silent === false && warn(`${namePrefix}value "${value}" should be of type "${expectedType}"`);
    return false;
  }

  if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
    valid = typeToCheck.validator(value);
    if (!valid && silent === false) warn(`${namePrefix}custom validation failed`);
    return valid;
  }

  return valid;
};

exports.validateType = validateType;
let warn = noop;
exports.warn = warn;

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== 'undefined';

  exports.warn = warn = msg => {
    if (hasConsole) {
      console.warn(`[VueTypes warn]: ${msg}`);
    }
  };
}

xxxx;