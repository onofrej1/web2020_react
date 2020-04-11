import {useCallback, useEffect, useState} from "react";
import {Slider as MuiSlider} from '@material-ui/core';

function Slider ({ onChange, value: defaultValue, ...rest }) {
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(defaultValue);
        console.log('on change');
        onChange(defaultValue);
    }, [defaultValue]);

    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    }, [setValue, onChange]);

    return (
        <MuiSlider value={value} onChange={handleChange} {...rest} />
    )
}

export default Slider;