import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: auto;
    justify-content: center;
    align-items: center;
    background-color: #454545;
`

export const SubTitle = styled.Text`
    color: #ccc;
    font-weight: bold;
    font-size: 12;
    text-align: center;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 24;
    text-align: center;
    margin-bottom: 10px;
`

export const Logo = styled.Image`
    margin-top: -70px;
    width: 150px;
    height: 150px;
`

export const Inputs = styled.TextInput`
    margin-bottom: 10px;
    background-color: #eee;
    padding: 10px;
    width: 300px;
    border-radius: 4px;
`
export const ButtonView = styled.View`
    flex-direction: row;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    height: 42px;
    width: 145px;
    border-radius: 5px;
    background-color: #ac58aa;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const ButtonViewRegister = styled.View`
    justify-content: center;
    align-items: center;
`

export const ButtonRegisterOk = styled.TouchableOpacity`
    height: 42px;
    width: 300px;
    border-radius: 5px;
    background-color: #ac58aa;
    justify-content: center;
    align-items: center;
`

export const ErrorMessage = styled.Text`
    color: #fff;
    margin: 5px;
    padding: 5px;
    background-color: red;
    border-radius: 5px;
`