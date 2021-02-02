window.addEventListener ("load", function (){

    let but1 = document.getElementById("open");
    let but2 = document.getElementById("style");
    let txt = document.getElementById("text");

    but1.addEventListener ("click", function (){  //кнопка с функц перекидывания на пустую стр
        window.location.href = 'about:blank';
    });

    but2.addEventListener ("click", function (){  //кнопка с функц измениения стиля страницы
        txt.innerHTML = '<h1 align = "center">Измененный текст</h1>';
        document.body.style.backgroundColor = 'blue';
        but1.innerHTML = '';
        but2.innerHTML = '';
    });
    
})



