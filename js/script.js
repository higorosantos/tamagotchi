var saude = 100;
var fome = 100;
var higiene = 100; 


var dano =  1;



tempo();


function alimentar (){
        fome = fome + dano;
        document.getElementById("fome").innerHTML = fome + "%";
        document.getElementById("fomebar").style.width =  fome + "%";

}

function tempo() {
    
    setInterval(function(){ 
        fome = fome - dano;
        dano = Math.floor(Math.random() * 10);;
        console.log("fome tomou " + dano + " de dano")
        saude = saude - dano;
        dano = Math.floor(Math.random() * 5);;
        console.log("saude tomou " + dano + " de dano")
        higiene = higiene - dano;
        dano = Math.floor(Math.random() * 15);;
        console.log("higene tomou " + dano + " de dano")
        
    
        document.getElementById("fome").innerHTML = fome + "%" ;
        document.getElementById("fomebar").style.width =  fome + "%";
        
        var total = fome + higiene + saude;
        if (fome <= 0 || higiene <=0 || saude <=0){
            document.getElementById("humor").innerHTML = "Morreu";
            document.getElementById("pet").src = "img/t07.gif";
            
        
        }
        else if (total > 260) {
            document.getElementById("humor").innerHTML = "Felizão";
        }else if (total > 150 ){
            document.getElementById("humor").innerHTML = "Feliz";
        
        }else if (total > 100 ){
            document.getElementById("humor").innerHTML = "Triste";
        
        }else {
            document.getElementById("humor").innerHTML = "Doente";
        
        }
        console.log(total)
        console.log(fome)
        
        
    }, 2000);
    
  

}


