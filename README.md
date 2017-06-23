# Angular Unit Test Samples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

The project uses `json-server`, `bootstrap`, and `angular 2` as a RESTful server and client.  There are unit and component and service tests composed for each of the files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running
Replace xx.xx.xx.xx with IP address of the machine where the code resides 
(please note that you cannot use 0.0.0.0 due to the recent webpack security fix, and as of Angular CLI v.1.0.1 and webpack-dev-server 2.4.3, 
it now triggers "Invalid Host Header" error)

```bash
$ node server          # runs the server to serve API calls to "/server"
$ npm run start        # runs the client with the proxy "http://xx.xx.xx.xx:3000/server" => "http://localhost:3009 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Browse to the app
`http://xx.xx.xx.xx:3000`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The source code is by Ken Rimple, cloned from (https://github.com/krimple/angular2-unittest-samples-release), which provides 
the source code for [Testing Angular 2.0.x Services and Http with Jasmine and Karma](http://chariotsolutions.com/blog/post/testing-angular-2-0-x-services-http-jasmine-karma/) article

The code was upgraded to support Angular4 onwards.
