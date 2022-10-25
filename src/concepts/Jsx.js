/* 
JSX is a syntax extension to JavaScript.
JSX produces React “elements”.

Embedding Expressions in JSX

In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces: */

const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById("root"));

/* You can put any valid JavaScript expression inside the curly braces in JSX. For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

In the example below, we embed the result of calling a JavaScript function, `formatName(user)`, into an `<h1>` element. */

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element2 = <h1> Hello, {formatName(user)}! </h1>;

/* JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions: */

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

/* Specifying Attributes with JSX

You may use quotes to specify string literals as attribute */

const element = <a href="https://www.reactjs.org"> link </a>;

/* You may also use curly braces to embed a JavaScript expression in an attribute: */

const element = <img src={user.avatarUrl}></img>;

/* **Warning:**

Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.

For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`. */

/* Specifying Children with JSX */

/* If a tag is empty, you may close it immediately with `/>`, like XML: */

const element = <img src={user.avatarUrl} />;

/* JSX tags may contain children: */

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

/* JSX Prevents Injection Attacks */

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

/* JSX Represents Objects

Babel compiles JSX down to `React.createElement()` calls.

These two examples are identical: */

const element = <h1 className="greeting">Hello, world!</h1>;

const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

/* `React.createElement()`
 performs a few checks to help you write bug-free code but essentially it creates an object like this:
 */

// Note: this structure is simplified
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

/* These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date. */
