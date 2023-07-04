import { useEffect, useState } from "react";

function List() {
    const notesUrl = "https://649dcc459bac4a8e669e54c4.mockapi.io/notes";
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(notesUrl)
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
            });
    }, []);

    //? función para crear una nueva nota
    const createNote = (e) => {
        e.preventDefault();
        const noteValue = e.target.elements.note.value;
        const note = {
            note: noteValue,
        };
        fetch(notesUrl, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNotes([...notes, data]);
                e.target.reset();
            });
    };

    //? funcion para eliminar una nota a partir de su id
    const deleteNote = (id) => {
        fetch(notesUrl + "/" + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNotes(notes.filter((note) => note.id !== id));
            });
    };


    return (
        <>
            <div className="container-lg w-5/6 mx-auto">
                <h2 className="text-center text-3xl font-bold">Listado de tareas</h2>
                <form
                    onSubmit={(e) => createNote(e)}
                    className="flex flex-col mt-10 gap-4"
                >
                    <input
                        type="text"
                        placeholder="Escribe tu nota"
                        name="note"
                        id="note"
                        className="border border-black p-2 rounded-md"
                    />
                    <button className="border border-black p-2 rounded-md">
                        Crear nota
                    </button>
                </form>
                <div className="flex  flex-col mt-10 gap-4 ">
                    {notes.map((note, i) => {
                        return (
                            <div className=" bg-slate-100 p-2 rounded-md block" key={i}>
                                <p className="font-bold text-lg text-left">
                                    {note.note}
                                    <button
                                        className="border border-black rounded-md mx-2 p-1"
                                        onClick={() => deleteNote(note.id)}
                                    >
                                        ❌
                                    </button>
                                    <button
                                        className="border border-black rounded-md mx-2 p-1" 
                                        id="editar"
                                    >
                                        
                                        Editar✏
                                    </button>
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}

export default List;
