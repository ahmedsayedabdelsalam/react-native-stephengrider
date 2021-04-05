import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                submitButtonText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
});

export default SignupScreen;