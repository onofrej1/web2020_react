import {useCallback, useEffect, useState} from "react";
import {TextField} from "@material-ui/core";

function Date({onChange, value: defaultValue, ...rest}) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        onChange(defaultValue);
    }, [defaultValue]);

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }, [setValue, onChange])

    return (
        <TextField
            type="date"
            value={value}
            onChange={handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            {...rest}
        />
    )
}

export default Date;