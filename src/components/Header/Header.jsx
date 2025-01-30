import React from 'react'

function Header() {
  return (
    <header class="flex flex-wrap justify-between">
        <h1 class="text-4xl font-sans p-5 text-gray-500">Exam.mn</h1>
        <nav class="flex justify-end rounded-md p-3 text-gray-800">
            <a href="" class="p-5 ">Home</a>
            <a href="" class="p-5  ">About</a>
            <a href="" class="p-5 ">Contact</a>
            <a href="" class="p-5  ">Login</a>
        </nav>
    </header>
  )
}

export default Header