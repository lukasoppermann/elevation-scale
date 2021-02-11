(() => {
    const defines = {};
    const entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies, factory };
        entry[0] = name;
    }
    define("require", ["exports"], (exports) => {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: (name) => resolve(name) });
    });
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    define("src/createStyles", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = (i, elevation, createStyles) => {
        };
    });
    define("src/containerStore", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getContainerData = exports.setContainerData = exports.storeKeys = void 0;
        exports.storeKeys = {
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
        exports.setContainerData = setContainerData;
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
        exports.getContainerData = getContainerData;
    });
    define("src/createPreviewElement", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            WIDTH: 320,
            HEIGHT: 120,
            RADIUS: 5
        };
        exports.default = (index, name, elevation) => {
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
        };
    });
    define("src/parseValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const placeholders = {
            INDEX: '#'
        };
        exports.default = (valueString, index) => {
            // replace placeholders in string
            const preparedString = valueString.replace(placeholders.INDEX, index);
            return parseInt(eval(preparedString), 10);
        };
    });
    define("src/createElevationLayer", ["require", "exports", "src/parseValue"], function (require, exports, parseValue_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        parseValue_1 = __importDefault(parseValue_1);
        const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW'];
        exports.default = (index, layer) => ({
            // define elevation
            type: allowedEffectType.includes(layer.effectType) ? layer.effectType : 'DROP_SHADOW',
            color: {
                r: 0,
                g: 0,
                b: 0,
                a: parseValue_1.default(layer.opacity, index) / 100 // in percent
            },
            offset: {
                x: parseValue_1.default(layer.x, index),
                y: parseValue_1.default(layer.y, index)
            },
            spread: parseValue_1.default(layer.spread, index),
            radius: parseValue_1.default(layer.blur, index),
            // defaults
            blendMode: 'NORMAL',
            visible: true
        });
    });
    define("src/createContainer", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            NAME: 'Elevation Scale',
            LAYOUT_MODE: 'VERTICAL',
            SPACING: 20,
            PADDING: 20
        };
        exports.default = () => {
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
        };
    });
    define("src/updateElevation", ["require", "exports", "src/createStyles", "src/containerStore", "src/createPreviewElement", "src/createElevationLayer", "src/createContainer"], function (require, exports, createStyles_1, containerStore_1, createPreviewElement_1, createElevationLayer_1, createContainer_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        createStyles_1 = __importDefault(createStyles_1);
        createPreviewElement_1 = __importDefault(createPreviewElement_1);
        createElevationLayer_1 = __importDefault(createElevationLayer_1);
        createContainer_1 = __importDefault(createContainer_1);
        const ELEVATION_LAYER_NAME = 'Elevation';
        exports.default = (figma, container, data) => {
            // add new node
            if (!container) {
                container = createContainer_1.default();
                figma.currentPage.appendChild(container);
            }
            // remove children nodes
            else {
                container.children.forEach(child => child.remove());
            }
            for (let i = 0; i < data.count; i++) {
                // get elevation
                const elevation = data.shadowLayers.map(layer => createElevationLayer_1.default(i, layer));
                // create elements
                const previewElements = createPreviewElement_1.default(i, ELEVATION_LAYER_NAME, elevation);
                // append to container
                container.appendChild(previewElements);
                // nodes.push(shadowRepresentation)
                // create styles
                createStyles_1.default(i, elevation, data.createStyles);
            }
            // append & select
            figma.currentPage.selection = [container];
            figma.viewport.scrollAndZoomIntoView([container]);
            // elevation settings
            containerStore_1.setContainerData(container, containerStore_1.storeKeys.ELEVATION_SETTNGS, data);
        };
    });
    define("src/getCurrentContainer", ["require", "exports", "src/containerStore"], function (require, exports, containerStore_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = (figma) => {
            // get current selection
            const currentSelection = figma.currentPage.selection[0];
            // return if frame
            if (currentSelection !== undefined && currentSelection.type === 'FRAME' && containerStore_2.getContainerData(currentSelection, containerStore_2.storeKeys.ELEVATION_SETTNGS)) {
                return currentSelection;
            }
            //
            return null;
        };
    });
    define("src/refreshUi", ["require", "exports", "src/containerStore"], function (require, exports, containerStore_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            LAYER_SIZE: 40,
            BASE_SIZE: 450
        };
        exports.default = (figma, container) => {
            // if selection:
            // -> count layers
            // resize height
            // prepare properties
            const elevationProperties = Object.assign({}, containerStore_3.getContainerData(container, containerStore_3.storeKeys.ELEVATION_SETTNGS));
            // show the html ui
            figma.showUI(__html__, {
                width: 300,
                height: SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * 1
            });
            // send data to UI
            figma.ui.postMessage(JSON.stringify({
                type: 'updateProperties',
                properties: elevationProperties
            }));
        };
    });
    define("src/index", ["require", "exports", "src/updateElevation", "src/getCurrentContainer", "src/refreshUi"], function (require, exports, updateElevation_1, getCurrentContainer_1, refreshUi_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        updateElevation_1 = __importDefault(updateElevation_1);
        getCurrentContainer_1 = __importDefault(getCurrentContainer_1);
        refreshUi_1 = __importDefault(refreshUi_1);
        // store current container
        let currentContainer = getCurrentContainer_1.default(figma);
        /**
         * This is were the execution of the plugin starts
         */
        // initialize the ui
        refreshUi_1.default(figma, currentContainer);
        // run code on commands from UI
        figma.ui.onmessage = msg => {
            if (msg.type === 'saveShadows') {
                updateElevation_1.default(figma, currentContainer, msg);
            }
        };
        // update ui if selection changes
        figma.on('selectionchange', () => {
            // get updated selection
            const updatedContainer = getCurrentContainer_1.default(figma);
            // if new selection !== old selection run bootUI again
            if (updatedContainer !== currentContainer) {
                currentContainer = updatedContainer;
                // refresh UI
                refreshUi_1.default(figma, currentContainer);
            }
        });
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            const dependencies = ['exports'];
            const factory = (exports) => {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies, factory };
        }
    }
    const instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        const define = get_define(name);
        instances[name] = {};
        const dependencies = define.dependencies.map(name => resolve(name));
        define.factory(...dependencies);
        const exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();