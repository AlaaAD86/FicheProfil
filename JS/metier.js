var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
        datasets: [{
            label: 'Maquetter une application',
            data: [2, 1, 2, 3, 1, 3],
            backgroundColor: [
                'rgba(21,60,73, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        },{
            label: 'Réaliser une interface utilisateur web statique et adaptable',
            data: [1, 2, 3, 2, 3, 1],
            backgroundColor: [
                'rgba(217,171,119,0.2)'],
            borderColor: [
                'rgba(0, 99, 132, 1)',
                'rgba(0, 162, 235, 1)',
                'rgba(0, 206, 86, 1)',
                'rgba(0, 192, 192, 1)',
                'rgba(0, 102, 255, 1)',
                'rgba(0, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Développer une interface utilisateur web dynamique',
            data: [3, 1, 2, 1, 1, 3],
            backgroundColor: [
                'rgba(97,20,28,0.2)'            ],
            borderColor: [
                'rgba(0, 99, 132, 1)',
                'rgba(0, 162, 235, 1)',
                'rgba(0, 206, 86, 1)',
                'rgba(0, 192, 192, 1)',
                'rgba(0, 102, 255, 1)',
                'rgba(0, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',
            data: [2, 3, 2, 1, 3, 2],
            backgroundColor: [
                'rgba(255,91,91,0.2)'            ],
            borderColor: [
                'rgba(0, 0, 132, 1)',
                'rgba(0, 02, 235, 1)',
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
                    max: 3
                }
            }],
            xAxes: [{
                ticks: {
                    display: true,
                    fontFamily: 'Nunito, sans-serif',
                    fontColor: "rgba(255, 255, 255)",
                    max: 3
                }
            }]
            

        }
    }
});