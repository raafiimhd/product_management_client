import { FaEnvelope, FaKey, FaLock, FaUser } from "react-icons/fa";
import styles from "../../../assets/styles/auth/Auth.module.css";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.container}>
      {/* Left (Info, Dark Blue) */}
      <div className={`${styles.left} ${styles.signupLeft}`}>
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button 
        
        className={styles.signupSwitchBtn}
        type="button"
        onClick={()=>navigate("/signin")}
        >SIGN IN</button>
      </div>

      {/* Right (Form, White) */}
      <div className={`${styles.right} ${styles.signupRight}`}>
        <h1>Create Your Account</h1>
        <form className={styles.form}>
         <div style={{ position: 'relative', display: 'flex', alignItems: 'center', }}>
  <FaUser 
    style={{ 
      position: 'absolute', 
      left: '10px', 
      top: '38%', 
      transform: 'translateY(-50%)',  /* centers vertically */
      color: '#ccc', 
      fontSize: '14px' 
    }} 
  />
  <input
    type="text"
    placeholder="Name"
    style={{ 
      paddingLeft: '40px', 
      width: "400px", 
      height: '40px', 
      borderRadius: '4px', 
      backgroundColor: "#f5f5f5",
      border: '1px solid #ddd' ,
      color: "#555",
    }}
  />
</div>

           <div style={{ position: 'relative', display: 'flex', alignItems: 'center', }}>
  <FaEnvelope 
    style={{ 
      position: 'absolute', 
      left: '10px', 
      top: '38%', 
      transform: 'translateY(-50%)',  /* centers vertically */
      color: '#ccc', 
      fontSize: '18px' 
    }} 
  />
  <input
    type="email"
    placeholder="Email"
    style={{ 
      paddingLeft: '40px', 
      width: '100%', 
      height: '40px', 
      color: "#555",
      backgroundColor: "#f5f5f5",
      borderRadius: '4px', 
      border: '1px solid #ddd' 
    }}
  />
</div>

<div style={{ position: 'relative', display: 'flex', alignItems: 'center', }}>
  <FaLock
    style={{ 
      position: 'absolute', 
      left: '10px', 
      top: '38%', 
      transform: 'translateY(-50%)',  /* centers vertically */
      color: '#ccc', 
      fontSize: '18px' 
    }} 
  />
  <input
    type="password"
    placeholder="Password"
    style={{ 
      paddingLeft: '40px', 
      backgroundColor: "#f5f5f5",
      width: '100%', 
      height: '40px', 
      borderRadius: '4px', 
      border: '1px solid #ddd',
      color: "#555", 
    }}
  />
</div>
          <button type="submit" className={styles.signUpBtn}>SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
