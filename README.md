# BreakingBad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


Run `npm run build` for generate a prod version for deploy the app, inside that `dist` folder, this commando will run : lint + unit tests + e2e test and if all was running with success, the version will be generated.

Run `npm run test` for run the unit tests (with watcher).

Run `npm run coverage` for run the unit tests.

Run `npm run lint` for run the lint and fix all possible issues for lint

Run `npm run e2e` for run the end to end tests.
    
 

## Solution

For this project I use a simple solution for list all "breaking bad" characters by API https://www.breakingbadapi.com/  :

* Get all characters
* Set max id for send to get characters with pagination resource
* Detail Page by angular routes

## Highlights
* Clean code
* bdd for tests
* e2e tests
* angular components
* angular routes
* Reactive programming with RXJS and more things you can be seen in the code.
