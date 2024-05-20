$("#formValidation").validate({
   rules:{
      nombre:{
         minlength:2
   },
   email:{
      email:true
   },
   telefono:{
      Number:true,
      minlength:10,
      maxlength:10
   }
   },
   messages:{
      nombre:{
         required:"porfavor ingresa tu nombre",
            minlength:"ingresa mas de 2 caracteres"
   },
   email:"porfavor ingresa tu correo",
      telefono:"porfavor ingresa tu telefono",
         subject:"Ingresa tu usuario"
   },

   submitHandler: function(form){
   form.submit();
   }
});