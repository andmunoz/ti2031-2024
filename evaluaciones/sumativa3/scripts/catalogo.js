let catalogo = [
    { 
        codigo: 'P0001', 
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Damas',
        descripcion: 'Tablero para el juego de damas. Incluye un tablero y 24 fichas repartidas entre el color blanco y negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: 'p0001.png',
        disponibilidad: 10,
        tiempo: 1
    },
    { 
        codigo: 'P0002', 
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Ajedrez',
        descripcion: 'Tablero para jugar Ajedrez. Incluye un tablero y con el set de fichas completo tanto de color blanco como negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: 'p0002.jpg',
        disponibilidad: 10,
        tiempo: 1
    },
    { 
        codigo: 'P0003', 
        categoria: 'Juegos de Rol',
        nombre: 'Dungeons & Dragons 5ed, Manual del Jugador',
        descripcion: 'Manual del jugador para la 5ta edición del juego de rol Dungeons & Dragons. Tapa dura y en español.',
        ubicacion: 'Santiago Centro',
        imagen: 'p0003.jpg',
        disponibilidad: 3,
        tiempo: 5
    },
    { 
        codigo: 'P0004', 
        categoria: 'Juegos de Estrategia',
        nombre: 'Scythe',
        descripcion: 'Ambientado en una realidad paralela de 1920, Scythe es un juego de estrategia tipo 4x para 1 a 5 jugadores (ampliado a 7 jugadores en la expansión “Invasores de tierras lejanas“).',
        ubicacion: 'Renca',
        imagen: 'p0004.png',
        disponibilidad: 7,
        tiempo: 3
    },
    { 
        codigo: 'P0005', 
        categoria: 'Juego Creativo',
        nombre: 'Dixit',
        descripcion: '¡Dixit es un creativo juego de deducción, bellamente ilustrado, donde tu imaginación crea increíbles historias! 84 cartas con bellas ilustraciones para que los adultos se luzcan con su agudeza y los pequeños sorprendan con su imaginación. ',
        ubicacion: 'Santiago Centro',
        imagen: 'p0005.png',
        disponibilidad: 12,
        tiempo: 5
    },
    { 
        codigo: 'P0006', 
        categoria: 'Juegos Competitivo',
        nombre: 'Aventureros al Tren (Ticket to Ride)',
        descripcion: '¡Aventureros al Tren! es un juego de aventuras en tren. Los jugadores acumulan cartas de ciertos tipos de vagones que les permiten conectar diferentes ciudades a lo largo y ancho de Norteamérica. Mientras más largos son los recorridos, más puntos se ganan.',
        ubicacion: 'Santiago Centro',
        imagen: 'p0006.png',
        disponibilidad: 10,
        tiempo: 5
    },
    { 
        codigo: 'P0007', 
        categoria: 'Juegos de Cartas',
        nombre: 'Dobble',
        descripcion: 'Dobble un juego con más de 50 símbolos, 55 cartas, con uno, y solamente un símbolo idéntico entre cada carta. ¿Serás capaz de descubrirlo?',
        ubicacion: 'Renca',
        imagen: 'p0007.png',
        disponibilidad: 7,
        tiempo: 3
    },
    { 
        codigo: 'P0008', 
        categoria: 'Juegos de Estrategia',
        nombre: 'Catan, El Juego',
        descripcion: 'Catan es un juego de mesa para toda la familia que se ha convertido en un fenómeno mundial. Desde su aparición en Alemania ha vendido más que muchos de los juegos más tradicionales. Se trata de un juego que aúna la estrategia, la astucia y la capacidad para negociar y en el que los jugadores tratan de colonizar una isla, Catán, rica en recursos naturales.',
        ubicacion: 'Santiago Centro',
        imagen: 'p0008.png',
        disponibilidad: 2,
        tiempo: 5
    },
    { 
        codigo: 'P0009', 
        categoria: 'Juegos Cooperativos',
        nombre: 'Arkham Horror',
        descripcion: 'Arkham Horror es un juego cooperativo. Todos los jugadores colaboran entre sí y ganan o pierden la partida como equipo. Cada jugador controla a un intrépido investigador, uno de los pocos individuos excepcionales que están al tanto del peligro que se cierne sobre nuestro mundo. Los investigadores deben explorar la ciudad para descubrir lugares, personas y criaturas de naturaleza tanto ordinaria como sobrenatural.',
        ubicacion: 'Renca',
        imagen: 'p0009.png',
        disponibilidad: 6,
        tiempo: 3
    },
    { 
        codigo: 'P0010', 
        categoria: 'Juegos de Cartas',
        nombre: 'Timeline - Eventos',
        descripcion: '¿Acaso Julio César había sido nombrado dictador cuando ocurrió el Gran Incendio de Roma? ¿Había comenzado ya la construcción de la Gran Muralla China? ¿La Fiebre del Oro de California tuvo lugar al mismo tiempo? Para ganar la partida, sé el primero en colocar correctamente todas tus cartas.',
        ubicacion: 'Renca',
        imagen: 'p0010.png',
        disponibilidad: 15,
        tiempo: 3
    },
];

function showCatalog(cols) {
    let catalog = document.getElementById('catalog-content');
    let html = '';
    catalogo.forEach(function(item, key) {
        if (key % cols == 0) {
            html += '<div class="row">'
        }
        html += '    <div class="card-column">' +
                '        <div class="card">' +
                '            <img src="assets/' + item.imagen + '" alt="Avatar" class="card-img"/>' +
                '            <div class="card-container">' +
                '                <h4><b>' + item.nombre + '</b></h4>' +
                '                <p>' + item.descripcion.substring(0, 100) + '...</p>' +
                '                <p>Disponibles: ' + item.disponibilidad + '</p>' +
                '                <p>Sede: ' + item.ubicacion + '</p>' +
                '                <p><button onclick="' + (item.disponibilidad <= 0?'alert(\'Ya no hay stock de ' + item.nombre + '\');':'addToCart(' + key + ');') + '"><i class="fa fa-bookmark" aria-hidden="true"></i> Reservar</button></p>' +
                '            </div>' +
                '        </div>' +
                '    </div>';
        if (key % cols == cols - 1) {
            html += '</div>';
        }
    });
    catalog.innerHTML = html;
}