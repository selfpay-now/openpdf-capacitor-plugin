import { PluginListenerHandle, WebPlugin } from '@capacitor/core';

import type { OpenPdfPlugin } from './definitions';

export class OpenPdfWeb extends WebPlugin implements OpenPdfPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getPendingPdfOpened(): Promise<{ pdfuri: string }> {
    console.log('getPendingPdfOpened');
    return { pdfuri: 'test' };
  }

  async clearPendigPfOpened(): Promise<void> {
    console.log('clearPendigPfOpened');
  }

  async addListener(_eventName: 'pdfOpened', _listenerFunc: (info: { value: string }) => void): Promise<PluginListenerHandle> {
    throw new Error('addListener is not supported on web');
  }
}
