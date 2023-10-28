## 1. Install NodeJS and Angular

- Check nodejs version

```jsx
node --version
```

- **Install latest version of Angular**

### Install the Angular CLI

```jsx
npm install -g @angular/cli.
```

### Set up workspace and initial application

```jsx
ng new my-app
```

### Run the application

```jsx
cd my-app
ng serve --open
```

The `ng serve` command launches the server, **watches your files**, and rebuilds the app as you make changes to those files.

⇒ 1. You can leave `ng serve` running as you complete the next steps.

- **When you start project ⇒ You can see in src:**

  ***

  <!-- ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/56be37b7-c188-481f-8553-d41618273191/54b3ad86-0df5-44bc-a715-dfb77fee90c5/Untitled.png) -->

  - **When you explore src directory:**
    - `main.ts` is where the app start running.
    - `style.css` is the app's top level style sheet.
    - `index.html` is the app's top level HTML template.
    - `favicon.ico` is the app's icon, just as you would find in any web site.
      **⇒ main.ts: app start running**
  - **App's component files (`/app`)**

    - `app.component.ts` is the source file that describes the `app-root` component. This is a top level Angular component in the app.
    - **A component description includes:** `component’s code`, `HMTL template` and `styles, which can be described in this file or separate files`

    **⇒ In this app, the styles are in a separate file while the component's code and HTML template are in this file.**

    - `app.component.css` is the style sheet for this component.
    - **New components are added to this directory.**

  - **New components are added to this directory.**
  - **In the file explorer, find the files and directories that an Angular app needs to build and run, but they are not files that you normally interact with**
    1. `.angular` has files required to build the Angular app.
    2. `.e2e` has files used to test the app.
    3. `.node_modules` has the node.js packages that the app uses.
    4. `angular.json` describes the Angular app to the app building tools.
    5. `package.json` is used by `npm` (the node package manager) to run the finished app.
    6. `tsconfig.*` are the files that describe the app's configuration to the TypeScript compiler.

## 2. Create a new component in Angular

**⇒ When you create a new component, you use these properties:**

- `selector`: to describe how Angular refers to the component in templates.
- `standalone`: to describe whether the component requires a `[NgModule](https://angular.io/api/core/NgModule)`.
- `imports`: to describe the component's dependencies.
- `template`: to describe the component's HTML markup and layout.
- `styleUrls`: to list the URLs of the CSS files that the component uses in an array.
- **For example: I want to create Home Component : run this command:**

```jsx
ng generate component home --standalone --inline-template --skip-tests
```

- **Create a interface:**

```jsx
ng generate interface housinglocation
```

## 3. How to send data from the component to other components

> **Note: `bind` : assign the value of name field to value attribute of input and sets up a handler for the onchange event of the input that updates the value of the name property when it has been changed. When the component first renders, the input gets its value from the name field**

- **You'll continue the process of sharing data from the parent component to the child component by binding data to those properties in the template using property binding.**
- **Consider which is the parent component and which is the child component, input = ?, value = ?**

## 4. Use \*ngFor to list objects in component

### Equivalent using loop in js

- You can utilize `[ngFor](https://angular.io/api/common/NgFor)` to iterate over arrays and even asynchronous values

## 5. Angular services

> Angular services: provide a way for you to separate Angular data and `functions` that can be used by multiple components in your app. To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component. The component depends on those services and can't function without them.

> Dependency injection: is the mechanism that manages the dependencies of an app's components and the services that other components can use.

### Creating a new service for your app

```jsx
ng generate service housing --skip-tests
```

## 6. Add routing

> Routing is the ability to navigate from one component in the application to another

- **In [Single Page Applications (SPA)](https://angular.io/guide/router-tutorial#using-angular-routes-in-a-single-page-application), only parts of the page are updated to represent the requested view for the user.**
- Create a default details component

```jsx
ng generate component details --standalone --inline-template --skip-tests
```

- **Create routes.ts files in app**

**⇒ Configuration router in routes.ts**

```jsx
import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Home details",
  },
];

export default routeConfig;
```

- **After: add `provideRouter(routeConfig)` into `provider` in `bootstrapApplication` in `main.ts`**
- **Then adding `RouterModule` into `imports` part in `app.conponent.ts` file**

**⇒ Note: In the parent component, we have to add `<router-outlet></router-outlet>`**

## 7. Add HTTP communication

- **Firstly, configure the json server**

```jsx
npm install -g json-server
```

**⇒ create `db.json` in project. This is where you will store the data for json server**

- paste data into `db.json`

- To run json-server: enter this command

```jsx
json-server --watch db.json
```

> In your web browser, navigate to the `http://localhost:3000/locations` and confirm that the response includes the data stored in `db.json`.

- After we have url = `“http://localhost:3000/locations”` . Copy and paste into `.service.ts` file ⇒ update the dependent functions (asynchronous functions and promises)

### json-server help you:

- **use a local web server (`json-server`)**
- **use asynchronous service methods to retrieve data.**
