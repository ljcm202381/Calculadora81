//definimos el objeto con las propiedades

var ca={

teclas:document.querySelectorAll("#Calcular ul li"),
operacion:document.querySelector("#operaciones"),
accion:null,
digito:null,
cantisignos:0,
cantidecimal:false,
resultado:false

}
//objeto con los metodos de la calculadora

var me={

inicio: function(){
		for(var i=0 ; i<ca.teclas.length; i++)
		{
         ca.teclas[i].addEventListener("click",me.oprimirtecla)
         //console.log(ca.teclas[i]);
		}
	   },
	  oprimirtecla: function(teclas) {
		ca.accion= teclas.target.getAttribute("class");
		ca.digito= teclas.target.innerHTML;
		me.calculadora(ca.accion,ca.digito);
		
	   },
	   calculadora:function(accion,digito)
	   {
	   	switch(accion)
	   	{
	   		
	   	case"numero":
		  // console.log("numero");

	   		ca.cantisignos=0;
	   		if(ca.operacion.innerHTML=="0")
	   		{
	   			ca.operacion.innerHTML=digito;
	   		}else{
	   			if(ca.resultado)
	   			{
	   				ca.resultado=false;
	   				ca.resultado.innerHTML=digito;
	   			}else {
					ca.operacion.innerHTML += digito;
				}
	   		}
	   		break;
			case"operador":
			{
				ca.cantisignos++;
				if(ca.cantisignos ==1)
				{
					if(ca.operacion.innerHTML == 0)
					{
						ca.operacion.innerHTML=0;
					}else
					{
						ca.operacion.innerHTML += digito;
						ca.cantidecimal = false;
						ca.resultado = false;
					}
				}
			}
			break;
			case "decimal":
             //console.log("decimal");
			 if(!ca.cantidecimal && ca.cantisignos!=1)
			 {
				ca.operacion.innerHTML += digito;
				ca.cantidecimal = true;
				ca.resultado=false;
			 }
			break;
            
			case "igual":
				//console.log("igual");
				ca.operacion.innerHTML=eval(ca.operacion.innerHTML);
				ca.resultado=true;
				break;

	   	}

	   },
	   borrarcalcu:function()
	   {
		ca.resultado=false;
		ca.operacion.innerHTML=0;
	   }
	


}
me.inicio();


