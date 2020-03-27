import React from 'react';
import LoginForm from "../components/LoginReg/LoginForm";
import RegistrationForm from '../components/LoginReg/RegistrationForm';
import Grid from '@material-ui/core/Grid';


const LoginRegView = props => {
    return (
        <div className="formContainer">
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <RegistrationForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                     <LoginForm />
                </Grid>
            </Grid>
        </div>

    )
}

export default LoginRegView;
