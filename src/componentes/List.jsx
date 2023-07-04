import { useEffect, useRef, useState } from "react";
const task = {
    note: "",
    id: ""
}
function List() {
    const notesUrl = "https://649dcc459bac4a8e669e54c4.mockapi.io/notes";
    const [notes, setNotes] = useState([]);
    const modal = useRef()

    useEffect(() => {
        fetch(notesUrl)
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
                console.log(data);
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

    const updateNote = (e, id) => {
        e.preventDefault();
        fetch(`${notesUrl}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentNote),
        })
          .then((res) => res.json())
          .then((updatedNote) => {
            // Actualizar la nota en el estado local (notes)
            setNotes((prevNotes) =>
              prevNotes.map((note) => (note.id === id ? updatedNote : note))
            );
            setCurrentNote(task);
            modal.current.close();
          });
      };
      

    const [currentNote, setCurrentNote] = useState(task);
    const selectNote = (note) => {
        setCurrentNote(note);
        modal.current.show();
    }
    const closeModal = () => {
        modal.current.close();
    }


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
                    {notes.map((note) => {
                        return (
                            <div className=" bg-slate-100 p-2 rounded-md block" key={note.id}>
                                <p className="font-bold text-lg text-left" onClick={() => selectNote(note)}>
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
                                        onClick={() => selectNote(note)}
                                        
                                    >
                                        
                                        Editar✏
                                    </button>
                                </p>
                            </div>
                        );
                    })}
                </div>
                <dialog ref={modal} className="border-2 border-black rounded-md w-2/4 m-auto" >
                    <button className="text-red-900 font-extrabold" onClick={closeModal}>X</button><br/>
                    <form action="">

                    <label htmlFor="note">Nota:</label><br/>
                    <input type="text" name="note" value={currentNote.note} className="border-2 border-indigo-300 rounded-md p-1" onChange={(e) => setCurrentNote(prev => ({ ...prev, note: e.target.value}))} />
                    <button className="rounded-md bg-indigo-300 p-1 font-bold text-white mt-4 " onClick={(e) => updateNote(e, currentNote.id)}>Editar</button>
                    </form>
                </dialog>

            </div>
        </>
    );
}

export default List;
