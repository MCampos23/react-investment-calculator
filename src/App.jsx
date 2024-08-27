import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

let nextId = 0;

function App() {

  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  // values = [{initial-investment: 34, anual-investment:45, expected-return:9, duration: 10}, ...]
  function handleInput(e, input) {
    setValues(prevValues => ({
     ...prevValues,
    [input]: parseInt(e.target.value , 10),
   }))
  }
  const calculatedValues = calculateInvestmentResults(values);

  return (
    <>
      <header id="header">
        <img src="investment-calculator-logo.png" alt="" />
        <h1>Investment Calculator</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <label>
            INITIAL INVESTMENT
            <input type="number" onChange={(e) => handleInput(e,'initialInvestment')}/>
          </label>
          <label>
            ANUAL INVESTMENT
            <input type="number"  onChange={(e) => handleInput(e,'annualInvestment')}/>
          </label>
        </div>
        <div className="input-group">
          <label>
            EXPECTED RETURN
            <input type="number"  onChange={(e) => handleInput(e,'expectedReturn')}/>
          </label>
          <label>
            DURATION
            <input type="number"  onChange={(e) => handleInput(e,'duration')}/>
          </label>
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {calculatedValues.map((value, index) => (
          <tr key={index}>
            <th>{value.year}</th>
            <th>{value.valueEndOfYear}</th>
            <th>{value.interest}</th>
            <th>{value.annualInvestment}</th>
            <th>0</th>
          </tr>           

))}
        </tbody>
      </table>
    </>
  );
}

export default App;
