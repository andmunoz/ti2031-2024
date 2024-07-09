import { useState, useEffect } from 'react';

export default function FormAction({ post, onSubmit, onReset }) {
    // Se define el modelo virtual con la información enviada del formulario.
    const [id, setId] = useState(post ? post.id : '');
    const [title, setTitle] = useState(post ? post.title : '');
    const [body, setBody] = useState(post ? post.body : '');
    const [author, setAuthor] = useState(post ? post.author : '');

    // Se reemplazan valores cuando ocurre algún cambio de estado en el formulario.
    useEffect(() => {
        if (post) {
            setId(post.id);
            setTitle(post.title);
            setBody(post.body);
            setAuthor(post.author);
        } else {
            setId('');
            setTitle('');
            setBody('');
            setAuthor('');
        }
    }, [post]);

    // Controla las acciones realizadas sobre el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            // Si es actualización (PUT)
            await fetch(`/api/posts/${post.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body, author }),
            });
        } else {
            // Si es creación (POST)
            await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body, author }),
            });
        }

        // Se realiza la acción de actualizar la lista
        onSubmit();

        // Se limpia el formulario
        handleReset();
    };

    // Limpia el formulario para que quede listo para crear
    const handleReset = () => {
        setId("");
        setTitle("");
        setBody("");
        setAuthor("");
        onReset();
    }

    // Se devuelve el formulario
    return (
        <form onSubmit={ handleSubmit } style={{ width: '60%' }}>
            <input
                type="hidden"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título del Artículo"
                className="m-2"
                style={{ width: '100%' }}
                required
            />
            <br />
            <input
                type="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Autor del Artículo"
                className="m-2"
                style={{ width: '100%' }}
                required
            />
            <br />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={ 6 }
                placeholder="Cuerpo del Artículo"
                className="m-2"
                style={{ width: '100%' }}
                required
            />
            <br />
            <button 
                type="submit" 
                className="box-border m-2"
                style={{ width: '45%' }}>
                    {post ? 'Actualizar' : 'Crear'}
            </button>
            <button 
                type="button" 
                onClick={ handleReset }
                className="box-border m-2"
                style={{ width: '45%' }}>
                    Limpiar
            </button>
        </form>
    );
};
