const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById('card');
const btn  = document.getElementById('btn');



const getPokeData = ()=>{
    let id = Math.floor(Math.random() * 500) + 1;
    console.log(id);
    const finUrl = url + id;
    //console.log(finUrl);
    
    fetch(finUrl)
        .then((response)=> response.json())
        .then((data)=>{
        genereteCard(data);
    });
};
 
let genereteCard = (data)=>{
   console.log(data);
   const hp = data.stats[0].base_stat;
   const imgsrc = data.sprites.other.dream_world.front_default;
   const pokeName = data.name;
   const statAttack = data.stats[1].base_stat;
   const statDefense = data.stats[2].base_stat;
   const statSpeed = data.stats[5].base_stat;

   card.innerHTML = `<p class="hp">
        <span>HP</span>${hp}
      </p>
      <img src="${imgsrc}"/>
      <h2 class="poke-name">${pokeName}</h2>
      <div class="types">
      </div>
      <div class="stats">
        <div>
          <h3>${statAttack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>${statDefense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>${statSpeed}</h3>
          <p>Speed</p>
        </div>
      </div>
   `;
   appendTypes(data.types);
};
let appendTypes = (types) =>{
    types.forEach(item => {
        let span = document.createElement('SPAN');
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
}


window.addEventListener("load",getPokeData);

btn.addEventListener("click",getPokeData);
