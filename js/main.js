//función de loadContent para hacer cambio de vista en vista de login y recuperar contraseña
const loadContent = (contentWrapper, contentURL) => {
    console.log(contentWrapper);
    console.log(contentURL);
    
    $(contentWrapper).load(contentURL)
}

//función loadContents para hacer cambio de vista en el dashboard
const loadContents = (contentWrapper, contentURL) => {
    console.log(contentWrapper);
    console.log(contentURL);
    $(contentWrapper).load(contentURL)
}

//dropdown
$('#notifications').hide()
$('.btn-notifications').on('click', ()=> {
     $('#notifications').slideDown();
 })
