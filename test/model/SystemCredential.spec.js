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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AgaveJsSdk);
  }
}(this, function(expect, AgaveJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AgaveJsSdk.SystemCredential();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SystemCredential', function() {
    it('should create an instance of SystemCredential', function() {
      // uncomment below and update the code to test SystemCredential
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be.a(AgaveJsSdk.SystemCredential);
    });

    it('should have the property credential (base name: "credential")', function() {
      // uncomment below and update the code to test the property credential
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property internalUsername (base name: "internalUsername")', function() {
      // uncomment below and update the code to test the property internalUsername
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "isDefault")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property parentType (base name: "parentType")', function() {
      // uncomment below and update the code to test the property parentType
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "publicKey")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property privateKey (base name: "privateKey")', function() {
      // uncomment below and update the code to test the property privateKey
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property server (base name: "server")', function() {
      // uncomment below and update the code to test the property server
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property valid (base name: "valid")', function() {
      // uncomment below and update the code to test the property valid
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

    it('should have the property caCerts (base name: "caCerts")', function() {
      // uncomment below and update the code to test the property caCerts
      //var instance = new AgaveJsSdk.SystemCredential();
      //expect(instance).to.be();
    });

  });

}));