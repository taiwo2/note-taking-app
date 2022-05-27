import React,{useEffect,useState} from 'react';

import SideBar from './SideBar';
import './App.css'
import Main from './Main';
const mapState = (state) =>({
  notes: state.notes
})
const Home = () => {
  const [activeNote, setActiveNote] = useState(false);
  const dispatch = useDispatch()
  const {notes} = useSelector(mapState);

   const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    dispatch(addNotes(newNote))
    setActiveNote(newNote.id);
  };
  const onUpdateNote = (updatedNote) => {
  
    // console.log('dd',updateNotes)
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    dispatch(updateNotes(updatedNotesArr))
  };
  const getActiveNote = () => {
    const noted = notes.find(({ id }) => id === activeNote);
      return noted
  };

  return (
    <div className='main'>
      <SideBar
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      notes={notes} onAddNote={onAddNote} />
      <Main 
      />
    </div>
  )
}

export default Home;
