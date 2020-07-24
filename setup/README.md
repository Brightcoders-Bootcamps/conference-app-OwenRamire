# Setup

# score with CodeFactor
[Score](https://www.codefactor.io/repository/github/brightcoders-bootcamps/conference-app-owenramire)

Escribe aquí los pasos para ejecutar/probar tu proyecto y el nombre de los integrantes de tu equipo

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
