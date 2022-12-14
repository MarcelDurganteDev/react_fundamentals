// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.

// For example, the HTML:

{
  /* <button onclick="activateLasers()">
  Activate Lasers
</button>

// is slightly different in React:

<button onClick={activateLasers}>
  Activate Lasers
</button> */
}

/* Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write: */

<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>;

// In React, this could instead be:

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

/* When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. 

For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states: */

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));

/* If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks: */

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

/* If you aren’t using class fields syntax, you can use an arrow function in the callback: */

class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

// Passing Arguments to Event Handlers

// In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>