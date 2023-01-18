
function EvaluateArray(numbers) {
  numbers.map((num) => {
    if (num !== '0' || num !== '1') {
      alert('input must be binary')
    }
  });
}

export default EvaluateArray;
