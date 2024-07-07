function convertUnits() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;
    
    let baseValue;

    
    switch (inputUnit) {
        case 'px':
            baseValue = inputValue;
            break;
        case 'em':
        case 'rem':
            baseValue = inputValue * 16; 
            break;
        case 'vw':
            baseValue = (inputValue / 100) * window.innerWidth;
            break;
        case 'vh':
            baseValue = (inputValue / 100) * window.innerHeight;
            break;
    }

    let outputValue;


    switch (outputUnit) {
        case 'px':
            outputValue = baseValue;
            break;
        case 'em':
        case 'rem':
            outputValue = baseValue / 16;
            break;
        case 'vw':
            outputValue = (baseValue / window.innerWidth) * 100;
            break;
        case 'vh':
            outputValue = (baseValue / window.innerHeight) * 100;
            break;
    }

    document.getElementById('output-value').innerText = outputValue.toFixed(2);
}
