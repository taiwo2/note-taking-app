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
    try {
      const {data,error} = await supabase.from('noteTable')
        .select('*')
        dispatch(addNotes(data));
        if (error) throw error;
    }catch(error){
      console.log(error)
    }
    
  }
  useEffect(() => {
    fetchdata();
      // eslint-disable-next-line
  },[])
  
  const onAddNote = async () => {
    const newNote = {
      title: "Untitled Note",
      body: "",
    };
      try{
        await supabase
        .from('noteTable')
        .insert([
           newNote
        ])
        fetchdata()
      }catch(error){
        console.log(error)
      }
  }

  const onUpdateNote = (updatedNote) => {
      const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        // return   await supabase.from('noteTable')
        //   .update([
        //  { title: updatedNote.title, body: updatedNote.body}
        // ]).eq('id',updatedNote.id)

        return updatedNote;
      }

      return note;
    });

    dispatch(updateNotes(updatedNotesArr))
  };
  const getActiveNote = () => {
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
