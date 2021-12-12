function doGraph() {
    var xValues = [];
    var yValues = [];
    var amp = parseFloat(document.getElementById('amp').value)

    if (amp >= 100) {
        alert('Please enter a number under 100')
        throw new Error('Please enter a number under 100')
    }

    var period = parseFloat(document.getElementById('period').value)
    var valueString = String(amp+'* (Math.sin('+period+'* x))')

    generateData(valueString, 0, 2*Math.PI, .005);

    new Chart('chart', {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
            fill: false,
            pointRadius: 0,
            borderColor: '#c01c81',
            data: yValues
            }]
        },    
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: 'f(x) = '+ amp +'sin('+period+'x)',
            fontSize: 16
            }
        }
    });

    function generateData(value, xWindowMinus, xWindowPlus, step) {
        for (let x = xWindowMinus; x <= xWindowPlus; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
        }
    }
}

function clearGraph() {
    window.location.reload()
}

const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.getElementById('clearBtn')
enterBtn.addEventListener('click', doGraph);
clearBtn.addEventListener('click', clearGraph)