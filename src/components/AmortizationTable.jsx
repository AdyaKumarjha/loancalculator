import React from 'react';

function AmortizationTable({ schedule }) {
  return (
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
        {schedule.map((row, index) => (
          <tr key={index}>
            <td>{row.month}</td>
            <td>${row.principal}</td>
            <td>${row.interest}</td>
            <td>${row.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AmortizationTable;
