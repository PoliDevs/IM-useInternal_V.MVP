import React from 'react'
import s from './labelInput.module.scss'

export default function LabelInput({text,type}) {
  return (
    <>
    <label>{text}</label>
    <input type={type} />
    </>
  )
}
