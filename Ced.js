function mod10_luhn(id_ced = document.querySelector('#id-ced').value)
 {
    let cont = 0, digit1 = 0, digit2 = 0,inter = new Array(), check = id_ced[id_ced.length - 1];

    for (let i = 1; i < id_ced.length - 1; i+=2) 
    {
        inter[i] = id_ced[i];
        inter[i] *= 2;

        if (inter[i] > 9)  
        {
            digit2 = inter[i] % 10;
            digit1 = inter[i] / 10;
            inter[i] = digit2 + Math.trunc(digit1);
        }

        cont += Number(inter[i]);
      
        
    }

    for (let i = 0; i < id_ced.length - 1; i+=2) 
    {
        inter[i] = id_ced[i];
        cont += Number(inter[i]);
        
    }

    

    console.log(((cont + Number(check)) % 10 == 0) ? "Cedula Valida" : "Cedula No Valido");
    if ((cont + Number(check)) % 10 == 0)
    {
        document.querySelector('#verification').innerHTML = "Correcta!"
    } else {
        document.querySelector('#verification').innerHTML = "Cedula no es Valida"
    }
    console.log(cont * 9);

}    
