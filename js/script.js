var saude = 100;
var fome = 100;
var higiene = 100; 
var cd = [0,0,0];

var dano =  1;



tempo();

function countdown(){
    setTimeout(function(){cd[0] = cd[0] - 3}, 3000);

}
   


function alimentar(){
    if (cd[0] == 0){
        fome = fome + dano;
        document.getElementById("fome").innerHTML = fome + "%";
        document.getElementById("fomebar").style.width =  fome + "%";
        countdown();
        cd[0] = cd[0] + 3;

    }
    else {
    document.getElementById("humor").innerHTML = "nao pode ainda";
    }
}
function remedio(){
    saude = saude + dano;
    dano = Math.floor(Math.random() *10);;

    document.getElementById("saude").innerHTML = saude + "%";
    document.getElementById("saudebar").style.width = saude + "%";
}

function banhar(){
    higiene = higiene + dano;
    dano = Math.floor(Math.random() *10);;

    document.getElementById("banhar").innerHTML = higiene + "%";
    document.getElementById("banharbar").style.width = higiene + "%";
}

function tempo() {
    
    setInterval(function(){ 
        dano = Math.floor(Math.random() * 10);;
        fome = fome - dano;
        console.log("fome tomou " + dano + " de dano")

        
        dano = Math.floor(Math.random() * 5);;
        saude = saude - dano;
        console.log("saude tomou " + dano + " de dano")
        
        
        dano = Math.floor(Math.random() * 13);;
        higiene = higiene - dano;
        console.log("higene tomou " + dano + " de dano")
        
    
        document.getElementById("fome").innerHTML = fome + "%" ;
        document.getElementById("fomebar").style.width =  fome + "%";
        document.getElementById("saude").innerHTML = saude + "%" ;
        document.getElementById("saudebar").style.width =  saude + "%";
        document.getElementById("banhar").innerHTML = higiene + "%" ;
        document.getElementById("banharbar").style.width =  higiene + "%";
        
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
        console.log(higiene)
        console.log(cd)
        
        
    }, 2000);
    
  

}





