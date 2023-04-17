import React ,{useState,useEffect} from 'react';
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet} from 'react-native';

function RegisterPage({ navigation }) {
    const [studentID,setStudentID]=useState('');
    const [name,setName]=useState('');
    const registerButtonOnPress = () => {
        if(name === ''){
            alert("姓名不得為空")
            return;
        }else if(studentID === ''){
            alert("學號不得為空")
            return;
        }
        else{
            navigation.navigate('使用者資訊', {userData:{name, studentID}});
        }
    }
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <View style={styles.block}>
                    <View style={styles.inputArea}>
                        <Text style = {styles.text}>學號</Text>
                        <TextInput
                            style = {styles.textInput}
                            placeholder='請輸入學號'
                            keyboardType='numeric'
                            textAlign="center"
                            value={studentID}
                            onChangeText={(text) => {
                                setStudentID(text)
                            }}
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Text style = {styles.text}>姓名</Text>
                        <TextInput
                            style = {styles.textInput}
                            placeholder='請輸入姓名'
                            textAlign="center"
                            value= {name}
                            onChangeText={(text) => {
                                setName(text)
                            }}
                        />
                    </View>
                </View>
                <View style={styles.block}>
                    <Button
                        title='註冊'
                        onPress={registerButtonOnPress}
                    />
                </View>
            </View>
        </SafeAreaView> 
    );
}
export default RegisterPage;

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'column', 
        marginTop: 150
    },
    bottom: {
        height: 40
    },
    block: {
        width: "100%",
        marginTop: 10
    },
    textInput: {
        height: 24,
        width: 150,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: "5%",
        marginTop: 10
    },
    text:{
        marginRight: 5,
        fontSize: 16,
        marginTop: 10
    },
    inputArea:{
        flexDirection: 'row'
    },
});