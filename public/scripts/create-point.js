function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]") //seleciona o campo do form
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome") //fetch vai fazer a busca na api
    .then( res => res.json() ) // aqui é uma função anonima quye retorna os dados em json
    .then( states => {
          for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`  //aqui ele coloca no html varios options
          }
          
    } ) 
}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value //pega o valor de cada select

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value> Selecione a Cidade </option>"
    citySelect.disabled = true // antes de fazer a chamada da cidade ele vai fazer uma verificação, e se a cidade já estivesse selecionada, será descartada na proxima requisição
    fetch(url) //fetch vai fazer a busca na api chamando o valor da variavel const url
    .then( res => res.json() ) // retornar os dados do json
    .then( cities => {
     
          for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`  //coloca no html os options
          }

          citySelect.disabled = false //ao selecionar  o estado, o input que estava desabilitado passa a ser valido
    } ) 
}



document
  .querySelector("select[name=uf]") //ouvidor de eventos
  .addEventListener("change", getCities) 

  //itens de coleta 
//pegar todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}
const collectedItems  = document.querySelector("input[name=items]")

let selectedItems  = []

function handleSelectedItem(event){
  const itemLi = event.target
  // adicionar ou remover uma classe com javascript
     itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id
  //console.log('ITEM ID', itemId)

    //verificar se existem items selecionados, se sim
    // pegar os itens selecionados
   
    const alreadySelected = selectedItems.findIndex( item => {
       const itemFound = item == itemId
       return itemFound
    })

    // se já tiver selecionado, tirar da seleção

    if( alreadySelected >= 0 ) {
         const filteredItems = selectedItems.filter(item => {
          const itemIsDifferent = item != itemId 
          return itemIsDifferent
         })
         selectedItems = filteredItems
    } else {
          // se não estiver selecionado, adicionar a seleção
          selectedItems.push(itemId)
    }
    //console.log('selectedItems', selectedItems)
     collectedItems.value = selectedItems
  }
    //atualizar o campo escondido com os itens selecionados
    


