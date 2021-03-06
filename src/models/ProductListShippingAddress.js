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

/**
* The ProductListShippingAddress model module.
* @module models/ProductListShippingAddress
* @version 17.8
*/
export default class ProductListShippingAddress {
    /**
    * Constructs a new <code>ProductListShippingAddress</code>.
    * Document representing a product list shipping address.
    * @alias module:models/ProductListShippingAddress
    * @class
    * @param addressId {String} The id of this address.
    */
    constructor(addressId) {
        /**
        * The id of this address.
        * @member {String} address_id
        */
        this.address_id = addressId

        /**
        * The city of this address.
        * @member {String} city
        */
        this.city = undefined

        /**
        * The first name of this address.
        * @member {String} first_name
        */
        this.first_name = undefined

        /**
        * The last name of this address.
        * @member {String} last_name
        */
        this.last_name = undefined
    }

    /**
    * Constructs a <code>ProductListShippingAddress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductListShippingAddress} obj Optional instance to populate.
    * @return {module:models/ProductListShippingAddress} The populated <code>ProductListShippingAddress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductListShippingAddress()

            if (data.hasOwnProperty('address_id')) {
                obj['address_id'] = ApiClient.convertToType(data['address_id'], 'String')
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String')
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String')
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String')
            }
        }

        return obj
    }
}
