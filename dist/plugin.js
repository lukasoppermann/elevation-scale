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
/* harmony default export */ __webpack_exports__["default"] = ((i, elevation, styleName = 'Elevation') => {
    const style = figma.createEffectStyle();
    style.name = `${styleName}/${i}`;
    const effects = elevation.map(layer => {
        const { name } = layer, effects = __rest(layer
        // retuzrn effects only
        , ["name"]);
        // retuzrn effects only
        return effects;
    });
    style.effects = effects;
    return style;
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
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minMax */ "./src/modules/minMax.ts");


const SETTINGS = {
    LAYER_SIZE: 40,
    BASE_SIZE: 562,
    UI_WIDTH: 360,
    EMPTY_STATE_WIDTH: 360,
    EMPTY_STATE_HEIGHT: 160
};
/* harmony default export */ __webpack_exports__["default"] = ((figma, container) => {
    // show the html ui
    figma.showUI(__html__, {
        width: SETTINGS.EMPTY_STATE_WIDTH,
        height: SETTINGS.EMPTY_STATE_HEIGHT
    });
    // if selected container
    if (container !== null) {
        const elevationProperties = Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS);
        const UI_HEIGHT = Object(_minMax__WEBPACK_IMPORTED_MODULE_1__["default"])(SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * (elevationProperties.elevationLayer.length + 2), 300, figma.viewport.bounds.height - 80);
        // update UI size
        figma.ui.resize(SETTINGS.UI_WIDTH, UI_HEIGHT);
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
        if (data.createStyles === true) {
            data.styles = Object(_createStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(i, elevation); // data.styleName
            console.log(data.styles);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lclN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGV2YXRpb25MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcmV2aWV3RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZXhUb1JnYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbWluTWF4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhcnNlVmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVmcmVzaFVpLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Q0EsMEJBQTBCLDZEQUFZLGVBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pDLENBQUMsRUFBQyIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB1cGRhdGVFbGV2YXRpb24gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbic7XG5pbXBvcnQgZ2V0Q3VycmVudENvbnRhaW5lciBmcm9tICcuL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lcic7XG5pbXBvcnQgcmVmcmVzaFVJIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoVWknO1xuLy8gc3RvcmUgY3VycmVudCBjb250YWluZXJcbmxldCBjdXJyZW50Q29udGFpbmVyID0gZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSk7XG4vKipcbiAqIFRoaXMgaXMgd2VyZSB0aGUgZXhlY3V0aW9uIG9mIHRoZSBwbHVnaW4gc3RhcnRzXG4gKi9cbnJlZnJlc2hVSShmaWdtYSwgY3VycmVudENvbnRhaW5lcik7XG4vLyBydW4gY29kZSBvbiBjb21tYW5kcyBmcm9tIFVJXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBzY2FsZVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZVNjYWxlJykge1xuICAgICAgICB1cGRhdGVFbGV2YXRpb24oZmlnbWEsIG51bGwsIG51bGwpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgYW4gZXhzaXN0aW5nIHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2NhbGUnKSB7XG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgY3VycmVudENvbnRhaW5lciwgbXNnKTtcbiAgICB9XG59O1xuLy8gdXBkYXRlIHVpIGlmIHNlbGVjdGlvbiBjaGFuZ2VzXG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIC8vIGdldCB1cGRhdGVkIHNlbGVjdGlvblxuICAgIGNvbnN0IHVwZGF0ZWRDb250YWluZXIgPSBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKTtcbiAgICAvLyBpZiBuZXcgc2VsZWN0aW9uICE9PSBvbGQgc2VsZWN0aW9uIHJ1biBib290VUkgYWdhaW5cbiAgICBpZiAodXBkYXRlZENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgICBjdXJyZW50Q29udGFpbmVyID0gdXBkYXRlZENvbnRhaW5lcjtcbiAgICAgICAgLy8gcmVmcmVzaCBVSVxuICAgICAgICByZWZyZXNoVUkoZmlnbWEsIGN1cnJlbnRDb250YWluZXIpO1xuICAgIH1cbn0pO1xuIiwiZXhwb3J0IGNvbnN0IHN0b3JlS2V5cyA9IHtcbiAgICBFTEVWQVRJT05fU0VUVE5HUzogJ2VsZXZhdGlvblNldHRpbmdzJ1xufTtcbmNvbnN0IGlzVmFsaWRDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5LCBkYXRhKSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFBsdWdpbkRhdGEoa2V5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0Q29udGFpbmVyRGF0YSA9IChjb250YWluZXIsIGtleSkgPT4ge1xuICAgIGlmIChpc1ZhbGlkQ29udGFpbmVyKGNvbnRhaW5lcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnBhcnNlKGNvbnRhaW5lci5nZXRQbHVnaW5EYXRhKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgTkFNRTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgTEFZT1VUX01PREU6ICdWRVJUSUNBTCcsXG4gICAgU1BBQ0lORzogMjAsXG4gICAgUEFERElORzogMjBcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBjb250YWluZXIubmFtZSA9IFNFVFRJTkdTLk5BTUU7XG4gICAgY29udGFpbmVyLmxheW91dE1vZGUgPSBTRVRUSU5HUy5MQVlPVVRfTU9ERTtcbiAgICBjb250YWluZXIuaXRlbVNwYWNpbmcgPSBTRVRUSU5HUy5TUEFDSU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nVG9wID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ1JpZ2h0ID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ0JvdHRvbSA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdMZWZ0ID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIGNvbnRhaW5lci5jb3VudGVyQXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XG4gICAgLy8gcmV0dXJuIGNvbnRhaW5lclxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHBhcnNlVmFsdWUgZnJvbSAnLi9wYXJzZVZhbHVlJztcbmltcG9ydCBoZXhUb1JnYmEgZnJvbSAnLi9oZXhUb1JnYmEnO1xuY29uc3QgYWxsb3dlZEVmZmVjdFR5cGUgPSBbJ0RST1BfU0hBRE9XJywgJ0lOTkVSX1NIQURPVyddO1xuZXhwb3J0IGRlZmF1bHQgKGluZGV4LCBsYXllcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmluZSBlbGV2YXRpb25cbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdHlwZTogYWxsb3dlZEVmZmVjdFR5cGUuaW5jbHVkZXMobGF5ZXIudHlwZSkgPyBsYXllci50eXBlIDogJ0RST1BfU0hBRE9XJyxcbiAgICAgICAgY29sb3I6IGhleFRvUmdiYShsYXllci5jb2xvciwgcGFyc2VWYWx1ZShsYXllci5vcGFjaXR5LCBpbmRleCkpLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IHBhcnNlVmFsdWUobGF5ZXIueCwgaW5kZXgpLFxuICAgICAgICAgICAgeTogcGFyc2VWYWx1ZShsYXllci55LCBpbmRleClcbiAgICAgICAgfSxcbiAgICAgICAgc3ByZWFkOiBwYXJzZVZhbHVlKGxheWVyLnNwcmVhZCwgaW5kZXgpLFxuICAgICAgICByYWRpdXM6IHBhcnNlVmFsdWUobGF5ZXIucmFkaXVzLCBpbmRleCksXG4gICAgICAgIC8vIGRlZmF1bHRzXG4gICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICB9O1xufTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIFdJRFRIOiAzMjAsXG4gICAgSEVJR0hUOiAxMjAsXG4gICAgUkFESVVTOiA1LFxuICAgIE5BTUU6ICdFbGV2YXRpb24nXG59O1xuZXhwb3J0IGRlZmF1bHQgKGluZGV4LCBlbGV2YXRpb25MYXllcnMpID0+IHtcbiAgICAvLyByZW1vdmUgbmFtZSBmcm9tIGxheWVyc1xuICAgIGNvbnN0IGVmZmVjdHMgPSBlbGV2YXRpb25MYXllcnMubWFwKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBsYXllciwgZWZmZWN0cyA9IF9fcmVzdChsYXllclxuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICAsIFtcIm5hbWVcIl0pO1xuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICByZXR1cm4gZWZmZWN0cztcbiAgICB9KTtcbiAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgIGNvbnN0IGVsZW1lbnQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAvLyBzZXQgbmFtZVxuICAgIGVsZW1lbnQubmFtZSA9IGAke1NFVFRJTkdTLk5BTUV9ICR7aW5kZXh9YDtcbiAgICAvLyBzZXQgc2l6ZVxuICAgIGVsZW1lbnQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKFNFVFRJTkdTLldJRFRILCBTRVRUSU5HUy5IRUlHSFQpO1xuICAgIC8vIHNldCByYWRpdXNcbiAgICBlbGVtZW50LmNvcm5lclJhZGl1cyA9IFNFVFRJTkdTLlJBRElVUztcbiAgICAvLyBzZXQgZmlsbCB0byB3aGl0ZVxuICAgIGVsZW1lbnQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgLy8gc2V0IGVsZXZhdGlvblxuICAgIGVsZW1lbnQuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgLy8gcmV0dXJuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgKGksIGVsZXZhdGlvbiwgc3R5bGVOYW1lID0gJ0VsZXZhdGlvbicpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IGZpZ21hLmNyZWF0ZUVmZmVjdFN0eWxlKCk7XG4gICAgc3R5bGUubmFtZSA9IGAke3N0eWxlTmFtZX0vJHtpfWA7XG4gICAgY29uc3QgZWZmZWN0cyA9IGVsZXZhdGlvbi5tYXAobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGxheWVyLCBlZmZlY3RzID0gX19yZXN0KGxheWVyXG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgICwgW1wibmFtZVwiXSk7XG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgIHJldHVybiBlZmZlY3RzO1xuICAgIH0pO1xuICAgIHN0eWxlLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIHJldHVybiBzdHlsZTtcbn07XG4iLCJleHBvcnQgY29uc3QgRUxFVkFUSU9OX0RFRkFVTFRTID0ge1xuICAgIG5hbWU6ICdFbGV2YXRpb24nLFxuICAgIHN0ZXBzOiA1LFxuICAgIGNyZWF0ZVN0eWxlczogZmFsc2UsXG4gICAgZWxldmF0aW9uTGF5ZXI6IFt7XG4gICAgICAgICAgICB0eXBlOiAnZHJvcHNoYWRvdycsXG4gICAgICAgICAgICBjb2xvcjogJzAwMDAwMCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAnMTArIycsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogJzAuNSojJyxcbiAgICAgICAgICAgIHNwcmVhZDogJzIqIycsXG4gICAgICAgICAgICByYWRpdXM6ICcjJ1xuICAgICAgICB9XVxufTtcbiIsImltcG9ydCB7IGdldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hKSA9PiB7XG4gICAgLy8gZ2V0IGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAvLyByZXR1cm4gaWYgZnJhbWVcbiAgICBpZiAoY3VycmVudFNlbGVjdGlvbiAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRTZWxlY3Rpb24udHlwZSA9PT0gJ0ZSQU1FJyAmJiBnZXRDb250YWluZXJEYXRhKGN1cnJlbnRTZWxlY3Rpb24sIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUykpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgfVxuICAgIC8vXG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IG1pbk1heCBmcm9tICcuL21pbk1heCc7XG5leHBvcnQgZGVmYXVsdCAoaGV4LCBvcGFjaXR5KSA9PiB7XG4gICAgLy8gZXh0cmFjdCByZ2IgZnJvbSBoZXhcbiAgICBjb25zdCBbLCByLCBnLCBiXSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIC8vIHJldHVybiByZ2JcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBwYXJzZUludChyLCAxNikgLyAyNTUsXG4gICAgICAgIGc6IHBhcnNlSW50KGcsIDE2KSAvIDI1NSxcbiAgICAgICAgYjogcGFyc2VJbnQoYiwgMTYpIC8gMjU1LFxuICAgICAgICBhOiBtaW5NYXgocGFyc2VJbnQob3BhY2l0eSwgMTApIC8gMTAwLCAwLCAxKVxuICAgIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKG51bWJlciwgbWluLCBtYXgpID0+IHtcbiAgICAvLyByZXR1cm4gbWluIGlmIG51bWJlciBzbWFsbGVyXG4gICAgaWYgKG51bWJlciA8IG1pbikge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICAvLyByZXR1cm4gbWF4IGlmIG51bWJlciBiaWdnZXJcbiAgICBpZiAobnVtYmVyID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIC8vIHJldHVybiBudW1iZXIgaWYgYmV0d2VlblxuICAgIHJldHVybiBudW1iZXI7XG59O1xuIiwiY29uc3QgcGxhY2Vob2xkZXJzID0ge1xuICAgIElOREVYOiAnIydcbn07XG5leHBvcnQgZGVmYXVsdCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgLy8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgaW4gc3RyaW5nXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcgJywgJycpLnJlcGxhY2UocGxhY2Vob2xkZXJzLklOREVYLCBpbmRleCk7XG4gICAgfVxuICAgIC8vIGV2YWwgYW5kIHBhcnNlIGludFxuICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChldmFsKHZhbHVlKSk7XG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbiIsImltcG9ydCB7IGdldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuaW1wb3J0IG1pbk1heCBmcm9tICcuL21pbk1heCc7XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBMQVlFUl9TSVpFOiA0MCxcbiAgICBCQVNFX1NJWkU6IDU2MixcbiAgICBVSV9XSURUSDogMzYwLFxuICAgIEVNUFRZX1NUQVRFX1dJRFRIOiAzNjAsXG4gICAgRU1QVFlfU1RBVEVfSEVJR0hUOiAxNjBcbn07XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEsIGNvbnRhaW5lcikgPT4ge1xuICAgIC8vIHNob3cgdGhlIGh0bWwgdWlcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICAgICAgd2lkdGg6IFNFVFRJTkdTLkVNUFRZX1NUQVRFX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IFNFVFRJTkdTLkVNUFRZX1NUQVRFX0hFSUdIVFxuICAgIH0pO1xuICAgIC8vIGlmIHNlbGVjdGVkIGNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWxldmF0aW9uUHJvcGVydGllcyA9IGdldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MpO1xuICAgICAgICBjb25zdCBVSV9IRUlHSFQgPSBtaW5NYXgoU0VUVElOR1MuQkFTRV9TSVpFICsgU0VUVElOR1MuTEFZRVJfU0laRSAqIChlbGV2YXRpb25Qcm9wZXJ0aWVzLmVsZXZhdGlvbkxheWVyLmxlbmd0aCArIDIpLCAzMDAsIGZpZ21hLnZpZXdwb3J0LmJvdW5kcy5oZWlnaHQgLSA4MCk7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSBzaXplXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShTRVRUSU5HUy5VSV9XSURUSCwgVUlfSEVJR0hUKTtcbiAgICAgICAgLy8gc2VuZCBkYXRhIHRvIFVJXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGVsZXZhdGlvblByb3BlcnRpZXNcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBpZiBubyBjb250YWluZXIgaXMgc2VsZWN0ZWRcbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ2VtcHR5U3RhdGUnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5pbXBvcnQgeyBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCBjcmVhdGVQcmV2aWV3RWxlbWVudCBmcm9tICcuL2NyZWF0ZVByZXZpZXdFbGVtZW50JztcbmltcG9ydCBjcmVhdGVFbGV2YXRpb25MYXllciBmcm9tICcuL2NyZWF0ZUVsZXZhdGlvbkxheWVyJztcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXInO1xuaW1wb3J0IHsgRUxFVkFUSU9OX0RFRkFVTFRTIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEsIGNvbnRhaW5lciwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGZvY3VzTm9kZXMgPSBbXTtcbiAgICBsZXQgbmV3Q29udGFpbmVyID0gZmFsc2U7XG4gICAgLy8gYWRkIG5ldyBub2RlXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIG5ld0NvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIGRhdGEgPSBFTEVWQVRJT05fREVGQVVMVFM7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBub2Rlc1xuICAgIGVsc2Uge1xuICAgICAgICBkYXRhLnN0ZXBzID0gcGFyc2VJbnQoZGF0YS5zdGVwcyk7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0ZXBzOyBpKyspIHtcbiAgICAgICAgLy8gZ2V0IGVsZXZhdGlvblxuICAgICAgICBjb25zdCBlbGV2YXRpb24gPSBbLi4uZGF0YS5lbGV2YXRpb25MYXllcl0ubWFwKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGV2YXRpb25MYXllcihpLCBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgcHJldmlld0VsZW1lbnRzID0gY3JlYXRlUHJldmlld0VsZW1lbnQoaSwgZWxldmF0aW9uKTtcbiAgICAgICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJldmlld0VsZW1lbnRzKTtcbiAgICAgICAgZm9jdXNOb2Rlcy5wdXNoKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIC8vIGNyZWF0ZSBzdHlsZXNcbiAgICAgICAgaWYgKGRhdGEuY3JlYXRlU3R5bGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkYXRhLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhpLCBlbGV2YXRpb24pOyAvLyBkYXRhLnN0eWxlTmFtZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5zdHlsZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHpvb20gdG8gY29udGFpbmVyIGlmIG5ld1xuICAgIGlmIChuZXdDb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZvY3VzTm9kZXMpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgJiBzZWxlY3RcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbY29udGFpbmVyXTtcbiAgICAvLyBlbGV2YXRpb24gc2V0dGluZ3NcbiAgICBzZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTLCBkYXRhKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9