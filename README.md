# ConditionUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development 
Code for generating component to your custom module within library is:
ng generate component --project <custom_module_name> <component_name>

The best practice is to separate pages and components in your custom module so you could add a path when generating new Angular component like:

ng generate component --project <custom_module_name> pages/<page_name>
where pages/ is a folder within your generated page component would be and components/ is a folder within your generated component would be.

Code for generating service to your custom module within the library is:
ng generate service --project <custom_module_name> <service_name>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
