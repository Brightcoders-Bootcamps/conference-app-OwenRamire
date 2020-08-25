# Setup

# score with CodeFactor
[Score](https://www.codefactor.io/repository/github/brightcoders-bootcamps/conference-app-owenramire)

## Setup for navigation
1. We are going to use [React Navigation](https://reactnavigation.org/docs/getting-started/) for navigate between screens also we need a [Top Tab Navigator](https://reactnavigation.org/docs/material-top-tab-navigator)
    - Run `npm install @react-navigation/native`  
    - If you are using React Native CLI, run `npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view` to install the dependencies into a bare React Native proyect
    - To Top tab navigador. Run `npm install @react-navigation/material-top-tabs react-native-tab-view`

2. Icons by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)for the app
    - Run `npm install --save react-native-vector-icons`
    - For each platform (iOS/Android) you plan to use, follow one of the options for the corresponding platform.
        - A quick option to both platforms `react-native link`. 
        Run: `react-native link react-native-vector-icons` or `npx react-native link react-native-vector-icons`
        - For more information go to the documentation of [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Linear gradients
We need to use the `<LinearGradient>` component of [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient) 
- ### install
  - With YARN run: `yarn add react-native-linear-gradient`
  - With NPM RUN: `npm install react-native-linear-gradient --save``
    - With RN  >= 0.60 run: `npx pod-install`
- ### Linking
  - If you use React Native >= 0.60 you don't need to link *react-native-linear-gradient*
  - If you use **React Native <= 0.59** link with `react-native link react-native-linear-gradient`
  - If you want to do it manual just follow the instruction in the [manual part](https://github.com/react-native-community/react-native-linear-gradient#manual)

## React-native-firebase 
This library will help us to use the Firebase services in our app. We need to install *react-native-firebase* with NPM or YARN:
- NPM: `npm install --save @react-native-firebase/app`
- YARN: `yarn add @react-native-firebase/app`