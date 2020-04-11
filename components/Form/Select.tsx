import React, {useCallback, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, Select as MuiSelect, InputLabel, MenuItem} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    /* selectEmpty: {
        marginTop: theme.spacing(2),
    }, */
}));

function Select({ onChange, label, value: defaultValue, options, ...rest }) {
    const [value, setValue] = useState()
    const classes = useStyles();

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }, [setValue, onChange])

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                value={value || []}
                onChange={handleChange}
                {...rest}
            >
                {options.map(option => <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>)}
            </MuiSelect>
        </FormControl>
    )
}

export default Select;