var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fiable', 'Organisé', 'Disponible', 'Réflexif', 'Créatif', 'Leader', 'Fluide', 'Energique', 'Indépendent', 'Curieux', 'Equipier'],
        datasets: [{
            
            data: [70, 15, 10, 28, 88, 39, 70, 53, 44, 36, 68],
            backgroundColor: [
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)',
                'rgba(255, 200, 87, 0.5)'          ],
            borderColor: [
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)',
                'rgba(189, 217, 191, 1)'
            ],
            borderWidth: 2
        }
    ]
    },
    options: {
     
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 13,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            text: 'Compétences Humaines (Savoir-être)',
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