import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import person from './Answer'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)
  const showans = (i) => {
    console.log(i.answer)
    ref.current.classList.add("javabshow")
    ref.current.innerHTML = `
      <p className='px-5 javab'> ${i.answer}</p>
    `
  }
  return (
    <>  
      <div className="constainer">
        {person.map((i) => {
          return <>
            <div key={i} className="questions">
              <p key={i} className='pt-3 ms-5 ques'>{i.question}
                <span key={i} className='changeimg' onClick={() => showans(i)}><img src="/src/down-arrow.png" alt="" /></span>
              </p>
              <p ref={ref} className='px-5 javab'>{i.answer}</p>
            </div>
          </>
        })}
      </div>
    </>
  )
}

export default App
