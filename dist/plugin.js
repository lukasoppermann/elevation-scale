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
/* harmony import */ var _modules_addNewContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addNewContainer */ "./src/modules/addNewContainer.ts");
/* harmony import */ var _modules_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/defaults */ "./src/modules/defaults.ts");





/**
 * This is were the execution of the plugin starts
 */
Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma));
// run code on commands from UI
figma.ui.onmessage = msg => {
    // create a new scale
    if (msg.type === 'createScale') {
        // create new container
        const newContainer = Object(_modules_addNewContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(figma);
        // update container
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, newContainer, Object.assign({ type: 'updateScale' }, _modules_defaults__WEBPACK_IMPORTED_MODULE_4__["ELEVATION_DEFAULTS"]));
    }
    // update an exsisting scale
    if (msg.type === 'updateScale') {
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma), msg);
    }
};
// update ui if selection changes
figma.on('selectionchange', () => {
    Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma));
});


/***/ }),

/***/ "./src/modules/addNewContainer.ts":
/*!****************************************!*\
  !*** ./src/modules/addNewContainer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContainer */ "./src/modules/createContainer.ts");
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "./src/modules/defaults.ts");



/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // create new container
    const container = Object(_createContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(figma);
    // append to current page
    figma.currentPage.appendChild(container);
    // add default data
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, _defaults__WEBPACK_IMPORTED_MODULE_2__["ELEVATION_DEFAULTS"]);
    // select new container
    return container;
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
/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
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
/* harmony default export */ __webpack_exports__["default"] = ((elevation, styleId = null, styleName = 'Elevation') => {
    // get or create new style
    const style = figma.getStyleById(styleId) || figma.createEffectStyle();
    // set style name
    style.name = styleName.trim() !== '' ? styleName : 'Elevation';
    // set effects
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
    containerId: null,
    steps: 5,
    createStyles: false,
    elevationLayer: [{
            type: 'DROP_SHADOW',
            color: '000000',
            opacity: '10+#',
            x: 0,
            y: '0.5*#',
            spread: '2*#',
            radius: '#'
        }],
    styles: []
};


/***/ }),

/***/ "./src/modules/fixDuplicate.ts":
/*!*************************************!*\
  !*** ./src/modules/fixDuplicate.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");

/* harmony default export */ __webpack_exports__["default"] = (currentContainer => {
    const containerData = Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentContainer, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS);
    // remove styles if container was duplicated
    if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
        containerData.styles = [];
        containerData.createStyles = false;
    }
    // add container id
    containerData.containerId = currentContainer.id;
    // update container data
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["setContainerData"])(currentContainer, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS, containerData);
});


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
/* harmony import */ var _fixDuplicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixDuplicate */ "./src/modules/fixDuplicate.ts");


/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // get current selection
    const currentSelection = figma.currentPage.selection[0];
    // return if frame
    if (currentSelection !== undefined && currentSelection.type === 'FRAME' && Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentSelection, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS)) {
        // deal with duplicates
        Object(_fixDuplicate__WEBPACK_IMPORTED_MODULE_1__["default"])(currentSelection);
        // return current container
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
        value = value
            // replace comma
            .replace(',', '.')
            // replace space
            .replace(' ', '')
            // replace 0 at beginning
            .replace(/^0+/i, '')
            // replace 0 after char
            .replace(/(\+|\*|\/|-|#)(0)(.)/i, '$1')
            // replace placeholder with index
            .replace(placeholders.INDEX, index);
        // replace leading zeros
    }
    // eval and parse int
    try {
        value = parseFloat(eval(value));
        if (!isNaN(value)) {
            return value;
        }
    }
    catch (e) {
        console.error(e);
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
        // calc height for UI window
        const UI_HEIGHT = 700;
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




/* harmony default export */ __webpack_exports__["default"] = ((figma, container, data) => {
    const focusNodes = [];
    // remove children nodes
    data.steps = parseInt(data.steps);
    container.children.forEach(child => child.remove());
    // get styles & id
    const containerData = Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS);
    data.containerId = containerData.containerId;
    data.styles = containerData.styles || [];
    // add updated children nodes
    for (let i = 0; i < data.steps; i++) {
        // get elevation
        const elevation = [...data.elevationLayer].map(layer => {
            return Object(_createElevationLayer__WEBPACK_IMPORTED_MODULE_3__["default"])(i, layer);
        });
        // elevation name
        const elevationName = elevationStyleName(i, data.styleName);
        // create elements
        const previewElements = Object(_createPreviewElement__WEBPACK_IMPORTED_MODULE_2__["default"])(i, elevation);
        // append to container
        container.appendChild(previewElements);
        focusNodes.push(previewElements);
        // create styles
        if (data.createStyles === true) {
            const style = Object(_createStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(elevation, data.styles[i] || null, elevationName);
            data.styles[i] = style.id;
        }
    }
    // zoom to container if new
    figma.viewport.scrollAndZoomIntoView(focusNodes);
    // elevation settings
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, data);
    // append & select
    figma.currentPage.selection = [container];
});
const elevationStyleName = (i, styleName) => {
    if (styleName !== undefined) {
        const number = String(i).padStart(2, '0');
        if (styleName.indexOf('#') > -1) {
            return styleName.replace('##', number).replace('#', String(i));
        }
        else {
            return `${styleName} ${number}`;
        }
    }
    return null;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250YWluZXJTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxldmF0aW9uTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJldmlld0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpeER1cGxpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9nZXRDdXJyZW50Q29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hleFRvUmdiYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9taW5NYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFyc2VWYWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZWZyZXNoVWkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXBkYXRlRWxldmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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K0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0Msd0VBQWdCLFlBQVkseURBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDdUM7QUFDdkI7QUFDQTtBQUMzQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0VBQWdCLFlBQVkseURBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLHFFQUFvQjtBQUN2QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFFQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWdCLFlBQVkseURBQVM7QUFDekM7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVUsR0FBRyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHVwZGF0ZUVsZXZhdGlvbiBmcm9tICcuL21vZHVsZXMvdXBkYXRlRWxldmF0aW9uJztcbmltcG9ydCBnZXRDdXJyZW50Q29udGFpbmVyIGZyb20gJy4vbW9kdWxlcy9nZXRDdXJyZW50Q29udGFpbmVyJztcbmltcG9ydCByZWZyZXNoVUkgZnJvbSAnLi9tb2R1bGVzL3JlZnJlc2hVaSc7XG5pbXBvcnQgYWRkTmV3Q29udGFpbmVyIGZyb20gJy4vbW9kdWxlcy9hZGROZXdDb250YWluZXInO1xuaW1wb3J0IHsgRUxFVkFUSU9OX0RFRkFVTFRTIH0gZnJvbSAnLi9tb2R1bGVzL2RlZmF1bHRzJztcbi8qKlxuICogVGhpcyBpcyB3ZXJlIHRoZSBleGVjdXRpb24gb2YgdGhlIHBsdWdpbiBzdGFydHNcbiAqL1xucmVmcmVzaFVJKGZpZ21hLCBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKSk7XG4vLyBydW4gY29kZSBvbiBjb21tYW5kcyBmcm9tIFVJXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBzY2FsZVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZVNjYWxlJykge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBuZXdDb250YWluZXIgPSBhZGROZXdDb250YWluZXIoZmlnbWEpO1xuICAgICAgICAvLyB1cGRhdGUgY29udGFpbmVyXG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgbmV3Q29udGFpbmVyLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ3VwZGF0ZVNjYWxlJyB9LCBFTEVWQVRJT05fREVGQVVMVFMpKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGFuIGV4c2lzdGluZyBzY2FsZVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZVNjYWxlJykge1xuICAgICAgICB1cGRhdGVFbGV2YXRpb24oZmlnbWEsIGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpLCBtc2cpO1xuICAgIH1cbn07XG4vLyB1cGRhdGUgdWkgaWYgc2VsZWN0aW9uIGNoYW5nZXNcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgcmVmcmVzaFVJKGZpZ21hLCBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKSk7XG59KTtcbiIsImltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXInO1xuaW1wb3J0IHsgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgeyBFTEVWQVRJT05fREVGQVVMVFMgfSBmcm9tICcuL2RlZmF1bHRzJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIC8vIGNyZWF0ZSBuZXcgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKGZpZ21hKTtcbiAgICAvLyBhcHBlbmQgdG8gY3VycmVudCBwYWdlXG4gICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAvLyBhZGQgZGVmYXVsdCBkYXRhXG4gICAgc2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgRUxFVkFUSU9OX0RFRkFVTFRTKTtcbiAgICAvLyBzZWxlY3QgbmV3IGNvbnRhaW5lclxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHN0b3JlS2V5cyA9IHtcbiAgICBFTEVWQVRJT05fU0VUVE5HUzogJ2VsZXZhdGlvblNldHRpbmdzJ1xufTtcbmNvbnN0IGlzVmFsaWRDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5LCBkYXRhKSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFBsdWdpbkRhdGEoa2V5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0Q29udGFpbmVyRGF0YSA9IChjb250YWluZXIsIGtleSkgPT4ge1xuICAgIGlmIChpc1ZhbGlkQ29udGFpbmVyKGNvbnRhaW5lcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnBhcnNlKGNvbnRhaW5lci5nZXRQbHVnaW5EYXRhKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgTkFNRTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgTEFZT1VUX01PREU6ICdWRVJUSUNBTCcsXG4gICAgU1BBQ0lORzogMjAsXG4gICAgUEFERElORzogMjBcbn07XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGNvbnRhaW5lci5uYW1lID0gU0VUVElOR1MuTkFNRTtcbiAgICBjb250YWluZXIubGF5b3V0TW9kZSA9IFNFVFRJTkdTLkxBWU9VVF9NT0RFO1xuICAgIGNvbnRhaW5lci5pdGVtU3BhY2luZyA9IFNFVFRJTkdTLlNQQUNJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdUb3AgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nUmlnaHQgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nQm90dG9tID0gU0VUVElOR1MuUEFERElORztcbiAgICBjb250YWluZXIucGFkZGluZ0xlZnQgPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XG4gICAgY29udGFpbmVyLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcbiAgICAvLyByZXR1cm4gY29udGFpbmVyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgcGFyc2VWYWx1ZSBmcm9tICcuL3BhcnNlVmFsdWUnO1xuaW1wb3J0IGhleFRvUmdiYSBmcm9tICcuL2hleFRvUmdiYSc7XG5jb25zdCBhbGxvd2VkRWZmZWN0VHlwZSA9IFsnRFJPUF9TSEFET1cnLCAnSU5ORVJfU0hBRE9XJ107XG5leHBvcnQgZGVmYXVsdCAoaW5kZXgsIGxheWVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVmaW5lIGVsZXZhdGlvblxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICB0eXBlOiBhbGxvd2VkRWZmZWN0VHlwZS5pbmNsdWRlcyhsYXllci50eXBlKSA/IGxheWVyLnR5cGUgOiAnRFJPUF9TSEFET1cnLFxuICAgICAgICBjb2xvcjogaGV4VG9SZ2JhKGxheWVyLmNvbG9yLCBwYXJzZVZhbHVlKGxheWVyLm9wYWNpdHksIGluZGV4KSksXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgeDogcGFyc2VWYWx1ZShsYXllci54LCBpbmRleCksXG4gICAgICAgICAgICB5OiBwYXJzZVZhbHVlKGxheWVyLnksIGluZGV4KVxuICAgICAgICB9LFxuICAgICAgICBzcHJlYWQ6IHBhcnNlVmFsdWUobGF5ZXIuc3ByZWFkLCBpbmRleCksXG4gICAgICAgIHJhZGl1czogcGFyc2VWYWx1ZShsYXllci5yYWRpdXMsIGluZGV4KSxcbiAgICAgICAgLy8gZGVmYXVsdHNcbiAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH07XG59O1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgV0lEVEg6IDMyMCxcbiAgICBIRUlHSFQ6IDEyMCxcbiAgICBSQURJVVM6IDUsXG4gICAgTkFNRTogJ0VsZXZhdGlvbidcbn07XG5leHBvcnQgZGVmYXVsdCAoaW5kZXgsIGVsZXZhdGlvbkxheWVycykgPT4ge1xuICAgIC8vIHJlbW92ZSBuYW1lIGZyb20gbGF5ZXJzXG4gICAgY29uc3QgZWZmZWN0cyA9IGVsZXZhdGlvbkxheWVycy5tYXAobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGxheWVyLCBlZmZlY3RzID0gX19yZXN0KGxheWVyXG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgICwgW1wibmFtZVwiXSk7XG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgIHJldHVybiBlZmZlY3RzO1xuICAgIH0pO1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgY29uc3QgZWxlbWVudCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIC8vIHNldCBuYW1lXG4gICAgZWxlbWVudC5uYW1lID0gYCR7U0VUVElOR1MuTkFNRX0gJHtpbmRleH1gO1xuICAgIC8vIHNldCBzaXplXG4gICAgZWxlbWVudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoU0VUVElOR1MuV0lEVEgsIFNFVFRJTkdTLkhFSUdIVCk7XG4gICAgLy8gc2V0IHJhZGl1c1xuICAgIGVsZW1lbnQuY29ybmVyUmFkaXVzID0gU0VUVElOR1MuUkFESVVTO1xuICAgIC8vIHNldCBmaWxsIHRvIHdoaXRlXG4gICAgZWxlbWVudC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAvLyBzZXQgZWxldmF0aW9uXG4gICAgZWxlbWVudC5lZmZlY3RzID0gZWZmZWN0cztcbiAgICAvLyByZXR1cm5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnQgZGVmYXVsdCAoZWxldmF0aW9uLCBzdHlsZUlkID0gbnVsbCwgc3R5bGVOYW1lID0gJ0VsZXZhdGlvbicpID0+IHtcbiAgICAvLyBnZXQgb3IgY3JlYXRlIG5ldyBzdHlsZVxuICAgIGNvbnN0IHN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKHN0eWxlSWQpIHx8IGZpZ21hLmNyZWF0ZUVmZmVjdFN0eWxlKCk7XG4gICAgLy8gc2V0IHN0eWxlIG5hbWVcbiAgICBzdHlsZS5uYW1lID0gc3R5bGVOYW1lLnRyaW0oKSAhPT0gJycgPyBzdHlsZU5hbWUgOiAnRWxldmF0aW9uJztcbiAgICAvLyBzZXQgZWZmZWN0c1xuICAgIGNvbnN0IGVmZmVjdHMgPSBlbGV2YXRpb24ubWFwKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBsYXllciwgZWZmZWN0cyA9IF9fcmVzdChsYXllclxuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICAsIFtcIm5hbWVcIl0pO1xuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICByZXR1cm4gZWZmZWN0cztcbiAgICB9KTtcbiAgICBzdHlsZS5lZmZlY3RzID0gZWZmZWN0cztcbiAgICByZXR1cm4gc3R5bGU7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEVMRVZBVElPTl9ERUZBVUxUUyA9IHtcbiAgICBuYW1lOiAnRWxldmF0aW9uJyxcbiAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICBzdGVwczogNSxcbiAgICBjcmVhdGVTdHlsZXM6IGZhbHNlLFxuICAgIGVsZXZhdGlvbkxheWVyOiBbe1xuICAgICAgICAgICAgdHlwZTogJ0RST1BfU0hBRE9XJyxcbiAgICAgICAgICAgIGNvbG9yOiAnMDAwMDAwJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxMCsjJyxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAnMC41KiMnLFxuICAgICAgICAgICAgc3ByZWFkOiAnMiojJyxcbiAgICAgICAgICAgIHJhZGl1czogJyMnXG4gICAgICAgIH1dLFxuICAgIHN0eWxlczogW11cbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRDb250YWluZXIgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckRhdGEgPSBnZXRDb250YWluZXJEYXRhKGN1cnJlbnRDb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUyk7XG4gICAgLy8gcmVtb3ZlIHN0eWxlcyBpZiBjb250YWluZXIgd2FzIGR1cGxpY2F0ZWRcbiAgICBpZiAoY29udGFpbmVyRGF0YS5jb250YWluZXJJZCAhPT0gbnVsbCAmJiBjb250YWluZXJEYXRhLmNvbnRhaW5lcklkICE9PSBjdXJyZW50Q29udGFpbmVyLmlkKSB7XG4gICAgICAgIGNvbnRhaW5lckRhdGEuc3R5bGVzID0gW107XG4gICAgICAgIGNvbnRhaW5lckRhdGEuY3JlYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFkZCBjb250YWluZXIgaWRcbiAgICBjb250YWluZXJEYXRhLmNvbnRhaW5lcklkID0gY3VycmVudENvbnRhaW5lci5pZDtcbiAgICAvLyB1cGRhdGUgY29udGFpbmVyIGRhdGFcbiAgICBzZXRDb250YWluZXJEYXRhKGN1cnJlbnRDb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgY29udGFpbmVyRGF0YSk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgZml4RHVwbGljYXRlIGZyb20gJy4vZml4RHVwbGljYXRlJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIC8vIGdldCBjdXJyZW50IHNlbGVjdGlvblxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgLy8gcmV0dXJuIGlmIGZyYW1lXG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdGUkFNRScgJiYgZ2V0Q29udGFpbmVyRGF0YShjdXJyZW50U2VsZWN0aW9uLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MpKSB7XG4gICAgICAgIC8vIGRlYWwgd2l0aCBkdXBsaWNhdGVzXG4gICAgICAgIGZpeER1cGxpY2F0ZShjdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgICAgLy8gcmV0dXJuIGN1cnJlbnQgY29udGFpbmVyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBudWxsO1xufTtcbiIsImltcG9ydCBtaW5NYXggZnJvbSAnLi9taW5NYXgnO1xuZXhwb3J0IGRlZmF1bHQgKGhleCwgb3BhY2l0eSkgPT4ge1xuICAgIC8vIGV4dHJhY3QgcmdiIGZyb20gaGV4XG4gICAgY29uc3QgWywgciwgZywgYl0gPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICAvLyByZXR1cm4gcmdiXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQociwgMTYpIC8gMjU1LFxuICAgICAgICBnOiBwYXJzZUludChnLCAxNikgLyAyNTUsXG4gICAgICAgIGI6IHBhcnNlSW50KGIsIDE2KSAvIDI1NSxcbiAgICAgICAgYTogbWluTWF4KHBhcnNlSW50KG9wYWNpdHksIDEwKSAvIDEwMCwgMCwgMSlcbiAgICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XG4gICAgLy8gcmV0dXJuIG1pbiBpZiBudW1iZXIgc21hbGxlclxuICAgIGlmIChudW1iZXIgPCBtaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG1heCBpZiBudW1iZXIgYmlnZ2VyXG4gICAgaWYgKG51bWJlciA+IG1heCkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVtYmVyIGlmIGJldHdlZW5cbiAgICByZXR1cm4gbnVtYmVyO1xufTtcbiIsImNvbnN0IHBsYWNlaG9sZGVycyA9IHtcbiAgICBJTkRFWDogJyMnXG59O1xuZXhwb3J0IGRlZmF1bHQgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIC8vIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY29tbWFcbiAgICAgICAgICAgIC5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBzcGFjZVxuICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnJylcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgMCBhdCBiZWdpbm5pbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eMCsvaSwgJycpXG4gICAgICAgICAgICAvLyByZXBsYWNlIDAgYWZ0ZXIgY2hhclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXCt8XFwqfFxcL3wtfCMpKDApKC4pL2ksICckMScpXG4gICAgICAgICAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggaW5kZXhcbiAgICAgICAgICAgIC5yZXBsYWNlKHBsYWNlaG9sZGVycy5JTkRFWCwgaW5kZXgpO1xuICAgICAgICAvLyByZXBsYWNlIGxlYWRpbmcgemVyb3NcbiAgICB9XG4gICAgLy8gZXZhbCBhbmQgcGFyc2UgaW50XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGV2YWwodmFsdWUpKTtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIExBWUVSX1NJWkU6IDQwLFxuICAgIEJBU0VfU0laRTogNTYyLFxuICAgIFVJX1dJRFRIOiAzNjAsXG4gICAgRU1QVFlfU1RBVEVfV0lEVEg6IDM2MCxcbiAgICBFTVBUWV9TVEFURV9IRUlHSFQ6IDE2MFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyKSA9PiB7XG4gICAgLy8gc2hvdyB0aGUgaHRtbCB1aVxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICB3aWR0aDogU0VUVElOR1MuRU1QVFlfU1RBVEVfV0lEVEgsXG4gICAgICAgIGhlaWdodDogU0VUVElOR1MuRU1QVFlfU1RBVEVfSEVJR0hUXG4gICAgfSk7XG4gICAgLy8gaWYgc2VsZWN0ZWQgY29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGV2YXRpb25Qcm9wZXJ0aWVzID0gZ2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUyk7XG4gICAgICAgIC8vIGNhbGMgaGVpZ2h0IGZvciBVSSB3aW5kb3dcbiAgICAgICAgY29uc3QgVUlfSEVJR0hUID0gNzAwO1xuICAgICAgICAvLyB1cGRhdGUgVUkgc2l6ZVxuICAgICAgICBmaWdtYS51aS5yZXNpemUoU0VUVElOR1MuVUlfV0lEVEgsIFVJX0hFSUdIVCk7XG4gICAgICAgIC8vIHNlbmQgZGF0YSB0byBVSVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlUHJvcGVydGllcycsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBlbGV2YXRpb25Qcm9wZXJ0aWVzXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gaWYgbm8gY29udGFpbmVyIGlzIHNlbGVjdGVkXG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdlbXB0eVN0YXRlJ1xuICAgICAgICB9KSk7XG4gICAgfVxufTtcbiIsImltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgY3JlYXRlUHJldmlld0VsZW1lbnQgZnJvbSAnLi9jcmVhdGVQcmV2aWV3RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxldmF0aW9uTGF5ZXIgZnJvbSAnLi9jcmVhdGVFbGV2YXRpb25MYXllcic7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEsIGNvbnRhaW5lciwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGZvY3VzTm9kZXMgPSBbXTtcbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm9kZXNcbiAgICBkYXRhLnN0ZXBzID0gcGFyc2VJbnQoZGF0YS5zdGVwcyk7XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICAgIC8vIGdldCBzdHlsZXMgJiBpZFxuICAgIGNvbnN0IGNvbnRhaW5lckRhdGEgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICBkYXRhLmNvbnRhaW5lcklkID0gY29udGFpbmVyRGF0YS5jb250YWluZXJJZDtcbiAgICBkYXRhLnN0eWxlcyA9IGNvbnRhaW5lckRhdGEuc3R5bGVzIHx8IFtdO1xuICAgIC8vIGFkZCB1cGRhdGVkIGNoaWxkcmVuIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0ZXBzOyBpKyspIHtcbiAgICAgICAgLy8gZ2V0IGVsZXZhdGlvblxuICAgICAgICBjb25zdCBlbGV2YXRpb24gPSBbLi4uZGF0YS5lbGV2YXRpb25MYXllcl0ubWFwKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGV2YXRpb25MYXllcihpLCBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbGV2YXRpb24gbmFtZVxuICAgICAgICBjb25zdCBlbGV2YXRpb25OYW1lID0gZWxldmF0aW9uU3R5bGVOYW1lKGksIGRhdGEuc3R5bGVOYW1lKTtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbGVtZW50cyA9IGNyZWF0ZVByZXZpZXdFbGVtZW50KGksIGVsZXZhdGlvbik7XG4gICAgICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIGZvY3VzTm9kZXMucHVzaChwcmV2aWV3RWxlbWVudHMpO1xuICAgICAgICAvLyBjcmVhdGUgc3R5bGVzXG4gICAgICAgIGlmIChkYXRhLmNyZWF0ZVN0eWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdHlsZXMoZWxldmF0aW9uLCBkYXRhLnN0eWxlc1tpXSB8fCBudWxsLCBlbGV2YXRpb25OYW1lKTtcbiAgICAgICAgICAgIGRhdGEuc3R5bGVzW2ldID0gc3R5bGUuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gem9vbSB0byBjb250YWluZXIgaWYgbmV3XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZvY3VzTm9kZXMpO1xuICAgIC8vIGVsZXZhdGlvbiBzZXR0aW5nc1xuICAgIHNldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MsIGRhdGEpO1xuICAgIC8vIGFwcGVuZCAmIHNlbGVjdFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtjb250YWluZXJdO1xufTtcbmNvbnN0IGVsZXZhdGlvblN0eWxlTmFtZSA9IChpLCBzdHlsZU5hbWUpID0+IHtcbiAgICBpZiAoc3R5bGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gU3RyaW5nKGkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGlmIChzdHlsZU5hbWUuaW5kZXhPZignIycpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZU5hbWUucmVwbGFjZSgnIyMnLCBudW1iZXIpLnJlcGxhY2UoJyMnLCBTdHJpbmcoaSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3N0eWxlTmFtZX0gJHtudW1iZXJ9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9