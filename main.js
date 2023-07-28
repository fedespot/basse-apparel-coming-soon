const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const error = document.querySelector('.container__content__form__email--error');


form.addEventListener('submit', (event) => {
    //Creo un objeto con expresión regular para el control del mail
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    var res = regExp.test(inputEmail.value);

    if(res){
        
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
        error.innerHTML = '';
     }else{
        
         //Cuando presione botón, no haga recarga de página
         event.preventDefault();
         //Que se ponga el borde rojo
         inputEmail.style.border = '1px solid red';
         //Activo el logo rojo
         inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
         //Muestro mensaje
         error.innerHTML = 'Please provide a valid email';
     }
});




