/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/updateElevation */ "./src/modules/updateElevation.ts");
/* harmony import */ var _modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCurrentContainer */ "./src/modules/getCurrentContainer.ts");
/* harmony import */ var _modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/refreshUi */ "./src/modules/refreshUi.ts");



// store current container
let currentContainer = Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma);
/**
 * This is were the execution of the plugin starts
 */
// initialize the ui
Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, currentContainer);
// run code on commands from UI
figma.ui.onmessage = msg => {
    // create a new scale
    if (msg.type === 'createScale') {
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, null, null);
    }
    // update an exsisting scale
    if (msg.type === 'updateScale') {
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, currentContainer, msg);
    }
};
// update ui if selection changes
figma.on('selectionchange', () => {
    // get updated selection
    const updatedContainer = Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma);
    // if new selection !== old selection run bootUI again
    if (updatedContainer !== currentContainer) {
        currentContainer = updatedContainer;
        // refresh UI
        Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, currentContainer);
    }
});


/***/ }),

/***/ "./src/modules/containerStore.ts":
/*!***************************************!*\
  !*** ./src/modules/containerStore.ts ***!
  \***************************************/
/*! exports provided: storeKeys, setContainerData, getContainerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeys", function() { return storeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContainerData", function() { return setContainerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerData", function() { return getContainerData; });
const storeKeys = {
    ELEVATION_SETTNGS: 'elevationSettings'
};
const isValidContainer = (container) => {
    if (container !== undefined && container !== null) {
        return true;
    }
    return false;
};
const setContainerData = (container, key, data) => {
    if (isValidContainer(container)) {
        if (typeof data === 'object') {
            container.setPluginData(key, JSON.stringify(data));
        }
        if (typeof data === 'number' || typeof data === 'string') {
            container.setPluginData(key, data);
        }
    }
};
const getContainerData = (container, key) => {
    if (isValidContainer(container)) {
        try {
            const jsonString = JSON.parse(container.getPluginData(key));
            return jsonString;
        }
        catch (e) {
        }
        return container.getPluginData(key);
    }
    return null;
};


/***/ }),

/***/ "./src/modules/createContainer.ts":
/*!****************************************!*\
  !*** ./src/modules/createContainer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SETTINGS = {
    NAME: 'Elevation Scale',
    LAYOUT_MODE: 'VERTICAL',
    SPACING: 20,
    PADDING: 20
};
/* harmony default export */ __webpack_exports__["default"] = (() => {
    const container = figma.createFrame();
    container.name = SETTINGS.NAME;
    container.layoutMode = SETTINGS.LAYOUT_MODE;
    container.itemSpacing = SETTINGS.SPACING;
    container.paddingTop = SETTINGS.PADDING;
    container.paddingRight = SETTINGS.PADDING;
    container.paddingBottom = SETTINGS.PADDING;
    container.paddingLeft = SETTINGS.PADDING;
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = 'AUTO';
    // return container
    return container;
});


/***/ }),

/***/ "./src/modules/createElevationLayer.ts":
/*!*********************************************!*\
  !*** ./src/modules/createElevationLayer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseValue */ "./src/modules/parseValue.ts");
/* harmony import */ var _hexToRgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hexToRgba */ "./src/modules/hexToRgba.ts");


const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW'];
/* harmony default export */ __webpack_exports__["default"] = ((index, layer) => {
    return {
        // define elevation
        type: allowedEffectType.includes(layer.type) ? layer.type : 'DROP_SHADOW',
        color: Object(_hexToRgba__WEBPACK_IMPORTED_MODULE_1__["default"])(layer.color, Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.opacity, index)),
        offset: {
            x: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.x, index),
            y: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.y, index)
        },
        spread: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.spread, index),
        radius: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.radius, index),
        // defaults
        blendMode: 'NORMAL',
        visible: true
    };
});


/***/ }),

/***/ "./src/modules/createPreviewElement.ts":
/*!*********************************************!*\
  !*** ./src/modules/createPreviewElement.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SETTINGS = {
    WIDTH: 320,
    HEIGHT: 120,
    RADIUS: 5
};
/* harmony default export */ __webpack_exports__["default"] = ((index, name, elevation) => {
    // create element
    const element = figma.createRectangle();
    // set name
    element.name = `${name} ${index}`;
    // set size
    element.resizeWithoutConstraints(SETTINGS.WIDTH, SETTINGS.HEIGHT);
    // set radius
    element.cornerRadius = SETTINGS.RADIUS;
    // set fill to white
    element.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    // set elevation
    element.effects = elevation;
    // return
    return element;
});


/***/ }),

/***/ "./src/modules/createStyles.ts":
/*!*************************************!*\
  !*** ./src/modules/createStyles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((i, elevation, createStyles) => {
});


/***/ }),

/***/ "./src/modules/defaults.ts":
/*!*********************************!*\
  !*** ./src/modules/defaults.ts ***!
  \*********************************/
/*! exports provided: ELEVATION_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_DEFAULTS", function() { return ELEVATION_DEFAULTS; });
const ELEVATION_DEFAULTS = {
    count: 5,
    createStyles: false,
    elevationLayer: [{
            type: 'dropshadow',
            color: '000000',
            opacity: '10 + #',
            x: 0,
            y: '0.5 * #',
            spread: '2 * #',
            radius: '#'
        }]
};


/***/ }),

/***/ "./src/modules/getCurrentContainer.ts":
/*!********************************************!*\
  !*** ./src/modules/getCurrentContainer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");

/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // get current selection
    const currentSelection = figma.currentPage.selection[0];
    // return if frame
    if (currentSelection !== undefined && currentSelection.type === 'FRAME' && Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentSelection, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS)) {
        return currentSelection;
    }
    //
    return null;
});


/***/ }),

/***/ "./src/modules/hexToRgba.ts":
/*!**********************************!*\
  !*** ./src/modules/hexToRgba.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minMax */ "./src/modules/minMax.ts");

/* harmony default export */ __webpack_exports__["default"] = ((hex, opacity) => {
    // extract rgb from hex
    const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // return rgb
    return {
        r: parseInt(r, 16) / 255,
        g: parseInt(g, 16) / 255,
        b: parseInt(b, 16) / 255,
        a: Object(_minMax__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(opacity, 10) / 100, 0, 1)
    };
});


/***/ }),

/***/ "./src/modules/minMax.ts":
/*!*******************************!*\
  !*** ./src/modules/minMax.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((number, min, max) => {
    // return min if number smaller
    if (number < min) {
        return min;
    }
    // return max if number bigger
    if (number > max) {
        return max;
    }
    // return number if between
    return number;
});


/***/ }),

/***/ "./src/modules/parseValue.ts":
/*!***********************************!*\
  !*** ./src/modules/parseValue.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const placeholders = {
    INDEX: '#'
};
/* harmony default export */ __webpack_exports__["default"] = ((value, index) => {
    // replace placeholders in string
    if (typeof value === 'string') {
        value = value.replace(' ', '').replace(placeholders.INDEX, index);
    }
    // eval and parse int
    try {
        value = parseInt(eval(value), 10);
        if (!isNaN(value)) {
            return value;
        }
    }
    catch (e) {
        console.log(e);
    }
    return 0;
});


/***/ }),

/***/ "./src/modules/refreshUi.ts":
/*!**********************************!*\
  !*** ./src/modules/refreshUi.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");

const SETTINGS = {
    LAYER_SIZE: 40,
    BASE_SIZE: 450
};
/* harmony default export */ __webpack_exports__["default"] = ((figma, container) => {
    const UI_WIDTH = 300;
    let UI_HEIGHT = 500;
    // show the html ui
    figma.showUI(__html__, {
        width: UI_WIDTH,
        height: UI_HEIGHT
    });
    // if selected container
    if (container !== null) {
        const elevationProperties = Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS);
        UI_HEIGHT = SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * elevationProperties.elevationLayer.length;
        // update UI size
        figma.ui.resize(UI_WIDTH, UI_HEIGHT);
        // send data to UI
        figma.ui.postMessage(JSON.stringify({
            type: 'updateProperties',
            properties: elevationProperties
        }));
    }
    // if no container is selected
    else {
        figma.ui.postMessage(JSON.stringify({
            type: 'emptyState'
        }));
    }
});


/***/ }),

/***/ "./src/modules/updateElevation.ts":
/*!****************************************!*\
  !*** ./src/modules/updateElevation.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./src/modules/createStyles.ts");
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _createPreviewElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPreviewElement */ "./src/modules/createPreviewElement.ts");
/* harmony import */ var _createElevationLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElevationLayer */ "./src/modules/createElevationLayer.ts");
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createContainer */ "./src/modules/createContainer.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaults */ "./src/modules/defaults.ts");






const ELEVATION_LAYER_NAME = 'Elevation';
/* harmony default export */ __webpack_exports__["default"] = ((figma, container, data) => {
    const focusNodes = [];
    let newContainer = false;
    // add new node
    if (!container) {
        container = Object(_createContainer__WEBPACK_IMPORTED_MODULE_4__["default"])();
        figma.currentPage.appendChild(container);
        newContainer = true;
        data = _defaults__WEBPACK_IMPORTED_MODULE_5__["ELEVATION_DEFAULTS"];
    }
    // remove children nodes
    else {
        data.count = parseInt(data.count);
        container.children.forEach(child => child.remove());
    }
    for (let i = 0; i < data.count; i++) {
        // get elevation
        const elevation = [...data.elevationLayer].map(layer => {
            return Object(_createElevationLayer__WEBPACK_IMPORTED_MODULE_3__["default"])(i, layer);
        });
        // create elements
        const previewElements = Object(_createPreviewElement__WEBPACK_IMPORTED_MODULE_2__["default"])(i, ELEVATION_LAYER_NAME, elevation);
        // append to container
        container.appendChild(previewElements);
        focusNodes.push(previewElements);
        // create styles
        Object(_createStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(i, elevation, data.createStyles);
    }
    // zoom to container if new
    if (newContainer === true) {
        figma.viewport.scrollAndZoomIntoView(focusNodes);
    }
    // append & select
    figma.currentPage.selection = [container];
    // elevation settings
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, data);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lclN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGV2YXRpb25MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcmV2aWV3RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZXhUb1JnYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbWluTWF4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhcnNlVmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVmcmVzaFVpLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQTtBQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0Msd0VBQWdCLFlBQVkseURBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNxQjtBQUNMO0FBQ0E7QUFDVjtBQUNBO0FBQ2hEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnRUFBZTtBQUNuQztBQUNBO0FBQ0EsZUFBZSw0REFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLHFFQUFvQjtBQUN2QyxTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0MscUVBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0IsWUFBWSx5REFBUztBQUN6QyxDQUFDLEVBQUMiLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgdXBkYXRlRWxldmF0aW9uIGZyb20gJy4vbW9kdWxlcy91cGRhdGVFbGV2YXRpb24nO1xuaW1wb3J0IGdldEN1cnJlbnRDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2dldEN1cnJlbnRDb250YWluZXInO1xuaW1wb3J0IHJlZnJlc2hVSSBmcm9tICcuL21vZHVsZXMvcmVmcmVzaFVpJztcbi8vIHN0b3JlIGN1cnJlbnQgY29udGFpbmVyXG5sZXQgY3VycmVudENvbnRhaW5lciA9IGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpO1xuLyoqXG4gKiBUaGlzIGlzIHdlcmUgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgcGx1Z2luIHN0YXJ0c1xuICovXG4vLyBpbml0aWFsaXplIHRoZSB1aVxucmVmcmVzaFVJKGZpZ21hLCBjdXJyZW50Q29udGFpbmVyKTtcbi8vIHJ1biBjb2RlIG9uIGNvbW1hbmRzIGZyb20gVUlcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlU2NhbGUnKSB7XG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgbnVsbCwgbnVsbCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBhbiBleHNpc3Rpbmcgc2NhbGVcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGVTY2FsZScpIHtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uKGZpZ21hLCBjdXJyZW50Q29udGFpbmVyLCBtc2cpO1xuICAgIH1cbn07XG4vLyB1cGRhdGUgdWkgaWYgc2VsZWN0aW9uIGNoYW5nZXNcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gZ2V0IHVwZGF0ZWQgc2VsZWN0aW9uXG4gICAgY29uc3QgdXBkYXRlZENvbnRhaW5lciA9IGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpO1xuICAgIC8vIGlmIG5ldyBzZWxlY3Rpb24gIT09IG9sZCBzZWxlY3Rpb24gcnVuIGJvb3RVSSBhZ2FpblxuICAgIGlmICh1cGRhdGVkQ29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGN1cnJlbnRDb250YWluZXIgPSB1cGRhdGVkQ29udGFpbmVyO1xuICAgICAgICAvLyByZWZyZXNoIFVJXG4gICAgICAgIHJlZnJlc2hVSShmaWdtYSwgY3VycmVudENvbnRhaW5lcik7XG4gICAgfVxufSk7XG4iLCJleHBvcnQgY29uc3Qgc3RvcmVLZXlzID0ge1xuICAgIEVMRVZBVElPTl9TRVRUTkdTOiAnZWxldmF0aW9uU2V0dGluZ3MnXG59O1xuY29uc3QgaXNWYWxpZENvbnRhaW5lciA9IChjb250YWluZXIpID0+IHtcbiAgICBpZiAoY29udGFpbmVyICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IHNldENvbnRhaW5lckRhdGEgPSAoY29udGFpbmVyLCBrZXksIGRhdGEpID0+IHtcbiAgICBpZiAoaXNWYWxpZENvbnRhaW5lcihjb250YWluZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBnZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5KSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04ucGFyc2UoY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4ganNvblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0UGx1Z2luRGF0YShrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJjb25zdCBTRVRUSU5HUyA9IHtcbiAgICBOQU1FOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBMQVlPVVRfTU9ERTogJ1ZFUlRJQ0FMJyxcbiAgICBTUEFDSU5HOiAyMCxcbiAgICBQQURESU5HOiAyMFxufTtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGNvbnRhaW5lci5uYW1lID0gU0VUVElOR1MuTkFNRTtcbiAgICBjb250YWluZXIubGF5b3V0TW9kZSA9IFNFVFRJTkdTLkxBWU9VVF9NT0RFO1xuICAgIGNvbnRhaW5lci5pdGVtU3BhY2luZyA9IFNFVFRJTkdTLlNQQUNJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdUb3AgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nUmlnaHQgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nQm90dG9tID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ0xlZnQgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XG4gICAgY29udGFpbmVyLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcbiAgICAvLyByZXR1cm4gY29udGFpbmVyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgcGFyc2VWYWx1ZSBmcm9tICcuL3BhcnNlVmFsdWUnO1xuaW1wb3J0IGhleFRvUmdiYSBmcm9tICcuL2hleFRvUmdiYSc7XG5jb25zdCBhbGxvd2VkRWZmZWN0VHlwZSA9IFsnRFJPUF9TSEFET1cnLCAnSU5ORVJfU0hBRE9XJ107XG5leHBvcnQgZGVmYXVsdCAoaW5kZXgsIGxheWVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVmaW5lIGVsZXZhdGlvblxuICAgICAgICB0eXBlOiBhbGxvd2VkRWZmZWN0VHlwZS5pbmNsdWRlcyhsYXllci50eXBlKSA/IGxheWVyLnR5cGUgOiAnRFJPUF9TSEFET1cnLFxuICAgICAgICBjb2xvcjogaGV4VG9SZ2JhKGxheWVyLmNvbG9yLCBwYXJzZVZhbHVlKGxheWVyLm9wYWNpdHksIGluZGV4KSksXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgeDogcGFyc2VWYWx1ZShsYXllci54LCBpbmRleCksXG4gICAgICAgICAgICB5OiBwYXJzZVZhbHVlKGxheWVyLnksIGluZGV4KVxuICAgICAgICB9LFxuICAgICAgICBzcHJlYWQ6IHBhcnNlVmFsdWUobGF5ZXIuc3ByZWFkLCBpbmRleCksXG4gICAgICAgIHJhZGl1czogcGFyc2VWYWx1ZShsYXllci5yYWRpdXMsIGluZGV4KSxcbiAgICAgICAgLy8gZGVmYXVsdHNcbiAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH07XG59O1xuIiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgV0lEVEg6IDMyMCxcbiAgICBIRUlHSFQ6IDEyMCxcbiAgICBSQURJVVM6IDVcbn07XG5leHBvcnQgZGVmYXVsdCAoaW5kZXgsIG5hbWUsIGVsZXZhdGlvbikgPT4ge1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgY29uc3QgZWxlbWVudCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIC8vIHNldCBuYW1lXG4gICAgZWxlbWVudC5uYW1lID0gYCR7bmFtZX0gJHtpbmRleH1gO1xuICAgIC8vIHNldCBzaXplXG4gICAgZWxlbWVudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoU0VUVElOR1MuV0lEVEgsIFNFVFRJTkdTLkhFSUdIVCk7XG4gICAgLy8gc2V0IHJhZGl1c1xuICAgIGVsZW1lbnQuY29ybmVyUmFkaXVzID0gU0VUVElOR1MuUkFESVVTO1xuICAgIC8vIHNldCBmaWxsIHRvIHdoaXRlXG4gICAgZWxlbWVudC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAvLyBzZXQgZWxldmF0aW9uXG4gICAgZWxlbWVudC5lZmZlY3RzID0gZWxldmF0aW9uO1xuICAgIC8vIHJldHVyblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChpLCBlbGV2YXRpb24sIGNyZWF0ZVN0eWxlcykgPT4ge1xufTtcbiIsImV4cG9ydCBjb25zdCBFTEVWQVRJT05fREVGQVVMVFMgPSB7XG4gICAgY291bnQ6IDUsXG4gICAgY3JlYXRlU3R5bGVzOiBmYWxzZSxcbiAgICBlbGV2YXRpb25MYXllcjogW3tcbiAgICAgICAgICAgIHR5cGU6ICdkcm9wc2hhZG93JyxcbiAgICAgICAgICAgIGNvbG9yOiAnMDAwMDAwJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxMCArICMnLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6ICcwLjUgKiAjJyxcbiAgICAgICAgICAgIHNwcmVhZDogJzIgKiAjJyxcbiAgICAgICAgICAgIHJhZGl1czogJyMnXG4gICAgICAgIH1dXG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEpID0+IHtcbiAgICAvLyBnZXQgY3VycmVudCBzZWxlY3Rpb25cbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIC8vIHJldHVybiBpZiBmcmFtZVxuICAgIGlmIChjdXJyZW50U2VsZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnRlJBTUUnICYmIGdldENvbnRhaW5lckRhdGEoY3VycmVudFNlbGVjdGlvbiwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgbWluTWF4IGZyb20gJy4vbWluTWF4JztcbmV4cG9ydCBkZWZhdWx0IChoZXgsIG9wYWNpdHkpID0+IHtcbiAgICAvLyBleHRyYWN0IHJnYiBmcm9tIGhleFxuICAgIGNvbnN0IFssIHIsIGcsIGJdID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgLy8gcmV0dXJuIHJnYlxuICAgIHJldHVybiB7XG4gICAgICAgIHI6IHBhcnNlSW50KHIsIDE2KSAvIDI1NSxcbiAgICAgICAgZzogcGFyc2VJbnQoZywgMTYpIC8gMjU1LFxuICAgICAgICBiOiBwYXJzZUludChiLCAxNikgLyAyNTUsXG4gICAgICAgIGE6IG1pbk1heChwYXJzZUludChvcGFjaXR5LCAxMCkgLyAxMDAsIDAsIDEpXG4gICAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xuICAgIC8vIHJldHVybiBtaW4gaWYgbnVtYmVyIHNtYWxsZXJcbiAgICBpZiAobnVtYmVyIDwgbWluKSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIC8vIHJldHVybiBtYXggaWYgbnVtYmVyIGJpZ2dlclxuICAgIGlmIChudW1iZXIgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG51bWJlciBpZiBiZXR3ZWVuXG4gICAgcmV0dXJuIG51bWJlcjtcbn07XG4iLCJjb25zdCBwbGFjZWhvbGRlcnMgPSB7XG4gICAgSU5ERVg6ICcjJ1xufTtcbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJyAnLCAnJykucmVwbGFjZShwbGFjZWhvbGRlcnMuSU5ERVgsIGluZGV4KTtcbiAgICB9XG4gICAgLy8gZXZhbCBhbmQgcGFyc2UgaW50XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludChldmFsKHZhbHVlKSwgMTApO1xuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIExBWUVSX1NJWkU6IDQwLFxuICAgIEJBU0VfU0laRTogNDUwXG59O1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hLCBjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBVSV9XSURUSCA9IDMwMDtcbiAgICBsZXQgVUlfSEVJR0hUID0gNTAwO1xuICAgIC8vIHNob3cgdGhlIGh0bWwgdWlcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICAgICAgd2lkdGg6IFVJX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IFVJX0hFSUdIVFxuICAgIH0pO1xuICAgIC8vIGlmIHNlbGVjdGVkIGNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWxldmF0aW9uUHJvcGVydGllcyA9IGdldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MpO1xuICAgICAgICBVSV9IRUlHSFQgPSBTRVRUSU5HUy5CQVNFX1NJWkUgKyBTRVRUSU5HUy5MQVlFUl9TSVpFICogZWxldmF0aW9uUHJvcGVydGllcy5lbGV2YXRpb25MYXllci5sZW5ndGg7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSBzaXplXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShVSV9XSURUSCwgVUlfSEVJR0hUKTtcbiAgICAgICAgLy8gc2VuZCBkYXRhIHRvIFVJXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGVsZXZhdGlvblByb3BlcnRpZXNcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBpZiBubyBjb250YWluZXIgaXMgc2VsZWN0ZWRcbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ2VtcHR5U3RhdGUnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5pbXBvcnQgeyBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCBjcmVhdGVQcmV2aWV3RWxlbWVudCBmcm9tICcuL2NyZWF0ZVByZXZpZXdFbGVtZW50JztcbmltcG9ydCBjcmVhdGVFbGV2YXRpb25MYXllciBmcm9tICcuL2NyZWF0ZUVsZXZhdGlvbkxheWVyJztcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXInO1xuaW1wb3J0IHsgRUxFVkFUSU9OX0RFRkFVTFRTIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5jb25zdCBFTEVWQVRJT05fTEFZRVJfTkFNRSA9ICdFbGV2YXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hLCBjb250YWluZXIsIGRhdGEpID0+IHtcbiAgICBjb25zdCBmb2N1c05vZGVzID0gW107XG4gICAgbGV0IG5ld0NvbnRhaW5lciA9IGZhbHNlO1xuICAgIC8vIGFkZCBuZXcgbm9kZVxuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBuZXdDb250YWluZXIgPSB0cnVlO1xuICAgICAgICBkYXRhID0gRUxFVkFUSU9OX0RFRkFVTFRTO1xuICAgIH1cbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm9kZXNcbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5jb3VudCA9IHBhcnNlSW50KGRhdGEuY291bnQpO1xuICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jb3VudDsgaSsrKSB7XG4gICAgICAgIC8vIGdldCBlbGV2YXRpb25cbiAgICAgICAgY29uc3QgZWxldmF0aW9uID0gWy4uLmRhdGEuZWxldmF0aW9uTGF5ZXJdLm1hcChsYXllciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRWxldmF0aW9uTGF5ZXIoaSwgbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbGVtZW50cyA9IGNyZWF0ZVByZXZpZXdFbGVtZW50KGksIEVMRVZBVElPTl9MQVlFUl9OQU1FLCBlbGV2YXRpb24pO1xuICAgICAgICAvLyBhcHBlbmQgdG8gY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2aWV3RWxlbWVudHMpO1xuICAgICAgICBmb2N1c05vZGVzLnB1c2gocHJldmlld0VsZW1lbnRzKTtcbiAgICAgICAgLy8gY3JlYXRlIHN0eWxlc1xuICAgICAgICBjcmVhdGVTdHlsZXMoaSwgZWxldmF0aW9uLCBkYXRhLmNyZWF0ZVN0eWxlcyk7XG4gICAgfVxuICAgIC8vIHpvb20gdG8gY29udGFpbmVyIGlmIG5ld1xuICAgIGlmIChuZXdDb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZvY3VzTm9kZXMpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgJiBzZWxlY3RcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbY29udGFpbmVyXTtcbiAgICAvLyBlbGV2YXRpb24gc2V0dGluZ3NcbiAgICBzZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTLCBkYXRhKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9