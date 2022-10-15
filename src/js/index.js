// passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento da tab
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab)
        showTabInfo(tab)
    });
});

function selectTab(tab) {
    // passo 3 - quando o usuário clicar, desmarcar a tab selecionada
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected");

    // passo 4 - marcar a tab clicada como selected
    tab.classList.add("selected");
}

function showTabInfo(tab){
    // passo 5 - esconder o conteúdo anterior
    const selectedInfo = document.querySelector(".info.selected");
    selectedInfo.classList.remove("selected");

    // passo 6 - mostrar o conteúdo da tab selecionada
    const idTabInfo = `info-${tab.id}`

    const showInfo = document.getElementById(idTabInfo)
    showInfo.classList.add("selected")
} 