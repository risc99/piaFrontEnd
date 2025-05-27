
    // EL CONTADOR DE INTEGRANTES
    const contador = document.getElementById('contador');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    botonesAgregar.forEach(boton => {
      boton.addEventListener('click', () => {
        if (parseInt(contador.textContent) < 10) {
          contador.textContent = parseInt(contador.textContent) + 1;
          boton.disabled = true; 
          boton.textContent = "Agregado";
        }
      });
    });

    // PARA EL CAMBIO DE FOTO
    function cambiarFoto(event) {
      const input = event.target;
      const reader = new FileReader();
      reader.onload = function() {
        const dataURL = reader.result;
        const avatar = document.getElementById('grupo-avatar');
        avatar.src = dataURL;
      };
      reader.readAsDataURL(input.files[0]);
    }