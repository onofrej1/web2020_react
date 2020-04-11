import {useCallback, useEffect, useState} from "react";
import {Switch as MuiSwitch} from "@material-ui/core";

function Text ({ onChange, value: defaultValue, ...rest }) {
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(defaultValue);
        onChange(defaultValue);
    }, [defaultValue]);

    const handleChange = useCallback((event) => {
        setValue(event.target.checked);
        onChange(event.target.checked);
    }, [setValue, onChange]);

    return (
        <MuiSwitch
            checked={value}
            onChange={handleChange}
            {...rest}
        />
    )
}

export default Text;