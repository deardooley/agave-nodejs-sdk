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
    root.AgaveJsSdk.SystemLoginAuthenticationType = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class SystemLoginAuthenticationType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "APIKEYS"
     * @const
     */
    "APIKEYS": "APIKEYS",
    /**
     * value: "LOCAL"
     * @const
     */
    "LOCAL": "LOCAL",
    /**
     * value: "PAM"
     * @const
     */
    "PAM": "PAM",
    /**
     * value: "PASSWORD"
     * @const
     */
    "PASSWORD": "PASSWORD",
    /**
     * value: "SSHKEYS"
     * @const
     */
    "SSHKEYS": "SSHKEYS",
    /**
     * value: "TOKEN"
     * @const
     */
    "TOKEN": "TOKEN",
    /**
     * value: "X509"
     * @const
     */
    "X509": "X509"  };

  /**
   * Returns a <code>SystemLoginAuthenticationType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:Model/SystemLoginAuthenticationType} The enum <code>SystemLoginAuthenticationType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


