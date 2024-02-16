import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type userInfo={
    weight:number;
    height:number;
}

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

const Result = () => {



  const navigate=useNavigate();

    const getObjectFromLocalStorage = (key: string): userInfo | null => {
        const data = localStorage.getItem(key);
        if (data) {
          try {
            return JSON.parse(data) as userInfo;
          } catch (error) {
            console.error('Error parsing data from localStorage:', error);
            return null;
          }
        }
        return null;
      };
      const [bmi,setBMI]=useState<number>()
      const[bmiSituation,setBMISituation] =useState<string>("")
      const [bmiSuggestedList,setSuggestedList]=useState<HTMLElement>()
      const [bmibgcolor,setBmibgcolor]=useState<string>("")
      

    const userDataFromLocalStorage = getObjectFromLocalStorage('userData');
      
    

    const calculetBMI=(data:userInfo)=>{

        if(userDataFromLocalStorage){
        setBMI(userDataFromLocalStorage.weight / (userDataFromLocalStorage.height /100 * userDataFromLocalStorage.height /100))
        }
        return null;
    }

    const handleBMISituation=()=>{
        if(bmi!==undefined && bmi<=18.5){
            setBMISituation("Zayıf")
            setBmibgcolor("yellow")
        } else if(bmi!==undefined && bmi>=18.5 && bmi<25 ){
            setBMISituation("Normal")
            setBmibgcolor("#2bc447")
        } else if(bmi!==undefined && bmi>=25 && bmi<30 ){
            setBMISituation("Kilolu")
            setBmibgcolor("#f0a60a")
        } else if(bmi!==undefined && bmi>=30){
            setBMISituation("Şişman")
            setBmibgcolor("red")
        }
    }

    useEffect(()=>{
        if(userDataFromLocalStorage){
        calculetBMI(userDataFromLocalStorage)
        handleBMISituation()
        }
        
    },[bmiSituation,bmi])

    


   
    

  return (
    <div style={{display:"flex",flexDirection:"row",width:"100%",height:"100vh",justifyContent:"center",marginTop:"10%"}}>
        {userDataFromLocalStorage && (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
               <div style={{border:"1px solid black",borderRadius:"8px",padding:"30px 10px",display:"flex",flexDirection:"column",alignItems:"center",background:`linear-gradient(180deg, ${bmibgcolor}, rgba(46,3,13,1) 61%)`}}>
                <div style={{fontSize:"20px",fontWeight:"500",color:"white"}}>
                  Vücut Kitle İndeksi:{" "+bmi?.toFixed(1)} 
                </div>
                 {bmiSituation === "Zayıf" ? (
                 <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white"}}>Değerlendirme:{" "+bmiSituation}</div>
                    <div style={{maxWidth:"400px",textAlign:"center",marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white",display:"flex",flexDirection:"column"}}>
                      <div>Önerilen Beslenme Biçimi</div>
                      <div style={{marginTop:"10px"}}>
                        Düzenli ve dengeli bir şekilde kilo alımını destekleyecek besinleri tüketin.
                        Bol miktarda protein, sağlıklı yağlar ve kompleks karbonhidratlar içeren yiyecekleri tercih edin.
                        Egzersiz programınıza ağırlık kaldırma ve kas yapıcı egzersizleri dahil edin.
                      </div>
                      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <div style={{width:"100px",height:"30px",backgroundColor:"yellow",border:"4px solid white"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#2bc447"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#f0a60a"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"red"}}></div>
                      </div>
                    </div>  
                </div>) : ("")}
                {bmiSituation === "Normal" ? (
                 <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white"}}>Değerlendirme:{" "+bmiSituation}</div>
                    <div style={{maxWidth:"400px",textAlign:"center",marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white",display:"flex",flexDirection:"column"}}>
                      <div>Önerilen Beslenme Biçimi</div>
                      <div style={{marginTop:"10px"}}>
                        Sağlıklı beslenmeye devam edin ve düzenli egzersiz yapın.
                        Dengeli bir diyete odaklanın ve abur cubur gibi işlenmiş gıdaları sınırlayın.
                        Ölçülü porsiyonlarla yemek yiyin ve açlık hissi oluştuğunda tokluğa ulaşana kadar yemeyi durdurun.
                      </div>
                      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <div style={{width:"100px",height:"30px",backgroundColor:"yellow"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#2bc447",border:"4px solid white"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#f0a60a"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"red"}}></div>
                      </div>
                    </div>  
                </div>) : ("")}
                {bmiSituation === "Kilolu" ? (
                 <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white"}}>Değerlendirme:{" "+bmiSituation}</div>
                    <div style={{maxWidth:"400px",textAlign:"center",marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white",display:"flex",flexDirection:"column"}}>
                      <div>Önerilen Beslenme Biçimi</div>
                      <div style={{marginTop:"10px"}}>
                        Kalori alımını azaltarak ve fiziksel aktiviteyi artırarak kilo vermeye odaklanın.
                        İşlenmiş gıdalar, fast-food ve şekerli içecekler gibi zararlı gıdaları sınırlayın.
                        Günlük kalori alımınızı kontrol altına alın ve sağlıklı atıştırmalıkları tercih edin.
                      </div>
                      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <div style={{width:"100px",height:"30px",backgroundColor:"yellow"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#2bc447"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#f0a60a",border:"4px solid white"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"red"}}></div>
                      </div>
                    </div>  
                </div>) : ("")}
                {bmiSituation === "Şişman" ? (
                 <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white"}}>Değerlendirme:{" "+bmiSituation}</div>
                    <div style={{maxWidth:"400px",textAlign:"center",marginTop:"20px",fontSize:"20px",fontWeight:"500",color:"white",display:"flex",flexDirection:"column"}}>
                      <div>Önerilen Beslenme Biçimi</div>
                      <div style={{marginTop:"10px"}}>
                        Uzun vadeli sağlık hedeflerinize ulaşmak için bir sağlık uzmanından yardım alın.
                        Dengeli bir diyetle birlikte düzenli egzersiz programı uygulayın.
                        Kalori alımını azaltın ve porsiyonları kontrol altında tutun.
                        Sağlıklı yaşam tarzı değişikliklerini sürdürmek için destek gruplarına veya bir beslenme uzmanına katılın.
                      </div>
                      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <div style={{width:"100px",height:"30px",backgroundColor:"yellow"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#2bc447"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"#f0a60a"}}></div>
                        <div style={{width:"100px",height:"30px",backgroundColor:"red",border:"4px solid white"}}></div>
                      </div>
                    </div>  
                </div>) : ("")}  
               </div>
               <StyledButton onClick={()=>{
                localStorage.clear()
                navigate(-1)
               }}>
                  Geri Dön
               </StyledButton>
            </div>
        )}
        
    </div>
  )
}

export default Result