import React, {useState} from 'react'

const Sidebar = () => {

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <input name="search" id="search" className='search' type="text" />
        <button 
        >+</button>
      </div>
      <div className="app-sidebar-notes">
        
      </div>
    </div>
  );
};

export default Sidebar;
