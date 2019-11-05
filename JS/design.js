var ctx = document.getElementById('designChart').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Adobe Photoshop', 'Adobe illustrator', 'Adobe After Effect', 'Adobe XD', 'Adobe Lightroom', 'Adobe InDesign','Adobe Premier', 'Figma', 'Prototypage'],
        datasets: [{
            label: 'Niveau utilisation des application de deisgn',
            data: [30, 15, 50, 58, 88, 39, 54, 90, 90],
            backgroundColor: [
                'rgba(173, 189, 255, 1)',    
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)', 
                'rgba(173, 189, 255, 1)'        ],
            borderColor: [
                'rgba(241, 171, 56, 1)',
                'rgba(183,79,111, 1)',
                'rgba(0, 02, 235, 1)',
                'rgba(0, 06, 86, 1)',
                'rgba(0, 02, 210, 1)',
                'rgba(0, 02, 255, 1)',
                'rgba(0, 09, 64, 1)',
                'rgba(0, 06, 86, 1)',
                'rgba(0, 02, 255, 1)'
            ],
            borderWidth: 2
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false,
            position: 'top',
            labels: {
                fontColor: "#fff",
                fontSize: 19,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            text: 'Niveau de maitrise des applications de deisgn',
            fontColor: "#fff",
            fontSize: 15,
            fontFamily: 'Nunito, sans-serif'
        },
        scales: {   
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    zeroLineColor: 'rgba(255, 0, 0, 1)',
                    display: true,
                    fontFamily: 'Nunito, sans-serif',
                    fontColor: "rgba(255, 255, 255, 0.5)",
                    max: 100
                }
            }],
            xAxes: [{
                ticks: {
                    display: true,
                    fontFamily: 'Nunito, sans-serif',
                    fontColor: "rgba(255, 255, 255)",
                    max: 100
                }
            }]
            

        }
    }
});