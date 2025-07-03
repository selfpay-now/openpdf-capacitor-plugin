var capacitorOpenPdf = (function (exports, core) {
    'use strict';

    const OpenPdf = core.registerPlugin('OpenPdf', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.OpenPdfWeb()),
    });

    class OpenPdfWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
        async getPendingPdfOpened() {
            console.log('getPendingPdfOpened');
            return { pdfuri: 'test' };
        }
        async clearPendigPfOpened() {
            console.log('clearPendigPfOpened');
        }
        async addListener(_eventName, _listenerFunc) {
            throw new Error('addListener is not supported on web');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OpenPdfWeb: OpenPdfWeb
    });

    exports.OpenPdf = OpenPdf;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
