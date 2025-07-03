import { WebPlugin } from '@capacitor/core';

import type { OpenPdfPlugin } from './definitions';

export class OpenPdfWeb extends WebPlugin implements OpenPdfPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
