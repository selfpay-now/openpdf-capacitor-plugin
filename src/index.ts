import { registerPlugin } from '@capacitor/core';

import type { OpenPdfPlugin } from './definitions';

const OpenPdf = registerPlugin<OpenPdfPlugin>('OpenPdf', {
  web: () => import('./web').then((m) => new m.OpenPdfWeb()),
});

export * from './definitions';
export { OpenPdf };
