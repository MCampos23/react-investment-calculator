import {formatter} from "../util/investment";

export default function Results({calculatedValues}){
    return (
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
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(value.accumulatedInterest)}</td>
              <td>{formatter.format(value.accumulatedInvested)}</td>
            </tr>
          ))}
        </tbody>
      </table>


    )
}