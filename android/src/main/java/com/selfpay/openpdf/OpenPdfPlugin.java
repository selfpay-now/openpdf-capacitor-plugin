package com.selfpay.openpdf;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "OpenPdf")
public class OpenPdfPlugin extends Plugin {

    private String pendingOpenedPdfUri = null;

    // this is to handle the scenarios when the intent was handled before Javascript code in webview was not yet initialized
    @PluginMethod
    public void getPendingPdfOpened(PluginCall call) {
        if(pendingOpenedPdfUri != null) {
            JSObject ret = new JSObject();
            ret.put("pdfuri", pendingOpenedPdfUri);
            call.resolve(ret);
            pendingOpenedPdfUri = null;
            return;
        }
        call.resolve();
    }

    // in case the javacript code handled the intent through events the stored intent should be cleared
    @PluginMethod
    public void clearPendigPfOpened(PluginCall call) {
        pendingOpenedPdfUri = null;
        call.resolve();
    }

    public void NotifyPdfUpdate(String uri){
        // pdf is stored in case the listeners are not yet subscribed ( app was closed )
        this.pendingOpenedPdfUri = uri;
        JSObject ret = new JSObject();
        ret.put("pdfuri", uri);
        Log.i("pdfuri",uri);
        this.notifyListeners("pdfOpened", ret);
    }
}
