![BrightCoders Logo](imgs/logo-bc.png)

# React Native Conference App

![Cover](imgs/cover.jpg)

## Pre-requisitos
-  React Native
  - [ ] Instalar el entorno de desarrollo [**:warning: utiliza la opción React Native CLI Quickstart NO utilizar Expo**](https://reactnative.dev/docs/environment-setup)
- Editor de texto
  - [ ] Elegir un editor para codificar, puede ser [Visual Studio Code](https://code.visualstudio.com/), o algúno similar.
  - [ ] Agregar la extensión [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para mantener un estilo consistente en tu código
  - [ ] Instalar [ESLint](https://eslint.org/) para ayudarte a encontrar y arreglar problemas de tu código
  - [ ] Agregar la extensión [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integrar la funcionalidad de Eslint
- Calidad de código. Para analizar la calidad de tu código necesitarás
  - [ ] Instalar y configurar [DeepScan](https://deepscan.io/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis
  - [ ] Instalar y configurar [CodeFactor](https://www.codefactor.io/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis

## Requerimientos funcionales

Se requiere desarrollar una aplicación móvil que permita administrar la agenda de un evento de conferencias que cumpla con los siguientes requerimientos:

- [ ] Los usuarios deben ser capaces de ver una pantalla de Splash (presentación) al iniciar la App
- [ ] Los usuarios deben ser capaces de registrarse
  - [ ] El registro debe guardarse en firebase
- [ ] Los usuarios deben ser capces de logearse
  - [ ] El registro debe guardarse en un firebase
- [ ] Los usuarios deben ser capaces de editar su perfil
  - [ ] Nombre
  - [ ] Correo electrónico
  - [ ] Foto
- [ ] Los usuarios deben ser capaces de agregar eventos (conferencias) a la agenda
  - [ ] Nombre de la conferencia
  - [ ] Nombre del conferencista
  - [ ] Fecha
  - [ ] Hora
  - [ ] Los eventos deben ser almacenados en firebase
- [ ] Los usuarios deben ser capaces de ver una lista de los eventos agendados
  - [ ] Deben ser recuperados desde firebase
  
## Requerimientos no-funcionales
- Calidad
  - [ ] Utilizar un estilo de código estandarizado (revisado por Eslint)
  - [ ] Pruebas unitarias [Jest](https://jestjs.io/) y pruebas automatizadas con [Detox](https://github.com/wix/Detox)
  - [ ] Puntuación **Good** obtenida en DeepScan
  - [ ] Puntuación **A** obtenida en CodeFactor
- Ejecución 
  - [ ] Puede ejecutarse en Android o iOs
- Código fuente
  - [ ] Orientado a Objetos
  - [ ] Métodos pequeños
  - [ ] Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)

## Tecnologías
- [ ] Lenguaje de programación React Native (CLI **no utilizar Expo**)
- [ ] Pruebas unitarias [Jest](https://jestjs.io/) 
- [ ] Pruebas automatizadas con [Detox](https://github.com/wix/Detox)

## Entregable
- [ ] Código fuente en Github
- [ ] Incluir en el repositorio la puntuación obtenida (badge) en DeepScan
- [ ] Incluir en el repositorio la puntuación obtenida (badge) en CodeFactor
- [ ] Documentar en [este archivo](setup/README.md) los pasos necesarios para ejecutar la App
- [ ] El código de la App debe implementar pruebas unitarias con Jest y pruebas automatizadas con Detox
- [ ] [Los commits deben se significativos](https://medium.com/better-programming/you-need-meaningful-commit-messages-d869e44e98d4)
- [ ] [Cada Pull Request implementa una sola funcionalidad](https://github.com/bright-coders/commons/tree/master/topics/pull-request)

## Evaluación / Revisión

- [ ] Trabajarás un ```ìssue``` a la vez
- [ ] Publicarás de manera **diaria** tus avances en el repositorio remoto
- [ ] Una vez que termines un ```ìssue``` harás un Pull Request 
- [ ] Antes de hacer pull request deberás asegurarte que la puntuación obtenida en DeepScan sea **Good** y en CodeFactor **A**
- [ ] Cada Pull Request deberá ser revisado (Code Review) por por lo menos 2 de tus compañeros BrightCoders
- [ ] Una vez que tengas la revisión (Code Review) de tus mentores
- [ ] Para hacer ```Merge```necesitas la aprobación de por lo menos 2 de tus compañeros Brightcoders y 1 mentor

En las revisiones se prestará atención a los siguientes aspectos:
- [ ] Cumplimiento de los requerimientos funcionales
- [ ] Cumplimiento de los requerimientos no funcionales
- [ ] Orientación a objetos
- [ ] Estructura de archivos
- [ ] Pruebas
- [ ] Código duplicado (no debe haber código duplicado)
- [ ] Separación de intereses (separation of concerns)
- [ ] Convenciones del lenguaje
- [ ] Claridad de la solución
- [ ] Abstracción
- [ ] Uso de características propias de React Native
- [ ] Uso de Git, commits y pull request bien definidos y atómicos
- [ ] Puntuación obtenida en DeepScan
- [ ] Puntuación obtenida en CodeFactor

## Organización

Los requerimientos funcionales están divdidos en ``ìssues`` los cuales están disponibe en el apartado **Issues** de este repositorio.

## Setup

[Aquí se describen los pasos necesarios para ejecutar y probar este proyecto](setup/README.md)

## Recursos
- [React Native Documentation](https://reactnative.dev/)
- [The Complete React Native and Redux Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)
- [React Native: Advanced Concepts](https://www.udemy.com/course/react-native-advanced/)
- [Jest](https://jestjs.io/)
- [Detox](https://github.com/wix/Detox)
- [DeepScan](https://deepscan.io/)
- [CodeFactor](https://www.codefactor.io/)
