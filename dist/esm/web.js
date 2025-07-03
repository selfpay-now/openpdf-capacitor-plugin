import { WebPlugin } from '@capacitor/core';
export class OpenPdfWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map