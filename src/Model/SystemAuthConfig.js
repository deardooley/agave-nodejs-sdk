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
    define(['ApiClient', 'Model/SystemAuthConfigServer', 'Model/SystemLoginAuthenticationType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SystemAuthConfigServer'), require('./SystemLoginAuthenticationType'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.SystemAuthConfig = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.SystemAuthConfigServer, root.AgaveJsSdk.SystemLoginAuthenticationType);
  }
}(this, function(ApiClient, SystemAuthConfigServer, SystemLoginAuthenticationType) {
  'use strict';




  /**
   * The SystemAuthConfig model module.
   * @module Model/SystemAuthConfig
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SystemAuthConfig</code>.
   * @alias module:Model/SystemAuthConfig
   * @class
   * @param credential {String} The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key..
   * @param internalUsername {String} The username of the internal user associated with this credential.
   * @param password {String} The password on the remote system used to authenticate.
   * @param publicKey {String} The public ssh key used to authenticate to the remote system.
   * @param privateKey {String} The public ssh key used to authenticate to the remote system..
   * @param server {module:Model/SystemAuthConfigServer} 
   * @param type {module:Model/SystemLoginAuthenticationType} 
   * @param username {String} The local username on the remote system used to authenticate.
   * @param caCerts {String} A public URL to the location of the trusted CA certs to use with this credential.
   */
  var exports = function(credential, internalUsername, password, publicKey, privateKey, server, type, username, caCerts) {
    var _this = this;

    _this['credential'] = credential;
    _this['internalUsername'] = internalUsername;
    _this['password'] = password;
    _this['publicKey'] = publicKey;
    _this['privateKey'] = privateKey;
    _this['server'] = server;
    _this['type'] = type;
    _this['username'] = username;
    _this['caCerts'] = caCerts;
  };

  /**
   * Constructs a <code>SystemAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/SystemAuthConfig} obj Optional instance to populate.
   * @return {module:Model/SystemAuthConfig} The populated <code>SystemAuthConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('credential')) {
        obj['credential'] = ApiClient.convertToType(data['credential'], 'String');
      }
      if (data.hasOwnProperty('internalUsername')) {
        obj['internalUsername'] = ApiClient.convertToType(data['internalUsername'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('publicKey')) {
        obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
      }
      if (data.hasOwnProperty('privateKey')) {
        obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
      }
      if (data.hasOwnProperty('server')) {
        obj['server'] = SystemAuthConfigServer.constructFromObject(data['server']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = SystemLoginAuthenticationType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('caCerts')) {
        obj['caCerts'] = ApiClient.convertToType(data['caCerts'], 'String');
      }
    }
    return obj;
  }

  /**
   * The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key..
   * @member {String} credential
   */
  exports.prototype['credential'] = undefined;
  /**
   * The username of the internal user associated with this credential.
   * @member {String} internalUsername
   */
  exports.prototype['internalUsername'] = undefined;
  /**
   * The password on the remote system used to authenticate.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The public ssh key used to authenticate to the remote system.
   * @member {String} publicKey
   */
  exports.prototype['publicKey'] = undefined;
  /**
   * The public ssh key used to authenticate to the remote system..
   * @member {String} privateKey
   */
  exports.prototype['privateKey'] = undefined;
  /**
   * @member {module:Model/SystemAuthConfigServer} server
   */
  exports.prototype['server'] = undefined;
  /**
   * @member {module:Model/SystemLoginAuthenticationType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The local username on the remote system used to authenticate.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * A public URL to the location of the trusted CA certs to use with this credential.
   * @member {String} caCerts
   */
  exports.prototype['caCerts'] = undefined;



  return exports;
}));


