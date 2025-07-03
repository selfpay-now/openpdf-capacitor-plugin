import { WebPlugin } from '@capacitor/core';
import type { OpenPdfPlugin } from './definitions';
export declare class OpenPdfWeb extends WebPlugin implements OpenPdfPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
