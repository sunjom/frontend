import styles from '../Css/SignUpCss/Order1.module.css';
import start from '../../GIVE_사진/start.png';
import startYet from '../../GIVE_사진/start_yet.png';
export default function Order1(){
    return(
        <div className={styles.order}>
            <div className={styles.step1}>
                <p>STEP 01</p>
                <p>약관동의/본인인증</p>
            </div>
            <div className={styles.blocks}>
                
            </div>
            <img src={start} alt="이미지없음"/>
            <div className={styles.step2}>
                <p>STEP 02</p>
                <p>회원정보 입력</p>
            </div>
            <img src={startYet} alt="이미지없음"/>
            <div className={styles.step3}>
                <p>STEP 03</p>
                <p>가입완료</p>
            </div>
        </div>
    )
}