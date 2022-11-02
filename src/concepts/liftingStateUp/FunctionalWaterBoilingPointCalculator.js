import React, { useState } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function BoilingVerdict(props) {
  const { celsius } = props;
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// convert functions

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const TemperatureInput = (props) => {
  const { temperature, scale, onTemperatureChange } = props;

  function handleChange(e) {
    onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

const FunctionalWaterBoilingPointCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("");
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  function handleCelsiusChange(temperature) {
    setTemperature(temperature);
    setScale("c");
  }

  function handleFahrenheitChange(temperature) {
    setTemperature(temperature);
    setScale("f");
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default FunctionalWaterBoilingPointCalculator;
