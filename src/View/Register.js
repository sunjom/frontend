import Header from '../component/mainPage/MainPageHeader'
import Footer from '../component/mainPage/MainPageFooter'
import Register1 from '../component/Register/RegisterFileInput'
import style from '../component/Css/RegisterCss/RegisterFile.module.css'
export default function Register(){
    return(
        <div>
            <Header/>
            <Register1/>
            <div className={style.block}></div>
            <Footer/>
        </div>
    )
}