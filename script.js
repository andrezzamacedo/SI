function getopcao1() {
    var hex= (document.getElementById("numero").value);
    var num1= Number(document.getElementById("numero").value);
    var num_string= document.getElementById("numero").value;
    if (document.getElementById("opcao1").value=='16' && document.getElementById("opcao2").value=='10'){
        for(var i = num_string.length-1; i>=0; i--){
            if(num_string[i] >='g' && num_string <='z' || num_string[i] >= 'G' && num_string[i] <= 'Z'){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Hexadecimal";
            }
        }
        var num2= parseInt(hex,16);
         document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='10'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Binário";
            }
        }
        var num2= parseInt(num1,2);
        document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='10' && document.getElementById("opcao2").value=='10'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1 && num_string[i] != 2 && num_string[i] != 3 && num_string[i] != 4 && num_string[i] != 5 && num_string[i] != 6 && num_string[i] != 7 && num_string[i] != 8 && num_string[i] != 9){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Decimal";
            }
        }
        document.getElementById("resultado").innerHTML = num1
    }
    if (document.getElementById("opcao1").value=='8' && document.getElementById("opcao2").value=='10'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] <0 || num_string[i] >=8){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Octal"
            }
        }
        var num2= parseInt(num1,8);
        document.getElementById("resultado").innerHTML = num2.toString(10);
    }
    if (document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='2'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Binário";
            }
        }
        var num2= parseInt(num1,2);
        document.getElementById("resultado").innerHTML = (num2.toString(2));
    }
    if(document.getElementById("opcao1").value=='10' && document.getElementById("opcao2").value=='2'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Binário";
            }
        }
        document.getElementById("resultado").innerHTML =(num1.toString(2));
    }
    if(document.getElementById("opcao1").value=='8' && document.getElementById("opcao2").value=='2'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] <0 || num_string[i] >=8){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Octal"
            }
        }
        var num2 = parseInt(num1,8);
        document.getElementById("resultado").innerHTML =(num2.toString(2));
    }
    if(document.getElementById("opcao1").value=='16' && document.getElementById("opcao2").value=='2'){
        for(var i = num_string.length-1; i>=0; i--){
            if(num_string[i] >='g' && num_string <='z' || num_string[i] >= 'G' && num_string[i] <= 'Z'){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Hexadecimal";
            }
        }
        var num2 = parseInt(hex,16);
        document.getElementById("resultado").innerHTML =(num2.toString(2));
    }
    if(document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='16'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Binário";
            }
        }
        var num2 = parseInt(num1,2);
        document.getElementById("resultado").innerHTML =(num2.toString(16));
    }     
    if(document.getElementById("opcao1").value=='10' && document.getElementById("opcao2").value=='16'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1 && num_string[i] != 2 && num_string[i] != 3 && num_string[i] != 4 && num_string[i] != 5 && num_string[i] != 6 && num_string[i] != 7 && num_string[i] != 8 && num_string[i] != 9){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Decimal";
            }
        }
        document.getElementById("resultado").innerHTML =(num1.toString(16));
    }     
    if(document.getElementById("opcao1").value=='8' && document.getElementById("opcao2").value=='16'){ 
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] <0 || num_string[i] >=8){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Octal"
            }
        }
        var num2 = parseInt(num1,8);         
        document.getElementById("resultado").innerHTML =(num2.toString(16));     
    }     
    if(document.getElementById("opcao1").value=='16' && document.getElementById("opcao2").value=='16'){         
        for(var i = num_string.length-1; i>=0; i--){
            if(num_string[i] >='g' && num_string <='z' || num_string[i] >= 'G' && num_string[i] <= 'Z'){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Hexadecimal";
            }
        }
        document.getElementById("resultado").innerHTML = hex     
    }
    if(document.getElementById("opcao1").value=='2' && document.getElementById("opcao2").value=='8'){         
        var num2 = parseInt(num1,2);         
        document.getElementById("resultado").innerHTML =(num2.toString(8));     
    }     
    if(document.getElementById("opcao1").value=='10' && document.getElementById("opcao2").value=='8'){
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] != 0 && num_string[i] != 1 && num_string[i] != 2 && num_string[i] != 3 && num_string[i] != 4 && num_string[i] != 5 && num_string[i] != 6 && num_string[i] != 7 && num_string[i] != 8 && num_string[i] != 9){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Decimal";
            }
        }        
        document.getElementById("resultado").innerHTML =(num1.toString(8));     
    }     
    if(document.getElementById("opcao1").value=='8' && document.getElementById("opcao2").value=='8'){         
        for(var i = num_string.length-1; i>= 0; i--){
            if(num_string[i] <0 || num_string[i] >=8){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Octal"
            }
        }
        document.getElementById("resultado").innerHTML = num1     
    }     
    if(document.getElementById("opcao1").value=='16' && document.getElementById("opcao2").value=='8'){         
        for(var i = num_string.length-1; i>=0; i--){
            if(num_string[i] >='g' && num_string <='z' || num_string[i] >= 'G' && num_string[i] <= 'Z'){
                return document.getElementById("resultado").innerHTML = "ERRO: Valor Não Hexadecimal";
            }
        }
        var num2 = parseInt(hex,16);         
        document.getElementById("resultado").innerHTML =(num2.toString(8));
    }
}
function getswap() {
    var n1 = document.getElementById("opcao1").value;
    var n2= document.getElementById("opcao2").value;
    var temp;
    temp = n1;
    n1 = n2;
    n2 = temp;
    document.getElementById("opcao1").value = n1;
    document.getElementById("opcao2").value = n2;
    }
function getclear() {
    document.getElementById("numero").value="";
    document.getElementById("resultado").value="";
    document.getElementById("opcao1").value="2";
    document.getElementById("opcao2").value="2";
}
