import React from "react";
import "./WelcomeDialog.css";

/* export function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      <p>This is an empty div just with a fancy border!</p>
      {props.children}
    </div>
  );
}

export function WelcomeDialog() {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
} */

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {/* <p>This is an empty div just with a fancy border!</p> */}
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome !"
      message="Thank you for visiting our spacecraft!" />
  );
}

export default WelcomeDialog; 