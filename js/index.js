//fetch data from api link
const loadTools = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayTools(data.data.tools))
        .catch(error => console.log(error))

}



//display load data

const displayTools = tools => {
  console.log(tools)
   
    
    
    const cards = document.getElementById('cards');
    cards.textContent = "";





    

    tools.forEach(tool => {
      console.log(tool);
        
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', );
    
       cardDiv.innerHTML = `

       <div class="card h-100 rounded p-3">
        <img  src="${tool.image}" class="card-img-top rounded " alt="...">
        <div class="card-body">
          <h5 class="card-title text-bold">Features</h5>
          <h class="card-text">1. ${tool.features[0]} <br> 2. ${tool.features[1]} <br> 2. ${tool.features[2]}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
        <h5 class="card-title text-bold">${tool.name}</h5>
          <small class="text-muted"><i class="fa-regular fa-calendar-days"></i> ${tool.published_in
          }</small>
          </div>
          <div>
          <div class="btn btn-light text-danger"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        <div>
        
        <div>
        </div>
        
                
`
cards.appendChild(cardDiv);

    });
    
}






 
loadTools()