# MAKE WRLD - Android App Build Instructions

To generate the `com.makewrld.app` APK file from this project, follow these steps.

## Prerequisites
1. **Node.js** installed.
2. **Android Studio** installed (with Android SDK and Virtual Device/Emulator).

## 1. Install Dependencies
Run the following command in your terminal to install Capacitor (the bridge between React and Android):

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

## 2. Initialize Android Platform
Generate the `android` folder which contains the native project structure.

```bash
# Build the React web app first
npm run build

# Add the Android platform
npx cap add android
```

## 3. Sync Configuration
Whenever you make changes to the `build` folder (your React code) or `capacitor.config.ts`, you must sync:

```bash
npx cap sync
```

## 4. Icons and Splash Screen (Optional)
To generate app icons automatically using your artist image:

1. Create a folder `resources` in the root.
2. Add your icon as `resources/icon.png` (1024x1024) and splash as `resources/splash.png` (2732x2732).
3. Install the asset tool: `npm install @capacitor/assets --save-dev`
4. Run: `npx capacitor-assets generate --android`

## 5. Build the APK

### Option A: Using Android Studio (Recommended)
1. Open the Android project:
   ```bash
   npx cap open android
   ```
2. Wait for Gradle to sync.
3. Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
4. The APK will be generated in `android/app/build/outputs/apk/debug/app-debug.apk`.

### Option B: Command Line
```bash
cd android
./gradlew assembleDebug
```

## 6. Release (Google Play)
To build a release Bundle (AAB) for the Play Store:
1. In Android Studio, go to **Build > Generate Signed Bundle / APK**.
2. Choose **Android App Bundle**.
3. Create a new Key store (keep your password safe!).
4. Click Finish. The `.aab` file will be generated.
