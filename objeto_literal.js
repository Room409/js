const mascota = {
    nombre:'Kan',
    raza:'Felino',
    color:'rubio',
    edad:'5 meses',
    Jueguetes:['Peluche','pelota','cuerda'],

    info: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} y me gusta jugar con ${this.Jueguetes}`)
        return this
    },

    playtime: function(){
        console.log(`En mis tiempos libres juego con mis juegutes como ${this.Jueguetes} ya que soy un ${this.raza}`)
        return this
    }
    
}

mascota.info().playtime();

