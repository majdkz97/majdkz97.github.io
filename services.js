const getSerivceUrl = "https://thecompany2022.000webhostapp.com/get_services.php";


var getServicesFunction = function () {
    
    let loader =document.querySelector('#loader');


fetch(getSerivceUrl)       
.then(response => response.json())
.then(data => {
  console.log(data)
  console.log(data)
  loader.style.display = "none";

for (index in data.data) {
  var item = data.data[index]
  serviceCardBuilder(index,item.title,item.description,item.details);
}
});


}


function toggleButton(index) {
    const card = document.querySelector("#card_anim"+index);

   card.classList.toggle('rotated');   console.log(index);

}

function serviceCardBuilder(index,title,description,details){
    var htmlItem =  `
    <div class="cards-wrapper">
    <div class="card-container">
      <div class="card_anim" id="card_anim${index}">
        <div class="card-contents card-front">
          <div class="card-depth">
            <h2 class="name_of_card">${title}</h2>
            <hr>
      
            <span class="small_discription">${description} </span>
            <div class="service-child" id="service-child${index} ">
                <button class="main-button"  onclick="toggleButton(${index})">View more</button>
               
           </div>   
          </div>
        </div>
        <div class="card-contents card-back">
            <span class="backBtn"  id="backBtn${index}"  onclick="toggleButton(${index})">
             go back </span>
            <div class="info_price">
                
                <div class="card-depth">
                    <a class="pricing">${details}</a>
                     
                    
                </div>
                
            </div>
        </div>
      </div>
    </div>
  </div>
  `;
    document.getElementById('services_parent').innerHTML += htmlItem   
    
}