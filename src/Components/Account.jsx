import Ellipse from '../Assets/Ellipse.png'
import { useContext, useEffect } from 'react'
import { MyContext } from '../App'

const Account = () => {
    const context = useContext(MyContext)

    useEffect(() => {
        context.setIsSignIn(false)
    }, [])

  return (
    <div className='container'>
        <h1 className='heading'>Account settings</h1>
        <div className='account-container'>
            <img src={Ellipse} alt='profile-photo' className='profile'/>
            <div>
                <p className='paragraph para'>Marry Doe</p>
                <p className='paragraph'>Marry@Gmail.Com</p>
            </div>
        </div>
        <p className='paragraph'>Lorem ipsum dolor sit amet. Consetetur sadisping Elitr. Sed diam nonumy. Erimod Temper <br/>
        Labore Et Dolore magma </p>
    </div>
  )
}

export default Account