
import {Formik, Form} from "formik" ;
import { Button } from "../button";
import { Login_form_group } from "../login_form_group";
import './styles.css'

export const Register = ({initialValues,onSubmit,validationSchema}) =>{
    return (
        <div>
        <h1>Register</h1>
          <Formik
            initialValues={initialValues}
            onSubmit ={onSubmit}
            validationSchema = {validationSchema}
          >
            <Form className="login-form">
                <Login_form_group name="email" placeholder="Email" component="span" ></Login_form_group>
                <Login_form_group name="password" placeholder="Senha" component="span" type="password" ></Login_form_group>
                <Login_form_group name="confirmPassword" placeholder="Confirme sua senha" component="span" type="password" ></Login_form_group>
                <Button type="Register"></Button>
            </Form>
    
          </Formik>
        </div>
    )
    
}