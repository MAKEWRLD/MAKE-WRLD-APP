# MAKE WRLD - Guia de Compilação Android

Este guia explica como gerar a aplicação Android (APK) para o projeto MAKE WRLD.

## 1. Preparação da Imagem do Artista

Antes de compilar, você precisa adicionar sua foto real:
1. Crie a pasta: `public/assets/img/` (se não existir, crie na raiz do projeto ou dentro de `public`).
2. Adicione sua foto com o nome: `artist_bio.jpg`.

## 2. Instalação de Dependências

Certifique-se de que tem o Node.js e o Android Studio instalados.

No terminal, na raiz do projeto, execute:

```bash
# 1. Instalar dependências do projeto e do Capacitor
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
```

## 3. Preparação do Projeto Android

```bash
# 2. Construir a versão web (gera a pasta dist)
npm run build

# 3. Adicionar a plataforma Android (apenas na primeira vez)
npx cap add android

# 4. Sincronizar os arquivos web com a pasta nativa Android
npx cap sync
```

## 4. Gerar o APK

### Opção A: Via Android Studio (Recomendado)

```bash
npx cap open android
```
1. O Android Studio irá abrir. Aguarde o "Gradle Sync" terminar.
2. No menu superior, vá em **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
3. O APK (Debug) será gerado em: `android/app/build/outputs/apk/debug/app-debug.apk`.
4. Transfira este arquivo para o seu telemóvel e instale.

### Opção B: Via Linha de Comandos (Rápido)

Se já tiver o ambiente Android configurado no terminal:

```bash
cd android
./gradlew assembleDebug
```

O ficheiro APK estará em `android/app/build/outputs/apk/debug/`.

## 5. Publicar na Play Store (Release)

Para criar a versão final (AAB) para a Google Play:
1. Abra o Android Studio (`npx cap open android`).
2. Vá em **Build > Generate Signed Bundle / APK**.
3. Escolha **Android App Bundle**.
4. Crie uma "Keystore" (guarde a senha em local seguro!).
5. Prossiga até finalizar. O ficheiro `.aab` será gerado para upload na Play Store Console.
