import './styles.css'
import {Field, ErrorMessage} from "formik" ;

export const Login_form_group =({name,placeholder,component,type})=>{
    return(
        <div className="login-form-group"> 
            <Field name={name} clasName ="form-field" placeholder={placeholder} type={type}></Field>
            <ErrorMessage component={component} name={name} className="form-error"></ErrorMessage>
        </div>
    )
}