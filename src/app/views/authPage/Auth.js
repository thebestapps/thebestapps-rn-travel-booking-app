import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet  } from 'react-native';
import { logIn } from '../../redux/actions/authActions';

import TextInput2 from '../../components/form-elements/textInput/TextInput2';
import Button3 from "../../components/form-elements/button/Button3";
import global from '../../../global';

const Data = {UserName: "" , Password: "", Product: 'Expense'};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  const [formData, setFormData] = useState(Data);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log(isAuthenticated)
  },[isAuthenticated])

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value})
  }

  const onSubmitHandler = () => {
    console.log(formData)
    dispatch(logIn(formData, setLoading));
  }

  return (
    <View style={style.auth}>
      <TextInput2
        name={"UserName"}
        placeholder={'Email'}
        value={formData.UserName}
        onChangeText={(e) => onChangeHandler('UserName', e)}
      />
      <TextInput2
        name={"Password"}
        placeholder={'Password'}
        value={formData.Password}
        onChangeText={(e) =>onChangeHandler('Password', e)}
      />
      <Button3 
        title="Login" 
        onPress={onSubmitHandler} 
        color="black"
        />
    </View>
  )
}

const style = StyleSheet.create({
    auth: {
      ...global.flexColCenterCenter,
      height: "100%", 
      backgroundColor: "#fff", 
      padding: 20,
    }
})

export default Auth;