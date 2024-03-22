import Order2 from "./Order2";
import Styles from "../Css/SignUpCss/SignUp2Form.module.css";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Warning from '../Warning'
export const MainSignUp2 =() =>{

    const navigate = useNavigate();
    const [message, setMessage] = useState("qwe");
    const [visible, setVisible] = useState(false);
    const [preventClick, setPreventClick] = useState(false);
    const [name , setName] = useState("");
    const [check, setCheck] =useState(false);
    const ChangeName =(e)=>{
        setName(e.target.value);
    }
    const [gender , setGender] = useState("");
    const ChangeGender = (e)=>{
        setGender(e.target.value);
    }

    const [birth , setBirth] = useState("");
    const ChangeBirth = (e)=>{
        setBirth(e.target.value);
    }

    const [phone, setPhone] = useState("");
    const [sendPhone, setSendPhone] = useState("");
    useEffect(()=>{
        if(phone.length===10){
            setPhone(phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3'));
        }
        if(phone.length===13){
            setPhone(phone.replace(/-/g,'').replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3'));
        }
        setSendPhone(phone.replaceAll(/-/g,''));

    },[phone]);
    const ChangePhone = (e)=>{
        const regex = /^[0-9 -]{0,13}$/;
        if(regex.test(e.target.value)){
            setPhone(e.target.value);
        }
    }
    const [rePassword, setRePassword] = useState("");
    const ChangeRePassword = (e)=>{
        setRePassword(e.target.value);
    }

    const [blood , setBlood] = useState("");
    const ChangeBlood = (e)=>{
        setBlood(e.target.value);
    }

    const [email , setEmail] = useState("");
    const ChangeEmail = (e)=>{
        setEmail(e.target.value);
    }

    const [address , setAddress] = useState("");
    const ChangeAddress = (e)=>{
        setAddress(e.target.value);
    }

    const [password, setPassword] = useState("");
    const ChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const duplicatedEmail = () =>{
        axios.post()
    }
    const register = ()=>{
        if(name === "" && name.length <2 && name.length >8) {
            setMessage("이름을 입력해주세요!");
            setCheck(true);
        }else if(birth==="") {
            setMessage("생일을 입력해주세요!");
            setCheck(true);
        }else if(gender===""){
            setMessage("성별을 골라주세요!");
            setCheck(true);
        }else if(password ==="" && rePassword ===""){
            setMessage("비밀번호를 입력해주세요!");
            setCheck(true);
        }else if(password <8){
            setMessage("비밀번호를 8자리 이상 해주세요!");
            setCheck(true);
        }else if(password !== rePassword){
            setMessage("비밀번호가 서로 맞지 않습니다!");
            setCheck(true);
        }else if(address===""){
            setAddress("주소를 입력해주세요!");
            setCheck(true);
        }
        else{
            axios.post('http://localhost:8080/register',{
                name : name,
                gender : gender,
                birth : birth,
                phone : sendPhone,
                bloodType : blood,
                email : email,
                address : address,
                password1 : password,
                password2 : rePassword,
            }).then((response) =>{
                navigate(`/signUp/finish`);
            }).catch((error)=>{
                console.log(error);
            })
        }
        if(check){
            setVisible(true);
            setPreventClick(true);
        }
        setTimeout(()=>{
            setVisible(false);
            setPreventClick(false);
            console.log("1111111");
        },1500)
    }
        return(
            <main className={Styles.main}>
                <p>회원가입</p>
                <Order2/>
                <p className={Styles.info}>회원정보 입력</p>
                <form className={Styles.mainForm}>
                    <div className={Styles.content}>
                        <div className={Styles.select}>
                            <input type={'text'} placeholder={'이름(2~8자리)'} onChange={ChangeName}/>
                            <input type={'radio'} id={'male'} name={'gender'} value={"남"} onClick={ChangeGender}
                            /><label for={'male'}>남성</label>
                            <input type={'radio'} id={'female'} name={'gender'} value={"여"} onClick={ChangeGender}/><label for={'female'}>여성</label>
                        </div>
                        <input className={Styles.day} onChange={ChangeBirth} type={'date'}/>
                        <input className={Styles.phoneNumber} onChange={ChangePhone} type={`text`} placeholder={'전화번호'} value={phone}/>
                        <div className={Styles.bloodType}>
                            <p>혈액형</p>
                            <input type={'radio'} id={'A'} value={'A'} name={'blood'} onClick={ChangeBlood}/><label for={'A'}>A</label>
                            <input type={'radio'} id={'B'} value={'B'} name={'blood'} onClick={ChangeBlood}/><label For={'B'}>B</label>
                            <input type={'radio'} id={'O'} value={'O'} name={'blood'} onClick={ChangeBlood}/><label For={'O'}>O</label>
                            <input type={'radio'} id={'AB'} value={'AB'} name={'blood'} onClick={ChangeBlood}/><label For={'AB'}>AB</label>
                        </div>
                        <input className={Styles.emails} type={'email'} placeholder={'이메일'} onChange={ChangeEmail} />
                        <button className={Styles.emailCheck} type={`submit`} >요청 하기</button>
                        <input type={'text'} placeholder={'인증번호'}/>
                        <button className={Styles.numberCheck} type={'submit'}>인증</button>
                        <input type={"password"} placeholder={'비밀번호 입력(8자리 이상)'} onChange={ChangePassword}/>
                        <input type={"password"} placeholder={'비밀번호 재확인'} onChange={ChangeRePassword}/>
                        <input className={Styles.address} type={"text"} placeholder={'주소'} name={'address'} onChange={ChangeAddress}/>
                        <button className={Styles.registerButton} disabled={preventClick} type={"submit"} onClick={(e)=>{
                            e.preventDefault();
                            register();
                        }
                        }>회원가입</button>
                        <Warning message={message} visible={visible}/>
                    </div>
                </form>
            </main>
        )
    }