var ctx = document.getElementById('techChart').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Linux', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'PHP', 'Angular','MongoDB', 'SQL', 'Bootstrap', 'Elastic Search', 'GitHub', 'Cordova'],
        datasets: [{
            label: 'Niveau utilisation des Technologies de Développement Web',
            data: [30, 15, 10, 28, 88, 39, 54, 99, 10, 55, 44, 68, 15],
            backgroundColor: [
                'rgba(255,91,91,0.2)'            ],
            borderColor: [
                'rgba(0, 0, 132, 1)',
                'rgba(0, 02, 235, 1)',
                'rgba(0, 06, 86, 1)',
                'rgba(0, 02, 210, 1)',
                'rgba(0, 02, 255, 1)',
                'rgba(0, 09, 64, 1)',
                'rgba(0, 06, 86, 1)',
                'rgba(0, 02, 210, 1)',
                'rgba(0, 02, 255, 1)',
                'rgba(0, 06, 86, 1)',
                'rgba(0, 02, 210, 1)',
                'rgba(0, 02, 255, 1)',
                'rgba(0, 09, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 14,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: false,
            text: 'Custom Chart Title'
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