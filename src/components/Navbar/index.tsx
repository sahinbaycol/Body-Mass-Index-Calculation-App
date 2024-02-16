import  { CSSProperties } from 'react'

const Navbar = () => {

    const styles={
        NavbarStyle:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            padding:"20px 0",
            backgroundColor:"#414a57",
            color:"white",
            fontSize:"26px",
            fontWeight:"500"
        } as CSSProperties
    }

  return (
    <div style={styles.NavbarStyle}>Body Mass Index Calculation</div>
  )
}

export default Navbar