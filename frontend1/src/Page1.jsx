import { useState } from 'react'
import './App.css'
import App from 'remoteApp/App'

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <App></App>
      </div>
    </>
  )
}

export default Page1
