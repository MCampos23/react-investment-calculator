function App() {
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
            <input type="text" name="" id="" />
          </label>
          <label>
            ANUAL INVESTMENT
            <input type="text" name="" id="" />
          </label>
        </div>
        <div className="input-group">
          <label>
            EXPECTED RETURN
            <input type="text" name="" id="" />
          </label>
          <label>
            DURATION
            <input type="text" name="" id="" />
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
          <tr>
            <th>1</th>
            <th>12</th>
            <th>21</th>
            <th>25</th>
            <th>45</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
