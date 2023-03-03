//fetch data from api link
const loadTools = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayTools(data.data.tools));

}


//display load data
const displayTools = tools => {
    const cards = document.getElementById('cards');
    cards.textContent = "";

    //display items only
    tools = tools.slice(0,6);

    tools.forEach(tool => {
        console.log(tool);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col-4' );
    
        cardDiv.innerHTML = `

       <div class="card h-100">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${tool.name}</h5>
          <p class="card-text">${tool.description ? tool.description : 'Description not available'}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>
        
                
`
cards.appendChild(cardDiv);

    });
}

loadTools()