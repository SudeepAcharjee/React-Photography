import { useState } from 'react'
import IsometricGrid from './index1.jsx'
import Index2 from './index2.jsx'

function App() {

  let component
  switch (window.location.pathname) {
    case '/':
      component = <IsometricGrid />
      break
    case '/index2':
      component = <Index2 />
      break
    
  }

  return (
    <>
      <main>
      {component}
      </main>
    </>
  )
}

export default App
