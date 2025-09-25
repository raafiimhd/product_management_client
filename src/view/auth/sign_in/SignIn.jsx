import styles from "../../../assets/styles/auth/Auth.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      {/* Left (Form, White) */}
      <div className={`${styles.left} ${styles.signinLeft}`}>
        <h1>Sign In Your Account</h1>
        <form className={styles.form}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={styles.signInSubmit}>SIGN IN</button>
          <button type="button" className={styles.forgotBtn}>Forgot Password?</button>
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
