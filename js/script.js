var saude = 100;
var fome = 100;
var dano =  1;


tempo();


function alimentar (){
        fome = fome + dano;
        document.getElementById("fome").innerHTML = fome;
        document.getElementById("fomebar").style.width =  fome + "%";

}
function tempo() {
    
    setInterval(function(){ 
        fome = fome - dano;
        dano = Math.floor(Math.random() * 15);;
    
        document.getElementById("fome").innerHTML = fome;
        document.getElementById("fomebar").style.width =  fome + "%";
        
        
    }, 2000);
  
}
console.log(dano);