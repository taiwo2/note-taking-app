import React, {useState} from 'react'

const Sidebar = ({notes,onAddNote,activeNote,setActiveNote}) => {
  const [textInput, setTextInput] = useState("");
  const sortedNotes = notes.filter(note => {
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
        <button>+</button>
      </div>
      <div className="app-sidebar-notes">
      {sortedNotes.map(({ id, title,body,lastModified }, i) => (
          <div key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <small className="note-meta">
                Created{" "}{moment(lastModified).startOf().fromNow()}
            </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
