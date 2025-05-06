import React, { useState } from 'react';
import './LoanCalculator.css';
import useTheme from '../context/theme';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('100000');
  const [rate, setRate] = useState('8.5');
  const [years, setYears] = useState('5');
  const [currency, setCurrency] = useState('USD');
  const [emi, setEmi] = useState(null);
  const [errors, setErrors] = useState({});
  const [schedule, setSchedule] = useState([]);
  const {themeMode} = useTheme()

  const validateInputs = () => {
    const newErrors = {};
    if (!amount) newErrors.loanAmount = "Loan amount is required";
    if (!rate) newErrors.interestRate = "Interest rate is required";
    if (!years) newErrors.termYears = "Loan term is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEMI = () => {
    if (!validateInputs()) return;

    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numPayments = parseFloat(years) * 12;

    const emiCalc =
      (principal * interestRate * Math.pow(1 + interestRate, numPayments)) /
      (Math.pow(1 + interestRate, numPayments) - 1);

    setEmi(emiCalc.toFixed(2));

    const scheduleArr = [];
    let balance = principal;

    for (let i = 1; i <= numPayments; i++) {
      const interestPayment = balance * interestRate;
      const principalPayment = emiCalc - interestPayment;
      balance -= principalPayment;

      scheduleArr.push({
        month: i,
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2),
      });
    }

    setSchedule(scheduleArr);
  };

  const handleReset = () => {
    setAmount('');
    setRate('');
    setYears('');
    setCurrency('USD');
    setEmi(null);
    setErrors({});
    setSchedule([]);
  };

  return (
    <div className={`calculator-container ${themeMode}`}>
      <h2>Loan Calculator Dashboard</h2>

      <div className="inputs">
        <div className="input-group">
          <input
            type="number"
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.loanAmount && <span className="error">{errors.loanAmount}</span>}
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          {errors.interestRate && <span className="error">{errors.interestRate}</span>}
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Term (Years)"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
          {errors.termYears && <span className="error">{errors.termYears}</span>}
        </div>
      </div>

      <button className="calculate-btn" onClick={calculateEMI}>
        Calculate
      </button>

      {emi && (
  <>
    <div className="emi-display">
      <h3>Monthly EMI: {currency} {emi}</h3>
    </div>

    <div className="currency-reset-row">
      <div className="currency-select">
        <label htmlFor="currency">Currency: </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
        </select>
      </div>

      <button className="reset-btn" onClick={handleReset}>
        Reset Table
      </button>
    </div>
  </>
)}



      {schedule.length > 0 && (
        <>
          <h4>Amortization Schedule ({currency})</h4>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{row.principal} {currency}</td>
                  <td>{row.interest} {currency}</td>
                  <td>{row.balance} {currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default LoanCalculator;
