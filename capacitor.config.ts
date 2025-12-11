import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.makewrld.app',
  appName: 'FAÇA O MUNDO',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      backgroundColor: "#000000",
      launchShowDuration: 2000,
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
    },
    Keyboard: {
      resize: "body",
      style: "DARK",
      resizeOnFullScreen: true,
    }
  }
};

export default config;
