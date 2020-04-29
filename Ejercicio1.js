

/*function change(id) 
    {
        var on, off;
            
        if(id=='boton1')
        {
            on = document.getElementById('boton1');
            off =  document.getElementById('boton2');
        }
        else if (id=='boton2')
        {
            on = document.getElementById('boton2');
            off =  document.getElementById('boton1');
        }

        on.className = on.className.replace('apagado', 'prendido');
        off.className = off.className.replace('prendido', 'apagado');
    }
*/

function change(id)
    {
        if(id.className.indexOf('prendido')>=0)
        {
            id.className = id.className.replace('prendido', 'apagado');
        }
        else 
        {
            id.className =id.className.replace('apagado', 'prendido');   
        }
    }
