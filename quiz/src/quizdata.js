const quizzes = [
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["String", "Integer", "Float", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Hyper Textual Markup Language",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Sun Microsystems", "IBM", "Oracle"],
    correctOptionIndex: 1,
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the global object",
      "To refer to the current object",
      "To create a new object",
      "To access the parent object",
    ],
    correctOptionIndex: 1,
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "#", "/*", "<!--"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a front-end JavaScript framework?",
    options: ["Django", "Flask", "React", "Spring"],
    correctOptionIndex: 2,
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "undefined"],
    correctOptionIndex: 1,
  },
  {
    question: "Which HTML attribute is used to specify inline styles?",
    options: ["style", "font", "class", "styles"],
    correctOptionIndex: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a back-end programming language?",
    options: ["HTML", "JavaScript", "Python", "CSS"],
    correctOptionIndex: 2,
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: [
      "var x = 5;",
      "variable x = 5;",
      "let x = 5;",
      "Both var x = 5; and let x = 5;",
    ],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    correctOptionIndex: 2,
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Application Program Interface",
      "Application Programming Interference",
      "Application Program Interference",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctOptionIndex: 2,
  },
  {
    question: "Which of the following is a version control system?",
    options: ["Git", "HTML", "CSS", "JavaScript"],
    correctOptionIndex: 0,
  },
  {
    question: "What is the main language used for Android app development?",
    options: ["Swift", "Kotlin", "JavaScript", "Python"],
    correctOptionIndex: 1,
  },
  {
    question: "Which company developed the C programming language?",
    options: ["Microsoft", "Bell Labs", "IBM", "Sun Microsystems"],
    correctOptionIndex: 1,
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Structured Question Language",
      "Simple Question Language",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a CSS framework?",
    options: ["React", "Angular", "Bootstrap", "Vue"],
    correctOptionIndex: 2,
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "443", "21", "22"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a JavaScript runtime?",
    options: ["Node.js", "Django", "Flask", "Spring"],
    correctOptionIndex: 0,
  },
  {
    question:
      "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      "To enable strict mode",
      "To disable strict mode",
      "To enable debugging",
      "To disable debugging",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a relational database?",
    options: ["MongoDB", "Redis", "MySQL", "Cassandra"],
    correctOptionIndex: 2,
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "To define an asynchronous function",
      "To define a synchronous function",
      "To pause the execution of a function",
      "To stop the execution of a function",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a Python web framework?",
    options: ["Laravel", "Django", "Spring", "Rails"],
    correctOptionIndex: 1,
  },
  {
    question: "What is the file extension for Python files?",
    options: [".py", ".js", ".java", ".php"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a package manager for JavaScript?",
    options: ["pip", "npm", "composer", "gem"],
    correctOptionIndex: 1,
  },
  {
    question: "Which language is primarily used for iOS app development?",
    options: ["Java", "Swift", "Kotlin", "C#"],
    correctOptionIndex: 1,
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Online Notation",
      "JavaScript Object Network",
      "JavaScript Online Network",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a static site generator?",
    options: ["WordPress", "Jekyll", "Drupal", "Magento"],
    correctOptionIndex: 1,
  },
  {
    question: "Which of the following is a build tool for Java?",
    options: ["Maven", "Gradle", "Ant", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "What is the main purpose of Docker?",
    options: [
      "To manage databases",
      "To create virtual machines",
      "To containerize applications",
      "To monitor applications",
    ],
    correctOptionIndex: 2,
  },
  {
    question: "Which of the following is a front-end framework?",
    options: ["Laravel", "Express", "Vue.js", "Django"],
    correctOptionIndex: 2,
  },
  {
    question: "What is the default port for HTTPS?",
    options: ["80", "443", "21", "22"],
    correctOptionIndex: 1,
  },
  {
    question: "Which of the following is a JavaScript testing framework?",
    options: ["JUnit", "RSpec", "Mocha", "JUnit"],
    correctOptionIndex: 2,
  },
  {
    question: "What does REST stand for?",
    options: [
      "Representational State Transfer",
      "Representational State Transition",
      "Representational State Transaction",
      "Representational State Transport",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a CSS preprocessor?",
    options: ["Sass", "Less", "Stylus", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript package manager?",
    options: ["npm", "pip", "gem", "composer"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a popular JavaScript library?",
    options: ["React", "Django", "Flask", "Laravel"],
    correctOptionIndex: 0,
  },
  {
    question: "What is the purpose of the 'await' keyword in JavaScript?",
    options: [
      "To pause the execution of an async function",
      "To define an asynchronous function",
      "To stop the execution of a function",
      "To define a synchronous function",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a Python package manager?",
    options: ["npm", "pip", "gem", "composer"],
    correctOptionIndex: 1,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Angular", "Django", "Flask", "Laravel"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a JavaScript module bundler?",
    options: ["Webpack", "Gulp", "Grunt", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "What is the purpose of the 'super' keyword in JavaScript?",
    options: [
      "To call the constructor of the parent class",
      "To create a new object",
      "To access the global object",
      "To define a new class",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a JavaScript testing library?",
    options: ["Jest", "JUnit", "RSpec", "Mocha"],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is a JavaScript build tool?",
    options: ["Maven", "Gradle", "Webpack", "Ant"],
    correctOptionIndex: 2,
  },
  {
    question: "Which of the following is a JavaScript linter?",
    options: ["ESLint", "JSLint", "TSLint", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript transpiler?",
    options: ["Babel", "TypeScript", "CoffeeScript", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript task runner?",
    options: ["Gulp", "Grunt", "Webpack", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which of the following is a JavaScript framework for building mobile apps?",
    options: ["React Native", "Ionic", "NativeScript", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript testing framework?",
    options: ["Jest", "Mocha", "Jasmine", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript build tool?",
    options: ["Webpack", "Parcel", "Rollup", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript linter?",
    options: ["ESLint", "JSLint", "TSLint", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript transpiler?",
    options: ["Babel", "TypeScript", "CoffeeScript", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "Which of the following is a JavaScript task runner?",
    options: ["Gulp", "Grunt", "Webpack", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which of the following is a JavaScript framework for building mobile apps?",
    options: ["React Native", "Ionic", "NativeScript", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which of the following is a JavaScript library for building user interfaces?",
    options: ["React", "Vue", "Angular", "All of the above"],
    correctOptionIndex: 3,
  },
  {
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    options: [
      "To declare a block-scoped variable",
      "To declare a global variable",
      "To declare a constant variable",
      "To declare a function",
    ],
    correctOptionIndex: 0,
  },
  {
    question:
      "Which of the following is a JavaScript framework for server-side development?",
    options: ["Express", "Django", "Flask", "Rails"],
    correctOptionIndex: 0,
  },
  {
    question: "What is the purpose of the 'const' keyword in JavaScript?",
    options: [
      "To declare a block-scoped constant",
      "To declare a block-scoped variable",
      "To declare a global constant",
      "To declare a global variable",
    ],
    correctOptionIndex: 0,
  },
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default shuffle(quizzes);