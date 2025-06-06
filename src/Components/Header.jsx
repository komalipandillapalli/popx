import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='main-container'>
      <div className='container cont'>
        <h1 className='heading'>Welcome to PopX</h1>
        <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
        <p className='paragraph'>consectetur adipiscing elit.</p>
        <div className='button-container'>
          <Link to='/signIn' className='link-s'><button className='button create'>Create Account</button></Link>
          <Link to='/login' className='link-l'><button className='button login'>Already Registered? Login</button></Link>
        </div>
      </div>
    </div>

  )
}

export default Header