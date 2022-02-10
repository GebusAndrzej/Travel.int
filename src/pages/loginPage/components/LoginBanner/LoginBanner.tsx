import React, { useState } from 'react'
import { ButtonsContainer, LoginButtons, LoginContainer } from './LoginBanner.styled'

const LoginBanner = (): JSX.Element => {
    const [state, setState] = useState(true); // true - register | false - login

    return (
        <LoginContainer>
            <ButtonsContainer>
                <LoginButtons active={state} variant="login" onClick={() => setState(true) }> Sign Up</LoginButtons>
                <LoginButtons active={!state} variant="register" onClick={() => setState(false) }>Log In</LoginButtons>
            </ButtonsContainer>
            asd
        </LoginContainer>
    )
}

export default LoginBanner
