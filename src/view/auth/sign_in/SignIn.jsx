import { FaEnvelope, FaLock } from "react-icons/fa";
import styles from "../../../assets/styles/auth/Auth.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      {/* Left (Form, White) */}
      <div className={`${styles.left} ${styles.signinLeft}`}>
      <h1 style={{ color: "#f4a300" }}>Sign In Your Account</h1>

        <form className={styles.form}>
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
          <button type="button" className={styles.forgotBtn}>Forgot Password?</button>
          <button type="submit" className={styles.signInSubmit}>SIGN IN</button>
          
        </form>
      </div>

      {/* Right (Info, Dark Blue) */}
      <div className={`${styles.right} ${styles.signinRight}`}>
        <h1>Hello Friend!</h1>
        <p>Enter your details and start your journey with us</p>
        <button className={styles.signinSwitchBtn}>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignIn;
