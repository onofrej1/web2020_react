import React, {useCallback, useEffect, useState} from "react";
import {Checkbox as MuiCheckbox, FormControlLabel, TextField} from "@material-ui/core";

function Checkbox ({ onChange, value: defaultValue, ...rest }) {
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
        onChange(defaultValue);
    }, [defaultValue]);

    const handleChange = useCallback((event) => {
        setValue(event.target.checked);
        onChange(event.target.checked);
    }, [setValue, onChange]);

    return (
        <FormControlLabel
            control={<MuiCheckbox checked={value} onChange={handleChange} name="checkedA" />}
            label="Secondary"
        />
    )
}

export default Checkbox;