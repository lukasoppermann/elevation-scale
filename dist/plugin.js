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
    console.log(containerData, currentContainer.id);
    if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
        containerData.styles = [];
    }
    // add container id
    containerData.containerId = currentContainer.id;
    console.log('now', containerData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250YWluZXJTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxldmF0aW9uTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJldmlld0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpeER1cGxpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9nZXRDdXJyZW50Q29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hleFRvUmdiYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9taW5NYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFyc2VWYWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZWZyZXNoVWkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXBkYXRlRWxldmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ1E7QUFDcEI7QUFDWTtBQUNBO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGtFQUFTLFFBQVEsNEVBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0VBQWU7QUFDNUM7QUFDQSxRQUFRLHdFQUFlLHFDQUFxQyxzQkFBc0IsRUFBRSxvRUFBa0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZSxRQUFRLDRFQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVMsUUFBUSw0RUFBbUI7QUFDeEMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNlO0FBQ2Y7QUFDakM7QUFDZjtBQUNBLHNCQUFzQixnRUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFnQixZQUFZLHlEQUFTLG9CQUFvQiw0REFBa0I7QUFDL0U7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1pGO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25CRjtBQUFBO0FBQUE7QUFBc0M7QUFDRjtBQUNwQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBEQUFTLGNBQWMsMkRBQVU7QUFDaEQ7QUFDQSxlQUFlLDJEQUFVO0FBQ3pCLGVBQWUsMkRBQVU7QUFDekIsU0FBUztBQUNULGdCQUFnQiwyREFBVTtBQUMxQixnQkFBZ0IsMkRBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYyxHQUFHLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0IsbUJBQW1CLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4Q0Y7QUFBQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMxQkY7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQWlGO0FBQ2xFO0FBQ2YsMEJBQTBCLHdFQUFnQixtQkFBbUIseURBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0IsbUJBQW1CLHlEQUFTO0FBQ2hELENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQUE7QUFBQTtBQUErRDtBQUNyQjtBQUMzQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx3RUFBZ0IsbUJBQW1CLHlEQUFTO0FBQzNIO0FBQ0EsUUFBUSw2REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZEY7QUFBQTtBQUE4QjtBQUNmO0FBQ2Y7QUFDQSxxQ0FBcUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFNO0FBQ2pCO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWEY7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWEY7QUFBQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM5QkY7QUFBQTtBQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQyx3RUFBZ0IsWUFBWSx5REFBUztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUN1QztBQUN2QjtBQUNBO0FBQzNDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3RUFBZ0IsWUFBWSx5REFBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxtQkFBbUIscUVBQW9CO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUVBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkRBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0IsWUFBWSx5REFBUztBQUN6QztBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVSxHQUFHLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgdXBkYXRlRWxldmF0aW9uIGZyb20gJy4vbW9kdWxlcy91cGRhdGVFbGV2YXRpb24nO1xuaW1wb3J0IGdldEN1cnJlbnRDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2dldEN1cnJlbnRDb250YWluZXInO1xuaW1wb3J0IHJlZnJlc2hVSSBmcm9tICcuL21vZHVsZXMvcmVmcmVzaFVpJztcbmltcG9ydCBhZGROZXdDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lcic7XG5pbXBvcnQgeyBFTEVWQVRJT05fREVGQVVMVFMgfSBmcm9tICcuL21vZHVsZXMvZGVmYXVsdHMnO1xuLyoqXG4gKiBUaGlzIGlzIHdlcmUgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgcGx1Z2luIHN0YXJ0c1xuICovXG5yZWZyZXNoVUkoZmlnbWEsIGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpKTtcbi8vIHJ1biBjb2RlIG9uIGNvbW1hbmRzIGZyb20gVUlcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlU2NhbGUnKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGFkZE5ld0NvbnRhaW5lcihmaWdtYSk7XG4gICAgICAgIC8vIHVwZGF0ZSBjb250YWluZXJcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uKGZpZ21hLCBuZXdDb250YWluZXIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAndXBkYXRlU2NhbGUnIH0sIEVMRVZBVElPTl9ERUZBVUxUUykpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgYW4gZXhzaXN0aW5nIHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2NhbGUnKSB7XG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSksIG1zZyk7XG4gICAgfVxufTtcbi8vIHVwZGF0ZSB1aSBpZiBzZWxlY3Rpb24gY2hhbmdlc1xuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICByZWZyZXNoVUkoZmlnbWEsIGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpKTtcbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCB7IEVMRVZBVElPTl9ERUZBVUxUUyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hKSA9PiB7XG4gICAgLy8gY3JlYXRlIG5ldyBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoZmlnbWEpO1xuICAgIC8vIGFwcGVuZCB0byBjdXJyZW50IHBhZ2VcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIC8vIGFkZCBkZWZhdWx0IGRhdGFcbiAgICBzZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTLCBFTEVWQVRJT05fREVGQVVMVFMpO1xuICAgIC8vIHNlbGVjdCBuZXcgY29udGFpbmVyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJleHBvcnQgY29uc3Qgc3RvcmVLZXlzID0ge1xuICAgIEVMRVZBVElPTl9TRVRUTkdTOiAnZWxldmF0aW9uU2V0dGluZ3MnXG59O1xuY29uc3QgaXNWYWxpZENvbnRhaW5lciA9IChjb250YWluZXIpID0+IHtcbiAgICBpZiAoY29udGFpbmVyICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IHNldENvbnRhaW5lckRhdGEgPSAoY29udGFpbmVyLCBrZXksIGRhdGEpID0+IHtcbiAgICBpZiAoaXNWYWxpZENvbnRhaW5lcihjb250YWluZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBnZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5KSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04ucGFyc2UoY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4ganNvblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0UGx1Z2luRGF0YShrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJjb25zdCBTRVRUSU5HUyA9IHtcbiAgICBOQU1FOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBMQVlPVVRfTU9ERTogJ1ZFUlRJQ0FMJyxcbiAgICBTUEFDSU5HOiAyMCxcbiAgICBQQURESU5HOiAyMFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGFpbmVyLm5hbWUgPSBTRVRUSU5HUy5OQU1FO1xuICAgIGNvbnRhaW5lci5sYXlvdXRNb2RlID0gU0VUVElOR1MuTEFZT1VUX01PREU7XG4gICAgY29udGFpbmVyLml0ZW1TcGFjaW5nID0gU0VUVElOR1MuU1BBQ0lORztcbiAgICBjb250YWluZXIucGFkZGluZ1RvcCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdSaWdodCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdCb3R0b20gPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nTGVmdCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcbiAgICBjb250YWluZXIuY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIC8vIHJldHVybiBjb250YWluZXJcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbiIsImltcG9ydCBwYXJzZVZhbHVlIGZyb20gJy4vcGFyc2VWYWx1ZSc7XG5pbXBvcnQgaGV4VG9SZ2JhIGZyb20gJy4vaGV4VG9SZ2JhJztcbmNvbnN0IGFsbG93ZWRFZmZlY3RUeXBlID0gWydEUk9QX1NIQURPVycsICdJTk5FUl9TSEFET1cnXTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgbGF5ZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZpbmUgZWxldmF0aW9uXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIHR5cGU6IGFsbG93ZWRFZmZlY3RUeXBlLmluY2x1ZGVzKGxheWVyLnR5cGUpID8gbGF5ZXIudHlwZSA6ICdEUk9QX1NIQURPVycsXG4gICAgICAgIGNvbG9yOiBoZXhUb1JnYmEobGF5ZXIuY29sb3IsIHBhcnNlVmFsdWUobGF5ZXIub3BhY2l0eSwgaW5kZXgpKSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB4OiBwYXJzZVZhbHVlKGxheWVyLngsIGluZGV4KSxcbiAgICAgICAgICAgIHk6IHBhcnNlVmFsdWUobGF5ZXIueSwgaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwcmVhZDogcGFyc2VWYWx1ZShsYXllci5zcHJlYWQsIGluZGV4KSxcbiAgICAgICAgcmFkaXVzOiBwYXJzZVZhbHVlKGxheWVyLnJhZGl1cywgaW5kZXgpLFxuICAgICAgICAvLyBkZWZhdWx0c1xuICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfTtcbn07XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBXSURUSDogMzIwLFxuICAgIEhFSUdIVDogMTIwLFxuICAgIFJBRElVUzogNSxcbiAgICBOQU1FOiAnRWxldmF0aW9uJ1xufTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgZWxldmF0aW9uTGF5ZXJzKSA9PiB7XG4gICAgLy8gcmVtb3ZlIG5hbWUgZnJvbSBsYXllcnNcbiAgICBjb25zdCBlZmZlY3RzID0gZWxldmF0aW9uTGF5ZXJzLm1hcChsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbGF5ZXIsIGVmZmVjdHMgPSBfX3Jlc3QobGF5ZXJcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgLCBbXCJuYW1lXCJdKTtcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfSk7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICBjb25zdCBlbGVtZW50ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgLy8gc2V0IG5hbWVcbiAgICBlbGVtZW50Lm5hbWUgPSBgJHtTRVRUSU5HUy5OQU1FfSAke2luZGV4fWA7XG4gICAgLy8gc2V0IHNpemVcbiAgICBlbGVtZW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhTRVRUSU5HUy5XSURUSCwgU0VUVElOR1MuSEVJR0hUKTtcbiAgICAvLyBzZXQgcmFkaXVzXG4gICAgZWxlbWVudC5jb3JuZXJSYWRpdXMgPSBTRVRUSU5HUy5SQURJVVM7XG4gICAgLy8gc2V0IGZpbGwgdG8gd2hpdGVcbiAgICBlbGVtZW50LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgIC8vIHNldCBlbGV2YXRpb25cbiAgICBlbGVtZW50LmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIC8vIHJldHVyblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBkZWZhdWx0IChlbGV2YXRpb24sIHN0eWxlSWQgPSBudWxsLCBzdHlsZU5hbWUgPSAnRWxldmF0aW9uJykgPT4ge1xuICAgIC8vIGdldCBvciBjcmVhdGUgbmV3IHN0eWxlXG4gICAgY29uc3Qgc3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoc3R5bGVJZCkgfHwgZmlnbWEuY3JlYXRlRWZmZWN0U3R5bGUoKTtcbiAgICAvLyBzZXQgc3R5bGUgbmFtZVxuICAgIHN0eWxlLm5hbWUgPSBzdHlsZU5hbWUudHJpbSgpICE9PSAnJyA/IHN0eWxlTmFtZSA6ICdFbGV2YXRpb24nO1xuICAgIC8vIHNldCBlZmZlY3RzXG4gICAgY29uc3QgZWZmZWN0cyA9IGVsZXZhdGlvbi5tYXAobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGxheWVyLCBlZmZlY3RzID0gX19yZXN0KGxheWVyXG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgICwgW1wibmFtZVwiXSk7XG4gICAgICAgIC8vIHJldHV6cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgIHJldHVybiBlZmZlY3RzO1xuICAgIH0pO1xuICAgIHN0eWxlLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIHJldHVybiBzdHlsZTtcbn07XG4iLCJleHBvcnQgY29uc3QgRUxFVkFUSU9OX0RFRkFVTFRTID0ge1xuICAgIG5hbWU6ICdFbGV2YXRpb24nLFxuICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgIHN0ZXBzOiA1LFxuICAgIGNyZWF0ZVN0eWxlczogZmFsc2UsXG4gICAgZWxldmF0aW9uTGF5ZXI6IFt7XG4gICAgICAgICAgICB0eXBlOiAnRFJPUF9TSEFET1cnLFxuICAgICAgICAgICAgY29sb3I6ICcwMDAwMDAnLFxuICAgICAgICAgICAgb3BhY2l0eTogJzEwKyMnLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6ICcwLjUqIycsXG4gICAgICAgICAgICBzcHJlYWQ6ICcyKiMnLFxuICAgICAgICAgICAgcmFkaXVzOiAnIydcbiAgICAgICAgfV0sXG4gICAgc3R5bGVzOiBbXVxufTtcbiIsImltcG9ydCB7IGdldENvbnRhaW5lckRhdGEsIHNldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY3VycmVudENvbnRhaW5lciA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGF0YSA9IGdldENvbnRhaW5lckRhdGEoY3VycmVudENvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAvLyByZW1vdmUgc3R5bGVzIGlmIGNvbnRhaW5lciB3YXMgZHVwbGljYXRlZFxuICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lckRhdGEsIGN1cnJlbnRDb250YWluZXIuaWQpO1xuICAgIGlmIChjb250YWluZXJEYXRhLmNvbnRhaW5lcklkICE9PSBudWxsICYmIGNvbnRhaW5lckRhdGEuY29udGFpbmVySWQgIT09IGN1cnJlbnRDb250YWluZXIuaWQpIHtcbiAgICAgICAgY29udGFpbmVyRGF0YS5zdHlsZXMgPSBbXTtcbiAgICB9XG4gICAgLy8gYWRkIGNvbnRhaW5lciBpZFxuICAgIGNvbnRhaW5lckRhdGEuY29udGFpbmVySWQgPSBjdXJyZW50Q29udGFpbmVyLmlkO1xuICAgIGNvbnNvbGUubG9nKCdub3cnLCBjb250YWluZXJEYXRhKTtcbiAgICAvLyB1cGRhdGUgY29udGFpbmVyIGRhdGFcbiAgICBzZXRDb250YWluZXJEYXRhKGN1cnJlbnRDb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgY29udGFpbmVyRGF0YSk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgZml4RHVwbGljYXRlIGZyb20gJy4vZml4RHVwbGljYXRlJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIC8vIGdldCBjdXJyZW50IHNlbGVjdGlvblxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgLy8gcmV0dXJuIGlmIGZyYW1lXG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdGUkFNRScgJiYgZ2V0Q29udGFpbmVyRGF0YShjdXJyZW50U2VsZWN0aW9uLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MpKSB7XG4gICAgICAgIC8vIGRlYWwgd2l0aCBkdXBsaWNhdGVzXG4gICAgICAgIGZpeER1cGxpY2F0ZShjdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgICAgLy8gcmV0dXJuIGN1cnJlbnQgY29udGFpbmVyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBudWxsO1xufTtcbiIsImltcG9ydCBtaW5NYXggZnJvbSAnLi9taW5NYXgnO1xuZXhwb3J0IGRlZmF1bHQgKGhleCwgb3BhY2l0eSkgPT4ge1xuICAgIC8vIGV4dHJhY3QgcmdiIGZyb20gaGV4XG4gICAgY29uc3QgWywgciwgZywgYl0gPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICAvLyByZXR1cm4gcmdiXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQociwgMTYpIC8gMjU1LFxuICAgICAgICBnOiBwYXJzZUludChnLCAxNikgLyAyNTUsXG4gICAgICAgIGI6IHBhcnNlSW50KGIsIDE2KSAvIDI1NSxcbiAgICAgICAgYTogbWluTWF4KHBhcnNlSW50KG9wYWNpdHksIDEwKSAvIDEwMCwgMCwgMSlcbiAgICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XG4gICAgLy8gcmV0dXJuIG1pbiBpZiBudW1iZXIgc21hbGxlclxuICAgIGlmIChudW1iZXIgPCBtaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG1heCBpZiBudW1iZXIgYmlnZ2VyXG4gICAgaWYgKG51bWJlciA+IG1heCkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVtYmVyIGlmIGJldHdlZW5cbiAgICByZXR1cm4gbnVtYmVyO1xufTtcbiIsImNvbnN0IHBsYWNlaG9sZGVycyA9IHtcbiAgICBJTkRFWDogJyMnXG59O1xuZXhwb3J0IGRlZmF1bHQgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIC8vIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY29tbWFcbiAgICAgICAgICAgIC5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBzcGFjZVxuICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnJylcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgMCBhdCBiZWdpbm5pbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eMCsvaSwgJycpXG4gICAgICAgICAgICAvLyByZXBsYWNlIDAgYWZ0ZXIgY2hhclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXCt8XFwqfFxcL3wtfCMpKDApKC4pL2ksICckMScpXG4gICAgICAgICAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggaW5kZXhcbiAgICAgICAgICAgIC5yZXBsYWNlKHBsYWNlaG9sZGVycy5JTkRFWCwgaW5kZXgpO1xuICAgICAgICAvLyByZXBsYWNlIGxlYWRpbmcgemVyb3NcbiAgICB9XG4gICAgLy8gZXZhbCBhbmQgcGFyc2UgaW50XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGV2YWwodmFsdWUpKTtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIExBWUVSX1NJWkU6IDQwLFxuICAgIEJBU0VfU0laRTogNTYyLFxuICAgIFVJX1dJRFRIOiAzNjAsXG4gICAgRU1QVFlfU1RBVEVfV0lEVEg6IDM2MCxcbiAgICBFTVBUWV9TVEFURV9IRUlHSFQ6IDE2MFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyKSA9PiB7XG4gICAgLy8gc2hvdyB0aGUgaHRtbCB1aVxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICB3aWR0aDogU0VUVElOR1MuRU1QVFlfU1RBVEVfV0lEVEgsXG4gICAgICAgIGhlaWdodDogU0VUVElOR1MuRU1QVFlfU1RBVEVfSEVJR0hUXG4gICAgfSk7XG4gICAgLy8gaWYgc2VsZWN0ZWQgY29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGV2YXRpb25Qcm9wZXJ0aWVzID0gZ2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUyk7XG4gICAgICAgIC8vIGNhbGMgaGVpZ2h0IGZvciBVSSB3aW5kb3dcbiAgICAgICAgY29uc3QgVUlfSEVJR0hUID0gNzAwO1xuICAgICAgICAvLyB1cGRhdGUgVUkgc2l6ZVxuICAgICAgICBmaWdtYS51aS5yZXNpemUoU0VUVElOR1MuVUlfV0lEVEgsIFVJX0hFSUdIVCk7XG4gICAgICAgIC8vIHNlbmQgZGF0YSB0byBVSVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlUHJvcGVydGllcycsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBlbGV2YXRpb25Qcm9wZXJ0aWVzXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gaWYgbm8gY29udGFpbmVyIGlzIHNlbGVjdGVkXG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdlbXB0eVN0YXRlJ1xuICAgICAgICB9KSk7XG4gICAgfVxufTtcbiIsImltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgY3JlYXRlUHJldmlld0VsZW1lbnQgZnJvbSAnLi9jcmVhdGVQcmV2aWV3RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxldmF0aW9uTGF5ZXIgZnJvbSAnLi9jcmVhdGVFbGV2YXRpb25MYXllcic7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEsIGNvbnRhaW5lciwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGZvY3VzTm9kZXMgPSBbXTtcbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm9kZXNcbiAgICBkYXRhLnN0ZXBzID0gcGFyc2VJbnQoZGF0YS5zdGVwcyk7XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICAgIC8vIGdldCBzdHlsZXMgJiBpZFxuICAgIGNvbnN0IGNvbnRhaW5lckRhdGEgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICBkYXRhLmNvbnRhaW5lcklkID0gY29udGFpbmVyRGF0YS5jb250YWluZXJJZDtcbiAgICBkYXRhLnN0eWxlcyA9IGNvbnRhaW5lckRhdGEuc3R5bGVzIHx8IFtdO1xuICAgIC8vIGFkZCB1cGRhdGVkIGNoaWxkcmVuIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0ZXBzOyBpKyspIHtcbiAgICAgICAgLy8gZ2V0IGVsZXZhdGlvblxuICAgICAgICBjb25zdCBlbGV2YXRpb24gPSBbLi4uZGF0YS5lbGV2YXRpb25MYXllcl0ubWFwKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGV2YXRpb25MYXllcihpLCBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbGV2YXRpb24gbmFtZVxuICAgICAgICBjb25zdCBlbGV2YXRpb25OYW1lID0gZWxldmF0aW9uU3R5bGVOYW1lKGksIGRhdGEuc3R5bGVOYW1lKTtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbGVtZW50cyA9IGNyZWF0ZVByZXZpZXdFbGVtZW50KGksIGVsZXZhdGlvbik7XG4gICAgICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIGZvY3VzTm9kZXMucHVzaChwcmV2aWV3RWxlbWVudHMpO1xuICAgICAgICAvLyBjcmVhdGUgc3R5bGVzXG4gICAgICAgIGlmIChkYXRhLmNyZWF0ZVN0eWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdHlsZXMoZWxldmF0aW9uLCBkYXRhLnN0eWxlc1tpXSB8fCBudWxsLCBlbGV2YXRpb25OYW1lKTtcbiAgICAgICAgICAgIGRhdGEuc3R5bGVzW2ldID0gc3R5bGUuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gem9vbSB0byBjb250YWluZXIgaWYgbmV3XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZvY3VzTm9kZXMpO1xuICAgIC8vIGVsZXZhdGlvbiBzZXR0aW5nc1xuICAgIHNldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MsIGRhdGEpO1xuICAgIC8vIGFwcGVuZCAmIHNlbGVjdFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtjb250YWluZXJdO1xufTtcbmNvbnN0IGVsZXZhdGlvblN0eWxlTmFtZSA9IChpLCBzdHlsZU5hbWUpID0+IHtcbiAgICBpZiAoc3R5bGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gU3RyaW5nKGkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGlmIChzdHlsZU5hbWUuaW5kZXhPZignIycpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZU5hbWUucmVwbGFjZSgnIyMnLCBudW1iZXIpLnJlcGxhY2UoJyMnLCBTdHJpbmcoaSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3N0eWxlTmFtZX0gJHtudW1iZXJ9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9