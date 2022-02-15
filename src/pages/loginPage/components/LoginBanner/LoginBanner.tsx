import React, { useState } from 'react'
import { ButtonsContainer, LoginButtons, LoginWrapper, LoginInput, LoginContainer, SubmitButton, ExternalLoginContainer, ExternalLoginButton } from './LoginBanner.styled'

const LoginBanner = (): JSX.Element => {
    const [state, setState] = useState(true); // true - register | false - login

    return (
        <>
            <LoginWrapper>
                <ButtonsContainer>
                    <LoginButtons active={state} variant="login" onClick={() => setState(true) }> Sign Up</LoginButtons>
                    <LoginButtons active={!state} variant="register" onClick={() => setState(false) }>Log In</LoginButtons>
                </ButtonsContainer>

                {state?
                <LoginContainer>
                    <LoginInput type="text" key="email_register" placeholder='Write your email or phone'></LoginInput>
                    <LoginInput type="password" key="password_register" placeholder='Create your password'></LoginInput>
                    <SubmitButton>Sign Up</SubmitButton>
                </LoginContainer>
                :
                <LoginContainer>
                    <LoginInput type="text" key="email_login" placeholder='Write your email or phone'></LoginInput>
                    <LoginInput type="password" key="password_login" placeholder='Write your password'></LoginInput>
                    <SubmitButton>Sign In</SubmitButton>
                </LoginContainer>
                }
            </LoginWrapper>
            <ExternalLoginContainer>
                <ExternalLoginButton variant="black">Google</ExternalLoginButton>
                <ExternalLoginButton variant="primary">Facebook</ExternalLoginButton>
            </ExternalLoginContainer>
        </>
    )
}

export default LoginBanner
