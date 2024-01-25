# WhitelistUi

ng new whitlist-ui
ng serve or npm start
- To test the creation

ng g m main
	Rename folder to keep it on the top of the tree
    import main module on app module
    import HttpClientModule, BrowserModule, BrowserAnimationsModule on main module

	ng g c home
    Add router for home on app-routing
    Export home component on main module
- delete content from app.component.html
- Put the tag router-outlet on app.component.html


- create a folder @serives to keep all services together
ng g s app 
    Prepare the service app to execute all the http request
    


Node version 18.12.1
Npm version 8.19.4
Ng version 16.0.5
	@angular-devkit/architect       0.1600.5
	@angular-devkit/build-angular   16.0.5
	@angular-devkit/core            16.0.5
	@angular-devkit/schematics      16.0.5
	@angular/cdk                    16.0.4
	@angular/material               16.0.4
	@schematics/angular             16.0.5	
	rxjs                            7.8.1
	typescript                      5.0.4
	
ng add @angular/material
npm i @auth0/angular-jwt

npm install @angular/material
npm install @coreui/angular@
npm install @coreui/icons
npm install @coreui/icons-angular

npm install @angular/flex-layout --save



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
