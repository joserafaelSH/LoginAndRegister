
import {Formik, Form} from "formik" ;
import { Button } from "../button";
import { Login_form_group } from "../login_form_group";

import './styles.css'
export const Login = ({initialValues,onSubmit,validationSchema}) =>{
    return (
        <div>
        <h1>Login</h1>
          <Formik
            initialValues={initialValues}
            onSubmit ={onSubmit}
            validationSchema = {validationSchema}
          >
            <Form className="login-form">
                <Login_form_group name="email" placeholder="Email" component="span " ></Login_form_group>
                <Login_form_group name="password" placeholder="Senha" component="span" type="password" ></Login_form_group>
                <Button type="Login"></Button>
            </Form>
    
          </Formik>
        </div>
    )
    
}