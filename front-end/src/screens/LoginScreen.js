import React from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native"

const LoginScreen = () => {
    return (
        <View>
            <View>
                <TextInput placeholder="Enter email" />
                <TextInput placeholder="Enter password" secureTextEntry />

                <Button title="Login" />

                <View>
                    <Text>Don't have an a account?</Text>
                    <TouchableOpacity>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;