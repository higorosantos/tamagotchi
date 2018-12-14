var saude = 100;
var fome = 100;
var dano =  0;


tempo();


function alimentar (){
    fome++;
    document.getElementById("fome").innerHTML = fome;
    tempo();
}
function tempo() {
    
    
    
    setInterval(function(){ 
        fome = fome - dano;
        dano = Math.floor(Math.random() * 10);;
      
        document.getElementById("fome").innerHTML = fome;
        
    }, 3000);
  
}
console.log(dano);