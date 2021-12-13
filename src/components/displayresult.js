import React from "react";

const DisplayResult = (props) => {
  const { results } = props;
  document.title = "Results";
  var correctNumAnswers = 0;
  results.forEach(element => {
    if (element.isCorrect) {
      correctNumAnswers += 1;
    }
  });
  
  if (results.length > 0) {
    return (
      <div className="container">
        <table className="result-table">
          <tr>
            <th className="result-table-header">Question number</th>
            <th className="result-table-header">Selected</th>
            <th className="result-table-header">Expected</th>
            <th className="result-table-header">IsCorrect</th>
          </tr>
          {results.map((item) => (
            <tr key={item.qNumber} className="result-table-row">
              <td className="result-table-cell">{item.qNumber}</td>
              <td className="result-table-cell">{item.answerSelected}</td>
              <td className="result-table-cell">{item.correctAnswer}</td>
              <td className="result-table-cell">
                {item.isCorrect ? "true" : "false"}
              </td>
            </tr>
          ))}
        </table>
        <div className="correct-num-answers">Number of correct answers:{correctNumAnswers}</div>
      </div>
    );
  } else {
    return <div>No questions attempted!</div>;
  }
};
export default DisplayResult;
