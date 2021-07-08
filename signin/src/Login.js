import React from  'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword, 
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return(
        <section className='login'>
            <div className="loginContainer">
                <label>Username</label>
                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>  
                <label>password</label>
                <input
                type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <i className="fa fa-eye password-icon"></i>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account? 
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>

                    ):(
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>have an account?
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>

                    )}
                </div>
            </div>

        </section>
    );
};
export default Login;