const block = document.querySelector('.block')
nation()
const select = document.querySelector('.sort')
const inputs = document.querySelector('input')
const all = document.querySelector('.All')
let up = document.querySelector(".up");




function nation() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    console.log(res)
    get(res)
    
  })
}




function sortAZ() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    res.sort((a, b) => 
      (a.name.common < b.name.common ? -1 : 1) 
    )
      get(res)
      
  })
}
function sortAZ() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    res.sort((a, b) => 
      (a.name.common < b.name.common ? -1 : 1) 
    )
      get(res)
      
  })
}
function sortZA() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    res.sort((a, b) => 
      (a.name.common > b.name.common ? -1 : 1) 
    )
      get(res)
      
  })
}
function sortPapulation() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    res.sort((a, b) => 
      (a.population > b.population ? -1 : 1) 
    )
      get(res)
      
  })
}
function sortArea() {
  block.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) =>  {
    res.sort((a, b) => 
      (a.area > b.area ? -1 : 1) 
    )
      get(res)
      
  })
}


function get(res){
  res.forEach((el) => {
    const hero = document.createElement('div')
    hero.setAttribute('class', 'hero_block')
    const nameCt = document.createElement('h2')
    nameCt.innerHTML = `${el.name.common}`
    const area = document.createElement('h2')
    area.innerHTML = `Area: ${el.area} km²`
    const population = document.createElement('h2')
    population.innerHTML = `population: ${el.population}`
    const flag = document.createElement('img')
    flag.src = el.flags.png

    hero.append(flag , nameCt , area , population)
    block.append(hero)
  });
}

select.addEventListener('change', () => {

  console.log(select.value);
  if (select.value === "A-Z") {
    sortAZ()
  } else if (select.value === "Z-A") {
    sortZA()
  } else if (select.value === "papulation_max-min") {
    sortPapulation()
  } else if (select.value === "area_max-min") {
    sortArea()
  }
})

all.addEventListener('click', () => {
  nation()
})

up.addEventListener('click', () => {
  window.scroll(0, 0)
})

function search() { block.innerHTML = ''
  fetch(`https://restcountries.com/v3.1/name/${inputs.value}`).then((flag) => flag.json()).then((res) => get(res))
}
inputs.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    search()
  }
})




fetch('https://restcountries.com/v3.1/all').then((flag) => flag.json()).then((res) => (console.log(res)))