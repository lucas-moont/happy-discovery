//create map
const map = L.map('mapid').setView([-27.2112802,-49.6412434], 15);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add market (+new)
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer 
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


// add photofield

function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar o ctnr para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.newUpload') //TALVEZ O ERRO ESTEJA AQUI
    //realizar o cline da última imagem adicionada
    newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se estiver não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpar o campo antes de add ao container de imagens
    input.value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.newUpload')
    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event){
    //retira a class .active dos botões
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    //get clicked button

    //verificar se sim ou nao

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="openOnWeekends"]')
    input.value = button.dataset.value

}