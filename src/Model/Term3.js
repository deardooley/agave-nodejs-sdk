/**
 * Agave Platform Science API
 * Power your digital lab and reduce the time from theory to discovery using the Agave Science-as-a-Service API Platform. Agave provides hosted services that allow researchers to manage data, conduct experiments, and publish and share results from anywhere at any time.
 *
 * OpenAPI spec version: 2.2.14
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.Term3 = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Term3.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "username"
     * @const
     */
    "username": "username",
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "name"
     * @const
     */
    "name": "name",
    /**
     * value: "status"
     * @const
     */
    "status": "status"  };

  /**
   * Returns a <code>Term3</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:Model/Term3} The enum <code>Term3</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


