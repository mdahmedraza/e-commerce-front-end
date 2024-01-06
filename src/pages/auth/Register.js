import React, {useState} from 'react';
import styles from './auth.module.scss';
import registerImg from '../../assets/register-img.png';
import Card from '../../components/card/Card';
import {Link} from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
}

const Register = () => {
    const [formData, setFormData] = useState(initialState)
    const {name, email, password, cPassword} = formData;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const registerUser = () => {};
    return(
        <section className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <form onSubmit={registerUser}>
                        <h2>Register</h2>
                        <input type="text" placeholder="Name" required name="name" value={name} onChange={handleInputChange} />
                        <input type="text" placeholder="Email" required name="email" value={email} onChange={handleInputChange} />
                        <input type="password" placeholder="Password" required name="password" value={password} onChange={handleInputChange} />
                        <input type="password" placeholder="cPassword" required name="cPassword" value={cPassword} onClick={handleInputChange} />
                        <button type="submit" className="--btn --btn-primary --btn-black">Register</button>
                    </form>
                    <span className={styles.register}>
                        <p>Already have an account?</p>
                        <Link to='/login'>Login</Link>
                    </span>
                </div>
            </Card>
            <div className={styles.img}>
                <img src={registerImg} alt="login" width="400" />
            </div>
        </section>
    )
}

export default Register; // 05:50