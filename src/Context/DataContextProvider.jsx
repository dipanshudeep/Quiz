import React, { useState } from "react";
import DataContext from "./DataContext";


const DataContextProvider = ({children})=>{

    const quizData = {
        questions: [
      
          { topic: "HTML", level: "Easy", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Marking Language"], answer: "Hyper Text Markup Language" },
          { topic: "HTML", level: "Easy", question: "Which HTML tag is used to define a paragraph?", options: ["<p>", "<paragraph>", "<text>", "<para>"], answer: "<p>" },
          { topic: "HTML", level: "Easy", question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyperlink>"], answer: "<a>" },
          { topic: "HTML", level: "Easy", question: "Which tag is used for the largest heading?", options: ["<h1>", "<h2>", "<h3>", "<header>"], answer: "<h1>" },
          { topic: "HTML", level: "Easy", question: "Which attribute specifies an image source?", options: ["src", "href", "alt", "link"], answer: "src" },
          { topic: "HTML", level: "Easy", question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<line>"], answer: "<br>" },
          { topic: "HTML", level: "Easy", question: "Which tag is used to create a list item?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<li>" },
          { topic: "HTML", level: "Easy", question: "Which HTML element is used to define the document title?", options: ["<title>", "<head>", "<meta>", "<body>"], answer: "<title>" },
          { topic: "HTML", level: "Easy", question: "Which tag is used to create a table?", options: ["<table>", "<tab>", "<tr>", "<td>"], answer: "<table>" },
          { topic: "HTML", level: "Easy", question: "What does the <meta> tag do?", options: ["Defines metadata", "Creates a new section", "Links an external file", "Formats text"], answer: "Defines metadata" },
          
          { topic: "HTML", level: "Medium", question: "Which tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<html>"], answer: "<style>" },
          { topic: "HTML", level: "Medium", question: "Which HTML element is used to specify a footer for a document?", options: ["<bottom>", "<footer>", "<foot>", "<section>"], answer: "<footer>" },
          { topic: "HTML", level: "Medium", question: "What is the purpose of the <thead> element in a table?", options: ["Defines the table body", "Groups table header content", "Creates a table row", "Styles table headers"], answer: "Groups table header content" },
          { topic: "HTML", level: "Medium", question: "Which attribute is used to uniquely identify an element?", options: ["class", "name", "id", "key"], answer: "id" },
          { topic: "HTML", level: "Medium", question: "Which HTML5 element is used to play audio files?", options: ["<music>", "<sound>", "<audio>", "<mp3>"], answer: "<audio>" },
          { topic: "HTML", level: "Medium", question: "Which tag is used to embed a video in HTML?", options: ["<video>", "<media>", "<embed>", "<movie>"], answer: "<video>" },
          { topic: "HTML", level: "Medium", question: "Which input type is used for entering an email address?", options: ["text", "email", "mail", "input"], answer: "email" },
          { topic: "HTML", level: "Medium", question: "What is the purpose of the <section> tag?", options: ["To create a separate webpage", "To group related content", "To define styles", "To add scripts"], answer: "To group related content" },
          { topic: "HTML", level: "Medium", question: "Which tag is used to create a dropdown list?", options: ["<select>", "<dropdown>", "<list>", "<options>"], answer: "<select>" },
          { topic: "HTML", level: "Medium", question: "Which attribute is used to specify an alternative text for an image?", options: ["alt", "title", "src", "desc"], answer: "alt" },
          
          { topic: "HTML", level: "Hard", question: "Which API is used for browser storage in modern HTML?", options: ["Cookies", "LocalStorage", "SessionStorage", "Both LocalStorage and SessionStorage"], answer: "Both LocalStorage and SessionStorage" },
          { topic: "HTML", level: "Hard", question: "Which HTML element is used to define navigation links?", options: ["<navigation>", "<nav>", "<links>", "<menu>"], answer: "<nav>" },
          { topic: "HTML", level: "Hard", question: "Which tag is used to define an interactive control for a web form?", options: ["<button>", "<input>", "<form>", "<control>"], answer: "<input>" },
          { topic: "HTML", level: "Hard", question: "What is the purpose of the <progress> element?", options: ["To create a progress bar", "To show a timer", "To display loading text", "To track script execution"], answer: "To create a progress bar" },
          { topic: "HTML", level: "Hard", question: "Which tag is used for scalable vector graphics?", options: ["<svg>", "<canvas>", "<vector>", "<graphics>"], answer: "<svg>" },
      
          { topic: "CSS", level: "Easy", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
          { topic: "CSS", level: "Easy", question: "Which property is used to change the background color?", options: ["background-color", "color", "bg-color", "background"], answer: "background-color" },
          { topic: "CSS", level: "Easy", question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style", "text-style"], answer: "font-size" },
          { topic: "CSS", level: "Easy", question: "Which property is used to set the space between paragraphs?", options: ["padding", "margin", "text-indent", "line-height"], answer: "margin" },
          { topic: "CSS", level: "Easy", question: "How do you select an element with the ID 'header' in CSS?", options: ["#header", ".header", "header", "id=header"], answer: "#header" },
          { topic: "CSS", level: "Easy", question: "What does the 'float' property do?", options: ["Aligns an element to the left or right", "Makes an element disappear", "Adds a shadow to an element", "Moves an element up or down"], answer: "Aligns an element to the left or right" },
          { topic: "CSS", level: "Easy", question: "Which property is used to change the font of an element?", options: ["font-family", "font-type", "text-font", "text-family"], answer: "font-family" },
          { topic: "CSS", level: "Easy", question: "Which property is used to make text bold?", options: ["font-weight", "font-style", "font-size", "text-transform"], answer: "font-weight" },
          { topic: "CSS", level: "Easy", question: "Which CSS property is used to change the color of text?", options: ["color", "font-color", "text-color", "bg-color"], answer: "color" },
          { topic: "CSS", level: "Easy", question: "How do you add a comment in CSS?", options: ["/* comment /", "// comment", "<!-- comment -->", "<comment>"], answer: "/ comment */" },
          
          { topic: "CSS", level: "Medium", question: "Which property is used to specify the space between content and the border?", options: ["margin", "padding", "border-spacing", "gap"], answer: "padding" },
          { topic: "CSS", level: "Medium", question: "What is the default value of the 'position' property?", options: ["relative", "absolute", "fixed", "static"], answer: "static" },
          { topic: "CSS", level: "Medium", question: "Which property is used to change the display style of an element?", options: ["display", "block", "visibility", "float"], answer: "display" },
          { topic: "CSS", level: "Medium", question: "What is the purpose of the 'z-index' property?", options: ["Controls stacking order of elements", "Changes the opacity of an element", "Sets element margins", "Aligns text"], answer: "Controls stacking order of elements" },
          { topic: "CSS", level: "Medium", question: "How do you center an element horizontally in CSS?", options: ["margin: auto", "text-align: center", "align-items: center", "float: center"], answer: "margin: auto" },
          { topic: "CSS", level: "Medium", question: "Which property is used to set the width of an element?", options: ["width", "size", "dimension", "measure"], answer: "width" },
          { topic: "CSS", level: "Medium", question: "Which of the following values can be used for the 'position' property?", options: ["relative", "absolute", "fixed", "all of the above"], answer: "all of the above" },
          { topic: "CSS", level: "Medium", question: "What is the purpose of the 'flex' property?", options: ["Defines flexbox layout", "Sets a fixed size", "Applies a background image", "Changes text color"], answer: "Defines flexbox layout" },
          { topic: "CSS", level: "Medium", question: "How do you apply a style to an element with a class 'button'?", options: [".button", "#button", "button", "class=button"], answer: ".button" },
          { topic: "CSS", level: "Medium", question: "Which property is used to add shadow to an element?", options: ["box-shadow", "text-shadow", "shadow", "element-shadow"], answer: "box-shadow" },
          
          { topic: "CSS", level: "Hard", question: "Which CSS property is used to create a gradient background?", options: ["background-gradient", "linear-gradient", "gradient", "background-image"], answer: "linear-gradient" },
          { topic: "CSS", level: "Hard", question: "What does the 'display: flex' property do?", options: ["Creates a flexible box layout", "Makes the element inline", "Aligns content horizontally", "Makes an element invisible"], answer: "Creates a flexible box layout" },
          { topic: "CSS", level: "Hard", question: "Which CSS property is used to create responsive web designs?", options: ["media queries", "viewport", "responsive", "display"], answer: "media queries" },
          { topic: "CSS", level: "Hard", question: "Which property is used to control the opacity of an element?", options: ["opacity", "visibility", "filter", "color"], answer: "opacity" },
          { topic: "CSS", level: "Hard", question: "How do you apply a CSS style to the nth-child of a parent element?", options: ["parent:nth-child(n)", "parent:child(n)", "parent:nth-of-type(n)", "parent > nth-child(n)"], answer: "parent:nth-child(n)" },
          { topic: "CSS", level: "Hard", question: "Which property is used to create a grid layout in CSS?", options: ["grid-template", "grid", "flexbox", "layout"], answer: "grid" },
          { topic: "CSS", level: "Hard", question: "Which CSS property is used to set the transition effect for an element?", options: ["transition", "effect", "animation", "transition-effect"], answer: "transition" },
          { topic: "CSS", level: "Hard", question: "Which property is used to make an element fully responsive?", options: ["width: 100%", "min-width: 100%", "max-width: 100%", "media queries"], answer: "media queries" },
          { topic: "CSS", level: "Hard", question: "Which property is used to add space between grid items?", options: ["grid-gap", "gap", "space-between", "item-spacing"], answer: "grid-gap" },
          { topic: "CSS", level: "Hard", question: "Which property is used to align items in a flex container?", options: ["align-items", "align-content", "justify-items", "justify-content"], answer: "align-items" },
          
          { topic: "JavaScript", level: "Easy", question: "What does JavaScript do?", options: ["Adds interactivity to web pages", "Styles web pages", "Structures web pages", "Defines the content of web pages"], answer: "Adds interactivity to web pages" },
          { topic: "JavaScript", level: "Easy", question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "#", "<!--"], answer: "//" },
          { topic: "JavaScript", level: "Easy", question: "How do you declare a variable in JavaScript?", options: ["let", "const", "var", "all of the above"], answer: "all of the above" },
          { topic: "JavaScript", level: "Easy", question: "What is the result of 5 + '5' in JavaScript?", options: ["10", "55", "undefined", "NaN"], answer: "55" },
          { topic: "JavaScript", level: "Easy", question: "What is the correct syntax for an if statement?", options: ["if condition {}", "if (condition) {}", "if: condition {}", "if = condition {}"], answer: "if (condition) {}" },
          { topic: "JavaScript", level: "Easy", question: "How do you create an array in JavaScript?", options: ["[]", "()", "{}", "array()"], answer: "[]" },
          { topic: "JavaScript", level: "Easy", question: "What does the 'alert()' function do?", options: ["Displays an alert box", "Sets a variable", "Prints text in the console", "Creates a prompt box"], answer: "Displays an alert box" },
          { topic: "JavaScript", level: "Easy", question: "Which event occurs when the user clicks on an HTML element?", options: ["click", "onchange", "mouseover", "keydown"], answer: "click" },
          { topic: "JavaScript", level: "Easy", question: "Which method is used to find the length of an array?", options: ["length()", "size()", "count()", "length"], answer: "length" },
          { topic: "JavaScript", level: "Easy", question: "How do you write a function in JavaScript?", options: ["function name()", "def name()", "function = name()", "name() function"], answer: "function name()" },
      
          { topic: "JavaScript", level: "Medium", question: "What will be the result of '3' + 2 in JavaScript?", options: ["5", "32", "23", "NaN"], answer: "32" },
          { topic: "JavaScript", level: "Medium", question: "How do you add a comment that spans multiple lines in JavaScript?", options: ["/* comment /", "// comment", "<!-- comment -->", "# comment"], answer: "/ comment */" },
          { topic: "JavaScript", level: "Medium", question: "Which method is used to join all elements of an array into a string?", options: ["join()", "combine()", "concat()", "merge()"], answer: "join()" },
          { topic: "JavaScript", level: "Medium", question: "Which keyword is used to declare a constant in JavaScript?", options: ["let", "const", "constant", "var"], answer: "const" },
          { topic: "JavaScript", level: "Medium", question: "What is the purpose of the 'this' keyword?", options: ["Refers to the current object", "Declares a variable", "Creates a function", "Sets an event listener"], answer: "Refers to the current object" },
          { topic: "JavaScript", level: "Medium", question: "Which method is used to remove the last element of an array?", options: ["pop()", "shift()", "push()", "slice()"], answer: "pop()" },
          { topic: "JavaScript", level: "Medium", question: "Which operator is used to compare both value and type in JavaScript?", options: ["==", "===", "=", "!="], answer: "===" },
          { topic: "JavaScript", level: "Medium", question: "What is a promise in JavaScript?", options: ["A function that returns a value", "An object representing the eventual completion of an asynchronous operation", "A way to define variables", "A method to handle errors"], answer: "An object representing the eventual completion of an asynchronous operation" },
          { topic: "JavaScript", level: "Medium", question: "Which method is used to find an element by its ID in JavaScript?", options: ["getElementById()", "querySelector()", "getElement()", "find()"], answer: "getElementById()" },
          { topic: "JavaScript", level: "Medium", question: "How do you declare a variable that can be changed later in JavaScript?", options: ["let", "const", "var", "immutable"], answer: "let" },
      
          { topic: "JavaScript", level: "Hard", question: "What does the 'bind()' method do in JavaScript?", options: ["Creates a new function with a specific 'this' context", "Sets a variable to a specific value", "Bind variables to the scope", "Creates a callback function"], answer: "Creates a new function with a specific 'this' context" },
          { topic: "JavaScript", level: "Hard", question: "What is a closure in JavaScript?", options: ["A function within another function that can access its outer function's variables", "A method to store data in the browser", "A way to handle errors", "A function that does not return a value"], answer: "A function within another function that can access its outer function's variables" },
          { topic: "JavaScript", level: "Hard", question: "Which of the following is true about JavaScript event delegation?", options: ["Events are handled by a parent element", "Event listeners are attached to each child element", "Events are triggered directly on the target element", "It works only for mouse events"], answer: "Events are handled by a parent element" },
          { topic: "JavaScript", level: "Hard", question: "What is the result of 'typeof NaN' in JavaScript?", options: ["'number'", "'undefined'", "'object'", "'NaN'"], answer: "'number'" },
          { topic: "JavaScript", level: "Hard", question: "What is the purpose of the 'setTimeout()' function?", options: ["To delay execution of a function", "To repeat a function continuously", "To set an interval", "To define an asynchronous function"], answer: "To delay execution of a function" },
          { topic: "JavaScript", level: "Hard", question: "Which method is used to merge two or more arrays in JavaScript?", options: ["concat()", "merge()", "join()", "push()"], answer: "concat()" },
          { topic: "JavaScript", level: "Hard", question: "Which function is used to parse a string into an integer?", options: ["parseInt()", "parseFloat()", "toInteger()", "int()"], answer: "parseInt()" },
          { topic: "JavaScript", level: "Hard", question: "What is the purpose of the 'apply()' method in JavaScript?", options: ["It calls a function with a given 'this' context and arguments", "It sets a property of an object", "It applies styles to an element", "It defines a function"], answer: "It calls a function with a given 'this' context and arguments" },
          { topic: "JavaScript", level: "Hard", question: "What is a 'Symbol' in JavaScript?", options: ["A unique and immutable primitive value", "A way to define constants", "A type of array", "A string value"], answer: "A unique and immutable primitive value" },
          { topic: "JavaScript", level: "Hard", question: "What is the purpose of the 'new' keyword in JavaScript?", options: ["To create a new object instance", "To declare a variable", "To bind a function", "To import a module"], answer: "To create a new object instance" },
          
          { topic: "React", level: "Easy", question: "What is React?", options: ["A JavaScript library for building user interfaces", "A CSS framework", "A JavaScript framework", "A database system"], answer: "A JavaScript library for building user interfaces" },
          { topic: "React", level: "Easy", question: "Which function is used to render a React component?", options: ["render()", "ReactDOM.render()", "component.render()", "React.render()"], answer: "ReactDOM.render()" },
          { topic: "React", level: "Easy", question: "What is the purpose of the useState hook?", options: ["To manage state in a functional component", "To manage state in a class component", "To manage routing", "To handle side effects"], answer: "To manage state in a functional component" },
          { topic: "React", level: "Easy", question: "What is JSX?", options: ["JavaScript and XML", "A JavaScript framework", "A type of CSS", "A type of HTML"], answer: "JavaScript and XML" },
          { topic: "React", level: "Easy", question: "Which function is used to create a React component?", options: ["createComponent()", "React.createElement()", "React.createComponent()", "function component()"], answer: "React.createElement()" },
          { topic: "React", level: "Easy", question: "Which hook is used to handle side effects in a functional component?", options: ["useEffect", "useState", "useContext", "useReducer"], answer: "useEffect" },
          { topic: "React", level: "Easy", question: "How do you pass props to a React component?", options: ["<Component prop='value' />", "<Component>{prop='value'}</Component>", "<Component props='value' />", "<Component value='prop' />"], answer: "<Component prop='value' />" },
          { topic: "React", level: "Easy", question: "What is the virtual DOM in React?", options: ["A lightweight copy of the real DOM", "A copy of the browser's DOM", "A virtual representation of HTML", "A storage method for React data"], answer: "A lightweight copy of the real DOM" },
          { topic: "React", level: "Easy", question: "Which method is used to update the state in React?", options: ["setState()", "updateState()", "changeState()", "renderState()"], answer: "setState()" },
          { topic: "React", level: "Easy", question: "What does the useEffect hook do?", options: ["Runs side effects in function components", "Manages the state of a component", "Renders the component", "Defines routes"], answer: "Runs side effects in function components" },
      
          { topic: "React", level: "Medium", question: "How do you handle events in React?", options: ["By passing an event handler function", "By using an event listener", "By using the addEventListener() method", "By calling a method in componentDidMount()"], answer: "By passing an event handler function" },
          { topic: "React", level: "Medium", question: "What is the purpose of the useCallback hook?", options: ["To memoize a function", "To update state", "To create a new component", "To handle side effects"], answer: "To memoize a function" },
          { topic: "React", level: "Medium", question: "What does the useRef hook do?", options: ["Creates a mutable reference to an element", "Manages the state of a component", "Handles side effects", "Updates the DOM"], answer: "Creates a mutable reference to an element" },
          { topic: "React", level: "Medium", question: "Which of the following is used for routing in React?", options: ["react-router-dom", "react-router", "react-route", "react-navigation"], answer: "react-router-dom" },
          { topic: "React", level: "Medium", question: "What is the purpose of React Router?", options: ["To manage routes and navigation", "To handle state management", "To handle form validation", "To optimize rendering"], answer: "To manage routes and navigation" },
          { topic: "React", level: "Medium", question: "What is a controlled component in React?", options: ["A component where React manages its state", "A component that is not re-rendered", "A component with its own internal state", "A component that uses third-party libraries for state"], answer: "A component where React manages its state" },
          { topic: "React", level: "Medium", question: "What is useContext used for?", options: ["To access context values", "To manage component state", "To define hooks", "To render elements"], answer: "To access context values" },
          { topic: "React", level: "Medium", question: "How can you create a functional component in React?", options: ["By defining a function that returns JSX", "By using the React.createElement() method", "By defining a class that extends React.Component", "By using the componentDidMount() method"], answer: "By defining a function that returns JSX" },
          { topic: "React", level: "Medium", question: "What is a higher-order component (HOC) in React?", options: ["A function that takes a component and returns a new component", "A component that wraps other components", "A component that handles routing", "A component that handles side effects"], answer: "A function that takes a component and returns a new component" },
          { topic: "React", level: "Medium", question: "Which method is used to handle a form submission in React?", options: ["handleSubmit()", "onSubmit()", "submitForm()", "onChange()"], answer: "handleSubmit()" },
      
          { topic: "React", level: "Hard", question: "What is React's context API used for?", options: ["To share state globally across components", "To manage component lifecycle", "To define new components", "To optimize rendering"], answer: "To share state globally across components" },
          { topic: "React", level: "Hard", question: "What does React.memo() do?", options: ["Optimizes rendering by memoizing a component", "Creates a new component", "Manages state", "Handles event delegation"], answer: "Optimizes rendering by memoizing a component" },
          { topic: "React", level: "Hard", question: "What is the purpose of getDerivedStateFromProps?", options: ["To update state based on changes in props", "To optimize component rendering", "To handle side effects", "To define component lifecycle methods"], answer: "To update state based on changes in props" },
          { topic: "React", level: "Hard", question: "What is the significance of keys in React lists?", options: ["To help React identify which items have changed, been added, or removed", "To create dynamic components", "To assign unique styles", "To manage component state"], answer: "To help React identify which items have changed, been added, or removed" },
          { topic: "React", level: "Hard", question: "What is the difference between useEffect and useLayoutEffect?", options: ["useLayoutEffect runs synchronously after DOM mutations", "useEffect runs synchronously after DOM mutations", "There is no difference", "useEffect runs before DOM mutations"], answer: "useLayoutEffect runs synchronously after DOM mutations" },
          { topic: "React", level: "Hard", question: "What is a 'render prop' in React?", options: ["A prop that is a function used to render UI", "A function that returns JSX", "A component that renders itself", "A prop used to trigger an event"], answer: "A prop that is a function used to render UI" },
          { topic: "React", level: "Hard", question: "What is the purpose of React.lazy()?", options: ["To dynamically import components", "To load components before rendering", "To define components", "To optimize rendering"], answer: "To dynamically import components" },
          { topic: "React", level: "Hard", question: "What is the Suspense component used for in React?", options: ["To handle code splitting and lazy loading", "To manage state", "To define routes", "To trigger side effects"], answer: "To handle code splitting and lazy loading" },
          { topic: "React", level: "Hard", question: "How does React handle event delegation?", options: ["By attaching event listeners to the document and bubbling up", "By attaching event listeners to each component", "By listening to the window object", "By using the addEventListener() method"], answer: "By attaching event listeners to the document and bubbling up" },
          { topic: "React", level: "Hard", question: "What is a render loop in React?", options: ["A cycle where React re-renders the component tree", "A method to create components", "A lifecycle event", "A way to handle side effects"], answer: "A cycle where React re-renders the component tree" },
            
            { "topic": "MongoDB", "level": "Easy", "question": "What type of database is MongoDB?", "options": ["Relational", "Document-oriented", "Key-value", "Graph"], "answer": "Document-oriented" },
{ "topic": "MongoDB", "level": "Easy", "question": "What is the default port for MongoDB?", "options": ["3306", "5432", "27017", "1521"], "answer": "27017" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which command is used to show all databases in MongoDB?", "options": ["SHOW DATABASES", "db.show()", "show dbs", "list databases"], "answer": "show dbs" },
{ "topic": "MongoDB", "level": "Easy", "question": "What does a MongoDB document resemble?", "options": ["CSV file", "SQL row", "JSON object", "XML element"], "answer": "JSON object" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which command is used to insert a document in MongoDB?", "options": ["INSERT INTO", "add()", "db.collection.insert()", "insert()"], "answer": "db.collection.insert()" },
{ "topic": "MongoDB", "level": "Easy", "question": "How are records stored in MongoDB?", "options": ["Rows", "Documents", "Tables", "Nodes"], "answer": "Documents" },
{ "topic": "MongoDB", "level": "Easy", "question": "What is the top-level structure in MongoDB?", "options": ["Table", "Schema", "Collection", "Database"], "answer": "Database" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which format does MongoDB use to store documents?", "options": ["XML", "CSV", "BSON", "YAML"], "answer": "BSON" },
{ "topic": "MongoDB", "level": "Easy", "question": "What is a collection in MongoDB?", "options": ["A row of data", "A group of tables", "A group of documents", "A JSON object"], "answer": "A group of documents" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which command is used to switch databases?", "options": ["use", "switch", "db.use()", "set db"], "answer": "use" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which command is used to delete a document?", "options": ["db.collection.remove()", "DELETE FROM", "db.remove()", "remove doc"], "answer": "db.collection.remove()" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which method is used to find documents in MongoDB?", "options": ["find()", "search()", "select()", "lookup()"], "answer": "find()" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which command lists all collections in the current database?", "options": ["show collections", "list collections", "db.showCollections()", "collections.list()"], "answer": "show collections" },
{ "topic": "MongoDB", "level": "Easy", "question": "Does MongoDB support schema-less structure?", "options": ["Yes", "No"], "answer": "Yes" },
{ "topic": "MongoDB", "level": "Easy", "question": "Which data format is similar to BSON?", "options": ["CSV", "JSON", "HTML", "XML"], "answer": "JSON" },


{ "topic": "MongoDB", "level": "Medium", "question": "Which operator is used in MongoDB to match a field to multiple values?", "options": ["$eq", "$in", "$or", "$all"], "answer": "$in" },
{ "topic": "MongoDB", "level": "Medium", "question": "What does the `db.collection.updateOne()` method do?", "options": ["Updates all documents", "Inserts a new document", "Updates the first matching document", "Deletes one document"], "answer": "Updates the first matching document" },
{ "topic": "MongoDB", "level": "Medium", "question": "Which command is used to create an index in MongoDB?", "options": ["db.collection.index()", "db.collection.createIndex()", "db.createIndex()", "create.index()"], "answer": "db.collection.createIndex()" },
{ "topic": "MongoDB", "level": "Medium", "question": "What does the `$set` operator do in an update query?", "options": ["Deletes a field", "Updates or adds a field", "Filters results", "Inserts a document"], "answer": "Updates or adds a field" },
{ "topic": "MongoDB", "level": "Medium", "question": "Which aggregation stage is used to group documents?", "options": ["$match", "$group", "$sort", "$project"], "answer": "$group" },
{ "topic": "MongoDB", "level": "Medium", "question": "How do you limit the number of documents returned by a query?", "options": ["limit()", "restrict()", "top()", "cap()"], "answer": "limit()" },
{ "topic": "MongoDB", "level": "Medium", "question": "What is the default write concern in MongoDB?", "options": ["w=0", "w=1", "majority", "unacknowledged"], "answer": "w=1" },
{ "topic": "MongoDB", "level": "Medium", "question": "What is a capped collection?", "options": ["A collection with a fixed schema", "A collection with a size limit", "A collection with unlimited size", "A temporary collection"], "answer": "A collection with a size limit" },
{ "topic": "MongoDB", "level": "Medium", "question": "Which operator checks for the existence of a field?", "options": ["$exists", "$has", "$in", "$contains"], "answer": "$exists" },
{ "topic": "MongoDB", "level": "Medium", "question": "How are embedded documents represented?", "options": ["As arrays", "As strings", "As nested objects", "As separate collections"], "answer": "As nested objects" },
{ "topic": "MongoDB", "level": "Medium", "question": "What does `ObjectId` represent in MongoDB?", "options": ["Document's schema", "A user's ID", "Primary key", "A unique identifier for each document"], "answer": "A unique identifier for each document" },
{ "topic": "MongoDB", "level": "Medium", "question": "Which method updates multiple documents in MongoDB?", "options": ["update()", "updateOne()", "updateMany()", "modify()"], "answer": "updateMany()" },
{ "topic": "MongoDB", "level": "Medium", "question": "Which method removes all documents from a collection?", "options": ["removeAll()", "drop()", "delete()", "deleteMany({})"], "answer": "deleteMany({})" },
{ "topic": "MongoDB", "level": "Medium", "question": "How can you sort query results in MongoDB?", "options": ["order()", "db.sort()", "sort()", "orderBy()"], "answer": "sort()" },
{ "topic": "MongoDB", "level": "Medium", "question": "What is the use of `$project` in aggregation?", "options": ["Match documents", "Create indexes", "Include/exclude fields", "Group documents"], "answer": "Include/exclude fields" },


{ "topic": "MongoDB", "level": "Hard", "question": "Which type of index supports full-text search in MongoDB?", "options": ["Hashed index", "Wildcard index", "Text index", "Compound index"], "answer": "Text index" },
{ "topic": "MongoDB", "level": "Hard", "question": "What is the main purpose of the `$lookup` stage in aggregation?", "options": ["Sorting data", "Projecting data", "Joining collections", "Limiting data"], "answer": "Joining collections" },
{ "topic": "MongoDB", "level": "Hard", "question": "Which command is used to shard a collection in a sharded cluster?", "options": ["sh.enableSharding()", "sh.shardCollection()", "sh.createShard()", "enableShard()"], "answer": "sh.shardCollection()" },
{ "topic": "MongoDB", "level": "Hard", "question": "What does the `explain()` function provide?", "options": ["Query syntax", "Query plan and performance", "Field descriptions", "Data structure"], "answer": "Query plan and performance" },
{ "topic": "MongoDB", "level": "Hard", "question": "Which operator is used to match documents that do NOT contain a specified value?", "options": ["$ne", "$nin", "$not", "$nor"], "answer": "$nin" },
{ "topic": "MongoDB", "level": "Hard", "question": "What is the maximum size of a BSON document in MongoDB?", "options": ["4MB", "8MB", "16MB", "32MB"], "answer": "16MB" },
{ "topic": "MongoDB", "level": "Hard", "question": "Which feature in MongoDB provides high availability?", "options": ["Indexing", "Aggregation", "Replication", "Sharding"], "answer": "Replication" },
{ "topic": "MongoDB", "level": "Hard", "question": "How do you create a unique index on a field?", "options": ["createIndex({field: 1})", "createIndex({field: 1}, {unique: true})", "ensureIndex()", "createUniqueIndex()"], "answer": "createIndex({field: 1}, {unique: true})" },
{ "topic": "MongoDB", "level": "Hard", "question": "What does the `$facet` stage in aggregation allow?", "options": ["Pagination", "Indexing", "Multiple pipelines", "Projection"], "answer": "Multiple pipelines" },
{ "topic": "MongoDB", "level": "Hard", "question": "What is a MongoDB replica set?", "options": ["A group of indexes", "A collection of unique documents", "A cluster of read-only nodes", "A group of mongod instances that maintain the same data set"], "answer": "A group of mongod instances that maintain the same data set" },
{ "topic": "MongoDB", "level": "Hard", "question": "Which storage engine is used by default in MongoDB?", "options": ["WiredTiger", "InnoDB", "RocksDB", "MMAPv1"], "answer": "WiredTiger" },
{ "topic": "MongoDB", "level": "Hard", "question": "What does `db.currentOp()` return?", "options": ["Database stats", "Active operations", "List of indexes", "Shard keys"], "answer": "Active operations" },
{ "topic": "MongoDB", "level": "Hard", "question": "What is the function of the `writeConcern` option?", "options": ["Control read consistency", "Specify index types", "Control acknowledgment of write operations", "Set query limits"], "answer": "Control acknowledgment of write operations" },
{ "topic": "MongoDB", "level": "Hard", "question": "How can you prevent a field from being returned in a query?", "options": ["project({_id: 0})", "select(exclude)", "unset()", "filter()"], "answer": "project({_id: 0})" },
{ "topic": "MongoDB", "level": "Hard", "question": "What does `$merge` do in MongoDB aggregation?", "options": ["Combines documents", "Joins collections", "Writes aggregation results into a collection", "Sorts by multiple fields"], "answer": "Writes aggregation results into a collection" },

 
 ]
      };
    
      const [getTopic, setGetTopic] = useState(null)
      const getTopicData = quizData.questions.filter((data) => data.topic === getTopic)
     
      const quizSetData = ()=>{
              let shuffled = getTopicData;
              // Fisher-Yates Shuffle Algorithm
            for (let i = shuffled.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
                 }                 
            return shuffled.slice(0, 10); // Return first 'count' questions    
        }         
        const finalData = quizSetData()
        // console.log(finalData);
        


        
    return(
        <DataContext.Provider value={{getTopic , setGetTopic,finalData}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;
