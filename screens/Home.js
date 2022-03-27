import React from 'react'
import styled from 'styled-components/native'
import { BLACK_COLOR } from "../colors";
import auth from '@react-native-firebase/auth'

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  color: white;
  padding: 60px 20px;
`
const Text = styled.Text``
const Btn = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
`
const BtnText = styled.Text`
    color: white;
    font-size: 16px;
`
const onSubmitEditing = async () => {
    await auth().signOut()
}
const Home = () => {
    return (
        <Container>
            <Text>Home</Text>
            <Btn onPress={onSubmitEditing}>
                <BtnText>Sign Out</BtnText>
            </Btn>
        </Container>
    )
}
export default Home