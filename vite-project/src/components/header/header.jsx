import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <div className={style.container}>
        <h1 className={style.header}>Where in the world</h1>
    </div>
  )
}

export default Header