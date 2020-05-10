// Belly Button Biodiversity - Bonus

function buildGauge(g_level) {
    // Calculating radius 
    var degrees = 9 - g_level,
        radius = .5;
    var radians = degrees * Math.PI / 9;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    //  Create the path where x is the xpath, and y is the ypath, and z is the end path
    var mainPath = 'M -.0 -0.025 L .0 0.025 L '
    var path = mainPath.concat(`${x}  ${y}  z`);
    console.log(path);

    // Create the gauge arc 
    var steps = 9;
    var arc = 50;
    var values = Array(9).fill(1).map(i => arc / steps);

    // Adding the other half of the circle to the values
    values = values.concat(50);
    console.log(values)
        // Create the data array for the gauge plot
    var data = [{
            type: 'scatter',
            x: [0],
            y: [0],
            marker: { size: 40, color: '850000' },
            showlegend: false,
            text: g_level

        },
        {
            textinfo: 'text',
            textposition: 'inside',
            hole: .5,
            type: 'pie',
            showlegend: false,
            marker: { colors: ['FFFFFF', 'rgba(240, 230,215,.5)', 'rgba(232,226,202,.5)', 'rgba(210,206,145,.5)', 'rgba(202,209,95,.5)', 'rgba(170,202,42,.5)', 'rgba(110,154,22,.5)', 'rgba(14,127,0,.5)', 'rgba(10,120,22,.5)', 'rgba(0,105,11,.5)'].reverse() },
            values: values,
            rotation: 90,
            text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1'],
            hoverinfo: 'text'
        }
    ];

    var layout = {
        shapes: [{
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000'
            }
        }],
        title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week',
        font: {
            weight: "bold",
            size: 25,
            color: "black"
        },
        height: 800,
        width: 900,
        margin: {
            l: 30,
            r: 10,
            b: 0,
            t: 150
        },
        // Scaling the axes 
        xaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] },
        yaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] }
    };
    Plotly.newPlot("gauge", data, layout);
};