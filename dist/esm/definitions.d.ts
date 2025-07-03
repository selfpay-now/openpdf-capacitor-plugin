import { PluginListenerHandle } from '@capacitor/core';
export interface OpenPdfPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getPendingPdfOpened(): Promise<{
        pdfuri: string;
    }>;
    clearPendigPfOpened(): Promise<void>;
    addListener(eventName: 'pdfOpened', listenerFunc: (info: {
        value: string;
    }) => void): Promise<PluginListenerHandle>;
}
