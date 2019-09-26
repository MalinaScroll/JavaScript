var micarro = {
    color: "verde",
    marca: "Ford",
    tipo: "Mondeo",
    velocidad: 0,

    manejar: function(){
        while (this.velocidad < 120){
        this.velocidad += 5;
        console.log(this.velocidad);
        if (this.velocidad == 120){
            console.log("¡bip bip!");
        }
        }
    }
}

micarro.manejar();

var images = [1,2,3,4,5,6,7,8,9];

var counter = 1;
console.log(counter);

var slideholder = document.getElementById('slideholder');
slideholder.style.backgroundImage = ('kitten" + getkitten() + ".jpg');

slideholder.addEventListener('click', function(){
    slideholder.style.backgroundImage = ('kitten" + getkitten() + ".jpg');
});

function getKitten(){
    if(counter == images.length){
        counter = 1;
    } else {
        counter++
    }
    console.log(counter);
    return counter;
}

