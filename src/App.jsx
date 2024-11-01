import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputs from "./components/Userinput";

function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000, // Updated here
    annualInvestment: 1000,
    expectedReturn: 8,
    duration: 5,
  });

  const inputIsValid = UserInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs UserInput={UserInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">pleas enter a valid positiv Value</p>
      )}
      {inputIsValid && <Results input={UserInput} />}
    </>
  );
}

export default App;
