import React from "react";
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from "react-native"

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} placeholder="Enter email" />
                <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />

                <Button title="Login" />

                <View style={{flexDirection:'row', marginTop: 20}}>
                    <Text>Don't have an a account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.link} >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper:{
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
});

export default LoginScreen;