# React.JS

![image](https://github.com/sanu151/React.JS/assets/68671274/e5da8d31-081f-446d-95eb-31ae804fde35)

*React.JS tutorial, codes and notes*

* **Official React Documentation:** [https://legacy.reactjs.org/](https://legacy.reactjs.org/) 

**What is React**

* React is a flexible, efficient, open-source JavaScript libray.
* It was developed by Facebook back in 2013 for building user interfaces (front end).
* Facebook Software Engineer, Jordan Walke, created it.

**Why React?**
* It allows us to create a complex UI by making components (small & isolated pieces of code)
* components are reuseable.
* Load fast
* External plugin
* Around 45% of world's website use React.
* Major brands like Facebook, Instragram, Yahoo, Netflix, Airbnb, dropbox using react

**React Component**

![image](https://github.com/sanu151/React.JS/assets/68671274/bbb6b75f-4465-4d84-8b67-579ad84c9828)

Example: **`message.js`**
```JavaScript
import React from 'react
export default function Message() {
  return (
    <h1 style={{backgroundColor: "#ffa45b", textAlign: "center}}>
      Welcome to React
    </h1>
  }
}
```

**Environment setup**

* Download and Install VSCode -> http://code.visualstudio.com/
* Download and Install Node.js -> http://nodejs.org/en/download/
  > Check the node version : node--version

**Create first React project with Vite**

*Compatibility Note* : 
Vite requires Node.js version 18+. 20+. However, some templates require a higher Node.js version to work.

*React project using vite*
```
F:\WebDevelopment\React.JS> npm create vite@latest
√ Project name: ... blog-project-react
√ Select a framework: » React // Select using Arrows
√ Select a variant: » JavaScript // Select using Arrows

Scaffolding project in F:\WebDevelopment\React.JS\blog-projcet-react...

Done. Now run:

  cd blog-projcet-react
  npm install
  npm run dev

PS F:\WebDevelopment\React.JS> cd .\blog-projcet-react\
PS F:\WebDevelopment\React.JS\blog-projcet-react> npm install

added 278 packages, and audited 279 packages in 46s

103 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS F:\WebDevelopment\React.JS\blog-projcet-react> npm run dev

> blog-projcet-react@0.0.0 dev
> vite


  VITE v5.2.11  ready in 262 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

*React Project using CRA*

```
PS F:\WebDevelopment\React.JS> cd .\React-app-CRA\
PS F:\WebDevelopment\React.JS\React-app-CRA> npx create-react-app my-app
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in F:\WebDevelopment\React.JS\React-app-CRA\my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1489 packages in 3m

258 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 67 packages, and changed 1 package in 16s

262 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1556 packages in 4s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created my-app at F:\WebDevelopment\React.JS\React-app-CRA\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
PS F:\WebDevelopment\React.JS\React-app-CRA> cd .\my-app\   
PS F:\WebDevelopment\React.JS\React-app-CRA\my-app> npm start
Starting the development server...

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.56.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

**JSX & JS Expression**

What is JSX?

* JSX stands for JavaScript XML
* JSX allws us to wirte and add HTML in React.

JSX and JS expressions are a powerful combination in React that allows you to write cleaner and more dynamic UIs.

* **JSX (JavaScript XML)** is a syntax extension for JavaScript that resembles HTML. It lets you write HTML-like structures within your JavaScript code.

* **JS Expressions** are any valid JavaScript code snippets you can embed within JSX using curly braces (`{}`). This unlocks functionalities like:
  * **Dynamic Content:** Include variables, function calls, or calculations directly in your JSX to create elements that update based on data.
  * **Conditional Rendering:** Use expressions within JSX to conditionally render elements based on certain conditions.  
  * **Readability:**  Combine JSX's structure with JavaScript's power for a more intuitive way to define UI components.

**CSS Styling in JSX**

There are a few ways to apply CSS styles to components in JSX. The most common approach is to use a separate CSS file and reference it using the className attribute in your JSX. This keeps your styles organized and maintainable. However, JSX also allows for inline styles and CSS-in-JS libraries which can be useful for specific situations.

JSX offers a few methods for incorporating CSS styles into your React components:

1. **Class Names:** This is the most common approach. You define your styles in a separate CSS file and then reference the class names within the `className` attribute of your JSX element. This keeps styles organized and reusable across components.

2. **Inline Styles:** While less preferred due to potential readability issues, you can define styles directly within your JSX using a JavaScript object within curly braces `{}`. This approach is generally used for one-off styling or dynamic styles based on props.

3. **CSS-in-JS Libraries:** These libraries allow you to write CSS styles directly within your JavaScript files using techniques like styled components or emotion. This offers features like scoped styles and easier styling of dynamic components, but adds another layer of complexity.

**React Component**

React components are the fundamental building blocks of a React application. They are reusable pieces of code that encapsulate UI logic and data. Here's a breakdown of key concepts:

**Types of Components:**

* **Function Components:** These are the simpler and more common type of component in modern React. They are written as JavaScript functions that return JSX (a syntax extension for describing UI elements). They are preferred for their ease of use and readability.

* **Class Components:** While still functional, class components are less common these days. They involve defining a class that inherits from React.Component and have methods for lifecycle management (like `render`) and managing internal state.

**Key Characteristics:**

* **Reusable:** Components can be used multiple times throughout your application, promoting code maintainability and reducing redundancy.
* **Composable:** Components can be nested within other components, allowing you to build complex UIs from smaller, independent pieces.
* **Props:** Components receive data (props) from their parent components, which allows for customization and dynamic behavior.
* **State (Optional):** Function components can manage internal state using hooks (introduced in React 16.8) while class components have built-in state management. State allows components to react to user interactions or data changes.

**Benefits of using React Components:**

* **Improved Code Organization:** Components break down complex UIs into manageable pieces, making code easier to understand and maintain.
* **Efficient Development:** Reusability reduces code duplication and streamlines development.
* **Maintainability:** Changes to a component's logic or UI are isolated, minimizing the impact on other parts of the application.

Here are some resources to learn more about React components:

* **React Components Tutorial:** [https://www.w3schools.com/react/react_components.asp](https://www.w3schools.com/react/react_components.asp)

