let numAlummno=0;


//console.log(datos[numAlummno].paginas);
//numAlummno++;//numAlumno = numAlumno +1
//console.log(datos[numAlummno].paginas);
//numAlummno++;
//console.log(datos[numAlummno].paginas);
console.log(datos.length)

while (numAlummno < datos.length) {
    //condicion equivalente (numAlumno <=2)
    console.log(datos[numAlummno].paginas);
    numAlummno++; //numAlumno = numAlumno +1 ;
}

for (let numAlummno = 0; numAlummno < datos.length; numAlummno++) {
    console.log = numAlummno[numAlummno];
   
}
let listaAlumnos = document.getElementById("lista");

for (const alumno of datos){

     let elementLista = document.createElement("li");
    elementLista.innerHTML = alumno.identificacionAlumno;
    listaAlumnos.appendChild(elementLista);

}
console.log("final");
