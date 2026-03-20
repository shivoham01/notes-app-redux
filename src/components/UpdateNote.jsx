import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetEditing, updateNote } from "../redux/features/notesSlice"
import { toast, Zoom } from 'react-toastify';

const UpdateNote = () => {
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedDesc, setUpdatedDesc] = useState('')
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.items)
    let editingNote = JSON.parse(localStorage.getItem('editingNote'))

    useEffect(() => {
        setUpdatedTitle(editingNote.title)
        setUpdatedDesc(editingNote.desc)
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // Updating the note
        const updatedNotes = notes.map((item) => {
            return item.id === editingNote.id
                ? { ...item, title: updatedTitle, desc: updatedDesc }
                : item;
        })
        dispatch(updateNote(updatedNotes))

        // Note updated successfully
        toast.success('Note updated successfully ✅', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });

        // Resetting values
        setUpdatedTitle('');
        setUpdatedDesc('');
        closeUpdate();
    }

    const closeUpdate = () => {
        dispatch(SetEditing(false))
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-center py-6 gap-4">
            <div className="w-60 flex flex-col gap-2">
                <label>Title:</label>
                <input value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} required
                    className="border p-2 rounded-xl" type="text" id="title" placeholder="Enter Updated title" />
            </div>
            <div className="w-60 flex flex-col gap-2">
                <label>Discription:</label>
                <textarea value={updatedDesc} onChange={(e) => setUpdatedDesc(e.target.value)} required
                    className="border p-2 rounded-xl" placeholder="Enter Updated Note" id="desc"></textarea>
            </div>
            <div className="flex w-60 gap-2 justify-between">
                <button className="cursor-pointer active:scale-95 border bg-blue-900 py-2 px-4 rounded-2xl">Update Note</button>
                <button onClick={() => closeUpdate()} className="cursor-pointer active:scale-95 border bg-red-900 py-2 px-4 rounded-2xl">Close</button>
            </div>
        </form>
    )
}

export default UpdateNote