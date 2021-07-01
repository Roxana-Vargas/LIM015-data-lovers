/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
/* import data from './data/pokemon/pokemon.js'; */
// import data from './data/rickandmorty/rickandmorty.js';

import pokemonData from './data/pokemon/pokemon.js';
import {allPokemon, displayType, highDefense, topTen, weaknessFilter} from './data.js'

// const pokemonData=JSON.parse(JSON.stringify(data));
// console.log(pokemonData);

// -------------------------All pokemon--------------------------------------

let imagesPokemon=allPokemon(pokemonData)
document.getElementById('pokemon').innerHTML=imagesPokemon;
// console.log(imagesPokemon);

// -------------------------Filter Type--------------------------------------

let typeLinks = document.querySelectorAll('.type_container a');

document.getElementById('pokedex').addEventListener('click', function() { 
  for(let link of typeLinks){
    link.classList.remove('linkActivoType');
  }
    displayType(pokemonData,'pokemon','pokedex');
});

document.getElementById('type_normal').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_normal').classList.add('linkActivoType');
      displayType(pokemonData,'pokemon_type', 'normal');
});

document.getElementById('type_fighting').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fighting').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fighting');
});

document.getElementById('type_flying').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_flying').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'flying');
});

document.getElementById('type_poison').addEventListener('click', function() {
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
    document.getElementById('type_poison').classList.add('linkActivoType'); 
    displayType(pokemonData,'pokemon_type', 'poison');
});

document.getElementById('type_ground').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ground').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ground');
});

document.getElementById('type_rock').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_rock').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'rock');
});

document.getElementById('type_bug').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_bug').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'bug');
});

document.getElementById('type_ghost').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ghost').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ghost');
});

document.getElementById('type_steel').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_steel').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'steel');
});

document.getElementById('type_fire').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fire').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fire');
    displayEachInfoFiltro('fire',pokemonData);
});

document.getElementById('type_water').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_water').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'water');
});

document.getElementById('type_grass').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_grass').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'grass');
    displayEachInfoFiltro('grass',pokemonData);
});

document.getElementById('type_electric').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_electric').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'electric');
});

document.getElementById('type_psychic').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_psychic').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'psychic');
});

document.getElementById('type_ice').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ice').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ice');
});

document.getElementById('type_dragon').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dragon').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'dragon');
});

document.getElementById('type_fairy').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fairy').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fairy');
});

document.getElementById('type_dark').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dark').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'dark');
});

// ------------------- Barra de navegación---------------------

let navLinks = document.querySelectorAll('.header_container li');

document.getElementById('home').addEventListener('click', function() { 
    
    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('home').classList.add('linkActivo');
      displayMain('home');
});
document.getElementById('pokedex').addEventListener('click', function() { 

    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('pokedex').classList.add('linkActivo');
      displayMain('pokedex');
      displayAllPokedex(pokemonData);
});
document.getElementById('guide').addEventListener('click', function() { 
    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('guide').classList.add('linkActivo');
    displayMain('guide');
});

const displayMain = (id) => {
    if (id=='home') {
        document.getElementById('interface_home').style.display= 'block';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokedex') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'block';
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'guide'){
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'block';
    } 
}

// -------------------------Dispaly Filtros--------------------------------

// document.getElementById('pokemon').addEventListener('click', function() { 
//     pokemonInformationDisplay('pokemon');
// });
// document.getElementById('pokemon_001').addEventListener('click', function() { 
//     pokemonInformationDisplay('pokemon_about');
//     pokemonInfo('001',pokemonData);
// });

// document.getElementById('pokemon_filter001').addEventListener('click', function() { 
//   pokemonInformationDisplay('pokemon_about');
//   pokemonInfo('001',pokemonData);
// });

// document.getElementById('pokemon_251').addEventListener('click', function() { 
//   pokemonInformationDisplay('pokemon_about');
//   pokemonInfo('251',pokemonData);
// });
// document.getElementById('pokemon_016').addEventListener('click', function() { 
//   pokemonInformationDisplay('pokemon_about');
//   pokemonInfo('016',pokemonData);
// });
// document.getElementById('pokedex').addEventListener('click', function() { 
//   pokemonInformationDisplay('pokemon_about')
//   displayAllPokedex(pokemonData);
// });
document.getElementById('pokemon_about').addEventListener('click', function() { 
  pokemonInformationDisplay('pokemon_about');
});
document.getElementById('pokemon_features').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon_features');
});
document.getElementById('pokemon_attacks').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon_attacks');
});


const pokemonInformationDisplay = (id) => {
    // if (id=='pokemon') {
    //     document.getElementById('interface_home').style.display= 'none';
    //     document.getElementById('interface_pokedex').style.display = 'none';
    //     document.getElementById('pokemon_information_bar').style.display = 'block';
    //     document.getElementById('interface_about').style.display= 'block';
    //     document.getElementById('interface_features').style.display= 'none';
    //     document.getElementById('interface_attacks').style.display= 'none';
    //     document.getElementById('interface_guide').style.display= 'none';
    // } else 
    
    if (id == 'pokemon_about') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'block';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokemon_features') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'block';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokemon_attacks') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'block';
        document.getElementById('interface_guide').style.display= 'none';
    } 

    // if (id=='pokemon_about') {
    //   document.getElementById('pokemon_filter001').addEventListener('click', function() { 
    //     pokemonInformationDisplay('pokemon_about');
    //     pokemonInfo('001',pokemonData);
    //   });
    // }
}


// ----------------------Top Ten-----------------------
let top=topTen(pokemonData);

top.map(divPokemon => {
  document.getElementById('top_ten').innerHTML += divPokemon;
});

// console.log(top);

// -----------------------Filter Weakness---------------------

document.getElementById('more_weaknesses').addEventListener('click', function() {
    allFilter('moreWeaknesses');
});

document.getElementById('high_defense').addEventListener('click', function() {
    allFilter('highDefense');
});

const allFilter= (id) => {
    
    if (id === 'moreWeaknesses') {
        
        let more=weaknessFilter(pokemonData);
        let  algo='';
        more.map(divPokemon => {  

             algo += divPokemon;
              });
    

        document.getElementById("pokemon").style.display = "none";
        document.getElementById("pokemon_type").style.display = "flex";
        document.getElementById("pokemon_type").innerHTML = algo;
      } else if(id === 'highDefense'){
        let high=highDefense(pokemonData);
        let  algo='';
        high.map(divPokemon => {
              
             algo += divPokemon;
              });


        document.getElementById("pokemon").style.display = "none";
        document.getElementById("pokemon_type").style.display = "flex";
        document.getElementById("pokemon_type").innerHTML = algo;
      }
   
};

// ---------------Pokemon Info------------------------------

const pokemonInfo = (num, data) => {
  let info = data.pokemon[parseInt(num)-1];
  document.getElementById('generation_pokemon').innerHTML= info.generation.name;
  document.getElementById('height_pokemon').innerHTML= info.size.height;
  document.getElementById('weight_pokemon').innerHTML= info.size.weight;
  document.getElementById('rarity_pokemon').innerHTML= info['pokemon-rarity'];
  document.getElementById('types_pokemon').innerHTML= info.type;
  document.getElementById('attack_pokemon').innerHTML= info.stats['base-attack'];
  document.getElementById('defense_pokemon').innerHTML= info.stats['base-defense'];
  document.getElementById('resistance_pokemon').innerHTML= info.stats['base-stamina'];
  document.getElementById('max_cp_pokemon').innerHTML= info.stats['max-cp'];
  document.getElementById('max_hp_pokemon').innerHTML= info.stats['max-hp'];
  document.getElementById('resistant_pokemon').innerHTML= info.resistant;
  document.getElementById('weaknesses_pokemon').innerHTML= info.weaknesses;
  document.getElementById('quick_move_pokemon_0').innerHTML= info['quick-move'][0].name;
  document.getElementById('damage_quick_0').innerHTML= info['quick-move'][0]['base-damage'];
  document.getElementById('quick_move_pokemon_1').innerHTML= info['quick-move'][1].name;
  document.getElementById('damage_quick_1').innerHTML= info['quick-move'][1]['base-damage'];
  document.getElementById('special_attacks_pokemon_0').innerHTML= info['special-attack'][0].name;
  document.getElementById('damage_special_0').innerHTML= info['special-attack'][0]['base-damage'];
  document.getElementById('special_attacks_pokemon_1').innerHTML= info['special-attack'][1].name;
  document.getElementById('damage_special_1').innerHTML= info['special-attack'][1]['base-damage'];
  document.getElementById('pokemon_img_info').innerHTML= `<img width="120" height="120" src=${info.img} />`;
  document.getElementById('pokemon_name_num').innerHTML= `${info.name} <br> ${info.num}`;
};


//  console.log(pokemonData.pokemon[2]);

// ----------------------------------------------

const displayEachInfoFiltro =(type,data) => {
  let POKEMON = JSON.parse(JSON.stringify(data.pokemon));
  let array=[];
  
  POKEMON.map((pokemon) => {
    if (pokemon.type[0] == type || pokemon.type[1] == type) {
      array.push(pokemon);
    }
  });
  
  for (let pokemon of POKEMON) {
  document.getElementById('pokemon_filtro_'+pokemon.num).addEventListener('click', function(){
    pokemonInformationDisplay('pokemon_about');
    pokemonInfo(`${pokemon.num}`,pokemonData);
  } )
  }
  
};

// console.log(displayEachInfoFiltro('grass',pokemonData));

// -----------------------------------------------
const displayAllPokedex =(data) => {
  let POKEMON = JSON.parse(JSON.stringify(data.pokemon));
  let array=[];
  
  POKEMON.map((pokemon) => {
    
      array.push(pokemon);
    
  });
  
  for (let pokemon of POKEMON) {
  document.getElementById(pokemon.num).addEventListener('click', function(){
    pokemonInformationDisplay('pokemon_about');
    pokemonInfo(`${pokemon.num}`,pokemonData);
  } )
  }
};

// console.log(displayAllPokedex(pokemonData));

