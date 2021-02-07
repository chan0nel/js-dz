var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    }
window.addEventListener ("DOMContentLoaded", function (){
    let table = document.getElementById("table");
    let avg = document.getElementById("average");
    let max = document.getElementById("maximum");

    for (let i in term){    //добавление объекта в таблицу
        let tr1 = document.createElement('tr');
        table.appendChild(tr1);
        let td_country = document.createElement('td');
        let td_temp = document.createElement('td');
        let country = document.createTextNode(i);
        let temp = document.createTextNode(term[i]);
        td_country.appendChild(country);
        td_temp.appendChild(temp);
        tr1.appendChild(td_country); 
        tr1.appendChild(td_temp);
    }
    let avg_value = avg_term();
    let max_value = max_term();
    let txt1 = document.createTextNode(avg_value);
    let txt2 = document.createTextNode(max_value);
    avg.appendChild(txt1);
    max.appendChild(txt2);
})

function avg_term(){
    let avg = 0;
    let num = 0;
    for (let i in term){
        avg += term[i];
        num++;
    }
    avg = avg/num;
    return avg;
}

function max_term(){
    let max = 0;
    for (let i in term){
        if (term[i] > max){
            max = term[i];
        }
    }
    return max;
}