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

*Run first react project*
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
