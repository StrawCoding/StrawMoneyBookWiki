---
title: Android Release And Play Upload
---

# Android-Release-And-Play-Upload

Play **AAB 上架**與**側載 APK 驗原生銀行**是兩條路。後者見 [Android-Native-Bank-APK](/operations/android-native-bank-apk)。Wear 軌道見 [Wear-Companion](/operations/wear-companion)。

## Generated files

```bash
cd frontend && npm run prepare:android:release
```

腳本：[prepare-android-release.mjs](https://github.com/StrawCoding/StrawMoneyBook/blob/main/frontend/scripts/prepare-android-release.mjs)。缺檔才 fallback `sync:android`，否則 `copy:android`。不要手改 generated files。

必要檔：

- `android/app/capacitor.build.gradle`
- `android/capacitor.settings.gradle`
- `android/capacitor-cordova-android-plugins/cordova.variables.gradle`

## AAB

```bash
npm run aab:build --prefix frontend
# gradlew :app:bundleRelease :wear:bundleRelease
```

上傳 GitHub Release：[`frontend/scripts/upload-aab-to-github.mjs`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/frontend/scripts/upload-aab-to-github.mjs)。version 跟 `frontend/package.json`；versionCode 由 gradle 推導。

## Play 軌道（現況，未拍板不改）

[`frontend/android/play-testing-channel.json`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/frontend/android/play-testing-channel.json)：

- 預設 `"channel": "internal"`
- closed 對應 phone `alpha`、wear `wear:WearOS`
- 正式 `*.0` tag → `play-production-release.yml`

Workflow 成功 ≠ 使用者在 Play 看得到。需邀請／opt-in。公開更新 JSON：`https://www.strawmb.com/app-update.json`。

## 引用

- [`.github/workflows/play-release.yml`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/.github/workflows/play-release.yml)
- [`.github/workflows/play-production-release.yml`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/.github/workflows/play-production-release.yml)
- [Closeout-And-Versioning](/operations/closeout-and-versioning)
