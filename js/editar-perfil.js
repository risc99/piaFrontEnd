// CAMBIA LA FOTO DE PERFIL
document.getElementById('upload-avatar').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-avatar').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
