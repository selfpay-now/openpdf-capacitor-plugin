// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "SelfpaynowOpenpdf",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "SelfpaynowOpenpdf",
            targets: ["OpenPdfPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "OpenPdfPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/OpenPdfPlugin"),
        .testTarget(
            name: "OpenPdfPluginTests",
            dependencies: ["OpenPdfPlugin"],
            path: "ios/Tests/OpenPdfPluginTests")
    ]
)