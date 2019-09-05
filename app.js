document.querySelector(".get-jokes").addEventListener("click", getJoks);

function getJoks(e){
    const number = document.querySelector(`input[type=number]`).value;

    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then(function(response){
       
        return response.json();
    })
    .then(function(data){
        let output ="";
        
        data.value.forEach(joke =>{

            output +=`<li>${joke.joke}<li>`;
            console.log(output);

        });
        document.querySelector(".jokes").innerHTML = output;

    });


    e.preventDefault();
}