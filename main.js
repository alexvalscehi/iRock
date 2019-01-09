var userName;

function greetUser(){
    userName = readCookie('irock_username');
    if(userName)
        alert("Olá" + userName + ", senti sua falta!");
    else
        alert('Olá, eu sou a sua pedra de estimação');
}

function touchRock(){
    if(userName){
        alert("Eu gosto de atenção, " + userName + " obrigado!"); 
    }else{
        userName = prompt("Qual o seu nome?", "Enter your name here.");
        if(userName){
            alert("Prazer em conhecer você, " + userName + ".");
                writeCookie('rock_username', userName, 5 * 365);
        }
    }
    document.getElementById("rockImg").src = "images/happy_rock.png";
    setTimeout("document.getElementById('rockImg').src = 'images/rock.png';", 5000);
    setTimeout("document.getElementById('rockImg').src = 'images/sad_rock.png';", 10000);
    setTimeout("document.getElementById('rockImg').src = 'images/furious_rock.png';", 15000);
}

function resizeRock(){
    document.getElementById('rockImg').style.height = (document.body.clientHeight - 100) * 0.9;
}
