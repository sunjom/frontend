import Headers from "../component/mainPage/MainPageHeader";
import Footer from "../component/mainPage/MainPageFooter";
import {MainSignUp2} from "../component/SignUp/MainSignUp2";
import {Component} from "react";
class SignUp2 extends Component{
    render(){
        return (
            <div>
                <Headers/>
                <MainSignUp2/>
                <Footer/>
            </div>
        )
    }
}
export default SignUp2;