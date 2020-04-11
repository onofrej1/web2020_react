import React from 'react'
import Layout from "../components/Layout";
import Typography from '@material-ui/core/Typography';
import Form from "../components/Form/Form";
import Text from "../components/Form/Text";
import Date from "../components/Form/Date";
import Slider from "../components/Form/Slider";

export default () => {
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
    ];

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Layout>
                <Typography variant="h1" component="h2" gutterBottom>
                    h1. Heading
                </Typography>
                <p>first page</p>

                <Form onSubmit={onSubmit}
                      fields={fields}
                      formName="registration"/>
            </Layout>
        </div>
    )

}
