const getSerivceUrl = "https://thecompany2022.000webhostapp.com/get_services.php";
const deleteSerivceUrl = "https://thecompany2022.000webhostapp.com/delete_service.php";
const addSerivceUrl = "https://thecompany2022.000webhostapp.com/add_service.php";
const updateSerivceUrl = "https://thecompany2022.000webhostapp.com/update_service.php";


var getServicesFunction = function (isFromDashboard) {

  let loader = document.querySelector('#loader');
  loader.style.display = "flex";
  if(isFromDashboard)
  {
    document.getElementById('services_parent_dashboard').innerHTML = ""
  }

  fetch(getSerivceUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      loader.style.display = "none";

      for (index in data.data) {
        var item = data.data[index]

        if (isFromDashboard) {
          dashboardCardBuilder(index, item.title, item.description, item.details,item.id);
        }
        else {
          serviceCardBuilder(index, item.title, item.description, item.details);
        }
      }



    });


}


function toggleButton(index) {
  const card = document.querySelector("#card_anim" + index);

  card.classList.toggle('rotated'); console.log(index);

}

function serviceCardBuilder(index, title, description, details) {
  var htmlItem = `
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
  document.getElementById('services_list').innerHTML += htmlItem

}

function dashboardCardBuilder(index, title, description, details,id) {
  var htmlItem = `
  <tr>
  <td id="id">${id}</td>
  <td id="title">${title}</td>
  <td id="description">${description}</td>
  <td id="details">${details}</td>
  <td>
      <a class="add" id="${id}" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
      <a class="edit" id="${id}" title="Edit" data-toggle="tooltip"><i
              class="material-icons">&#xE254;</i></a>
      <a class="delete" id="${id}" title="Delete" data-toggle="tooltip"><i
              class="material-icons">&#xE872;</i></a>
  </td>
</tr>  
  `;
  document.getElementById('services_parent_dashboard').innerHTML += htmlItem

}