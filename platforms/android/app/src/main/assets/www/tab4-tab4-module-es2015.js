(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/angular-cropperjs/angular-cropperjs.umd.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-cropperjs/angular-cropperjs.umd.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! cropperjs/dist/cropper */ "./node_modules/cropperjs/dist/cropper.js")) :
	undefined;
}(this, (function (exports,core,common,Cropper) { 'use strict';

var AngularCropperjsComponent = (function () {
    function AngularCropperjsComponent() {
        /*--------  View child elements  --------*/
        /*--------  Output events  --------*/
        this.export = new core.EventEmitter();
        this.ready = new core.EventEmitter();
        this.isLoading = true;
    }
    /**
     * Image lodaded event
     * @param {?} ev
     * @return {?}
     */
    AngularCropperjsComponent.prototype.imageLoaded = function (ev) {
        var _this = this;
        //
        // Unset load error state
        this.loadError = false;
        //
        // Setup image element
        var /** @type {?} */ image = (ev.target);
        this.imageElement = image;
        // 
        // Add crossOrigin?
        if (this.cropperOptions.checkCrossOrigin)
            image.crossOrigin = 'anonymous';
        //
        // Image on ready event
        image.addEventListener('ready', function () {
            //
            // Emit ready
            _this.ready.emit(true);
            //
            // Unset loading state
            _this.isLoading = false;
            //
            // Validate cropbox existance
            if (_this.cropbox) {
                //
                // Set cropbox data
                _this.cropper.setCropBoxData(_this.cropbox);
            }
        });
        //
        // Setup aspect ratio according to settings
        var /** @type {?} */ aspectRatio = NaN;
        if (this.settings) {
            var _a = this.settings, width = _a.width, height = _a.height;
            aspectRatio = width / height;
        }
        //
        // Set crop options
        // extend default with custom config
        this.cropperOptions = Object.assign({
            aspectRatio: aspectRatio,
            movable: false,
            scalable: false,
            zoomable: false,
            viewMode: 1,
            checkCrossOrigin: true
        }, this.cropperOptions);
        //
        // Set cropperjs
        this.cropper = new Cropper(image, this.cropperOptions);
    };
    /**
     * Image load error
     * @param {?} event
     * @return {?}
     */
    AngularCropperjsComponent.prototype.imageLoadError = function (event) {
        //
        // Set load error state
        this.loadError = true;
        //
        // Unset loading state
        this.isLoading = false;
    };
    /**
     * Export canvas
     * @param {?=} base64
     * @return {?}
     */
    AngularCropperjsComponent.prototype.exportCanvas = function (base64) {
        var _this = this;
        //
        // Get and set image, crop and canvas data
        var /** @type {?} */ imageData = this.cropper.getImageData();
        var /** @type {?} */ cropData = this.cropper.getCropBoxData();
        var /** @type {?} */ canvas = this.cropper.getCroppedCanvas();
        var /** @type {?} */ data = { imageData: imageData, cropData: cropData };
        //
        // Create promise to resolve canvas data
        var /** @type {?} */ promise = new Promise(function (resolve) {
            //
            // Validate base64
            if (base64) {
                //
                // Resolve promise with dataUrl
                return resolve({
                    dataUrl: canvas.toDataURL('image/png')
                });
            }
            canvas.toBlob(function (blob) { return resolve({ blob: blob }); });
        });
        //
        // Emit export data when promise is ready
        promise.then(function (res) {
            _this.export.emit(Object.assign(data, res));
        });
    };
    return AngularCropperjsComponent;
}());
AngularCropperjsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'angular-cropper',
                template: "<div class=\"angular-cropper-wrapper\"> <div class=\"loading-block\" *ngIf=\"isLoading\"> <div class=\"spinner\"></div></div><div class=\"alert alert-warning\" *ngIf=\"loadError\">{{loadImageErrorText}}</div><div class=\"cropper\"> <img #image alt=\"image\" [src]=\"imageUrl\" (load)=\"imageLoaded($event)\" (error)=\"imageLoadError($event)\"/> </div></div>",
                styles: [":host{display:block}.cropper img{max-width:100%;max-height:100%}.angular-cropper-wrapper{position:relative;min-height:80px}.angular-cropper-wrapper .loading-block{position:absolute;top:0;left:0;width:100%;height:100%}.angular-cropper-wrapper .loading-block .spinner{width:31px;height:31px;margin:0 auto;border:2px solid rgba(97,100,193,.98);border-radius:50%;border-left-color:transparent;border-right-color:transparent;-webkit-animation:cssload-spin 425ms infinite linear;position:absolute;top:calc(50% - 15px);left:calc(50% - 15px);animation:cssload-spin 425ms infinite linear}@-webkit-keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}/*!  * Cropper.js v0.8.1  * https://github.com/fengyuanchen/cropperjs  *  * Copyright (c) 2015-2016 Fengyuan Chen  * Released under the MIT license  *  * Date: 2016-09-03T04:55:16.458Z  */.cropper-container{font-size:0;line-height:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;direction:ltr}.cropper-container img{display:block;min-width:0!important;max-width:none!important;min-height:0!important;max-height:none!important;width:100%;height:100%;image-orientation:0deg}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-wrap-box{overflow:hidden}.cropper-drag-box{opacity:0;background-color:#fff}.cropper-modal{opacity:.5;background-color:#000}.cropper-view-box{display:block;overflow:hidden;width:100%;height:100%;outline:#39f solid 1px;outline-color:rgba(51,153,255,.75)}.cropper-dashed{position:absolute;display:block;opacity:.5;border:0 dashed #eee}.cropper-dashed.dashed-h{top:33.33333333%;left:0;width:100%;height:33.33333333%;border-top-width:1px;border-bottom-width:1px}.cropper-dashed.dashed-v{top:0;left:33.33333333%;width:33.33333333%;height:100%;border-right-width:1px;border-left-width:1px}.cropper-center{position:absolute;top:50%;left:50%;display:block;width:0;height:0;opacity:.75}.cropper-center:after,.cropper-center:before{position:absolute;display:block;content:' ';background-color:#eee}.cropper-center:before{top:0;left:-3px;width:7px;height:1px}.cropper-center:after{top:-3px;left:0;width:1px;height:7px}.cropper-face,.cropper-line{width:100%;height:100%;opacity:.1}.cropper-face,.cropper-line,.cropper-point,.cropper-point.point-se:before{position:absolute;display:block}.cropper-face{top:0;left:0;background-color:#fff}.cropper-line,.cropper-point{background-color:#39f}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize}.cropper-point{width:5px;height:5px;opacity:.75}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;opacity:1}.cropper-point.point-se:before{right:-50%;bottom:-50%;width:200%;height:200%;content:' ';opacity:0;background-color:#39f}@media (min-width:768px){.cropper-point.point-se{width:15px;height:15px}}@media (min-width:992px){.cropper-point.point-se{width:10px;height:10px}}@media (min-width:1200px){.cropper-point.point-se{width:5px;height:5px;opacity:.75}}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{position:absolute;display:block;width:0;height:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}"],
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
AngularCropperjsComponent.ctorParameters = function () { return []; };
AngularCropperjsComponent.propDecorators = {
    'image': [{ type: core.ViewChild, args: ['image',] },],
    'imageUrl': [{ type: core.Input },],
    'settings': [{ type: core.Input },],
    'cropbox': [{ type: core.Input },],
    'loadImageErrorText': [{ type: core.Input },],
    'cropperOptions': [{ type: core.Input },],
    'export': [{ type: core.Output },],
    'ready': [{ type: core.Output },],
};

var AngularCropperjsModule = (function () {
    function AngularCropperjsModule() {
    }
    /**
     * @return {?}
     */
    AngularCropperjsModule.forRoot = function () {
        return {
            ngModule: AngularCropperjsModule,
            providers: []
        };
    };
    return AngularCropperjsModule;
}());
AngularCropperjsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    AngularCropperjsComponent
                ],
                exports: [
                    AngularCropperjsComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AngularCropperjsModule.ctorParameters = function () { return []; };

exports.AngularCropperjsModule = AngularCropperjsModule;
exports.AngularCropperjsComponent = AngularCropperjsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link http://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;

      default:
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
        height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      canvasData.left = (containerData.width - canvasWidth) / 2;
      canvasData.top = (containerData.height - canvasHeight) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      this.initialImageData = assign({}, imageData);
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var minContainerWidth = Number(options.minContainerWidth) || MIN_CONTAINER_WIDTH;
      var minContainerHeight = Number(options.minContainerHeight) || MIN_CONTAINER_HEIGHT;

      if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
        return;
      }

      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;

          default:
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;

        default:
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper =
  /*#__PURE__*/
  function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "http://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div id=\"Settings\">\n      <p (click)=\"showSettings()\">Edit profile</p>\n  </div>\n\n\n  <div id=\"content\" *ngFor='let profile of ( results | async)'>\n\n    <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover == undefined\">\n      <span>Add cover photo</span>\n      <ion-input (change)=\"changeListener($event)\" placeholder=\"Upload Cover Image\" type=\"file\" accept=\"image/*\" id=\"uploadDesc\"></ion-input>\n    </div>\n\n    <div id=\"bannerPlaceholder\"*ngIf=\"profile.cover != undefined\"  [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.cover+ '.jpg)'}\">\n      <ion-input (change)=\"changeListener($event)\" placeholder=\"Upload Cover Image\" type=\"file\" accept=\"image/*\" id=\"uploadDesc\"></ion-input>\n    </div>\n\n    <div id=\"croppImageDiv\" *ngIf=\"myImage\">\n      <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myImage\" *ngIf=\"myImage\"></angular-cropper>\n\n      <p (click)=\"save()\">Save</p>\n\n\n      <img *ngIf=\"croppedImage\" [src]=\"croppedImage\" />\n    </div>\n\n      <div id='profileBlock'>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"> <div id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ></div> </div></div>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"> <div id='dp'></div> </div></div>\n          <p id='username'>{{ profile.username }} </p>\n          <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n          <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n      </div>\n        <p id='bio'>{{ profile.bio }}</p>\n\n      <div id='uploadedHeading'>Uploaded playlists</div>\n      <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n        <div id=\"playlist\" *ngIf=\"item.playlisted == true\"  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n\n          <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n            <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n          </div>\n        </div> \n      </div>\n  </div>\n\n  <!--<div *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ><div>Edit</div></div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'><div>Edit</div></div><br>\n    <span>Username: </span><br>\n    <input type=\"text\" id=\"user_name\" value=\"{{ profile.username }}\"></ion-input><br><br>\n    <span>First Name: </span><br>\n    <input type=\"text\" id=\"first_name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n    <span>Last Name: </span><br>\n    <input type=\"text\" id=\"last_name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n    <span>Bio: </span><br>\n    <input type=\"text\" id=\"bioInput\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n    <ion-button (click)=\"updateProfile()\">Save</ion-button>\n  </div>-->\n\n  <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br>\n    <ion-card-header>\n      <ion-card-title>{{ profile.username }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br><br>\n      <span>First Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n      <span>Last Name: </span><br>\n      <ion-input type=\"text\" id=\"last_name\" placeholder=\"Add last name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n      <ion-button (click)=\"updateProfile()\">Save</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n <div id=\"Profileoverlay\" (click)=\"closeProfile()\"></div>\n\n <div id=\"closeMenu\" (click)=\"closeMenu()\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_cropperjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");








const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_7__["Tab4Page"]
    }
];
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        exports: [
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_6__["AngularCropperjsComponent"],
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_7__["Tab4Page"], angular_cropperjs__WEBPACK_IMPORTED_MODULE_6__["AngularCropperjsComponent"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\n\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n\n#content {\n  text-align: -webkit-center;\n}\n\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  border-radius: 50%;\n  background-size: cover !important;\n  position: absolute;\n  z-index: 1;\n}\n\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\n\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n\ndiv#Settings {\n  position: absolute;\n  z-index: 99999;\n  right: 0px;\n  font-size: 13px;\n  margin-top: 95px;\n  margin-right: 10px;\n  color: gray;\n}\n\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 44px;\n}\n\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\n\n#Following {\n  height: 48px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\n\n#editProfile {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n  text-align: -webkit-center;\n  overflow: scroll;\n  display: none;\n  width: 300px;\n  height: 435px;\n  background: white;\n  border-radius: 7px;\n  margin-top: 17%;\n  text-align: left;\n}\n\n#editProfile #dp {\n  width: 100%;\n  height: 114px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 0 !important;\n}\n\n#editProfile #dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  padding-top: 29px;\n  border-radius: 0 !important;\n  padding-left: 15px;\n}\n\ndiv#Profileoverlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7607843137);\n  top: 0;\n  z-index: 9998;\n  text-align: -webkit-center;\n  display: none;\n}\n\ndiv#closeMenu {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  display: none;\n}\n\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 100px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\n\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n\ndiv#croppImageDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  z-index: 999999;\n  top: 0;\n}\n\ndiv#croppImageDiv p {\n  color: white;\n  margin-top: 40px;\n  width: 100%;\n  height: 40px;\n}\n\ndiv#dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 50%;\n  padding-top: 29px;\n}\n\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\n\ndiv#profile input {\n  height: 31px;\n  border-radius: 5px;\n  border: 1px solid #9e9e9e38;\n  padding-left: 5px;\n  font-size: 13px;\n  width: 180px;\n}\n\ndiv#profile span {\n  color: gray;\n  font-size: 12px;\n  float: left;\n  margin-left: 62px;\n}\n\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 13px;\n}\n\n#bioInput {\n  height: 57px;\n}\n\nion-input#uploadDesc {\n  margin-left: 100px;\n  margin-top: 32px;\n  opacity: 0;\n}\n\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 8px;\n  float: left;\n}\n\n@media only screen and (max-height: 100px) {\n  #bottomBar {\n    display: none;\n  }\n}\n\ndiv#logoutBtn {\n  border: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  top: 0;\n  float: right;\n  margin-right: 7px;\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n#fileUpload {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  opacity: 0;\n}\n\n#progressDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5098039216);\n  text-align: -webkit-center;\n  padding-top: 50%;\n  display: none;\n}\n\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\n\ndiv#playlists div#playlist {\n  width: 32%;\n  height: 115px;\n  float: left;\n  margin-left: 1px;\n  background-size: cover !important;\n}\n\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\n\nspan#metric {\n  margin-left: 5px;\n}\n\nion-icon#message {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBRFBFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBREZFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNLMUI7O0FERkE7RUFDRSwwQkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDS0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUZBQUE7RUFBQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNJRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FES0E7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRElFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDRko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNMSjs7QURPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDTE47O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7QUNWRjs7QURZRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNWSjs7QURlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7QUNaRjs7QURjRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURpQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNkRjs7QURpQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2RGOztBRGlCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2RGOztBRGlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDZEY7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZkY7O0FEbUJBO0VBQ0U7SUFDRSxhQUFBO0VDaEJGO0FBQ0Y7O0FEcUJBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbkJGOztBRHVCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDcEJGOztBRHVCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDcEJGOztBRHNCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNwQko7O0FEeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDdEJGOztBRHlCQTtFQUNFLGdCQUFBO0FDdEJGOztBRDBCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3ZCRiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjTG9hZGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgZGl2I2xvYWRlckhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnR7XG4gIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI2NpcmNsZXtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbiNvdXRlckNpcmNsZXtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I1NldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA5NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNDRweDtcblxuICAjRm9sbG93ZXJze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAjdXNlcm5hbWV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cblxuICB9XG5cbn1cblxuI0ZvbGxvd2luZ3tcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxufVxuXG5cbiNlZGl0UHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgI2Rwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTE0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuXG4gICAgZGl2e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAgICAgcGFkZGluZy10b3A6IDI5cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICB9XG5cbn1cblxuXG5kaXYjUHJvZmlsZW92ZXJsYXl7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc2MDc4NDMxMzcyNTQ5MDIpO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjY2xvc2VNZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjYmFubmVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDowO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7O1xuXG4gIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbn1cblxuZGl2I2Nyb3BwSW1hZ2VEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogMDtcblxuICBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDsgXG4gIH1cbn1cblxuZGl2I2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OmxlZnQ7XG4gIG1hcmdpbi1sZWZ0OjYycHg7XG59XG5cbnAjYmlvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNiaW9JbnB1dHtcbiAgaGVpZ2h0OjU3cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0MzEzNzI1NSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuI3Byb2ZpbGVOYW1le1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMTAwcHgpIHtcbiAgI2JvdHRvbUJhcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuXG4jZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3Byb2dyZXNzRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTA5ODAzOTIxNTY4NjI3NCk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAzMiU7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuXG5cbiNwbGF5bGlzdFByZXZpZXd7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuXG5pb24taWNvbiNtZXNzYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuIiwiZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5kaXYjbG9hZGVySG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuXG5kaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI2NpcmNsZSB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI291dGVyQ2lyY2xlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I1NldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA5NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDQ0cHg7XG59XG5kaXYjcHJvZmlsZUJsb2NrICNGb2xsb3dlcnMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI3VzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNGb2xsb3dpbmcge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI0ZvbGxvd2luZyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jZWRpdFByb2ZpbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2VkaXRQcm9maWxlICNkcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbiNlZGl0UHJvZmlsZSAjZHAgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNQcm9maWxlb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc2MDc4NDMxMzcpO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjY2xvc2VNZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjYmFubmVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmRpdiNjcm9wcEltYWdlRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDA7XG59XG5kaXYjY3JvcHBJbWFnZURpdiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5kaXYjZHAgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmctdG9wOiAyOXB4O1xufVxuXG5wI1Bvc3RzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNjJweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2Jpb0lucHV0IHtcbiAgaGVpZ2h0OiA1N3B4O1xufVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NCk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNwcm9maWxlTmFtZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMTAwcHgpIHtcbiAgI2JvdHRvbUJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuZGl2I2xvZ291dEJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbiNmaWxlVXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4jcHJvZ3Jlc3NEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MDk4MDM5MjE2KTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuZGl2I3BsYXlsaXN0cyBkaXYjcGxheWxpc3Qge1xuICB3aWR0aDogMzIlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4jcGxheWxpc3RQcmV2aWV3IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pb24taWNvbiNtZXNzYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_cropperjs__WEBPACK_IMPORTED_MODULE_9__);












let Tab4Page = class Tab4Page {
    constructor(tabs, loadingController, statusBar, actionSheetController, toastController, requests, storage, route) {
        this.tabs = tabs;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.requests = requests;
        this.storage = storage;
        this.route = route;
        this.croppedImage = null;
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.displayLoading = false;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        //cropper options
        this.cropperOptions = {
            dragMode: 'crop',
            aspectRatio: 3,
            autoCrop: true,
            movable: true,
            zoomable: false,
            scalable: false,
            autoCropArea: 1,
        };
    }
    ngOnInit() {
    }
    cropImage(image) {
        this.myImage = 'https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + image + '.png';
    }
    //crop options
    reset() {
        this.angularCropper.cropper.reset();
    }
    clear() {
        this.angularCropper.cropper.clear();
    }
    rotate() {
        this.angularCropper.cropper.rotate(90);
    }
    zoom(zoomIn) {
        let factor = zoomIn ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(factor);
    }
    scaleX() {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
    }
    scaleY() {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    }
    move(x, y) {
        this.angularCropper.cropper.move(x, y);
    }
    downloadImage(data, filename = 'untitled.jpeg') {
        var a = document.createElement('a');
        a.href = data;
        a.download = filename;
        console.log(filename);
        document.body.appendChild(a);
        a.click();
    }
    save() {
        let croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.croppedImage = croppedImgB64String;
        console.log(this.croppedImage);
        this.downloadImage(croppedImgB64String, 'my-canvas.jpeg');
        // this.storage.get("mail").then((user_email)=>{
        //   let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,croppedImgB64String);
        //   upload.subscribe(x => {
        //     this.cropImage(x);
        //      this.ionViewDidEnter();
        //      console.log(x)
        //      this.displayLoading = false;
        //   });
        // });
    }
    //
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "#fc8700";
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.changeIconColors();
        this.tabs.bottom = true;
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.results = this.requests.getProfile(profile_url, val);
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
                this.Playlists = this.requests.getProfilePlaylists(profile_url, val);
            }
        });
    }
    doRefresh(event) {
        console.log(event);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
            this.ionViewDidEnter();
        }, 2000);
    }
    Playlist(post_id) {
        this.presentActionSheet(post_id);
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    showSettings() {
        // $("#Settings").show();
        // $("#closeMenu").show();
        this.route.navigate(['/home/tabs/settings']);
    }
    closeMenu() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#closeMenu").hide();
    }
    editProfile() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show();
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show());
    }
    closeProfile() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").hide();
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
        this.displayLoading = true;
        if (this.file == undefined) {
            let message = "Please select file to upload";
            this.presentLoadingWithOptions(message);
            this.displayLoading = false;
        }
        else {
            this.storage.get("mail").then((user_email) => {
                let upload = this.requests.UploadCoverImage(this.profile_url, user_email, this.file);
                this.presentLoadingWithOptions("Loading, please wait...");
                upload.subscribe(x => {
                    this.cropImage(x);
                    this.route.navigate(['/home/tabs/tab4']);
                    console.log(x);
                    this.displayLoading = false;
                });
            });
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    updateProfile() {
        let user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        let first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        let last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        let bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        this.storage.get('mail').then((Email) => {
            let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio, this.file);
            update.subscribe(x => console.log(x));
            this.closeProfile();
            this.ionViewDidEnter();
        });
    }
    presentLoading(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Uploading ' + message + ', Please wait...',
                duration: 10000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    viewUserFeed(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
    //present share options
    presentActionSheet(post_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Post Actions',
                buttons: [
                    {
                        text: 'Delete',
                        icon: 'trash',
                        handler: () => {
                            console.log(post_id);
                            let profile_url = 'https://uploaded.herokuapp.com/users/users';
                            this.requests.deletePost(profile_url, post_id).subscribe();
                            this.ionViewDidEnter();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    //loading component
    presentLoadingWithOptions(Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 1000,
                message: Message,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_cropperjs__WEBPACK_IMPORTED_MODULE_9__["AngularCropperjsComponent"])
], Tab4Page.prototype, "angularCropper", void 0);
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map