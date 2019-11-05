
var ctx = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
        datasets: [{
            label: 'Maquetter une application',
            data: [3, 2, 1, 1, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, .5)',
                'rgba(255, 206, 86, .5)',
                'rgba(75, 192, 192, .5)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        legend: {
            display: false,
            backgroundColor:'rgba(12, 45, 255, 1)',
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 16,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            position: 'bottom',
            text:  'Maquetter une application',
            fontColor: "#fff",
            fontSize: 16,
            fontFamily: 'Nunito, sans-serif'
        },
        scales: {   
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    zeroLineColor: 'rgba(0, 0, 0, .5)',
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


var ctx = document.getElementById('myChart2').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
        datasets: [{
            label: 'Développer une interface utilisateur web dynamique',
            data: [1, 2, 3, 2, 3, 1],
            backgroundColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, .5)',
                'rgba(255, 206, 86, .5)',
                'rgba(75, 192, 192, .5)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 18,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            text: 'Développer une interface utilisateur web dynamique',
            position: 'bottom',
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



var ctx = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
        datasets: [{
            label: 'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',
            data: [3, 1, 2, 1, 1, 3],
            backgroundColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, .5)',
                'rgba(255, 206, 86, .5)',
                'rgba(75, 192, 192, .5)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 16,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            text: 'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',
            position: 'bottom',
            fontColor: "#fff",
            fontSize: 18,
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


var ctx = document.getElementById('myChart4').getContext('2d');

Chart.defaults.global.title,
Chart.defaults.global.tooltips,
Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
        datasets: [{
            label:'Développer la partie front-end d\'une application web ou web mobile en intégrant les recommandations de sécurité',
            data: [2, 3, 2, 1, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, .5)',
                'rgba(255, 206, 86, .5)',
                'rgba(75, 192, 192, .5)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: "#fff",
                fontSize: 12,
                fontFamily: 'Nunito, sans-serif'
            }
        },
        title: {
            display: true,
            position: 'bottom',
            text:'Développer la partie front-end d\'une application web ou web mobile en intégrant les recommandations de sécurité',
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