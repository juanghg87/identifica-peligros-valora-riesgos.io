function previewImage(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var preview = input.closest('tr').querySelector('#preview');
        preview.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }


const generatePDF = document.querySelector ('.genPDFlabel')
printBtn ();
function printBtn (){
  generatePDF.addEventListener ('click', print2);
};

function print2 (){
  
  const nameBtn = document.querySelector('#input-name');
  const fichaBtn = document.querySelector ('#input-ficha');
  const email = document.querySelector ('#input-email');
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexNm = /[0-9]+$/;
  if(nameBtn.value.length === 0){
    window.alert('El campo Nombre no puede estar vacío');    
  }else if(regexNm.test(nameBtn.value)){
      window.alert('El campo nombre no puede llevar valores numéricos');
  } else if(fichaBtn.value.length === 0){
    window.alert('El campo Ficha no puede estar vacío');
  }else if(fichaBtn.value.length < 7){
    window.alert('El campo Ficha debe tener al menos 7 dígitos');
  }else if(isNaN(fichaBtn.value)){
    window.alert('El campo Ficha solo admite números');
  } else if(email.value.length === 0){
    window.alert('El campo Email no puede estar vacío');
  }else if(email.value.length != 0){
    if (regex.test(email.value)){
      window.print();
    }else{
      window.alert('El campo Email no válido')
    }
  }
}

