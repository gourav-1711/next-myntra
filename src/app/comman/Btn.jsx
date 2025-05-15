"use client"

import React, { useState } from 'react'

export default function Btn() {

  let [theme, setTheme] = useState(false)

  const changeTheme = () => {
    document.body.classList.toggle("dark")
    setTheme(!theme)
  }

  return (
    <button
      className='z-50 cursor-pointer fixed bottom-9 active:translate-y-4 duration-500 font-bold right-10 capitalize bg-foreground text-background rounded-2xl p-[3px_10px]'
      onClick={changeTheme}>
      {theme ? "☀️ light" : "🌙 dark"} mode
    </button>
  )
}
