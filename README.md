# React.JS

![image](https://github.com/sanu151/React.JS/assets/68671274/e5da8d31-081f-446d-95eb-31ae804fde35)

*React.JS tutorial, codes and notes*

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

