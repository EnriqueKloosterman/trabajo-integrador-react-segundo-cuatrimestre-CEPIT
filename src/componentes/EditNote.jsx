import { useState } from "react";


function EditNote() {
    const notesUrl = 'https://649dcc459bac4a8e669e54c4.mockapi.io/notes';
 const [notes, setNotes] = useState([]);

        //? funcion para editar una nota a partir de su id
    const editNote = (e) => {
        e.preventDefault();
        const noteValue = e.target.elements.note.value;
        const updatedNote = {
            note: noteValue
        };
        fetch(notesUrl + '/' + e, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNotes(notes.filter(note => note.id !== e))
            })

            console.log(updatedNote);
            e.target.reset();
    }
  return (
   <>
                <form onSubmit={(e) => editNote(e)} className="flex flex-col mt-10 gap-4">
                <input type="text" placeholder="Escribe tu nota" name="note" id="note" className="border border-black p-2 rounded-md" />
                <button className="border border-black p-2 rounded-md">Crear nota</button>
            </form>
   </>
  )
}

export default EditNote