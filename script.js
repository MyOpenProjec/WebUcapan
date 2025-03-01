document.getElementById('click').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.style.display = text.style.display === 'none' || text.style.display === '' ? 'block' : 'none';
    const hadiah = document.getElementById('Hadiah');
    hadiah.style.display = hadiah.style.display === 'none' || hadiah.style.display === '' ? 'block' : 'none';
},500);

document.getElementById("Hadiah").addEventListener('click', function(){
    window.location.href = "html/index.html";
});