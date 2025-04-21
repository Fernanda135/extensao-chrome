//variaveis
let meusLinks = [] 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const linksLocalStorage = JSON.parse( localStorage.getItem("meusLinks") )
const tabBtn = document.getElementById("tab-btn")

//carregar links salvos
if (linksLocalStorage) {
    meusLinks = linksLocalStorage
    render(meusLinks)
}

//pegar link da janela atual
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active:  true, currentWindow: true}, function(tabs){
        meusLinks.push(tabs[0].url)
        localStorage.setItem("meusLinks", JSON.stringify(meusLinks) )
        render(meusLinks)
    })
})

//renderizar links
function render(links) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

//deletar todos os links
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    meusLinks = []
    render(meusLinks)
})

//adicionar link
inputBtn.addEventListener("click", function() {
    meusLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("meusLinks", JSON.stringify(meusLinks) )
    render(meusLinks)
})