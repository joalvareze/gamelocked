$("#formValidation").validate({
   rules: {
      nombre: {
         required: true, 
         minlength: 2
      },
      email: {
         required: true,
         email: true
      },
      contraseña: {
         required: true,
         minlength: 6,
         pwcheck: true
      },
      telefono: {
         required: true,
         number: true,
         minlength: 10,
         maxlength: 10
      },
      subject: {
         required: true
      },
      CreatuUsuario: {
         required: true,
         minlength: 2
      }
   },
   messages: {
      nombre: {
         required: "Por favor ingresa tu nombre",
         minlength: "Ingresa más de 2 caracteres"
      },
      email: {
         required: "Por favor ingresa tu correo",
         email: "Por favor ingresa un correo válido"
      },
      contraseña: {
         required: "La contraseña debe tener al menos 6 caracteres",
         minlength: "La contraseña debe tener al menos 6 caracteres"
      },
      telefono: {
         required: "Por favor ingresa tu teléfono",
         number: "Por favor ingresa un número válido",
         minlength: "El número debe tener 10 dígitos",
         maxlength: "El número debe tener 10 dígitos"
      },
      subject: {
         required: "Ingresa tu usuario"
      },
      CreatuUsuario: {
         required: "Por favor ingresa tu usuario",
         minlength: "Ingresa más de 2 caracteres"
      }
   },
   submitHandler: function(form) {
      form.submit();
   }
});