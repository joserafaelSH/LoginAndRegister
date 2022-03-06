import * as yup from "yup";
import './App.css';
import Axios from "axios" ;
import { Component } from "react";
import { Login } from "./components/login";
import { Register } from "./components/register";

class App extends Component {

  handleClickLogin = (values) => {
    Axios.post("http://localhost:3003/login",{email:values.email, password:values.password}).
    then((response)=>{
      console.log(response);
      if(response.data.status){
        alert("Usario logado, seu registro consta na base de dados");
      
      }else{
        alert("Senha ou login invalido");
      }
    })
  };

  handleClickRegister = (values) => {
    Axios.post("http://localhost:3003/register", {email:values.email, password:values.password})
    .then((response) => {
      console.log(response);
      if(response.data.status){
        alert("Usario registrado com sucesso");
      }else{
        alert("Usuario ja consta na base de dados");
      }
    })
  };

  render(){

    const validationLogin =  yup.object().shape({
      email: yup.string().email("Email invalido").required(),
      password: yup.string().required().min(8,"A senha deve ter ao menos 8 caracteres"),
    })
  
    const validationRegister = yup.object().shape({
      email: yup.string().email("Email invalido").required(),
      password: yup.string().required().min(8,"A senha deve ter ao menos 8 caracteres"),
      confirmPassword: yup.string().oneOf([yup.ref("password"),null], "As senhas nao sao iguais")
    })
    return (
      <div className="container">
        <Login initialValues={{}}
            onSubmit ={this.handleClickLogin}
            validationSchema = {validationLogin} >
        </Login>
  
        <Register initialValues={{ }}
            onSubmit ={this.handleClickRegister}
            validationSchema = {validationRegister}>
        </Register>
        
      </div>
    );
  }
  
}

export default App;
