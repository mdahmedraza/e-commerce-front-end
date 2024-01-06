import React, {useState} from 'react';
import styles from './auth.module.scss';
import loginImg from '../../assets/login-img.png';
import Card from '../../components/card/Card';
import {Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = () => {

    }
    return(
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="login" width="400" />
            </div>
            <Card>
                <div className={styles.form}>
                    <form onSubmit={loginUser}>
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button type="submit" className="--btn --btn-primary --btn-black">Login</button>
                    </form>
                    <span className={styles.register}>
                        <p>Don't have an account?</p>
                        <Link to='/register'>Register</Link>
                    </span>
                </div>
            </Card>
        </section>
    )
}

export default Login;