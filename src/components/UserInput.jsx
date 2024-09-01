export default function UserInput({onChangeInput, values}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => onChangeInput(e, "initialInvestment")}
            value={values.initialInvestment}
            required
          />
        </p>
        <p>
          <label>ANUAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => onChangeInput(e, "annualInvestment")}
            value={values.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>

          <input
            type="number"
            onChange={(e) => onChangeInput(e, "expectedReturn")}
            value={values.expectedReturn}
            required
          />
        </p>
        <p>
        <label>DURATION</label>
        <input
          type="number"
          onChange={(e) => onChangeInput(e, "duration")}
          value={values.duration}
          required
        />
        </p>
      </div>
    </section>
  );
}
