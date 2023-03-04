// fetch data from api link
const loadTools = (text) => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayTools(data.data.tools,text))
    .catch(error => console.log(error))

}





//display load data

const displayTools = (tools,text) => {
  console.log(tools);


  
  const cards = document.getElementById('cards');
  cards.textContent = "";
  const seeMore = document.getElementById('see-more');
 if(text && tools.length >= 6){
  tools = tools.slice(0, 6);
  seeMore.classList.remove('d-none')
 }




 


  tools.forEach(tool => {
    // console.log(tool);

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('col-12', 'col-sm-6', 'col-md-4',);

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
          <div class="btn btn-light text-danger " onclick="loadDetails('${tool.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        <div>
        
        <div>
        </div>
        
                
`
    cards.appendChild(cardDiv);

  });
  toggleSpinner(false);
}


//load fetch data for modal
const loadDetails = id => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => show(data.data));
}




// show modal details 
const showModalDetails = data => {
  
  
  const modalDiv = document.getElementById('modalDiv');
  modalDiv.innerHTML = "";
  const modalBody = document.createElement('div')
  modalBody.classList.add('modal-content');
  
  modalBody.innerHTML = `
    <div class="modal-header">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                      
      <div class="modal-body">

          <div class="container">
              <div class="row row-cols-2">
                  <div id="left-card" class="col-12 col-md-6 border border-warning p-3 rounded ">
                      <h5 class="fw-bold">${data.description}</h5>
                      <div class="d-flex justify-content-evenly my-2">
                      <div class="w-25 ">
                      <small class="text-danger fw-bold">
                      ${data.pricing ? data.pricing[0].price + ' ' + data.pricing[0].plan : 'Free of cost'}
                      </small>
                    </div>
                      <div class="w-25 ">
                        <small class="text-primary fw-bold">
                        ${ data.pricing ? data.pricing[1].price + ' ' + data.pricing[0].plan : 'Free of cost'}
                        </small>
                       </div>
                        <div class="w-25 ">
                         <small class="text-success fw-bold">
                        ${data.pricing ? data.pricing[2].price + ' ' + data.pricing[0].plan : 'Free of cost'}
                          </small>
                         </div>
                        </div>

                    <div class="d-flex justify-content-between">
                       <div>
                      <h5 class="fw-bold">Features</h5>

               <small>
                <li><span> ${data.features[1].feature_name}</span></li>
              <li><span>${data.features[2].feature_name}</span></li>
              <li><span>${data.features[3].feature_name}</span></li>

             </small>
            </div>
            <div>
           <h5 class="fw-bold">Integrations</h5>
           <small>
           <li><span>${data.integration ? data.integrations[0] : 'no data found'}</span></li>
          <li><span>${data.integration ? data.integrations[1] : 'no data found'}</span></li>
          <li><span>${data.integration ? data.integrations[2] : 'no data found'}</span></li>

        </small>
         </div>
       </div>

            </div>
         <div class="col-12 col-md-6">
        <div class="text-center p-2">

         <img id="score" class="img-fluid p-2"
        src="${data.image_link[0]}"
     alt=""><span class="badge bg-danger notify-badge">${data.accuracy.score ? data.accuracy.score + " " + 'Accuracy' : ''} </span>


     <h5 class="fw-bold">${data.input_output_examples ? data.input_output_examples[0].input : 'Can you give any example?' }</h5>
    <small>${data.input_output_examples ? data.input_output_examples
                 [1].output: 'No! Not Yet! Take a break!!!'}</small>
                  </div>
              </div>

          </div>
     </div>



   </div>


`
  modalDiv.appendChild(modalBody);
}


const toggleSpinner = isLoading =>{
  const loaderSpinner = document.getElementById('loader');
  if(isLoading){
    loaderSpinner.classList.remove('d-none')
  }
  else{
    loaderSpinner.classList.add('d-none')
  }
}


document.getElementById('see-more').addEventListener('click', function(){
  loadTools()
})

const text = 6;

window.onload = function () 
{
  toggleSpinner(true);
loadTools(text);


};

