import PropTypes from 'prop-types';
import { Component } from 'react';
import { processColor } from 'react-native';
import { ObjPred } from 'ramda';
export declare const isArgument: (x1: any) => boolean;
export declare const isFunction: (x1: any) => boolean;
export declare const isString: (x1: any) => boolean;
export declare const isNumber: (x1: any) => boolean;
export declare const isDate: (x1: any) => boolean;
export declare const isRegExp: (x1: any) => boolean;
export declare const isError: (x1: any) => boolean;
declare const compact: import("ramda").FilterOnceApplied<any>;
declare function capitalize(str: string): string;
declare const toPixels: any;
declare function toDips(px: number): number;
declare function convertCoordinate(value: number): number;
declare function getFontSize(sp: number): number;
declare function extractPropsBy(view: Component, filter: ObjPred): {};
declare function extractProps(view: Component, propTypes: object): {};
declare function extractTouchableProps(view: Component): {};
declare const ViewPropTypes: PropTypes.ValidationMap<import("react-native").ViewProps>;
export { capitalize, compact, toPixels, toDips, convertCoordinate, getFontSize, extractProps, extractPropsBy, extractTouchableProps, processColor as parseColor, // parse stringified color as int
ViewPropTypes, };
//# sourceMappingURL=utils.d.ts.map