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
        name: layer.name,
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SETTINGS = {
    WIDTH: 320,
    HEIGHT: 120,
    RADIUS: 5,
    NAME: 'Elevation'
};
/* harmony default export */ __webpack_exports__["default"] = ((index, elevationLayers) => {
    // remove name from layers
    const effects = elevationLayers.map(layer => {
        const { name } = layer, effects = __rest(layer
        // retuzrn effects only
        , ["name"]);
        // retuzrn effects only
        return effects;
    });
    // create element
    const element = figma.createRectangle();
    // set name
    element.name = `${SETTINGS.NAME} ${index}`;
    // set size
    element.resizeWithoutConstraints(SETTINGS.WIDTH, SETTINGS.HEIGHT);
    // set radius
    element.cornerRadius = SETTINGS.RADIUS;
    // set fill to white
    element.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    // set elevation
    element.effects = effects;
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
    name: 'Elevation',
    steps: 5,
    createStyles: false,
    elevationLayer: [{
            type: 'dropshadow',
            color: '000000',
            opacity: '10+#',
            x: 0,
            y: '0.5*#',
            spread: '2*#',
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
        value = parseFloat(eval(value));
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
    const UI_WIDTH = 360;
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
        data.steps = parseInt(data.steps);
        container.children.forEach(child => child.remove());
    }
    for (let i = 0; i < data.steps; i++) {
        // get elevation
        const elevation = [...data.elevationLayer].map(layer => {
            return Object(_createElevationLayer__WEBPACK_IMPORTED_MODULE_3__["default"])(i, layer);
        });
        // create elements
        const previewElements = Object(_createPreviewElement__WEBPACK_IMPORTED_MODULE_2__["default"])(i, elevation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lclN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGV2YXRpb25MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcmV2aWV3RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZXhUb1JnYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbWluTWF4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhcnNlVmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVmcmVzaFVpLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQUE7QUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDcUI7QUFDTDtBQUNBO0FBQ1Y7QUFDQTtBQUNqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFlO0FBQ25DO0FBQ0E7QUFDQSxlQUFlLDREQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxtQkFBbUIscUVBQW9CO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBLGdDQUFnQyxxRUFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pDLENBQUMsRUFBQyIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB1cGRhdGVFbGV2YXRpb24gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbic7XG5pbXBvcnQgZ2V0Q3VycmVudENvbnRhaW5lciBmcm9tICcuL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lcic7XG5pbXBvcnQgcmVmcmVzaFVJIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoVWknO1xuLy8gc3RvcmUgY3VycmVudCBjb250YWluZXJcbmxldCBjdXJyZW50Q29udGFpbmVyID0gZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSk7XG4vKipcbiAqIFRoaXMgaXMgd2VyZSB0aGUgZXhlY3V0aW9uIG9mIHRoZSBwbHVnaW4gc3RhcnRzXG4gKi9cbi8vIGluaXRpYWxpemUgdGhlIHVpXG5yZWZyZXNoVUkoZmlnbWEsIGN1cnJlbnRDb250YWluZXIpO1xuLy8gcnVuIGNvZGUgb24gY29tbWFuZHMgZnJvbSBVSVxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAvLyBjcmVhdGUgYSBuZXcgc2NhbGVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGVTY2FsZScpIHtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uKGZpZ21hLCBudWxsLCBudWxsKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGFuIGV4c2lzdGluZyBzY2FsZVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZVNjYWxlJykge1xuICAgICAgICB1cGRhdGVFbGV2YXRpb24oZmlnbWEsIGN1cnJlbnRDb250YWluZXIsIG1zZyk7XG4gICAgfVxufTtcbi8vIHVwZGF0ZSB1aSBpZiBzZWxlY3Rpb24gY2hhbmdlc1xuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICAvLyBnZXQgdXBkYXRlZCBzZWxlY3Rpb25cbiAgICBjb25zdCB1cGRhdGVkQ29udGFpbmVyID0gZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSk7XG4gICAgLy8gaWYgbmV3IHNlbGVjdGlvbiAhPT0gb2xkIHNlbGVjdGlvbiBydW4gYm9vdFVJIGFnYWluXG4gICAgaWYgKHVwZGF0ZWRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgICAgY3VycmVudENvbnRhaW5lciA9IHVwZGF0ZWRDb250YWluZXI7XG4gICAgICAgIC8vIHJlZnJlc2ggVUlcbiAgICAgICAgcmVmcmVzaFVJKGZpZ21hLCBjdXJyZW50Q29udGFpbmVyKTtcbiAgICB9XG59KTtcbiIsImV4cG9ydCBjb25zdCBzdG9yZUtleXMgPSB7XG4gICAgRUxFVkFUSU9OX1NFVFROR1M6ICdlbGV2YXRpb25TZXR0aW5ncydcbn07XG5jb25zdCBpc1ZhbGlkQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGlmIChjb250YWluZXIgIT09IHVuZGVmaW5lZCAmJiBjb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q29udGFpbmVyRGF0YSA9IChjb250YWluZXIsIGtleSwgZGF0YSkgPT4ge1xuICAgIGlmIChpc1ZhbGlkQ29udGFpbmVyKGNvbnRhaW5lcikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFBsdWdpbkRhdGEoa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKGtleSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbnRhaW5lckRhdGEgPSAoY29udGFpbmVyLCBrZXkpID0+IHtcbiAgICBpZiAoaXNWYWxpZENvbnRhaW5lcihjb250YWluZXIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5wYXJzZShjb250YWluZXIuZ2V0UGx1Z2luRGF0YShrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5nZXRQbHVnaW5EYXRhKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbiIsImNvbnN0IFNFVFRJTkdTID0ge1xuICAgIE5BTUU6ICdFbGV2YXRpb24gU2NhbGUnLFxuICAgIExBWU9VVF9NT0RFOiAnVkVSVElDQUwnLFxuICAgIFNQQUNJTkc6IDIwLFxuICAgIFBBRERJTkc6IDIwXG59O1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGFpbmVyLm5hbWUgPSBTRVRUSU5HUy5OQU1FO1xuICAgIGNvbnRhaW5lci5sYXlvdXRNb2RlID0gU0VUVElOR1MuTEFZT1VUX01PREU7XG4gICAgY29udGFpbmVyLml0ZW1TcGFjaW5nID0gU0VUVElOR1MuU1BBQ0lORztcbiAgICBjb250YWluZXIucGFkZGluZ1RvcCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdSaWdodCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdCb3R0b20gPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nTGVmdCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcbiAgICBjb250YWluZXIuY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIC8vIHJldHVybiBjb250YWluZXJcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbiIsImltcG9ydCBwYXJzZVZhbHVlIGZyb20gJy4vcGFyc2VWYWx1ZSc7XG5pbXBvcnQgaGV4VG9SZ2JhIGZyb20gJy4vaGV4VG9SZ2JhJztcbmNvbnN0IGFsbG93ZWRFZmZlY3RUeXBlID0gWydEUk9QX1NIQURPVycsICdJTk5FUl9TSEFET1cnXTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgbGF5ZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZpbmUgZWxldmF0aW9uXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIHR5cGU6IGFsbG93ZWRFZmZlY3RUeXBlLmluY2x1ZGVzKGxheWVyLnR5cGUpID8gbGF5ZXIudHlwZSA6ICdEUk9QX1NIQURPVycsXG4gICAgICAgIGNvbG9yOiBoZXhUb1JnYmEobGF5ZXIuY29sb3IsIHBhcnNlVmFsdWUobGF5ZXIub3BhY2l0eSwgaW5kZXgpKSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB4OiBwYXJzZVZhbHVlKGxheWVyLngsIGluZGV4KSxcbiAgICAgICAgICAgIHk6IHBhcnNlVmFsdWUobGF5ZXIueSwgaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwcmVhZDogcGFyc2VWYWx1ZShsYXllci5zcHJlYWQsIGluZGV4KSxcbiAgICAgICAgcmFkaXVzOiBwYXJzZVZhbHVlKGxheWVyLnJhZGl1cywgaW5kZXgpLFxuICAgICAgICAvLyBkZWZhdWx0c1xuICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfTtcbn07XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBXSURUSDogMzIwLFxuICAgIEhFSUdIVDogMTIwLFxuICAgIFJBRElVUzogNSxcbiAgICBOQU1FOiAnRWxldmF0aW9uJ1xufTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgZWxldmF0aW9uTGF5ZXJzKSA9PiB7XG4gICAgLy8gcmVtb3ZlIG5hbWUgZnJvbSBsYXllcnNcbiAgICBjb25zdCBlZmZlY3RzID0gZWxldmF0aW9uTGF5ZXJzLm1hcChsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbGF5ZXIsIGVmZmVjdHMgPSBfX3Jlc3QobGF5ZXJcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgLCBbXCJuYW1lXCJdKTtcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfSk7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICBjb25zdCBlbGVtZW50ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgLy8gc2V0IG5hbWVcbiAgICBlbGVtZW50Lm5hbWUgPSBgJHtTRVRUSU5HUy5OQU1FfSAke2luZGV4fWA7XG4gICAgLy8gc2V0IHNpemVcbiAgICBlbGVtZW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhTRVRUSU5HUy5XSURUSCwgU0VUVElOR1MuSEVJR0hUKTtcbiAgICAvLyBzZXQgcmFkaXVzXG4gICAgZWxlbWVudC5jb3JuZXJSYWRpdXMgPSBTRVRUSU5HUy5SQURJVVM7XG4gICAgLy8gc2V0IGZpbGwgdG8gd2hpdGVcbiAgICBlbGVtZW50LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgIC8vIHNldCBlbGV2YXRpb25cbiAgICBlbGVtZW50LmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIC8vIHJldHVyblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChpLCBlbGV2YXRpb24sIGNyZWF0ZVN0eWxlcykgPT4ge1xufTtcbiIsImV4cG9ydCBjb25zdCBFTEVWQVRJT05fREVGQVVMVFMgPSB7XG4gICAgbmFtZTogJ0VsZXZhdGlvbicsXG4gICAgc3RlcHM6IDUsXG4gICAgY3JlYXRlU3R5bGVzOiBmYWxzZSxcbiAgICBlbGV2YXRpb25MYXllcjogW3tcbiAgICAgICAgICAgIHR5cGU6ICdkcm9wc2hhZG93JyxcbiAgICAgICAgICAgIGNvbG9yOiAnMDAwMDAwJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxMCsjJyxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAnMC41KiMnLFxuICAgICAgICAgICAgc3ByZWFkOiAnMiojJyxcbiAgICAgICAgICAgIHJhZGl1czogJyMnXG4gICAgICAgIH1dXG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEpID0+IHtcbiAgICAvLyBnZXQgY3VycmVudCBzZWxlY3Rpb25cbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIC8vIHJldHVybiBpZiBmcmFtZVxuICAgIGlmIChjdXJyZW50U2VsZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnRlJBTUUnICYmIGdldENvbnRhaW5lckRhdGEoY3VycmVudFNlbGVjdGlvbiwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgbWluTWF4IGZyb20gJy4vbWluTWF4JztcbmV4cG9ydCBkZWZhdWx0IChoZXgsIG9wYWNpdHkpID0+IHtcbiAgICAvLyBleHRyYWN0IHJnYiBmcm9tIGhleFxuICAgIGNvbnN0IFssIHIsIGcsIGJdID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgLy8gcmV0dXJuIHJnYlxuICAgIHJldHVybiB7XG4gICAgICAgIHI6IHBhcnNlSW50KHIsIDE2KSAvIDI1NSxcbiAgICAgICAgZzogcGFyc2VJbnQoZywgMTYpIC8gMjU1LFxuICAgICAgICBiOiBwYXJzZUludChiLCAxNikgLyAyNTUsXG4gICAgICAgIGE6IG1pbk1heChwYXJzZUludChvcGFjaXR5LCAxMCkgLyAxMDAsIDAsIDEpXG4gICAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xuICAgIC8vIHJldHVybiBtaW4gaWYgbnVtYmVyIHNtYWxsZXJcbiAgICBpZiAobnVtYmVyIDwgbWluKSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIC8vIHJldHVybiBtYXggaWYgbnVtYmVyIGJpZ2dlclxuICAgIGlmIChudW1iZXIgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG51bWJlciBpZiBiZXR3ZWVuXG4gICAgcmV0dXJuIG51bWJlcjtcbn07XG4iLCJjb25zdCBwbGFjZWhvbGRlcnMgPSB7XG4gICAgSU5ERVg6ICcjJ1xufTtcbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJyAnLCAnJykucmVwbGFjZShwbGFjZWhvbGRlcnMuSU5ERVgsIGluZGV4KTtcbiAgICB9XG4gICAgLy8gZXZhbCBhbmQgcGFyc2UgaW50XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGV2YWwodmFsdWUpKTtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBMQVlFUl9TSVpFOiA0MCxcbiAgICBCQVNFX1NJWkU6IDQ1MFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgVUlfV0lEVEggPSAzNjA7XG4gICAgbGV0IFVJX0hFSUdIVCA9IDUwMDtcbiAgICAvLyBzaG93IHRoZSBodG1sIHVpXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiBVSV9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBVSV9IRUlHSFRcbiAgICB9KTtcbiAgICAvLyBpZiBzZWxlY3RlZCBjb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZXZhdGlvblByb3BlcnRpZXMgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAgICAgVUlfSEVJR0hUID0gU0VUVElOR1MuQkFTRV9TSVpFICsgU0VUVElOR1MuTEFZRVJfU0laRSAqIGVsZXZhdGlvblByb3BlcnRpZXMuZWxldmF0aW9uTGF5ZXIubGVuZ3RoO1xuICAgICAgICAvLyB1cGRhdGUgVUkgc2l6ZVxuICAgICAgICBmaWdtYS51aS5yZXNpemUoVUlfV0lEVEgsIFVJX0hFSUdIVCk7XG4gICAgICAgIC8vIHNlbmQgZGF0YSB0byBVSVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlUHJvcGVydGllcycsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBlbGV2YXRpb25Qcm9wZXJ0aWVzXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gaWYgbm8gY29udGFpbmVyIGlzIHNlbGVjdGVkXG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdlbXB0eVN0YXRlJ1xuICAgICAgICB9KSk7XG4gICAgfVxufTtcbiIsImltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuaW1wb3J0IHsgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgY3JlYXRlUHJldmlld0VsZW1lbnQgZnJvbSAnLi9jcmVhdGVQcmV2aWV3RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxldmF0aW9uTGF5ZXIgZnJvbSAnLi9jcmVhdGVFbGV2YXRpb25MYXllcic7XG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyJztcbmltcG9ydCB7IEVMRVZBVElPTl9ERUZBVUxUUyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hLCBjb250YWluZXIsIGRhdGEpID0+IHtcbiAgICBjb25zdCBmb2N1c05vZGVzID0gW107XG4gICAgbGV0IG5ld0NvbnRhaW5lciA9IGZhbHNlO1xuICAgIC8vIGFkZCBuZXcgbm9kZVxuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBuZXdDb250YWluZXIgPSB0cnVlO1xuICAgICAgICBkYXRhID0gRUxFVkFUSU9OX0RFRkFVTFRTO1xuICAgIH1cbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm9kZXNcbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5zdGVwcyA9IHBhcnNlSW50KGRhdGEuc3RlcHMpO1xuICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5zdGVwczsgaSsrKSB7XG4gICAgICAgIC8vIGdldCBlbGV2YXRpb25cbiAgICAgICAgY29uc3QgZWxldmF0aW9uID0gWy4uLmRhdGEuZWxldmF0aW9uTGF5ZXJdLm1hcChsYXllciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRWxldmF0aW9uTGF5ZXIoaSwgbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbGVtZW50cyA9IGNyZWF0ZVByZXZpZXdFbGVtZW50KGksIGVsZXZhdGlvbik7XG4gICAgICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIGZvY3VzTm9kZXMucHVzaChwcmV2aWV3RWxlbWVudHMpO1xuICAgICAgICAvLyBjcmVhdGUgc3R5bGVzXG4gICAgICAgIGNyZWF0ZVN0eWxlcyhpLCBlbGV2YXRpb24sIGRhdGEuY3JlYXRlU3R5bGVzKTtcbiAgICB9XG4gICAgLy8gem9vbSB0byBjb250YWluZXIgaWYgbmV3XG4gICAgaWYgKG5ld0NvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZm9jdXNOb2Rlcyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCAmIHNlbGVjdFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtjb250YWluZXJdO1xuICAgIC8vIGVsZXZhdGlvbiBzZXR0aW5nc1xuICAgIHNldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MsIGRhdGEpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=