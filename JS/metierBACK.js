
//  import {labels1} from './fetch.js';
//  console.log(labels1);

 let donnee = [];
 const myURL = 'http://localhost:1337/competences-backs';

 getdata();
 async function getdata(){
     const response = await fetch(myURL);
     donnee = await response.json();
     donnee.forEach(element => {
        // if(element.id == 1){
        //    data1.push(element.Comprendre);
        //    data1.push(element.Dupliquer);
        //    data1.push(element.Evaluer);
        //    data1.push(element.Analyser);
        //    data1.push(element.Concevoir);
        //    data1.push(element.Inventer);
            console.log(setUpArray(element));
            console.log(setupText(element));


            setUptChart(element);
        // }
        // return data1;
    });  
 }

 // Traiter les données pour les injecter ddans les charts
 function setUpArray(el){
    //  console.log(element);
    let values = [];
    for(let e in el){
        console.log(typeof(el[e]), typeof(el[e]) == "number");
        if(typeof(el[e]) == "number" && e != 'id'){
            values.push(el[e]);          
        }
    }
    return values;
 }
function setupText(txt){
    let text = [];
    for(let t in txt){
        console.log(typeof(txt[t]), typeof(txt[t]) == "string");
        if(typeof(txt[t]) == 'string' && t != 'prenom' && t != 'nom' && t != 'created_at' && t != 'updated_at'){
            text.push(txt[t]);          
        }
    }
    return text;
}
 

function setUptChart(el){

    let canvas = document.createElement('canvas');
    document.getElementById('canvas').appendChild(canvas);
    let ctx = canvas.getContext('2d');

    Chart.defaults.global.title,
    Chart.defaults.global.tooltips,
    Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

    let myCompChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
            datasets: [{
                label: 'Créer une base de données',
                data: setUpArray(el),
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
                    fontSize: 26,
                    fontFamily: 'Nunito, sans-serif'
                }
            },
            title: {
                display: true,
                position: 'bottom',
                text: setupText(el),
                fontColor: "#fff",
                fontSize: 20,
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
}




// var ctx = document.getElementById('myChart2').getContext('2d');

// Chart.defaults.global.title,
// Chart.defaults.global.tooltips,
// Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
//         datasets: [{
//             label: 'Développer les composants d\'accès aux données',
//             data: [1, 2, 3, 2, 3, 1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, .5)',
//                 'rgba(54, 162, 235, .5)',
//                 'rgba(255, 206, 86, .5)',
//                 'rgba(75, 192, 192, .5)',
//                 'rgba(153, 102, 255, .5)',
//                 'rgba(255, 159, 64, .5)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }
//     ]
//     },
//     options: {
//         legend: {
//             display: false,
//             position: 'bottom',
//             labels: {
//                 fontColor: "#fff",
//                 fontSize: 18,
//                 fontFamily: 'Nunito, sans-serif'
//             }
//         },
//         title: {
//             display: true,
//             text: 'Développer les composants d\'accès aux données',
//             position: 'bottom',
//             fontColor: "#fff",
//             fontSize: 16,
//             fontFamily: 'Nunito, sans-serif'
//         },
//         scales: {   
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     zeroLineColor: 'rgba(255, 0, 0, 1)',
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255, 0.5)",
//                     max: 100
//                 }
//             }],
//             xAxes: [{
//                 ticks: {
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255)",
//                     max: 100
//                 }
//             }]
            

//         }
//     }
// });



// var ctx = document.getElementById('myChart3').getContext('2d');

// Chart.defaults.global.title,
// Chart.defaults.global.tooltips,
// Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
//         datasets: [{
//             label: 'Développer la partie back-end d\'une appli web/ mobile',
//             data: [3, 1, 2, 1, 1, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, .5)',
//                 'rgba(54, 162, 235, .5)',
//                 'rgba(255, 206, 86, .5)',
//                 'rgba(75, 192, 192, .5)',
//                 'rgba(153, 102, 255, .5)',
//                 'rgba(255, 159, 64, .5)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }
//     ]
//     },
//     options: {
//         legend: {
//             display: false,
//             position: 'bottom',
//             labels: {
//                 fontColor: "#fff",
//                 fontSize: 16,
//                 fontFamily: 'Nunito, sans-serif'
//             }
//         },
//         title: {
//             display: true,
//             text: 'Développer la partie back-end d\'une appli web/ mobile',
//             position: 'bottom',
//             fontColor: "#fff",
//             fontSize: 18,
//             fontFamily: 'Nunito, sans-serif'
//         },
//         scales: {   
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     zeroLineColor: 'rgba(255, 0, 0, 1)',
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255, 0.5)",
//                     max: 100
//                 }
//             }],
//             xAxes: [{
//                 ticks: {
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255)",
//                     max: 100
//                 }
//             }]
            

//         }
//     }
// });


// var ctx = document.getElementById('myChart4').getContext('2d');

// Chart.defaults.global.title,
// Chart.defaults.global.tooltips,
// Chart.defaults.global.legend.fontFamily = 'Permanent Marker, cursive'

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Comprendre', 'Dupliquer', 'Analyser', 'Evaluer', 'Concevoir', 'Inventer'],
//         datasets: [{
//             label: 'Elaborer et mettre en œuvre des composants dans une appli de G de C ou E-com',
//             data: [2, 3, 2, 1, 3, 2],
//             backgroundColor: [
//                 'rgba(255, 99, 132, .5)',
//                 'rgba(54, 162, 235, .5)',
//                 'rgba(255, 206, 86, .5)',
//                 'rgba(75, 192, 192, .5)',
//                 'rgba(153, 102, 255, .5)',
//                 'rgba(255, 159, 64, .5)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }
//     ]
//     },
//     options: {
//         legend: {
//             display: false,
//             position: 'bottom',
//             labels: {
//                 fontColor: "#fff",
//                 fontSize: 12,
//                 fontFamily: 'Nunito, sans-serif'
//             }
//         },
//         title: {
//             display: true,
//             position: 'bottom',
//             text: 'Elaborer et mettre en œuvre des composants dans une appli de G de C ou E-com',
//             fontColor: "#fff",
//             fontSize: 16,
//             fontFamily: 'Nunito, sans-serif'
//         },
//         scales: {   
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     zeroLineColor: 'rgba(255, 0, 0, 1)',
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255, 0.5)",
//                     max: 100
//                 }
//             }],
//             xAxes: [{
//                 ticks: {
//                     display: true,
//                     fontFamily: 'Nunito, sans-serif',
//                     fontColor: "rgba(255, 255, 255)",
//                     max: 100
//                 }
//             }]
            

//         }
//     }
// });


