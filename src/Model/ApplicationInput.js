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
    define(['ApiClient', 'Model/ApplicationArgument', 'Model/ApplicationArgumentDetails', 'Model/ApplicationArgumentSemantics', 'Model/ApplicationArgumentValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationArgument'), require('./ApplicationArgumentDetails'), require('./ApplicationArgumentSemantics'), require('./ApplicationArgumentValue'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.ApplicationInput = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.ApplicationArgument, root.AgaveJsSdk.ApplicationArgumentDetails, root.AgaveJsSdk.ApplicationArgumentSemantics, root.AgaveJsSdk.ApplicationArgumentValue);
  }
}(this, function(ApiClient, ApplicationArgument, ApplicationArgumentDetails, ApplicationArgumentSemantics, ApplicationArgumentValue) {
  'use strict';




  /**
   * The ApplicationInput model module.
   * @module Model/ApplicationInput
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ApplicationInput</code>.
   * App inputs describe data inputs supported by your app. Each input can represent one or more files or folders. Inptus can be optional or required and may physically reside anywhere accessible using any of the data protocols supported by Agave.  &lt;a href&#x3D;\&quot;http://agaveapi.co/documentation/tutorials/app-management-tutorial/#app-inputs\&quot;&gt;Read more.&lt;/a&gt;
   * @alias module:Model/ApplicationInput
   * @class
   * @implements module:Model/ApplicationArgument
   * @param details {module:Model/ApplicationArgumentDetails} 
   * @param id {String} The id of this argument. This will be the replacement string in your wrapper scripts.
   * @param semantics {module:Model/ApplicationArgumentSemantics} 
   * @param value {module:Model/ApplicationArgumentValue} 
   */
  var exports = function(details, id, semantics, value) {
    var _this = this;

    ApplicationArgument.call(_this, details, id, semantics, value);
  };

  /**
   * Constructs a <code>ApplicationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ApplicationInput} obj Optional instance to populate.
   * @return {module:Model/ApplicationInput} The populated <code>ApplicationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ApplicationArgument.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ApplicationArgument interface:
  /**
   * @member {module:Model/ApplicationArgumentDetails} details
   */
exports.prototype['details'] = undefined;

  /**
   * The id of this argument. This will be the replacement string in your wrapper scripts.
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {module:Model/ApplicationArgumentSemantics} semantics
   */
exports.prototype['semantics'] = undefined;

  /**
   * @member {module:Model/ApplicationArgumentValue} value
   */
exports.prototype['value'] = undefined;



  return exports;
}));


