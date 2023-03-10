import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Notes({id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size='1.3rem'
            onClick={()=>handleDeleteNote(id)}
            ></MdDeleteForever>
        </div>
    </div>
  )
}

export default Notes