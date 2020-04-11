import {useCallback, useEffect, useState} from "react";
import {TextField} from "@material-ui/core";

function Time({onChange, value: defaultValue, ...rest}) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }, [setValue, onChange])

    return (
        <TextField
            type="time"
            value={value}
            onChange={handleChange}
            inputProps={{
                step: 300, // 5 min
            }}
        />
    )
}

export default Time;