import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// function App() {
//     const list = []
//
//     for (let i = 1; i <= 9; i++) {
//         list.push(<h1>{i}</h1>)
//     }
//
//     return (
//         <>
//             {list}
//         </>
//     )
// }

// function App() {
//
//     let num = 10
//     let [a, setA] = useState(num)
//
//     const onClickbtn = () => {
//         setA(a + 1)
//     }
//
//     return (
//         <>
//             <h2>num {a}</h2>
//             <button onClick={onClickbtn}>clickme</button>
//         </>
//     )
// }

const students = [
    {id:1 , name:"nguyen cao cuong 1"},
    {id:2 , name:"nguyen cao cuong 2"},
    {id:3 , name:"nguyen cao cuong 3"}
]

const App = () => {
    return (
        <>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </>
    )
}


export default App
