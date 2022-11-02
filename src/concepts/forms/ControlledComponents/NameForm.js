/* ===========  Controlled Components  ===============

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component: */

import React from 'react';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { id: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, id: event.timeStamp });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log('1. event', event);
    console.log('2. event.target', event.target);
    console.log('3. event.target.value', event.target.value);
    console.log('4. this.state', this.state);
    console.log('5. this.state.value', this.state.value);
    console.log('index', Object.keys(this.state)); 
 }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
