// ==========  The textarea Tag  =============

// In HTML, a <textarea> element defines its text by its children:

/* 
<textarea>
  Hello there, this is some text in a text area
</textarea> 
*/

// In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:

// * Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.
import React from "react";

export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Please write an essay about your favorite DOM element"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


