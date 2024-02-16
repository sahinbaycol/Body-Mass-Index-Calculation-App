import  { CSSProperties, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const StyledInput=styled.input`

    padding: 20px 160px;
    font-size:34px;
    border:none;
    width:100%;
    &:focus {
        outline: none;
    }

`

const StyledButton=styled.button`

    width: 400px;
    height:60px;
    border-radius:24px;
    border:1px solid black;
    font-size:26px;
    margin-top:50px;
    background:white;
    color:#676b69;
    &:hover {
        background: #2ad135;
        color:white;
    }

`


export type personalInfo={
    
    weight:number;
    height:number;
}




const Form = () => {

    const navigate=useNavigate();
    const setObjectToLocalStorage = (key: string, data: personalInfo) => {
        localStorage.setItem(key, JSON.stringify(data));
      };

    const [height,setHeight]=useState<number>()
    const [weight,setWeight]=useState<number>()
    const styles={
        formContainerStyle:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginTop:"10%",
            height:"100vh",
        } as CSSProperties,
    }


  return (
    <div style={styles.formContainerStyle}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",borderRadius:"8px",padding:"100px 400px"}}>
            <div style={{fontSize:"34px"}}>Boy</div>
            <div style={{borderBottom:"2px solid #676b69",display:"flex",width:"100%",marginTop:"20px"}}>
                <StyledInput onChange={(e:any)=>{
                    setHeight(e.target.value)
                    
                }} />
            </div>
            <div style={{fontSize:"34px",marginTop:"20px"}}>Kilo</div>
            <div style={{borderBottom:"2px solid #676b69",display:"flex",width:"100%",marginTop:"20px"}}>
                <StyledInput onChange={(e:any)=>{
                    setWeight(e.target.value)
                    
                }} />
            </div>
            <StyledButton disabled={height===undefined || weight===undefined} onClick={()=>{

                const userInfo={
                    height,
                    weight,
                } as personalInfo
                setObjectToLocalStorage('userData', userInfo)
                navigate("/result")
            }}>Hesapla</StyledButton>
        </div>
    </div>
  )
}

export default Form