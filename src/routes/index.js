import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import SignINUP from '../pages/SignInUp'
import Register from '../pages/Register'
import Private from './Private'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<SignINUP/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Private> <Home/> </Private>} />
        </Routes>
    )
}