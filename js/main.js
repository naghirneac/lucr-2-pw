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
    for (var i = 1; i <= 10; i++){
        if (document.getElementsByTagName('p').i % 2 == 0) document.getElementsByTagName('p').style.color = "blue"
            else document.getElementsByTagName('p').style.color = "yellow";

    }
    }
