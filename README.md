# React.JS

![image](https://github.com/sanu151/React.JS/assets/68671274/e5da8d31-081f-446d-95eb-31ae804fde35)

*React.JS tutorial, codes and notes*

* **Official React Documentation:** [https://legacy.reactjs.org/](https://legacy.reactjs.org/)

* **Projects Deployed Link :** https://app.netlify.com/teams/sanu151/overview

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

**Random Unique ID**
The `uuid` package in npm provides functionality for generating and working with Universally Unique Identifiers (UUIDs). It's a popular choice for creating unique identifiers in JavaScript applications. Here's a breakdown of what you can do with `uuid`:

**Installation:**

You can install the `uuid` package using npm or yarn:

```bash
npm install uuid
```

**Generating UUIDs:**

The `uuid` package offers various functions to generate different versions of UUIDs:

* **v1 (time-based):** Generates UUIDs based on the current time and the node's MAC address (if available). These are considered the most universally unique.
* **v3 (name-based and MD5 hash):** Generates UUIDs based on a namespace and a string value hashed with MD5.
* **v4 (random):** Generates random UUIDs. These are not guaranteed to be globally unique, but the probability of collision is very low.
* **v5 (name-based and SHA-1 hash):** Generates UUIDs based on a namespace and a string value hashed with SHA-1.

**Link :** https://www.npmjs.com/package/uuid

Here's an example of generating a v4 UUID:

```javascript
const { v4: uuidv4 } = require('uuid');

const uuid = uuidv4();
console.log(uuid); // Output: a string like '1f7b2c78-23e1-4f1b-a4d4-c72b39d3f39e'
```

or
```JavaScript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

**Class Component**

In React, class components are a way to define reusable code blocks for your application's UI. They are built using JavaScript classes that inherit from the built-in `React.Component` class. While still supported, React recommends using function components for new projects due to their simplicity and other benefits.

Here's a breakdown of key aspects of React class components:

**Structure:**

- Class components extend the `React.Component` class.
- They typically have a render method that defines the component's UI using JSX. 
- The render method receives the `props` (properties) object as an argument and  returns JSX elements describing the UI.

**Key Methods:**

- **render():** This is the required method in a class component. It takes the `props` and `state` (explained below) of the component and returns the JSX structure that represents the UI.
- **constructor(props):** This is an optional method where you can initialize the component's state using `this.state = { ... }`.

**State Management:**

- Class components can have internal state to store data specific to the component.
- State updates trigger the component to re-render with the updated data.
- You use the `setState()` method to update the component's state.

**Advantages of Class Components (compared to Function Components):**

- More complex UIs with lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`) for handling different stages of a component's lifecycle.
- Easier to manage complex state logic.

**Disadvantages (compared to Function Components):**

- Considered slightly more verbose and complex compared to function components.
- Can be harder to reason about due to separate render and state logic.

Here's a simple example of a React class component:

```javascript
import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

Even though React recommends function components for new projects, understanding class components is still valuable, especially if you're working on existing codebases that use them.

**React component under the hood**

In React, the magic behind JSX (the fancy HTML-like syntax you write for components) lies in a function called `React.createElement`. This function is the workhorse that takes your component descriptions and transforms them into a special data structure that React understands.

Here's a glimpse into what happens under the hood:

**JSX to `createElement`:**

- During compilation (usually handled by tools like Babel), JSX gets converted into calls to `React.createElement`.
- So, your code with JSX like `<div><h1>Hello</h1></div>` becomes something like `React.createElement('div', null, React.createElement('h1', null, 'Hello'))`.

**What `createElement` Does:**

1. **Validating Element Type:**
   - It checks if the first argument (often a string like `"div"`) is a valid element type (HTML tag, component function, or special symbols like `React.Fragment`).

2. **Creating the React Element:**
   - If valid, it creates a lightweight JavaScript object representing the React element.
   - This object typically contains properties like:
      - `type`: The type of element (e.g., `"div"`, component function)
      - `props`: An object containing attributes/properties passed to the element (if any)
      - `children`: An array containing child elements (other JSX elements converted to React elements)

3. **Validating Props and Children:**
   - React might perform additional checks on props and children depending on the element type. 

**Key Points to Remember:**

- `React.createElement` is the foundation for building React components.
- It transforms JSX syntax into a structured representation that React uses for rendering.
- While you might not directly use `createElement` in your code, understanding its role goes a long way in appreciating how React works.

**Additional Resources:**

- You can find the official documentation for `React.createElement` although it's considered a legacy API: [https://react.dev/reference/react/createElement](https://react.dev/reference/react/createElement)
- For a deeper dive into the inner workings of `createElement`, you can explore articles like: [https://github.com/mnindrazaka](https://github.com/mnindrazaka)

**React Icons**

![image](https://github.com/sanu151/React.JS/assets/68671274/6e4e49b1-d540-409e-ab79-9865eadf8d72)

![image](https://github.com/sanu151/React.JS/assets/68671274/2562bbe4-e34d-478f-92fc-9efaaaaba3ca)


**Source :** https://react-icons.github.io/react-icons/

React Icons refers to two main things in the world of React development:

1. **Icon libraries:** There are many popular icon libraries that provide icon components specifically designed for use in React projects. These libraries offer a wide variety of icons, often with different styles and themes to choose from. Some popular examples include Font Awesome, Material Design Icons, Bootstrap Icons, and many more.

2. **react-icons package:** This is a utility package that simplifies using icons from various icon libraries within your React application. It provides a single entry point to import icons from different libraries and offers features like tree-shaking, which helps reduce bundle size by only including the icons you actually use.


Installation (for standard modern project)
```
npm install react-icons --save
```
Font Awsome 6:

Import
```
import { IconName } from "react-icons/fa6";
```
Example:

Icon:

![image](https://github.com/sanu151/React.JS/assets/68671274/50bf6ae2-51ee-40c0-9ec1-90d99abcbacd)

```
import { FaReact } from "react-icons/fa";

function App(){
  return <div>
    <FaReact />
  </div>
}
export default App;
```

**React wit Bootstrap**

![image](https://github.com/sanu151/React.JS/assets/68671274/9db47735-3f8e-4724-97e8-f4b1f56eb69b)


**Source :** https://react-bootstrap.github.io/

React Bootstrap is a popular library that integrates Bootstrap's components and styles into React applications. It provides a way to leverage the familiar Bootstrap components and utilities while adhering to React's component-based approach.

Here are some key aspects of React Bootstrap:

* **React components:**  React Bootstrap rebuilds Bootstrap components as React components. This means they behave as reusable React elements, allowing you to compose UIs and leverage React features like state management and props.
* **No jQuery dependency:** Unlike using Bootstrap in HTML, React Bootstrap doesn't require jQuery or its JavaScript plugins. It focuses on the styling aspects and component functionality within React's ecosystem.
* **Bootstrap core at its heart:** React Bootstrap stays compatible with Bootstrap's core styles and classes. This allows you to use existing Bootstrap themes and customize the look and feel of your React application seamlessly.
* **Accessibility focus:** React Bootstrap prioritizes accessibility by providing semantic HTML and proper component structure. This ensures your application is usable for everyone, including users with disabilities.

**Benefits of using React Bootstrap:**

* **Faster development:** By using pre-built components, you can save time on UI development and focus on application logic.
* **Consistent styling:** React Bootstrap enforces consistent styling throughout your application, making it look polished and professional.
* **Responsive design:**  Bootstrap's core features responsive design, meaning your React application will adapt and look good on different devices.
* **Large community:**  With a vast community and extensive documentation, you'll find plenty of resources and support for using React Bootstrap.

**Popular React Bootstrap libraries:**

* **react-bootstrap:** A comprehensive library offering most Bootstrap components as React components.
* **reactstrap:** Another popular option that focuses on composable and well-controlled Bootstrap components.

*Installation*

The best way to consume React-Bootstrap is via the npm package which you can install with `npm` or `yarn`.

```
npm install react-bootstrap bootstrap
```

For CSS:
```
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
```
Example:

![image](https://github.com/sanu151/React.JS/assets/68671274/4115759e-e7a5-4623-86f1-61f9a86f997b)

```
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
```

**State**

In React.js, state is a fundamental concept for managing data within a component. It's a JavaScript object that stores information about the component's internal state, which can change over time. This change in state triggers a re-render of the component, keeping the UI up-to-date with the latest data.

Here's a breakdown of key points about state in React:

- **Purpose:** Stores data specific to a component that can change.
- **Representation:** An object containing key-value pairs.
- **Impact:** When state changes, the component re-renders with the updated information.

**How to use state:**

1. **Initialization:** State is typically initialized within the component's constructor using the `this.state` keyword.

2. **Updating State:** You can't modify the state directly. Instead, use the `setState` method to schedule an update. This method takes an object argument representing the new state values.

**Here are some additional things to keep in mind about state in React:**

- **State vs. Props:**  State is for data that can change within a component, while props are for data passed down from parent components (read-only).
- **State Updates may be Asynchronous:** React might batch multiple `setState` calls for performance reasons, so you shouldn't rely on the immediate state value after calling `setState`.
- **State is Local:** Each component manages its own state, and changes in one component's state don't directly affect other components.

Effectively using state is crucial for building dynamic and interactive React applications. By understanding how state works, you can create components that respond to user interactions and maintain a consistent UI based on the current data.

Exmple:

```
import React, { useState } from "react";

function Counter() {
  // Initialize state with a counter value of 0
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Update state using setCount, incrementing the counter
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
```

**Conditional Rendering | ternary, short circuit**

Conditional rendering in React.js allows you to control which JSX elements are displayed based on certain conditions. This makes your components more flexible and responsive to user interactions or changes in data.

Here are the common ways to achieve conditional rendering in React:

1. **If-Else Statements:**

   You can use regular JavaScript if-else statements within the `return` statement of your component function. The condition determines which JSX element to render.

   ```javascript
   function Login() {
     const isLoggedIn = true; // Replace with your logic

     if (isLoggedIn) {
       return <p>Welcome back!</p>;
     } else {
       return <p>Please log in.</p>;
     }
   }
   ```

2. **Ternary Operator:**

   The ternary operator provides a more concise syntax for conditional rendering within JSX. It follows the format:

   ```jsx
   condition ? elementIfTrue : elementIfFalse
   ```

   ```javascript
   function Message() {
     const hasNewMessage = false; // Replace with your logic

     return (
       <div>
         {hasNewMessage ? <p>You have a new message!</p> : null}
       </div>
     );
   }
   ```

3. **Logical AND Operator (&&):**

   You can leverage the logical AND operator (`&&`) to conditionally render JSX elements. The element following the `&&` operator will only be rendered if the condition on the left-hand side evaluates to `true`.

   ```javascript
   function ShowContent() {
     const isLoading = false; // Replace with your logic
     const content = "This is some content.";

     return (
       <div>
         {!isLoading && <p>{content}</p>}
       </div>
     );
   }
   ```

**Choosing the Right Method:**

- For simple conditions, the ternary operator or logical AND operator might be more readable.
- For complex conditions with multiple elements to render, using an if-else statement can improve readability. 

**Additional Considerations:**

- Remember to avoid directly modifying the state within conditional statements. Use the `setState` method for controlled updates.
- When dealing with complex conditional logic, consider extracting reusable components to enhance code maintainability.

By effectively using conditional rendering, you can create dynamic and interactive React components that adapt to different states and user interactions.

**React Hooks | useState hook**

React hooks are a new feature introduced in React 16.8 that allows you to use state and other React features without writing a class component. This can make your components more concise and easier to understand.

Here are some of the benefits of using React hooks:

* **Improved code readability:** Hooks can make your code more readable by separating the logic for managing state and side effects from the component's render function.
* **Easier code reuse:** Hooks can be reused across different components, promoting code reusability.
* **Better tooling support:** Hooks are better supported by modern tooling, such as linters and debuggers.

Some of the common React hooks include:

* `useState`: This hook allows you to add state to a functional component.
* `useEffect`: This hook allows you to perform side effects in your functional component, such as fetching data, subscriptions, or manual DOM manipulation.
* `useContext`: This hook allows you to access context data from a functional component.

If you're new to React hooks, there are many resources available online to help you learn more about them, including the official React documentation [https://legacy.reactjs.org/docs/hooks-intro.html](https://legacy.reactjs.org/docs/hooks-intro.html).

**useState hook**

The `useState` hook is a fundamental building block for managing state in React functional components. It allows you to declare state variables and a function to update them directly within the component.

Here's a breakdown of how `useState` works:

**Functionality:**

* Adds state to functional components.
* Tracks data or properties that change within the component.
* Can store various data types like strings, numbers, booleans, arrays, or objects.

**Usage:**

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Increment the count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

**Explanation:**

1. We import `useState` from `react`.
2. Inside the component, we call `useState(initialState)` which returns an array with two elements.
   - The first element is the current state value (`count` in this case), initialized with `0`.
   - The second element is a function to update the state (`setCount`).
3. We use destructuring assignment to unpack the array into separate variables: `count` and `setCount`.
4. The `handleClick` function increments the count by calling `setCount(count + 1)`.
5. The component renders the current count and a button that triggers the `handleClick` function on click.

**Key Points:**

* You can call `useState` multiple times within a component to manage different state variables.
* `useState` can only be called at the top level of your component or within custom hooks.
* The initial state passed to `useState` can be any data type.

**Benefits:**

* Improves code readability by separating state management from the render function.
* Makes components more concise and easier to maintain.

By effectively using the `useState` hook, you can create dynamic and interactive React components that respond to user interactions and data changes.

**Update useState**

In React, the `useState` hook is used to manage the state of functional components. There are two ways to update the state:

1. **Direct Update:** This is generally discouraged because it can lead to unexpected behavior. You directly assign a new value to the state variable using the setter function.

```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1); // Direct Update (Not recommended)
}
```

2. **Functional Update:** This is the recommended approach. You call the setter function and pass it a callback function. This callback function receives the current state value as an argument, allowing you to calculate the new state based on the current one.

```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(prevCount => prevCount + 1); // Functional Update
}
```

Here's why functional updates are preferred:

- **Ensures predictable updates:** It guarantees that the update is based on the latest state value, even if multiple updates are happening close together.
- **Updating objects and arrays:** When dealing with objects or arrays in the state, you should create a new copy with the updated values instead of modifying the existing one directly. Functional updates make it easier to achieve this using spread syntax (`...`).

Here are some resources for further learning:

- React Docs on useState: [https://legacy.reactjs.org/docs/hooks-state.html](https://legacy.reactjs.org/docs/hooks-state.html)
- Common Mistakes with useState: [https://m.youtube.com/watch?v=-yIsQPp31L0](https://m.youtube.com/watch?v=-yIsQPp31L0)

**Event Bubbling | stopPropagation**

Event bubbling is a default behavior in web development, specifically in the Document Object Model (DOM). When an event occurs on an element within a nested element structure, the event propagates or "bubbles" up the DOM tree to its parent elements.

- In web development, event bubbling is the default behavior of how events propagate through the Document Object Model (DOM) tree.
- When an event occurs on an element, it first triggers on that element itself. 
- Then, if the event isn't stopped, it bubbles up to its parent element, and then the parent's parent, and so on until it reaches the document object.

**Imagine a nested set of boxes:**

- Clicking the inner box would trigger the click event on that box first.
- If not stopped, the event would then bubble up to the enclosing box and trigger its click event as well.

**Why is Event Bubbling Useful?**

- Event bubbling allows you to attach a single event listener to a parent element and handle events for all its children without adding individual listeners to each child.
- This can simplify event handling and reduce code duplication.

**For Example:**

- You can attach a click event listener to a container element and handle clicks on any of its descendants (inner elements).

**stopPropagation**

- The `stopPropagation` method is a property of the event object in JavaScript.
- It's used to stop the event from bubbling up the DOM tree any further.
- Once called on an event object within an event handler function, it prevents the event from propagating to parent elements.

**When to Use stopPropagation**

- Use `stopPropagation` cautiously to avoid unintended consequences.
- It's helpful when you want to handle an event on a specific element and don't want it to trigger any additional events on parent elements.

**Example:**

```javascript
const container = document.getElementById('container');
const innerElement = document.getElementById('inner-element');

container.addEventListener('click', (event) => {
  console.log('Container Clicked');
  event.stopPropagation(); // Stops bubbling to document
});

innerElement.addEventListener('click', (event) => {
  console.log('Inner Element Clicked');
});
```

In this example, clicking the inner element would only log "Inner Element Clicked" because `stopPropagation` is called in the container's event handler.

**Key Points:**

- Event bubbling is the default behavior of event propagation.
- `stopPropagation` stops the event from bubbling further up the DOM tree.
- Use `stopPropagation` judiciously to avoid disrupting expected behavior.


**Controlled Components in React (Collect Form Data)**

In React, controlled components are form elements where the state of the form data is managed directly by the React component using the `useState` hook. This means the component's state reflects the current value of each input field.

**Key Characteristics:**

- **State Management:** The component maintains the form data in its state using `useState`.
- **Value Setting:** The component sets the `value` attribute of each form element based on the corresponding state value.
- **Event Handling:** The component listens to the `onChange` event of each form element to capture user input and update the state accordingly.
- **Two-Way Data Binding:** Controlled components create a two-way data binding effect between the form elements and the component's state.

**Benefits:**

- **Predictable State:** You always have a single source of truth for the form data within the component's state.
- **Validation:** You can easily perform form validation and conditionally render error messages or success indicators based on the state.
- **Integration with Other State:** Form data can be easily integrated with other component state for seamless data flow in your React application.

**Collecting Form Data**

Here's how to collect form data in React using controlled components:

1. **Create a Form Component:**

   ```javascript
   import React, { useState } from 'react';

   function MyForm() {
       const [formData, setFormData] = useState({
           name: '',
           email: '',
           message: '',
       });

       const handleChange = (event) => {
           setFormData({
               ...formData,
               [event.target.name]: event.target.value,
           });
       };

       const handleSubmit = (event) => {
           event.preventDefault(); // Prevent default form submission

           // Process form data (e.g., send to a server, perform validation)
           console.log('Form data:', formData);
           setFormData({ // Reset form data after submission (optional)
               name: '',
               email: '',
               message: '',
           });
       };

       return (
           <form onSubmit={handleSubmit}>
               <label>
                   Name:
                   <input type="text" name="name" value={formData.name} onChange={handleChange} />
               </label>
               <br />
               <label>
                   Email:
                   <input type="email" name="email" value={formData.email} onChange={handleChange} />
               </label>
               <br />
               <label>
                   Message:
                   <textarea name="message" value={formData.message} onChange={handleChange} />
               </label>
               <br />
               <button type="submit">Submit</button>
           </form>
       );
   }

   export default MyForm;
   ```

2. **Explanation:**

   - **`useState` Hook:** The component uses `useState` to create state variables `formData` (an object to hold form data) and `setFormData` (a function to update the state).
   - **`handleChange` Function:** This function is triggered whenever an input field value changes.
     - The function extracts the `name` and `value` attributes from the event object.
     - It creates a new `formData` object using the spread operator (`...formData`) to preserve existing state values and updates the value for the specific input field using dynamic property access (`[event.target.name]`).
     - It updates the component state using `setFormData` with the new object.
   - **`handleSubmit` Function:** This function is triggered when the form is submitted.
     - It prevents the default form submission behavior with `event.preventDefault()`.
     - You can now access the collected form data using `formData` and perform actions like sending it to a server or performing validation.
     - Optionally, you can reset the form data after submission using `setFormData`.

**Additional Considerations:**

- **Form Validation:** You can implement form validation logic to prevent invalid data from being submitted. Use libraries like `react-hook-form` or write custom validation checks within the `handleSubmit` function.
- **Error Handling:** Consider adding error handling mechanisms to display user-friendly messages if there's an issue submitting the form data (e.g., network errors).
- **Form Libraries:** Explore third-party form libraries like `Formik` or `react-hook-form` that provide advanced features like validation, field handling, and form state management.
- **Accessibility:** Make sure your forms are accessible to users with disabilities by adding appropriate labels

**Passing data from Child to Parent component**

In React, data typically flows downwards from parent to child components using props. However, there are scenarios where you might need to pass data back up from a child component to its parent. Here are method to achieve this:

**Callback Function:**

   - **Parent Component:**
     - Define a callback function within the parent component that will be used to receive data from the child.
     - Pass this callback function as a prop to the child component.

   - **Child Component:**
     - When the child has data to send to the parent, it calls the callback function received as a prop, passing the data as an argument.

   **Example:**

   ```javascript
   // Parent component (Parent.js)
   import React, { useState } from 'react';

   function Parent() {
       const [dataFromChild, setDataFromChild] = useState(null);

       const handleDataFromChild = (data) => {
           setDataFromChild(data);
       };

       return (
           <div>
               <Child onSendData={handleDataFromChild} />
               {dataFromChild && <p>Data from child: {dataFromChild}</p>}
           </div>
       );
   }

   export default Parent;

   // Child component (Child.js)
   import React from 'react';

   function Child({ onSendData }) {
       const handleClick = () => {
           const dataToSend = 'Hello from child!';
           onSendData(dataToSend);
       };

       return (
           <button onClick={handleClick}>Send data</button>
       );
   }

   export default Child;
   ```

