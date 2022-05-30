document.addEventListener('contextmenu', function handleClick(event){
    event.preventDefault()

    event.target.classList.add("caseDanger")
})

document.addEventListener('click', function handleClick(event){

    var caseSelect = document.getElementsByClassName("caseSelect")
    while (caseSelect.length !=0){
        caseSelect[0].classList.remove("caseSelect")
    }
    var caseDanger = document.getElementsByClassName("caseDanger")
    while (caseDanger.length !=0){
        caseDanger[0].classList.remove("caseDanger")
    }

    event.target.classList.add("caseSelect")
});