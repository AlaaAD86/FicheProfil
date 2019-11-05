var ctx = document.getElementById('techChart').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Linux', 'HTML', 'CSS', 'JS', 'Node', 'PHP', 'Angular','Mongo', 'SQL', 'B', 'E.S', 'Git', 'Cordova', 'WP'],
        datasets: [{
            label: 'Niveau utilisation des Technologies de Développement Web',
            data: [30, 15, 10, 28, 88, 39, 54, 15, 10, 55, 44, 68, 15, 80],
            backgroundColor: [
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)',
                'rgba(255,169,135,0.6)'      
           ],
            borderColor: [
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)',
                'rgba(229, 75, 75, 0.5)'
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
                fontSize: 14,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            text: 'Niveau utilisation des Technologies de Développement Web',
            fontColor: "#fff",
            fontSize: 16,
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