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
import { PageResultSysUserPageOutput } from './page-result-sys-user-page-output';
/**
 * 
 * @export
 * @interface RESTfulResultPageResultSysUserPageOutput
 */
export interface RESTfulResultPageResultSysUserPageOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {PageResultSysUserPageOutput}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    data?: PageResultSysUserPageOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultSysUserPageOutput
     */
    timestamp?: number;
}
