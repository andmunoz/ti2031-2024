let x;
x = window.prompt('Ingresa el año de nacimiento');
x = parseInt(x); // Se convierte a número

// Se ejecuta si la edad es menor o mayor que 18
if (x >= 1930 && x <= 1948) {
    window.alert('Eres de la Generación de los Niños de la Posguerra');
}
else if (x >= 1949 && x <= 1968) {
    window.alert('Eres de la Generación de los Baby Boomers');
}
else if (x >= 1969 && x <= 1980) {
    window.alert('Eres de la Generación X');
}
else if (x >= 1981 && x <= 1993) {
    window.alert('Eres de la Generación Y o Millennial');
}
else if (x >= 1994 && x <= 2010) {
    window.alert('Eres de la Generación Z');
}
else if (x >= 2011) {
    window.alert('Eres de la Generación Alpha');
}
else { 
    window.alert('No estás en ninguna generación');
}
