import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import SideBar from './SideBar';
import '../App.css'
import Main from './Main';
import { supabase } from '../client';
import { addNotes ,updateNotes } from '../redux/noteAction';
const mapState = (state) =>({
  notes: state.notes
})

const Home = () => {
  const [activeNote, setActiveNote] = useState(false);
  const dispatch = useDispatch();
  const {notes} = useSelector(mapState);

  const fetchdata = async () => {
    const {data} = await supabase.from('noteTable')
      .select('*')
      dispatch(addNotes(data))
      setActiveNote(data.id)
  }
  
  
  const onAddNote = async () => {
    const newNote = {
          title: "Untitled Note",
          body: "wahha",
        };
     await supabase
      .from('noteTable')
      .insert([
         newNote
      ])
      fetchdata()
  }

  useEffect(() => {
    const fetchdata = async () => {
      const {data} = await supabase.from('noteTable')
        .select('*')
        dispatch(addNotes(data))
        setActiveNote(data.id)
    }
    fetchdata ()
  },[])
 
  const onUpdateNote = (updatedNote) => {
      const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    dispatch(updateNotes(updatedNotesArr))
  };
  const getActiveNote = () => {

    // console.log('ee',notes)
  return notes.find(i => i.id === activeNote)
 
  };

  return (
    <div className='main'>
      <SideBar
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes={notes} onAddNote={onAddNote} 
      />
      <Main 
        onUpdateNote={onUpdateNote}
        activeNote={getActiveNote()}
      />
    </div>
  )
}

export default Home;
