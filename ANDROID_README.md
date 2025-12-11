# MAKE WRLD - Guia de Compilação Android & Play Store

Este guia explica como finalizar, gerar ícones e publicar a aplicação Android (APK/AAB).

## 1. Instalar Dependências

No terminal, na raiz do projeto:

```bash
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/assets --save-dev
```

## 2. Gerar Ícones e Splash Screen

O Capacitor possui uma ferramenta oficial para gerar ícones automaticamente. 
**Importante:** Você precisa ter as imagens originais na pasta `assets` (crie esta pasta na raiz do projeto, fora de `public`, para este passo).

1. Crie uma pasta `assets` na raiz do projeto.
2. Coloque o seu ícone/logo em `assets/logo.png` (deve ser 1024x1024 px).
3. Coloque a imagem de splash em `assets/splash.png` (deve ser 2732x2732 px).
4. Execute o comando mágico:

```bash
npx capacitor-assets generate --android
```

Isso irá criar e posicionar automaticamente todos os ícones `mipmap` e telas de splash dentro da pasta `android/`.

## 3. Preparação do Projeto

```bash
# 1. Construir a versão web (gera a pasta dist)
npm run build

# 2. Sincronizar os arquivos web com a pasta nativa Android
npx cap sync
```

## 4. Assinar a App (Keystore) para Google Play

Para publicar na Play Store, você precisa de uma chave (Keystore).

1. Abra o terminal na pasta `android/app`.
2. Execute o comando para gerar a chave (guarde a senha e o arquivo!):

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

3. Mova o arquivo `my-release-key.keystore` para `android/app/`.

## 5. Gerar o Bundle (AAB) para a Play Store

1. Abra o Android Studio:
   ```bash
   npx cap open android
   ```
2. No Android Studio, vá em **Build > Generate Signed Bundle / APK**.
3. Escolha **Android App Bundle** (obrigatório para novas apps).
4. Selecione a Keystore criada no passo 4.
5. Selecione a variante `release`.
6. O arquivo `.aab` será gerado em `android/app/release/`. Faça upload deste arquivo na Google Play Console.

## 6. Versões

Para lançar atualizações no futuro, abra `android/app/build.gradle` e altere:
- `versionCode`: Aumente +1 a cada upload.
- `versionName`: Ex: "1.0.1", "1.1.0".

## 7. Notificações Push (Opcional)

Se desejar ativar notificações:
1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione uma app Android com o pacote `com.makewrld.app`.
3. Baixe o `google-services.json` e coloque em `android/app/`.
4. Instale o plugin: `npm install @capacitor/push-notifications`.
5. Adicione o código de permissão no `App.tsx` (consulte a documentação do Capacitor).
