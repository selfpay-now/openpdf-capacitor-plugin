import { PluginListenerHandle } from '@capacitor/core';

export interface OpenPdfPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  addListener(eventName: 'pdfOpened', listenerFunc: (info: { value: string }) => void): PluginListenerHandle;
}
