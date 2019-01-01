# oilfieldOS-mobile-app

============================

This is the second part of the oilfieldOS project. To run the project you first need to setup
oilfieldOS-main (https://github.com/apriside/oilfieldOS-main).

PROJECT DIRECTORY STRUCTURE
-------------------

      src/                  contains all the source files for js mobile application
      src/layouts/          contains different layouts and sidebar/header/top bar for the application
      src/assets/           contains all asset files like fonts, images
      src/bundles/          contains all main js files for the modules and submodules
      src/components/       contains all reusable components of the application
      src/modals/           contains reusable modal files
      scripts/              contains scrips for compiling minified js and executing the application

REQUIRED SOFTWARE
------------
To work with this project you will need:

      Node.js
      NPM

SETUP
------------
Follow these steps to setup the oilfieldOS-main project
#### Repository
1. Install dependencies by
    ~~~
    npm i
    ~~~
2. Start the browser version by
    ~~~
    npm start
    ~~~

Compiling mobile application
------------
Android (Android studio needed)
To setup android studio and cordova follow
https://cordova.apache.org/docs/en/latest/guide/platforms/android/

To deploy android mobile version
1. Compile js application
    ~~~
    npm run-script build
    ~~~
2. Build android platform
    ~~~
    cordova build android
    ~~~
3. Deploy to android platform
   ~~~
   cordova run android
   ~~~

iOS
To setup xcode and cordova follow
https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html

To deploy iOS mobile version
1. Compile js application
    ~~~
    npm run-script build
    ~~~
2. Build android platform
    ~~~
    cordova build ios
    ~~~
3. Deploy to android platform
   ~~~
   cordova run ios
   ~~~