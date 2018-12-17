var saude = 100;
var fome = 100;
var higiene = 100; 
var cd = [0,0,0];
var coco = false;

var dano =  1;

tempo();
cagar();


function countdown(y){
    setTimeout(function(){cd[y] = cd[y] - 3}, 3000);

}

function cagar(){
    
    setInterval(function(){
        coco = true;
        document.getElementById("pet").src = "img/tx.gif";
      if(coco == true){
          setInterval(function(){
           higiene = higiene - 2;

          },2000)

      }

    },60000)
    
}

function alimentar(){
    y = 0;
    if(cd[y] == 0){
        dano = Math.floor(Math.random() *7) + 3;;
        fome = fome + dano;

        document.getElementById("fome").innerHTML = fome + "%";
        document.getElementById("fomebar").style.width =  fome + "%";
        cd[y] = cd[y] + 3;
        countdown(y);

    }
    else {
        document.getElementById("cd").style = "display:block;";
        setTimeout(function(){document.getElementById("cd").style = "display: none;"}, 2000);
    
    }
}
function remedio(){
    y = 1;
    if (cd[y] == 0){
        dano = Math.floor(Math.random() *8) + 3;;
        saude = saude + dano;

        document.getElementById("saude").innerHTML = saude + "%";
        document.getElementById("saudebar").style.width = saude + "%";
        cd[y] = cd[y] + 3;
        countdown(y);
    } 

    else {  
        document.getElementById("cd").style = "display:block;";
        setTimeout(function(){document.getElementById("cd").style = "display: none;"}, 2000);
        
    }
}


function banhar(){
    y = 2;
    if(coco == true){
        higiene = higiene + 25;
        setTimeout(function(){
         document.getElementById("pet").src = "img/t01.gif";
         coco = false;
         
 
     },3000)
     }
    else if (cd[y] == 0){
        dano = Math.floor(Math.random() *10) + 3;;
        higiene = higiene + dano;
        

        document.getElementById("banhar").innerHTML = higiene + "%";
        document.getElementById("banharbar").style.width = higiene + "%";
        cd[y] = cd[y] + 3;
        countdown(y);
    }
    else {  
        document.getElementById("cd").style = "display:block;";
        setTimeout(function(){document.getElementById("cd").style = "display: none;"}, 2000);
        
    }

}

function tempo() {
    
    setInterval(function(){ 
        dano = Math.floor(Math.random() * 6) + 1;;
        fome = fome - dano;
        console.log("fome tomou " + dano + " de dano")

        
        dano = Math.floor(Math.random() * 7) + 1;;
        saude = saude - dano;
        console.log("saude tomou " + dano + " de dano")
        
        
        dano = Math.floor(Math.random() * 6) + 1 ;;
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
            document.getElementById("humor").innerHTML ="Morreu"; alert("Vecê deixou seu bixinho virtual morrer. Clique em Ok para começar novamente ");
            location.reload();
            document.getElementById("pet").src = "img/t07.gif";
            
        
        }
        else if (total > 260) {
            document.getElementById("humor").innerHTML = "Muito Feliz";
        }else if (total > 180 ){
            document.getElementById("humor").innerHTML = "Feliz";
        
        }else if (total > 130 ){
            document.getElementById("humor").innerHTML = "Triste";
        
        }else {
            document.getElementById("humor").innerHTML = "Doente"
            
        
        }
        console.log(total)
        console.log(higiene)
        console.log(cd)
        console.log(coco)
        
        
    }, 3000);
    
  

}





