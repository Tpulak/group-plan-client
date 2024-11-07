<div style="text-align:center">
    <h1 align="center">Group Plan</h1>
    <Image style="border-radius:15px" width=200 src="assets/images/AppIcon.jpeg"/>
</div>

### Table of Contents

1. [Intro](#intro)
2. [Technology and Packages used](#technology-and-packages-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Deployment](#deployment)

## Intro

This repository was developed as part of my CSCI 49900 capstone class. It was initially cloned from the main repository and includes the completed frontend for the Group Plan application.

Group plan is intended to be a mobile platform that will make meal planning easier, more fun, and less stressful for its Users.To get started on our Group Plan platform, you have two options: either create a new Group Plan account or simply log in using your Google credentials for seamless access. Once you're in, you can begin by creating your own groups, tailoring them to your specific taste or preferences in food, and then invite friends, colleagues, or like-minded individuals to join. Groups can be public and private. Public groups are open to all users on the platform, making it easy for anyone who shares your preference or taste to hop on board. On the other hand, private groups provide a more exclusive environment, with membership approval solely at the discretion of the group owner, ensuring a more controlled and private experience.

Our platform also brings a group search feature, allowing you to discover and join public or private groups that align with your interests and objectives. Group Plan enables you to propose meal suggestions for the upcoming week, providing a space for your group members to vote on their favorite choices. It's based on a collective approach to meal planning that ensures everyone's preferences are considered. With Group Plan, you can effortlessly create, connect, and collaborate, making every aspect of meal planning an enjoyable and seamless experience.

## Technology and Packages used

<p style="font-size:16px;">
    <a href="https://reactnative.dev/">React Native</a>
    <Image width=25 src="assets/images/React-icon.svg.png"/>
    : The framework to build and power the entire frontend
</p>
<p style="font-size:16px;">
    <a href="https://expo.dev/">Expo</a>
    <Image width=25 src="assets/images/expo-logo.png"/>
    : Ecosystem for testing the app and deployment
</p>
<p style="font-size:16px;">
    <a href="https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device">Xcode Simulators</a>
    <Image width=25 src="assets/images/xcode-simulator.png"/>
    : To run/test the Group Plan frontend on ios
</p>
<p style="font-size:16px;">
    <a href="https://developer.android.com/studio/run/emulator">Android Emulators</a>
    <Image width=25 src="assets/images/android-logo.png"/>
    : To run/test the Group Plan frontend on android
</p>

## Installation

Travel to the directory you wish to store the Group-Plan-Client repo and run:

```bash
$ git clone https://github.com/HansChaudry/Group-Plan-Client.git
```

Navigate into the directory for the group plan client then run:

```bash
$ npm install
```

<p>If you don't have node installed follow these <a href="https://nodejs.org/en/download/current">instructions</a> and you will able to install all the packages using npm and run the app.</p>

Switch to the expo-demo branch:

```bash
$ git checkout expo-demo
```

<p>Open an ios simulator or android emulator</p>
Start the app:

```bash
$ npx expo start
```

Follow the instructions in your terminal to open the app on the iphone or android simulators. Running the app from the expo-demo branch removes the requirement for running the backend locally as it communicates with the deployed backend.

## Usage

Steps to use Group Plan:

<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>

## Deployment

The Group Plan application is fully deployed with Expo. To use the app on your physical device:

<ol>
    <li>Download the <a href="https://expo.dev/client">Expo Go app</a> from the App Store or Play Store.</li>
    <li>Scan the the QR code for your device</li>
</ol>

<div style="display: flex; justify-content: space-around;">
   <div style="flex:1; text-align:center;">
        <p>iOS</p>
        <Image style="border-radius:15px" width=200 src="assets/images/eas-update-ios.svg"/>
    </div>
    <div style="flex:1; text-align:center;">
        <p>Android</p>
        <Image style="border-radius:15px" width=200 src="assets/images/eas-update-android.svg"/>
    </div> 
</div>
