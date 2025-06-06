import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
import SignIn from './Components/SignIn'
import Login from './Components/Login'
import Account from './Components/Account'  


const MyContext = createContext()

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  
  const values={isSignIn, setIsSignIn} 

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
          {!isSignIn && <Header />}
          <Routes>
            <Route exact={true} path='/signIn' element={<SignIn/>} />
            <Route exact={true} path='/login' element={<Login/>}/>
            <Route exact={true} path='/account' element={<Account/>} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
export { MyContext };
