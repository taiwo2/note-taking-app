import React, {useState} from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({notes,onAddNote,activeNote,setActiveNote}) => {
  const [textInput, setTextInput] = useState("");
  
  const sortedNotes = notes.sort((a,b) => b.created_at - a.created_at)
  const filterNotes = sortedNotes.filter(note => {
    if (textInput === ""){
      return note
    }else {
      return note.title.toLowerCase().includes(textInput.toLowerCase())
    }
  })
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <input 
          name="search" 
          id="search" 
          className='search' type="text"
          onChange={(e) =>  setTextInput(e.target.value)} 
        />
        <span className='fasearch'><FontAwesomeIcon icon={faSearch} /></span>
        <button onClick={onAddNote}>+</button>
      </div>
      <div className="app-sidebar-notes">
      {filterNotes.map(({ id, title,created_at }, i) => (
          <div key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <small className="note-meta">
                Created{" "}{moment(created_at).startOf().fromNow()}
            </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
