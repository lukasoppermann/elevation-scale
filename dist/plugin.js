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

const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW'];
/* harmony default export */ __webpack_exports__["default"] = ((index, layer) => {
    return {
        // define elevation
        type: allowedEffectType.includes(layer.type) ? layer.type : 'DROP_SHADOW',
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.opacity, index) / 100 // in percent
        },
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
        value = value.replace(placeholders.INDEX, index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lclN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGV2YXRpb25MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcmV2aWV3RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXJzZVZhbHVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3JlZnJlc2hVaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91cGRhdGVFbGV2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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cUI7QUFDTDtBQUNBO0FBQ1Y7QUFDQTtBQUNoRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQWU7QUFDbkM7QUFDQTtBQUNBLGVBQWUsNERBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBLG1CQUFtQixxRUFBb0I7QUFDdkMsU0FBUztBQUNUO0FBQ0EsZ0NBQWdDLHFFQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWdCLFlBQVkseURBQVM7QUFDekMsQ0FBQyxFQUFDIiwiZmlsZSI6InBsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHVwZGF0ZUVsZXZhdGlvbiBmcm9tICcuL21vZHVsZXMvdXBkYXRlRWxldmF0aW9uJztcbmltcG9ydCBnZXRDdXJyZW50Q29udGFpbmVyIGZyb20gJy4vbW9kdWxlcy9nZXRDdXJyZW50Q29udGFpbmVyJztcbmltcG9ydCByZWZyZXNoVUkgZnJvbSAnLi9tb2R1bGVzL3JlZnJlc2hVaSc7XG4vLyBzdG9yZSBjdXJyZW50IGNvbnRhaW5lclxubGV0IGN1cnJlbnRDb250YWluZXIgPSBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKTtcbi8qKlxuICogVGhpcyBpcyB3ZXJlIHRoZSBleGVjdXRpb24gb2YgdGhlIHBsdWdpbiBzdGFydHNcbiAqL1xuLy8gaW5pdGlhbGl6ZSB0aGUgdWlcbnJlZnJlc2hVSShmaWdtYSwgY3VycmVudENvbnRhaW5lcik7XG4vLyBydW4gY29kZSBvbiBjb21tYW5kcyBmcm9tIFVJXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBzY2FsZVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZVNjYWxlJykge1xuICAgICAgICB1cGRhdGVFbGV2YXRpb24oZmlnbWEsIG51bGwsIG51bGwpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgYW4gZXhzaXN0aW5nIHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2NhbGUnKSB7XG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgY3VycmVudENvbnRhaW5lciwgbXNnKTtcbiAgICB9XG59O1xuLy8gdXBkYXRlIHVpIGlmIHNlbGVjdGlvbiBjaGFuZ2VzXG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIC8vIGdldCB1cGRhdGVkIHNlbGVjdGlvblxuICAgIGNvbnN0IHVwZGF0ZWRDb250YWluZXIgPSBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKTtcbiAgICAvLyBpZiBuZXcgc2VsZWN0aW9uICE9PSBvbGQgc2VsZWN0aW9uIHJ1biBib290VUkgYWdhaW5cbiAgICBpZiAodXBkYXRlZENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgICBjdXJyZW50Q29udGFpbmVyID0gdXBkYXRlZENvbnRhaW5lcjtcbiAgICAgICAgLy8gcmVmcmVzaCBVSVxuICAgICAgICByZWZyZXNoVUkoZmlnbWEsIGN1cnJlbnRDb250YWluZXIpO1xuICAgIH1cbn0pO1xuIiwiZXhwb3J0IGNvbnN0IHN0b3JlS2V5cyA9IHtcbiAgICBFTEVWQVRJT05fU0VUVE5HUzogJ2VsZXZhdGlvblNldHRpbmdzJ1xufTtcbmNvbnN0IGlzVmFsaWRDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5LCBkYXRhKSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFBsdWdpbkRhdGEoa2V5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0Q29udGFpbmVyRGF0YSA9IChjb250YWluZXIsIGtleSkgPT4ge1xuICAgIGlmIChpc1ZhbGlkQ29udGFpbmVyKGNvbnRhaW5lcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnBhcnNlKGNvbnRhaW5lci5nZXRQbHVnaW5EYXRhKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgTkFNRTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgTEFZT1VUX01PREU6ICdWRVJUSUNBTCcsXG4gICAgU1BBQ0lORzogMjAsXG4gICAgUEFERElORzogMjBcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBjb250YWluZXIubmFtZSA9IFNFVFRJTkdTLk5BTUU7XG4gICAgY29udGFpbmVyLmxheW91dE1vZGUgPSBTRVRUSU5HUy5MQVlPVVRfTU9ERTtcbiAgICBjb250YWluZXIuaXRlbVNwYWNpbmcgPSBTRVRUSU5HUy5TUEFDSU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nVG9wID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ1JpZ2h0ID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ0JvdHRvbSA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdMZWZ0ID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIGNvbnRhaW5lci5jb3VudGVyQXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XG4gICAgLy8gcmV0dXJuIGNvbnRhaW5lclxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHBhcnNlVmFsdWUgZnJvbSAnLi9wYXJzZVZhbHVlJztcbmNvbnN0IGFsbG93ZWRFZmZlY3RUeXBlID0gWydEUk9QX1NIQURPVycsICdJTk5FUl9TSEFET1cnXTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgbGF5ZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZpbmUgZWxldmF0aW9uXG4gICAgICAgIHR5cGU6IGFsbG93ZWRFZmZlY3RUeXBlLmluY2x1ZGVzKGxheWVyLnR5cGUpID8gbGF5ZXIudHlwZSA6ICdEUk9QX1NIQURPVycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgZzogMCxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBhOiBwYXJzZVZhbHVlKGxheWVyLm9wYWNpdHksIGluZGV4KSAvIDEwMCAvLyBpbiBwZXJjZW50XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgeDogcGFyc2VWYWx1ZShsYXllci54LCBpbmRleCksXG4gICAgICAgICAgICB5OiBwYXJzZVZhbHVlKGxheWVyLnksIGluZGV4KVxuICAgICAgICB9LFxuICAgICAgICBzcHJlYWQ6IHBhcnNlVmFsdWUobGF5ZXIuc3ByZWFkLCBpbmRleCksXG4gICAgICAgIHJhZGl1czogcGFyc2VWYWx1ZShsYXllci5yYWRpdXMsIGluZGV4KSxcbiAgICAgICAgLy8gZGVmYXVsdHNcbiAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH07XG59O1xuIiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgV0lEVEg6IDMyMCxcbiAgICBIRUlHSFQ6IDEyMCxcbiAgICBSQURJVVM6IDVcbn07XG5leHBvcnQgZGVmYXVsdCAoaW5kZXgsIG5hbWUsIGVsZXZhdGlvbikgPT4ge1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgY29uc3QgZWxlbWVudCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIC8vIHNldCBuYW1lXG4gICAgZWxlbWVudC5uYW1lID0gYCR7bmFtZX0gJHtpbmRleH1gO1xuICAgIC8vIHNldCBzaXplXG4gICAgZWxlbWVudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoU0VUVElOR1MuV0lEVEgsIFNFVFRJTkdTLkhFSUdIVCk7XG4gICAgLy8gc2V0IHJhZGl1c1xuICAgIGVsZW1lbnQuY29ybmVyUmFkaXVzID0gU0VUVElOR1MuUkFESVVTO1xuICAgIC8vIHNldCBmaWxsIHRvIHdoaXRlXG4gICAgZWxlbWVudC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAvLyBzZXQgZWxldmF0aW9uXG4gICAgZWxlbWVudC5lZmZlY3RzID0gZWxldmF0aW9uO1xuICAgIC8vIHJldHVyblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChpLCBlbGV2YXRpb24sIGNyZWF0ZVN0eWxlcykgPT4ge1xufTtcbiIsImV4cG9ydCBjb25zdCBFTEVWQVRJT05fREVGQVVMVFMgPSB7XG4gICAgY291bnQ6IDUsXG4gICAgY3JlYXRlU3R5bGVzOiBmYWxzZSxcbiAgICBlbGV2YXRpb25MYXllcjogW3tcbiAgICAgICAgICAgIHR5cGU6ICdkcm9wc2hhZG93JyxcbiAgICAgICAgICAgIGNvbG9yOiAnMDAwMDAwJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxMCArICMnLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6ICcwLjUgKiAjJyxcbiAgICAgICAgICAgIHNwcmVhZDogJzIgKiAjJyxcbiAgICAgICAgICAgIHJhZGl1czogJyMnXG4gICAgICAgIH1dXG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEpID0+IHtcbiAgICAvLyBnZXQgY3VycmVudCBzZWxlY3Rpb25cbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIC8vIHJldHVybiBpZiBmcmFtZVxuICAgIGlmIChjdXJyZW50U2VsZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnRlJBTUUnICYmIGdldENvbnRhaW5lckRhdGEoY3VycmVudFNlbGVjdGlvbiwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJjb25zdCBwbGFjZWhvbGRlcnMgPSB7XG4gICAgSU5ERVg6ICcjJ1xufTtcbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocGxhY2Vob2xkZXJzLklOREVYLCBpbmRleCk7XG4gICAgfVxuICAgIC8vIGV2YWwgYW5kIHBhcnNlIGludFxuICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQoZXZhbCh2YWx1ZSksIDEwKTtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBMQVlFUl9TSVpFOiA0MCxcbiAgICBCQVNFX1NJWkU6IDQ1MFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgVUlfV0lEVEggPSAzMDA7XG4gICAgbGV0IFVJX0hFSUdIVCA9IDUwMDtcbiAgICAvLyBzaG93IHRoZSBodG1sIHVpXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiBVSV9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBVSV9IRUlHSFRcbiAgICB9KTtcbiAgICAvLyBpZiBzZWxlY3RlZCBjb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZXZhdGlvblByb3BlcnRpZXMgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAgICAgVUlfSEVJR0hUID0gU0VUVElOR1MuQkFTRV9TSVpFICsgU0VUVElOR1MuTEFZRVJfU0laRSAqIGVsZXZhdGlvblByb3BlcnRpZXMuZWxldmF0aW9uTGF5ZXIubGVuZ3RoO1xuICAgICAgICAvLyB1cGRhdGUgVUkgc2l6ZVxuICAgICAgICBmaWdtYS51aS5yZXNpemUoVUlfV0lEVEgsIFVJX0hFSUdIVCk7XG4gICAgICAgIC8vIHNlbmQgZGF0YSB0byBVSVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlUHJvcGVydGllcycsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBlbGV2YXRpb25Qcm9wZXJ0aWVzXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gaWYgbm8gY29udGFpbmVyIGlzIHNlbGVjdGVkXG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdlbXB0eVN0YXRlJ1xuICAgICAgICB9KSk7XG4gICAgfVxufTtcbiIsImltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuaW1wb3J0IHsgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgY3JlYXRlUHJldmlld0VsZW1lbnQgZnJvbSAnLi9jcmVhdGVQcmV2aWV3RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxldmF0aW9uTGF5ZXIgZnJvbSAnLi9jcmVhdGVFbGV2YXRpb25MYXllcic7XG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyJztcbmltcG9ydCB7IEVMRVZBVElPTl9ERUZBVUxUUyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuY29uc3QgRUxFVkFUSU9OX0xBWUVSX05BTUUgPSAnRWxldmF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgZm9jdXNOb2RlcyA9IFtdO1xuICAgIGxldCBuZXdDb250YWluZXIgPSBmYWxzZTtcbiAgICAvLyBhZGQgbmV3IG5vZGVcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgbmV3Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgZGF0YSA9IEVMRVZBVElPTl9ERUZBVUxUUztcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGNoaWxkcmVuIG5vZGVzXG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGEuY291bnQgPSBwYXJzZUludChkYXRhLmNvdW50KTtcbiAgICAgICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY291bnQ7IGkrKykge1xuICAgICAgICAvLyBnZXQgZWxldmF0aW9uXG4gICAgICAgIGNvbnN0IGVsZXZhdGlvbiA9IFsuLi5kYXRhLmVsZXZhdGlvbkxheWVyXS5tYXAobGF5ZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZXZhdGlvbkxheWVyKGksIGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBwcmV2aWV3RWxlbWVudHMgPSBjcmVhdGVQcmV2aWV3RWxlbWVudChpLCBFTEVWQVRJT05fTEFZRVJfTkFNRSwgZWxldmF0aW9uKTtcbiAgICAgICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJldmlld0VsZW1lbnRzKTtcbiAgICAgICAgZm9jdXNOb2Rlcy5wdXNoKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIC8vIGNyZWF0ZSBzdHlsZXNcbiAgICAgICAgY3JlYXRlU3R5bGVzKGksIGVsZXZhdGlvbiwgZGF0YS5jcmVhdGVTdHlsZXMpO1xuICAgIH1cbiAgICAvLyB6b29tIHRvIGNvbnRhaW5lciBpZiBuZXdcbiAgICBpZiAobmV3Q29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmb2N1c05vZGVzKTtcbiAgICB9XG4gICAgLy8gYXBwZW5kICYgc2VsZWN0XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2NvbnRhaW5lcl07XG4gICAgLy8gZWxldmF0aW9uIHNldHRpbmdzXG4gICAgc2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgZGF0YSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==