const mascota = {
    nombre:'Kan',
    raza:'Felino',
    color:'rubio',
    edad:'5 meses',
    Jueguetes:['Peluche','pelota','cuerda'],

    info: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} y me gusta jugar con ${this.Jueguetes}`)
    }
    
}

mascota.info()
