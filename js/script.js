var saude = 100;
var fome = 100;
var dano =  1;


tempo();

function dead (){
    fome = fome;
    if (fome <= 0){
        confirm("morri meno");
        location.reload();
    }
}

function alimentar (){
        fome = fome + dano;
        document.getElementById("fome").innerHTML = fome + "%";
        document.getElementById("fomebar").style.width =  fome + "%";

}

function tempo() {
    
    setInterval(function(){ 
        fome = fome - dano;
        dano = Math.floor(Math.random() * 10);;
    
        document.getElementById("fome").innerHTML = fome + "%" ;
        document.getElementById("fomebar").style.width =  fome + "%";
        dead();
    
        
    }, 2000);
  
}
console.log(dano);