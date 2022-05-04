const express=require("express")
const app=express()
const ip=require("ip")
let correo=[];
let password=[];
let FEEDBACK=[];


var j1 = {
    titulo:"Batman",
    year:2022,
    imageId:"https://i0.wp.com/cinemedios.com/wp-content/uploads/2021/10/fecha-estreno-the-batman-mexico.jpg?fit=1024%2C637&ssl=1"
}
var j2 = {
    titulo:"Harry Potter y la piedra filosofal",
    year:2001,
    imageId:"https://i0.wp.com/cineyvaloressj.com/wp-content/uploads/2020/08/42100525172832813e301be5faadbbf1.jpg?fit=1077%2C1481&ssl=1"
}
var j3 = {
    titulo:"Birts Of Prey",
    year:2020,
    imageId:"https://static.wikia.nocookie.net/batman/images/7/77/BOP_poster_05.png/revision/latest?cb=20191206190029&path-prefix=es"
}
var j4 = {
    titulo:"Now You See Me 2",
    year:2016,
    imageId:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a7706451b933e4aa354d43f877de6779ad55fee4b88d44ff9efb089ee19d3cd9._RI_V_TTW_.jpg"
}
var j5 = {
    titulo:"Onward",
    year:2022,
    imageId:"https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg"
}
var j6 = {
    titulo:"Onward",
    year:2022,
    imageId:"https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg"
}
var j7 = {
    titulo:"Mulan",
    year:2020,
    imageId:"https://static.wikia.nocookie.net/disney/images/e/e9/Mulan_%282020%2C_Disney%2B_Original_Poster%29.jpg/revision/latest?cb=20200919141917&path-prefix=es"
}
var j8 = {
    titulo:"No time to die",
    year:2021,
    imageId:"https://play-lh.googleusercontent.com/NBMxeiuxDsMNTNqj6gIVwaYW4dvxzUq_aEE7RUB4a_LE7ZmpSFHAOW3uQGRfjzB2fyt_c4IMPC3Ly8yR0gM"
}


var kn1={
    titulo:"Johny Depp gana juicio",
    noticia:"El actor, que ya perdió la batalla legal por difamación contra ‘The Sun’, acusa ahora a su exmujer de devastar su carrera por un artículo publicado en ‘The Washington Post’ en el que esta aseguraba haber sufrido violencia machista",
    imageId:"https://www.semana.com/resizer/bEVaKtluk-l5FAJff88yWR9Qtt8=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/QYUHJVERNBFLHJIPGI6SCXZPCE.jpg"

}
var kn2={
    titulo:"Jurassic World: Dominion",
    noticia:"La isla Nublar y su parque han sido destruidos, pero el problema no se terminó. Con los dinosaurios dispersos por todo el mundo, la convivencia entre el presente y el pasado alcanza un nuevo nivel de tensión.",
    imageId:"https://static.wikia.nocookie.net/jurassicpark/images/1/1a/Screenshot_20201006-171650~3.png/revision/latest?cb=20201006222134&path-prefix=es"

}
var kn3={
    titulo:"Doctor Strange en el Multiverso de la Locura",
    noticia:"El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme.",
    imageId:"https://lumiere-a.akamaihd.net/v1/images/image_451523ce.jpeg"

}

 
var jS1 = {
    titulo:"Moon Knight",
    year:2022,
    imageId:"https://images-na.ssl-images-amazon.com/images/I/91OKOdbhcOL.jpg"
}
var jS2 = {
    titulo:"Riverdale",
    year:2017,
    imageId:"https://images-na.ssl-images-amazon.com/images/I/91D9OOJwUIL.jpg"
}
var jS3 = {
    titulo:"The Mandalorian",
    year:2019,
    imageId:"https://static.wikia.nocookie.net/esstarwars/images/7/71/TheArtofTheMandalorian%28Season_One%29ES.jpg/revision/latest?cb=20210630040243"
}
var jS4 = {
    titulo:"This is Us",
    year:2016,
    imageId:"https://es.web.img2.acsta.net/pictures/18/09/25/04/26/4113417.jpg"
}
var jS5 = {
    titulo:"Arcane",
    year:2021,
    imageId:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arcane-league-of-legends-1636541499.jpg"
}
var jS6 = {
    titulo:"Euphoria",
    year:2019,
    imageId:"https://es.web.img3.acsta.net/pictures/19/06/18/12/06/4123858.jpg"
}
var Jin = {
    correo:"pilar@gmail.com",
    password:"123"
}

let PTOP=[j1,j2,j3,j4,j5,j6,j7,j8];
let lista=[j1,j2,j3,j4,j5,j6,j7,j8];
let PWACHLIST=[];
let PWATCHED=[j1,j2];
let NOTICIAS=[kn1,kn2,kn3];
let STOP = [jS1,jS2,jS3,jS4,jS5,jS6]
let SWACHLIST=[jS1,jS2,jS3];
let SWATCHED= [jS1,jS2,jS3];
//en noticias primero va el tirulo, url de la noticia y al final la imagen url
app.use(express.json())


app.post("/registrarCorreo",(req,resp)=>{
   correo.push(req.body)
    resp.json(Jin)
})
app.post("/registrarContra",(req,resp)=>{
    password.push(req.body)
 })

 app.post("/ingresarCorreo",(req,resp)=>{
    for (var i = 0; i < correo.length; i++) {
        if(correo[i]==req)
           return resp.json("true")
     }
    resp.json("false")
     //resp.json(req.body)
 })
 
 app.post("/FeedBack",(req,resp)=>{
    FEEDBACK.push(req.body)
 })

//////////////////////////////gets 
 app.get("/getTop/Peliculas",(req,resp)=>{
    resp.json(PTOP)
})
app.get("/getTop/Series",(req,resp)=>{
    resp.json(STOP)
})


app.get("/getWachlist/Peliculas",(req,resp)=>{
    resp.json(PWACHLIST)
})

app.post("/agregar/Wachlist"),(req,rep)=>{
    resp.json(req.body)
    i=0;
    while(lista.length)
    {
        if(lista[i]==req.body)
        {
            PWACHLIST.add(req.body)
        }
        i++;
    }
}


app.get("/getWatched/Peliculas",(req,resp)=>{
    resp.json(PWATCHED)
})

app.get("/getWachlist/Series",(req,resp)=>{
    resp.json(SWACHLIST)
})
app.get("/getWatched/Series",(req,resp)=>{
    resp.json(SWATCHED)
})


app.get("/getNoticias",(req,resp)=>{
    resp.json(NOTICIAS)
})




/*app.get("/personas",(req,resp)=>{
    resp.json(personas)
})*/
console.dir ( ip.address() );
app.listen(8080,()=>{
    console.log("Ya estoy corriendo en el 8080")
})

