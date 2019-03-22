//Naghirneac Luvrare2
window.onload = function () {

    //ex 1
      document.getElementById('suma').addEventListener('click', function () {
            var suma = parseInt(document.getElementById('x').value) + parseInt(document.getElementById('y').value);
            //console.log(suma);
            var rez = document.getElementById('rezultat');
            rez.innerHTML = suma;
        })
    //ex 2
        document.getElementById('schimb').addEventListener('click', function () {
            var aux = parseInt(document.getElementById('x').value);
            document.getElementById('x').innerHTML = parseInt(document.getElementById('y').value);
            document.getElementById('y').innerHTML = aux;
        })
    //ex.3

        document.getElementById('container').addEventListener('mousemove', function () {
            document.getElementById('container').style.color = "red";
            document.getElementById('container').classList.add('verde');
        })
    //ex 4
    for (var i = 1 ; i <= 10; i++){
        if (i % 2 == 0) document.getElementsByTagName('p').style.backgroundColor = "blue";
            else document.getElementsByTagName('p').style.backgroundColor = "yellow";
    }
    //ex 5
    var list = document.createElement('ul');
    document.body.appendChild(lista);
    for (var i = 1 ; i <= 10; i++){
        var li = document.createElement('li');
        list.appendChild(li.textContent = "Element Nr "+i++);
    }
    //ex 6
    list.id = "lista";
    document.body.appendChild(list);
    document.querySelector('#lista li:last-child').style.backgroundColor = "violet";
    //ex 8
    function createCerc(){
        for(var i = 1; i <= 10; i++){
            var cerc = document.createElement("div");
            cerc.classList.add('cerc');
            document.getElementById('idcerc').appendChild(cerc);
        }}
   
    //ex 10
    setTimeout(function schimbCuloarea() {
        document.body.style.backgroundColor = "silver";
    }, 5000);

    //ex 12
    function contor(){
        var n = 1;
        document.getElementById('contor').addEventListener('click' ,  function(){
            document.getElementById('contor').innerHTML = "Contor " + n++);
        }
    }

