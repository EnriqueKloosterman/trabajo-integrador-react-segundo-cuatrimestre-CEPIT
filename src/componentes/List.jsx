import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import Header from "./Header";
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

    //? funcion para editar una nota a partir de su id
    const updateNote = (e, id) => {
        e.preventDefault();
        fetch(`${notesUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentNote),
        })
            .then((res) => res.json())
            .then((updatedNote) => {
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

    //? boton de tarea comletada
    // const [isClicked, setIsClicked] = useState(false);
    const toggleCompleted = (id) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        isClicked: !note.isClicked
                    };
                }
                return note;
            })
        );
    };

    return (
        <>
            <Header />
            <div className="container-lg w-5/6 mx-auto">
                <h2 className="text-center text-3xl font-bold">Listado de tareas</h2>
                <div className="flex justify-start mb-3">

                    <form
                        onSubmit={(e) => createNote(e)}
                        className="w-full"
                    >
                        <input
                            type="text"
                            placeholder="Escribe tu nota"
                            name="note"
                            id="note"
                            className=" p-2 rounded-l-md w-3/4 border focus:outline-none focus:border-indigo-400"
                        />
                        <button className=" p-2 rounded-r-md bg-indigo-400 text-white font-bold">
                            Crear nota
                        </button>
                    </form>
                </div>
                <div className="flex  flex-col gap-2 bg-slate-200/80 p-10 rounded-md ">
                    {notes.map((note) => {
                        return (
                            <div className=" bg-slate-100/80 p-2 rounded-md flex justify-between" key={note.id}>

                                <p className="font-bold text-lg text-left font-mono">
                                    {note.note}
                                </p>
                                <div className="flex justify-end">
                                    <button
                                        className=" mx-1 p-1 text-red-600"
                                        onClick={() => deleteNote(note.id)}
                                    >
                                        <FaRegTrashAlt />
                                    </button>
                                    <button
                                        className=" mx-2 p-1 text-indigo-400"
                                        id="editar"
                                        onClick={() => selectNote(note)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => toggleCompleted(note.id)}>
                                        {note.isClicked ? '✔' : '❌'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <dialog ref={modal} className="border-2 border-black rounded-md w-2/4 m-auto" >
                    <button className="text-red-900 font-extrabold" onClick={closeModal}>X</button><br />
                    <form action="">

                        <label htmlFor="note">Nota:</label><br />
                        <input type="text" name="note" value={currentNote.note} className="border-2 border-indigo-300 rounded-l-md p-1 w-4/6" onChange={(e) => setCurrentNote(prev => ({ ...prev, note: e.target.value }))} />
                        <button className="rounded-r-md border-2 border-indigo-300 bg-indigo-300 p-1 font-bold text-white mt-4 " onClick={(e) => updateNote(e, currentNote.id)}>Editar</button>
                    </form>
                </dialog>
            </div>
        </>
    );
}

export default List;
