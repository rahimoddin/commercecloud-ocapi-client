/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'
import OptionValue from './OptionValue'

/**
* The Option model module.
* @module models/Option
* @version 17.8
*/
export default class Option {
    /**
    * Constructs a new <code>Option</code>.
    * Document representing a product option.
    * @alias module:models/Option
    * @class
    * @param id {String} The id of the option.
    */
    constructor(id) {
        /**
        * The localized description of the option.
        * @member {String} description
        */
        this.description = undefined

        /**
        * The id of the option.
        * @member {String} id
        */
        this.id = id

        /**
        * The URL to the option image.
        * @member {String} image
        */
        this.image = undefined

        /**
        * The localized name of the option.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The array of option values. This array can be empty.
        * @member {Array.<module:models/OptionValue>} values
        */
        this.values = undefined
    }

    /**
    * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Option} obj Optional instance to populate.
    * @return {module:models/Option} The populated <code>Option</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Option()


            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [OptionValue])
            }
        }

        return obj
    }
}
