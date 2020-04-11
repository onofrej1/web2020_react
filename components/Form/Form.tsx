import React, {useState, useCallback} from 'react'
import Field from "./Field";
import Button from "@material-ui/core/Button";

function Form({fields, onSubmit, formName = 'formName', method = 'post'}) {
    const [state, setState] = useState({});

    const updateValue = useCallback((name) => {
        // console.log('update value '+name);
        return (value) => {
            console.log('update value:' + name +':'+value);
            setState({
                ...state,
                [name]: value,
            })
        }
    }, [setState, state]);


    const submit = (e) => {
        e.preventDefault();
        console.log(state);
        onSubmit(state);
    };
    console.log(state);

    return (
        <div className="form">
            <form onSubmit={submit}>
                {fields.map((e) => {
                    return <Field {...e} onChange={updateValue(e.name)} key={e.name} />
                })}
                <p>
                    <Button variant="contained" color="primary" type='submit' value='save'>Save</Button>
                </p>
            </form>
            <p>
                <code>{JSON.stringify(state, null, 4)}</code>
            </p>
        </div>
    )
}

export default Form;