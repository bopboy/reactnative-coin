import React, { useRef, useState } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, Alert } from 'react-native'
import { BLACK_COLOR } from "../colors"
import auth from '@react-native-firebase/auth'

const Container = styled.View`
    background-color: ${BLACK_COLOR};
    flex: 1;
    align-items: center;
    color: white;
    padding: 60px 20px;
`;
const Wrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`
const TextInput = styled.TextInput`
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    color: white;
    background-color: rgba(255,255,255,0.5);
`
const Btn = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const BtnText = styled.Text`
    color: white;
    font-size: 16px;
`
const Login = ({ navigation: { navigate } }) => {
  const passwordInput = useRef()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus()
  }
  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") return Alert.alert("Fill in the form")
    if (loading) return
    setLoading(true)
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("Write a stronger password")
        }
      }
    }
  }
  return (
    <Container>
      <TextInput
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        returnKeyType='next'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        onSubmitEditing={onSubmitEmailEditing}
        placeholderTextColor={"rgba(255,255,255,0.7)"}
      />
      <TextInput
        ref={passwordInput}
        placeholder='Password'
        value={password}
        secureTextEntry
        returnKeyType='done'
        onChangeText={text => setPassword(text)}
        onSubmitEditing={onSubmitPasswordEditing}
        placeholderTextColor={"rgba(255,255,255,0.7)"}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? <ActivityIndicator color="white" /> : (<BtnText>Submit</BtnText>)}
      </Btn>
      <Text>Don't you have an account?</Text>
      <Btn onPress={() => navigate("Join")}>
        <BtnText>Join</BtnText>
      </Btn>
    </Container>
  )
}
export default Login