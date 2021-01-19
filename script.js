let heightMeter;

const calculate = () => {
    heightMeter = parseFloat(document.getElementById('heightMeter').value);
    const result = heightMeter * 3.28084;
    document.getElementById('output').innerHTML = `Your height is ${result.toFixed(2)} feet`;
}

const reset = () => {
    document.getElementById('heightMeter').value = '';
    document.getElementById('output').innerHTML = '';
}