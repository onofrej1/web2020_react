import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {TextField} from "@material-ui/core";


export default function App() {
    const {register, handleSubmit, watch, errors} = useForm()
    const [formData, setFormData] = useState();
    const onSubmit = data => {
        console.log(data)
        setFormData(data);
    }

    const PrintJson = (data) => (<div><pre>{
        JSON.stringify(data, null, 2) }</pre></div>);

    console.log(watch('example')) // watch input value by passing the name of it

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name="meno" id="standard-basic" label="Standard" inputRef={register} />
            <input name="exampleRequired" ref={register({required: true})}/>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
            {PrintJson(formData)}
        </div>
    )
}