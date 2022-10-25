// Rendering Elements

// An element describes what you want to see on the screen:

const element = <h1>Hello, world</h1>;

// Rendering an Element into the DOM

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));

// Updating the Rendered Element

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);

/* React Only Updates What’s Necessary

  React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

  Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM. */

/* Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM. */
