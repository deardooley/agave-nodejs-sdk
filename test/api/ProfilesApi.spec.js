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
    instance = new AgaveJsSdk.ProfilesApi();
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

  describe('ProfilesApi', function() {
    describe('addInternalUser', function() {
      it('should call addInternalUser successfully', function(done) {
        //uncomment below and update the code to test addInternalUser
        //instance.addInternalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProfile', function() {
      it('should call addProfile successfully', function(done) {
        //uncomment below and update the code to test addProfile
        //instance.addProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearInternalUsers', function() {
      it('should call clearInternalUsers successfully', function(done) {
        //uncomment below and update the code to test clearInternalUsers
        //instance.clearInternalUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInternalUser', function() {
      it('should call deleteInternalUser successfully', function(done) {
        //uncomment below and update the code to test deleteInternalUser
        //instance.deleteInternalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProfile', function() {
      it('should call deleteProfile successfully', function(done) {
        //uncomment below and update the code to test deleteProfile
        //instance.deleteProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInternalUser', function() {
      it('should call getInternalUser successfully', function(done) {
        //uncomment below and update the code to test getInternalUser
        //instance.getInternalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfile', function() {
      it('should call getProfile successfully', function(done) {
        //uncomment below and update the code to test getProfile
        //instance.getProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listInternalUsers', function() {
      it('should call listInternalUsers successfully', function(done) {
        //uncomment below and update the code to test listInternalUsers
        //instance.listInternalUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProfiles', function() {
      it('should call listProfiles successfully', function(done) {
        //uncomment below and update the code to test listProfiles
        //instance.listProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInternalUser', function() {
      it('should call updateInternalUser successfully', function(done) {
        //uncomment below and update the code to test updateInternalUser
        //instance.updateInternalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProfile', function() {
      it('should call updateProfile successfully', function(done) {
        //uncomment below and update the code to test updateProfile
        //instance.updateProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));