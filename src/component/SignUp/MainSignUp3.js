import Order3 from './Order3'
import styles from '../Css/SignUpCss/SignUp3Finish.module.css'
import {Link} from "react-router-dom";

export default function MainRegister(){
    return(
        <main className={styles.main}>
            <p>회원가입</p>
            <Order3/>
            <div className={styles.box}>
                <h1>회원가입이 완료되었습니다!</h1>
                <Link to={'/login'}><button className={styles.loginButton} type={`submit`}>로그인</button></Link>
            </div>
        </main>
    )
}