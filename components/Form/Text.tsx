import {useCallback, useEffect, useState} from "react";
import {TextField} from "@material-ui/core";

function Text ({ onChange, value: defaultValue, ...rest }) {
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(defaultValue);
        console.log('on change');
        onChange(defaultValue);
    }, [defaultValue]);

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }, [setValue, onChange]);

    return (
        <TextField onChange={handleChange} value={value} {...rest}/>
    )
}

export default Text;