// ejercicio robot//
var Robot = {
	posicion_x : 0,
	posicion_y : 0,
	avanzar : function(){
		posicion_y += 1;
	},
	ir_izquierda : function(){
		posicion_x -= 1;
	},
	ir_derecha : function(){
		posicion_x += 1;
	},
	retroceder : function(){
		posicion_y -= 1;
	},
	corrent_pos : function(){
		console.log( posicion_x + " | " posicion_y)
	}  
}
// clase robot es6

class Robot {
	constructor ()
  {
  	this.posicion_x = 0;
    this.posicion_y = 0;
  }
  
  avanzar()
  {
  	this.posicion_y += 1;
  }
  retroceder()
  {
  	this.posicion_y -= 1;
  }
  derecha()
  {
 		this.posicion_x += 1;
  }
  izquierda()
  {
 		this.posicion_x -= 1;
  }
  
  mostrar_posicion()
  {
  	console.log(this.posicion_x + " | " + this.posicion_y);
  }
}


//arreglo 10 x 10 tablero
const tablero = [
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10]
]

	function crearTablero(){
		let pos = 0;
		for(let i = 0 ; i < tablero.length ; i++){
			for(let j = 0 ; j < tablero[i].length; j++){
				let div = document.createElement("div");
				div.classList.add("tablero");
				pos++
				div.setAttribute("id",pos);
				let container = document.getElementById("tablero-container");
				container.appendChild(div);

			}
		}
	}

function move(){
 let r = new Robot();
r.mostrar_posicion();

for (let i = 0; i < 5; i++)
{
	debugger
	r.avanzar();
	let init = 0;
	// if( r.posicion_x == 1 && r.posicion_y == 2){
 //    	init = document.getElementById("11");
 //    	init.classList.add("robot")
 //    }
 //    else if (r.posicion_x == 2 && r.posicion_y == 2){
 //        init = document.getElementById("12");
 //    	init.classList.add("robot")
 //    }
 //    else if(r.posicion_x == 2 && r.posicion_y == 3){
 //        init = document.getElementById("22");
 //    	init.classList.add("robot")
 //    }
	r.derecha();
	// init = document.getElementById("1");
	init = document.getElementById("1"+r.posicion_x+r.posicion_y)
	init.classList.add("robot")
    
}

r.mostrar_posicion();
}