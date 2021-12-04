function getopcao1() {
    var hex= (document.getElementById("numero").value);
    var num1= Number(document.getElementById("numero").value);
    if (document.getElementById("opcao1").value=='4' && document.getElementById("opcao2").value=='10'){
        var num2= parseInt(hex,16);
        document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='1' && document.getElementById("opcao2").value=='10'){
        var num2= parseInt(num1,2);
        document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='10'){
        document.getElementById("resultado").innerHTML = num1
    }
    if (document.getElementById("opcao1").value=='3' && document.getElementById("opcao2").value=='10'){
        var num2= parseInt(num1,8);
        document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='1' && document.getElementById("opcao2").value=='2'){
        document.getElementById("resultado").innerHTML = num1
    }
    if(document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='2'){
        document.getElementById("resultado").innerHTML =(num1.toString(2));
    }
    if(document.getElementById("opcao1").value=='3' && document.getElementById("opcao2").value=='2'){
        var num2 = parseInt(num1,8);
        document.getElementById("resultado").innerHTML =(num2.toString(2));
    }
    if(document.getElementById("opcao1").value=='4' && document.getElementById("opcao2").value=='2'){
        var num2 = parseInt(hex,16);
        document.getElementById("resultado").innerHTML =(num2.toString(2));
    }
    if(document.getElementById("opcao1").value=='1' && document.getElementById("opcao2").value=='16'){
        var num2 = parseInt(num1,2);
        document.getElementById("resultado").innerHTML =(num2.toString(16));
    }     
    if(document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='16'){
        document.getElementById("resultado").innerHTML =(num1.toString(16));
    }     
    if(document.getElementById("opcao1").value=='3' && document.getElementById("opcao2").value=='16'){ 
        var num2 = parseInt(num1,8);         
        document.getElementById("resultado").innerHTML =(num2.toString(16));     
    }     
    if(document.getElementById("opcao1").value=='4' && document.getElementById("opcao2").value=='16'){         
        document.getElementById("resultado").innerHTML = hex     
    }
    if(document.getElementById("opcao1").value=='1' && document.getElementById("opcao2").value=='8'){         
        var num2 = parseInt(num1,2);         
        document.getElementById("resultado").innerHTML =(num2.toString(8));     
    }     
    if(document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='8'){         
        document.getElementById("resultado").innerHTML =(num1.toString(8));     
    }     
    if(document.getElementById("opcao1").value=='3' && document.getElementById("opcao2").value=='8'){         
        document.getElementById("resultado").innerHTML = num1     
    }     
    if(document.getElementById("opcao1").value=='4' && document.getElementById("opcao2").value=='8'){         
        var num2 = parseInt(num1,16);         
        document.getElementById("resultado").innerHTML =(num2.toString(8));
    }

}