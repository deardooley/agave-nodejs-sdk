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
    define(['ApiClient', 'Model/Transform', 'Model/TransformRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/Transform'), require('../Model/TransformRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.TransformsApi = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.Transform, root.AgaveJsSdk.TransformRequest);
  }
}(this, function(ApiClient, Transform, TransformRequest) {
  'use strict';

  /**
   * Transforms service.
   * @module API/TransformsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransformsApi. 
   * @alias module:API/TransformsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Transform a file and stage it to a specified location.
     * @param {String} transformId The name of the transform to apply to the given file.
     * @param {String} owner The name of the api user owning the file at the given path.
     * @param {String} filePath The path to the file to be transformed and staged
     * @param {module:Model/TransformRequest} body The transfer request details.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Transform} and HTTP response
     */
    this.asyncTransformWithHttpInfo = function(transformId, owner, filePath, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'transformId' is set
      if (transformId === undefined || transformId === null) {
        throw new Error("Missing the required parameter 'transformId' when calling asyncTransform");
      }

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling asyncTransform");
      }

      // verify the required parameter 'filePath' is set
      if (filePath === undefined || filePath === null) {
        throw new Error("Missing the required parameter 'filePath' when calling asyncTransform");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling asyncTransform");
      }


      var pathParams = {
        'transformId': transformId,
        'owner': owner,
        'filePath': filePath
      };
      var queryParams = {
        'naked': opts['naked'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Transform;

      return this.apiClient.callApi(
        '/transforms/v2/{transformId}/async/{owner}/{filePath}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transform a file and stage it to a specified location.
     * @param {String} transformId The name of the transform to apply to the given file.
     * @param {String} owner The name of the api user owning the file at the given path.
     * @param {String} filePath The path to the file to be transformed and staged
     * @param {module:Model/TransformRequest} body The transfer request details.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Transform}
     */
    this.asyncTransform = function(transformId, owner, filePath, body, opts) {
      return this.asyncTransformWithHttpInfo(transformId, owner, filePath, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find the transform of the given uuid
     * @param {String} transformId The name of the transform requested.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Transform} and HTTP response
     */
    this.getTransformWithHttpInfo = function(transformId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transformId' is set
      if (transformId === undefined || transformId === null) {
        throw new Error("Missing the required parameter 'transformId' when calling getTransform");
      }


      var pathParams = {
        'transformId': transformId
      };
      var queryParams = {
        'naked': opts['naked'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Transform;

      return this.apiClient.callApi(
        '/transforms/v2/{transformId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find the transform of the given uuid
     * @param {String} transformId The name of the transform requested.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Transform}
     */
    this.getTransform = function(transformId, opts) {
      return this.getTransformWithHttpInfo(transformId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search for transforms
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the transform
     * @param {String} opts.version The name of the transform
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @param {Boolean} opts.naked  (default to true)
     * @param {String} opts.tags One or more tags of the transform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/Transform>} and HTTP response
     */
    this.listTransformsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'version': opts['version'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'naked': opts['naked'],
        'tags': opts['tags'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Transform];

      return this.apiClient.callApi(
        '/transforms/v2/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search for transforms
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the transform
     * @param {String} opts.version The name of the transform
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @param {Boolean} opts.naked  (default to true)
     * @param {String} opts.tags One or more tags of the transform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/Transform>}
     */
    this.listTransforms = function(opts) {
      return this.listTransformsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transform a file and download it directly.
     * @param {String} transformId The name of the transform to apply to the given file.
     * @param {String} owner The name of the api user owning the file at the given path.
     * @param {String} filePath The path to the file to be transformed and downloaded.
     * @param {module:Model/TransformRequest} body The transfer request details.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.syncTransformWithHttpInfo = function(transformId, owner, filePath, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'transformId' is set
      if (transformId === undefined || transformId === null) {
        throw new Error("Missing the required parameter 'transformId' when calling syncTransform");
      }

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling syncTransform");
      }

      // verify the required parameter 'filePath' is set
      if (filePath === undefined || filePath === null) {
        throw new Error("Missing the required parameter 'filePath' when calling syncTransform");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syncTransform");
      }


      var pathParams = {
        'transformId': transformId,
        'owner': owner,
        'filePath': filePath
      };
      var queryParams = {
        'naked': opts['naked'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/transforms/v2/{transformId}/sync/{owner}/{filePath}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transform a file and download it directly.
     * @param {String} transformId The name of the transform to apply to the given file.
     * @param {String} owner The name of the api user owning the file at the given path.
     * @param {String} filePath The path to the file to be transformed and downloaded.
     * @param {module:Model/TransformRequest} body The transfer request details.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.syncTransform = function(transformId, owner, filePath, body, opts) {
      return this.syncTransformWithHttpInfo(transformId, owner, filePath, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));