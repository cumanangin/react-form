import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex justify-center'>
        <div className='w-1/2'>
        <Form />
        </div>
      </div>
    </>
  )
}

export default App
