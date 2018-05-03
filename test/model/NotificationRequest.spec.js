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
    instance = new AgaveJsSdk.NotificationRequest();
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

  describe('NotificationRequest', function() {
    it('should create an instance of NotificationRequest', function() {
      // uncomment below and update the code to test NotificationRequest
      //var instance = new AgaveJsSdk.NotificationRequest();
      //expect(instance).to.be.a(AgaveJsSdk.NotificationRequest);
    });

    it('should have the property associatedUuid (base name: "associatedUuid")', function() {
      // uncomment below and update the code to test the property associatedUuid
      //var instance = new AgaveJsSdk.NotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new AgaveJsSdk.NotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property persistent (base name: "persistent")', function() {
      // uncomment below and update the code to test the property persistent
      //var instance = new AgaveJsSdk.NotificationRequest();
      //expect(instance).to.be();
    });

  });

}));