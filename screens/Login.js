import React from 'react'
import styled from 'styled-components/native'

import { BLACK_COLOR } from "../colors";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  color: white;
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
`;
const Btn = styled.TouchableOpacity``;
const BtnTxt = styled.Text`
  font-size: 16px;
  color: white;
`;
const Login = ({ navigation: { navigate } }) => {
    return (
        <Container>
            <Text>Don't you have an account?</Text>
            <Btn onPress={() => navigate("Join")}>
                <BtnText>Join</BtnText>
            </Btn>
        </Container>
    )
}
export default Login