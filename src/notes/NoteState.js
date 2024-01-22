import React from 'react'
import noteContext from './noteContext'

export default function NoteState(props) {
    const State={
        name:"Naman",
        age:20
    }
  return (
    <noteContext.provider value={State}>
        {props.children}
    </noteContext.provider>
  )
}
