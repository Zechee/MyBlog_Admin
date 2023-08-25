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
import { JToken } from './jtoken';
/**
 * 
 * @export
 * @interface PageResultJObject
 */
export interface PageResultJObject {
    /**
     * 当前页
     * @type {number}
     * @memberof PageResultJObject
     */
    pageNo?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof PageResultJObject
     */
    pageSize?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof PageResultJObject
     */
    pages?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof PageResultJObject
     */
    total?: number;
    /**
     * 数据
     * @type {Array<{ [key: string]: JToken; }>}
     * @memberof PageResultJObject
     */
    rows?: Array<{ [key: string]: JToken; }> | null;
}