import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OpenPdfPlugin)
public class OpenPdfPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "OpenPdfPlugin"
    public let jsName = "OpenPdf"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPendingPdfOpened", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "clearPendigPfOpened", returnType: CAPPluginReturnPromise)
    ]

    private var pendingOpenedPdfUri: String?
    
    @objc func getPendingPdfOpened(_ call: CAPPluginCall) {
        if let pendingUri = pendingOpenedPdfUri {
            call.resolve([
                "pdfuri": pendingUri
            ])
            pendingOpenedPdfUri = nil
            return
        }
        call.resolve()
    }
    
    @objc func clearPendigPfOpened(_ call: CAPPluginCall) {
        pendingOpenedPdfUri = nil
        call.resolve()
    }
    
    
    @objc public func notifyPdfUpdate(pdfbase64: String) {
        self.pendingOpenedPdfUri = pdfbase64
        let data: [String: Any] = [
            "pdfuri": pdfbase64
        ]
        notifyListeners("pdfOpened", data: data)
    }
    
}
