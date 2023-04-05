"use strict";
// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const frontEndHost = require("./frontEndHost");
const rxjs = require("rxjs");
const connection = require("../connection");
const logger_1 = require("../logger");
const uuid_1 = require("uuid");
function activate(context) {
    configure(window, context);
    logger_1.Logger.default.info(`set up 'webview' host module complete`);
}
exports.activate = activate;
function configure(global, context) {
    if (!global) {
        global = window;
    }
    const remoteToLocal = new rxjs.Subject();
    const localToRemote = new rxjs.Subject();
    localToRemote.subscribe({
        next: envelope => {
            context.postKernelMessage({ envelope });
        }
    });
    const webViewId = (0, uuid_1.v4)();
    context.onDidReceiveKernelMessage((arg) => {
        var _a, _b;
        if (arg.envelope && arg.webViewId === webViewId) {
            const envelope = (arg.envelope);
            if (connection.isKernelEventEnvelope(envelope)) {
                logger_1.Logger.default.info(`channel got ${envelope.eventType} with token ${(_a = envelope.command) === null || _a === void 0 ? void 0 : _a.token} and id ${(_b = envelope.command) === null || _b === void 0 ? void 0 : _b.id}`);
            }
            remoteToLocal.next(envelope);
        }
        else if (arg.webViewId === webViewId) {
            const kernelHost = (global['webview'].kernelHost);
            if (kernelHost) {
                switch (arg.preloadCommand) {
                    case '#!connect': {
                        logger_1.Logger.default.info(`connecting to kernels from extension host`);
                        const kernelInfos = (arg.kernelInfos);
                        for (const kernelInfo of kernelInfos) {
                            const remoteUri = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
                            if (!kernelHost.tryGetConnector(remoteUri)) {
                                kernelHost.defaultConnector.addRemoteHostUri(remoteUri);
                            }
                            connection.ensureOrUpdateProxyForKernelInfo(kernelInfo, kernelHost.kernel);
                        }
                    }
                }
            }
        }
    });
    frontEndHost.createHost(global, 'webview', configureRequire, entry => {
        context.postKernelMessage({ logEntry: entry });
    }, localToRemote, remoteToLocal, () => {
        const kernelInfos = (global['webview'].kernelHost).getKernelInfos();
        const hostUri = (global['webview'].kernelHost).uri;
        context.postKernelMessage({ preloadCommand: '#!connect', kernelInfos, hostUri, webViewId });
    });
}
function configureRequire(interactive) {
    if ((typeof (require) !== typeof (Function)) || (typeof (require.config) !== typeof (Function))) {
        let require_script = document.createElement('script');
        require_script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
        require_script.setAttribute('type', 'text/javascript');
        require_script.onload = function () {
            interactive.configureRequire = (confing) => {
                return require.config(confing) || require;
            };
        };
        document.getElementsByTagName('head')[0].appendChild(require_script);
    }
    else {
        interactive.configureRequire = (confing) => {
            return require.config(confing) || require;
        };
    }
}
//# sourceMappingURL=activation.js.map