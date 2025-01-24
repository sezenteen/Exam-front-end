import React from 'react'

function Header() {
  return (
    <header class="flex justify-between border border-dashed border-gray-300">
        <h1 class="text-4xl font-sans p-5 text-gray-500">Exam.mn</h1>
        <nav class="flex justify-end bg-sky-100 p-3 text-gray-800">
            <a href="" class="p-5  hover:bg-sky-200">Home</a>
            <a href="" class="p-5  hover:bg-blue-200">About</a>
            <a href="" class="p-5  hover:bg-sky-200">Contact</a>
            <a href="" class="p-5  hover:bg-blue-200">Login</a>
        </nav>
    </header>
  )
}

export default Header