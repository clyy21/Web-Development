import React from 'react';
import RegisterForm from '../user/RegisterForm'
import "../css/register.css"

class RegisterView extends React.Component{

    render(){
        return(
            <div className="register-page">
                <div className="register-container">
                    <div className="register-box">
                        <div className="register-content">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterView;
