import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(e, input) {
    setValues((prevValues) => ({
      ...prevValues,
      [input]: parseInt(e.target.value, 10),
    }));
  }
  const calculatedValues = calculateInvestmentResults(values);

  const isValidValues = values.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleInput} values={values} />
      {!isValidValues && <p className="center">The duration must be greater than zero.</p>}
      {isValidValues && <Results calculatedValues={calculatedValues} />}
    </>
  );
}

export default App;
