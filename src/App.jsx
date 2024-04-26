import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import person from './Answer'

function App() {
  const showans = () => {
    person.map((currElem) => {
      console.log(currElem.answer);
    })
  }
  return (
    <>
      <div className="constainer">
        {person.map((i)=>{
          return <>
          <div key={i} className="questions">
          <p key={i} className='pt-3 ms-5 ques'>{i.question}
            <span key={i} className='changeimg' onClick={showans}><img src="/src/down-arrow.png" alt="" /></span>
          </p>
          <p  className='px-5 javab'>{i.answer}</p>
        </div>
        </>
        })}
      </div>
    </>
  )
}

export default App
