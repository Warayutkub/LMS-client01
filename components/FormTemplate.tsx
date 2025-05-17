import React from "react"
import { Form } from "./ui/form"

type FormType = {
    // action : 
}

const FormTemplate = ({children} : {children : React.ReactNode}) => {
    return (
            <form action="">
                {children}
            </form>
    )
}
export default FormTemplate