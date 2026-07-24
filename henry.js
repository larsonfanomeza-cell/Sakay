const info=document.querySelector(".infos");
const allBtns=document.querySelectorAll('form input[type="button"]')

function val(resultat){
    form.fenetre.value=form.fenetre.value+resultat;
}
function calcule(){
    if(form.fenetre.value==""){
        return;
    }
    try{
        form.fenetre.value=eval(form.fenetre.value);
    } catch(error){
        form.fenetre.value="Erreur";
    }
}
function suppr(){
    form.fenetre.value="";
}