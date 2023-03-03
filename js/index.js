//fetch data from api link
const loadTools = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayTools(data.data.tools));

}


//display load data
const displayTools = tools => {
    const cards = document.getElementById('cards');

    tools.forEach(tool => {
        console.log(tool);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `

       
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
                
`
cards.appendChild(cardDiv);

    });
}

loadTools()