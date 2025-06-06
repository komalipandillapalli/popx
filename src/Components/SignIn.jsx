import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../App'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        email: '',
        password: '',
        companyName: '',
        agency: 'Yes'
    })

    const context = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
        context.setIsSignIn(true)
    }, [])

    const changeInputField=e=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,[name]:value,
        }));
    }

    const handleSubmit = () =>{
        const {fullName, phoneNo, email, password} = formData;

        if (!fullName || !phoneNo || !email || !password){
            alert("please fill all the required empty fields");
            return;
        }

        if (!/^\d{10}$/.test(phoneNo) ) {
            alert("Phone number must be at least 10 digits.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters and contain both letters and numbers.");
            return;
        }


        localStorage.setItem("userData", JSON.stringify(formData));
        alert("account created and data saved in local storage!");
        console.log("form Data saved:",formData );

        setFormData({
            fullName: '',
            phoneNo: '',
            email: '',
            password: '',
            companyName: '',
            agency: 'Yes'
        })

        navigate('/login')
    }

    return (
        <div className='main-container'>
            <div className='container contt'>
                <div>
                    <h1 className='heading'>Create your PopX account</h1>
                    <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
                    <p className='paragraph'>consectetur adipiscing elit.</p>
                    <div className='input-container'>
                        <label>Full Name <span>*</span></label>
                        <input type='text' value={formData.fullName} className='input' placeholder='Enter your name' 
                        onChange={changeInputField} name='fullName' />
                    </div>
                    <div className='input-container'>
                        <label>Phone Number<span>*</span></label>
                        <input type='text' value={formData.phoneNo} className='input' placeholder='Enter phone number' 
                        onChange={changeInputField} name='phoneNo'/>
                    </div>
                    <div className='input-container'>
                        <label>Email Address<span>*</span></label>
                        <input type='text' value={formData.email} className='input' placeholder='Enter email address'
                        onChange={changeInputField} name='email' />
                    </div>                    
                    <div className='input-container'>
                        <label>Password<span>*</span></label>
                        <input type='text' value={formData.password} className='input' placeholder='enter password'
                        onChange={changeInputField} name='password'/>
                    </div>
                    <div className='input-container'>
                        <label>Company name</label>
                        <input type='text' value={formData.companyName} className='input' placeholder='Enter company name' 
                        onChange={changeInputField} name='companyName'/>
                    </div>
                    <p className='agency'>Are you an Agency</p>
                    <div className='radio-container'>
                        <label className='radio'>
                            <input type='radio' name='agency' value='Yes' checked={formData.agency==='Yes'} onChange={changeInputField}/>
                            <span className='radior'>Yes</span>
                        </label>
                        <label className='radio'>
                            <input type='radio' name='agency' value='No' checked={formData.agency==='No'} onChange={changeInputField}/>
                            <span className='radior'>No</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button className='button create' onClick={handleSubmit}>Create account</button>
                </div>

            </div>
        </div>
    )
}

export default SignIn;