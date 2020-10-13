let modal = document.getElementById('miModal');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');
let cerrar1 = document.getElementById('close1');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});
cerrar1.addEventListener('click', function(){
    modal.style.display = 'none';
});

