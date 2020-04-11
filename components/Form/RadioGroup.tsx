import React, {useCallback, useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {
    FormLabel,
    FormControl,
    Radio as MuiRadio,
    RadioGroup as MuiRadioGroup,
    FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    /* selectEmpty: {
        marginTop: theme.spacing(2),
    }, */
}));

function RadioGroup({onChange, label, name, value: defaultValue, options, ...rest}) {
    const [value, setValue] = useState()
    const classes = useStyles();

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }, [setValue, onChange])

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <MuiRadioGroup name={name} value={value || defaultValue} onChange={handleChange}>
                {options.map(option => <FormControlLabel key={option.value} value={option.value} control={<MuiRadio />} label={option.text}/>)}
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup;