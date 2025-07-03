import { registerPlugin } from '@capacitor/core';
const OpenPdf = registerPlugin('OpenPdf', {
    web: () => import('./web').then((m) => new m.OpenPdfWeb()),
});
export * from './definitions';
export { OpenPdf };
//# sourceMappingURL=index.js.map