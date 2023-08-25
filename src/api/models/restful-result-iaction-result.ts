/* tslint:disable */
/* eslint-disable */
/**
 * 规范化接口演示
 * 让 .NET 开发更简单，更通用，更流行。
 *
 * OpenAPI spec version: 1.0.0
 * Contact: monksoul@outlook.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { IActionResult } from './iaction-result';
/**
 * 
 * @export
 * @interface RESTfulResultIActionResult
 */
export interface RESTfulResultIActionResult {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultIActionResult
     */
    statusCode?: number | null;
    /**
     * 
     * @type {IActionResult}
     * @memberof RESTfulResultIActionResult
     */
    data?: IActionResult;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultIActionResult
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultIActionResult
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultIActionResult
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultIActionResult
     */
    timestamp?: number;
}