async function getCharacters() {
    try{

        let all = await fetch('https://rickandmortyapi.com/api/character?status=alive')

        let json = await all.json();

        let alive = json.results.filter((character)=>{
            return character.status == "Alive";
        });
        console.log(alive);

        if(alive.length >= 50 ){
            alive = alive.splice(0,50)
        }

        let cnt = 1;
        alive = alive.map((character)=>{
            cnt++;
            let br = cnt % 5 === 0 ? ' <br>' : ' '
            return (
                `<li class="characterLI" id="${character.id}">
                    <p>${character.name}</p>
                    <img width="75px" height="75px" src="${character.image}" >
                    <p>${character.location.name}</p>
                    <p>${character.species}</p>
                    <p>${character.gender}</p>
                </li> ${br}`  
                );
        }).join(' ')
        let list = document.getElementById("characterList")
        list.innerHTML = alive;
    }catch(err){
        if( err ){
            let error = document.getElementById("err")
            error.classList.remove("err")
            error.classList.add("shownerr")
            error.innerHTML = err;
        }
    }
}
getCharacters();