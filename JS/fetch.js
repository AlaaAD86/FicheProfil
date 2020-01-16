// fetching competences metiers

// class Metier {
//     constructor(comprendre, dupliquer, analyser, evaluer, concevoir, inventer) {
//         this.comprendre = comprendre;
//         this.dupliquer = dupliquer;
//         this.analyser = analyser;
//         this.evaluer = evaluer;
//         this.concevoir = concevoir;
//         this.inventer = inventer;
//     }
// }

//     fetch('http://localhost:1337/competences-metiers')
//     .then(response => response.json())
//     .then(data => {
//         console.log(`hello`);
//         data.forEach((apis) => {

//             let titre = document.createElement('p');
//             titre.textContent = apis.intitule;

//             this.comprendre = document.createElement('p');
//             this.comprendre.textContent = apis.Comprendre;

//             let dupliquer = document.createElement('p');
//             dupliquer.textContent = apis.Dupliquer;

//             let analyser = document.createElement('p');
//             analyser.textContent = apis.Analyser;

//             let evaluer = document.createElement('p');
//             evaluer.textContent = apis.Evaluer;

//             let concevoir = document.createElement('p');
//             concevoir.textContent = apis.Concevoir;

//             let inventer = document.createElement('p');
//             inventer.textContent = apis.Inventer;

//             console.log(titre);


//         });

//     });

var url = 'http://localhost:1337/competences-metiers';

    class Metier {
        constructor(comprendre, dupliquer, analyser, evaluer, concevoir, inventer) {
            this.comprendre = comprendre;
            this.dupliquer = dupliquer;
            this.analyser = analyser;
            this.evaluer = evaluer;
            this.concevoir = concevoir;
            this.inventer = inventer;
            this.mydata = fetch('http://localhost:1337/competences-metiers')
                   .then(response => response.json());
        }

        find(){
            return this.mydata.then(data => {
                return data;
                // data.forEach((apis) => {
        
                      
                //     let comprend = document.createElement('p');
                //     comprend.textContent = apis.Comprendre;
                //     // this.comprendre = comprendre;
        
                // });
        });
    }
}

let metier = new Metier();
let labels1 = [];

metier.find().then(data => {
    console.log(data);
    
    data.forEach(element => {
        if(element.id == 1){
           labels1.push(element.Comprendre);
           labels1.push(element.Dupliquer);
           labels1.push(element.Evaluer);
           labels1.push(element.Analyser);
           labels1.push(element.Concevoir);
           labels1.push(element.Inventer);
     
        }
        return labels1
                
    });

    
    
})

// myChart.data.datasets.data[4, 4 , 4, 4 , 4]
