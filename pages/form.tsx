import React from 'react'
import Form from "../components/Form/Form";
import Text from "../components/Form/Text";
import Select from "../components/Form/Select";
import Date from "../components/Form/Date";
import RadioGroup from "../components/Form/RadioGroup";
import Time from "../components/Form/Time";
import Checkbox from "../components/Form/Checkbox";
import Slider from "../components/Form/Slider";
import Switch from "../components/Form/Switch";

export default () => {
    const onSubmit = (values) => {
        console.log('submited data');
        console.log(values);
    };

    const fields = [
        {
            Component: Text,
            label: 'Username',
            name: 'username',
            value: 'meno',
            /* rules: {
                required: true,
            },*/
        },
        {
            Component: Date,
            label: 'Datum',
            name: 'datum',
            value: '2021-05-21'
        },
        {
            Component: Slider,
            label: 'Slider',
            name: 'slider',
            value: 50,
            max: 70,
        },
        {
            Component: Time,
            label: 'Time',
            name: 'time1',
            value: '18:25'
        },
        {
            Component: Text,
            type: 'text',
            label: 'Password',
            name: 'password',
        },
        {
            Component: Checkbox,
            label: 'Confirm',
            name: 'confirm',
            value: true,
        },
        {
            Component: Switch,
            label: 'Switch',
            name: 'switch',
            value: true,
        },
        {
            Component: Select,
            label: 'Select city',
            name: 'city',
            multiple: true,
            value: ['second'],
            options: [
                {text: 'prvy', value: 'first'},
                {text: 'druy', value: 'second'},
                {text: 'treti', value: 'treti'},
            ]
        },
        {
            Component: RadioGroup,
            label: 'Select group',
            name: 'group1',
            value: 'second',
            options: [
                {text: 'prvy', value: 'first'},
                {text: 'druy', value: 'second'},
                {text: 'treti', value: 'treti'},
            ]
        }
    ];

    return (
        <div>
            <h2>Form</h2>
            <Form onSubmit={onSubmit}
                  fields={fields}
                  formName="registration"/>
        </div>
    )
}

