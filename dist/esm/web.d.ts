import { PluginListenerHandle, WebPlugin } from '@capacitor/core';
import type { OpenPdfPlugin } from './definitions';
export declare class OpenPdfWeb extends WebPlugin implements OpenPdfPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getPendingPdfOpened(): Promise<{
        pdfuri: string;
    }>;
    clearPendigPfOpened(): Promise<void>;
    addListener(_eventName: 'pdfOpened', _listenerFunc: (info: {
        value: string;
    }) => void): Promise<PluginListenerHandle>;
}
