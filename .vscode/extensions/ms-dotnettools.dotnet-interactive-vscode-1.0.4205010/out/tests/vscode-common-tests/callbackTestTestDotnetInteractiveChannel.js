"use strict";
// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackTestTestDotnetInteractiveChannel = void 0;
const rxjs = require("rxjs");
const polyglot_notebooks_1 = require("../../src/vscode-common/polyglot-notebooks");
const contracts_1 = require("../../src/vscode-common/polyglot-notebooks/contracts");
// executes the given callback for the specified commands
class CallbackTestTestDotnetInteractiveChannel {
    constructor(fakedCommandCallbacks) {
        this.fakedCommandCallbacks = fakedCommandCallbacks;
        this._receiverSubject = new rxjs.Subject();
        this.sender = polyglot_notebooks_1.KernelCommandAndEventSender.FromFunction((envelope) => {
            if ((0, polyglot_notebooks_1.isKernelCommandEnvelope)(envelope)) {
                const commandCallback = this.fakedCommandCallbacks[envelope.commandType];
                if (!commandCallback) {
                    throw new Error(`No callback specified for command '${envelope.commandType}'`);
                }
                const eventEnvelope = commandCallback();
                try {
                    this._receiverSubject.next(eventEnvelope);
                }
                catch (e) {
                    const eventEnvelope = {
                        eventType: contracts_1.CommandFailedType,
                        event: {
                            message: e
                        },
                        command: envelope,
                    };
                    this._receiverSubject.next(eventEnvelope);
                    throw e;
                }
            }
        });
        this.receiver = polyglot_notebooks_1.KernelCommandAndEventReceiver.FromObservable(this._receiverSubject);
    }
    waitForReady() {
        return Promise.resolve({ kernelInfos: [] });
    }
    dispose() {
        // noop
    }
}
exports.CallbackTestTestDotnetInteractiveChannel = CallbackTestTestDotnetInteractiveChannel;
//# sourceMappingURL=callbackTestTestDotnetInteractiveChannel.js.map