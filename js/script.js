var collapseContent = document.getElementById("collapse-content");
var hamburguerIcon = document.getElementById("hamburguer-icon");



function showCollapse(){

    if(collapseContent.style.display === "block"){
        collapseContent.style.display = "none";
        hamburguerIcon.src = "images/icon-hamburger.svg"
    }else{
        collapseContent.style.display = "block";
        hamburguerIcon.src = "images/icon-close.svg"
    }
}