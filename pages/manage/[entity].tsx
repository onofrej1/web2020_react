import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import Table from '../../components/Table/Table';
import useSWR from 'swr';
import Resources from "../../Resources";
import Form from "../../components/Form/Form";
import React from "react";
import {Button} from "@material-ui/core";
import Select from "../../components/Form/Select";
import Text from "../../components/Form/Text";
var Loader = require('react-loader');

const Entity = () => {
    const router = useRouter();
    const entityName = router.query.entity as string;
    console.log(entityName);
    const [showForm, setShowForm] = React.useState(false);
    const [showLoader, setShowLoader] = React.useState(false);

    const fetcher = (url) => {
        setShowLoader(true);
        return fetch(url).then(r => {
            setShowLoader(false);
            return r.json();
        });
    };

    const resource = Resources[entityName] || Resources.pages;
    console.warn(resource);

    let list = [{id: 'id', label: 'Id'}];

    list = list.concat(resource.list.map(r => {
        const obj: any = {};
        obj.id = r.field;
        obj.label = r.label;
        return obj;
    }));
    console.warn(list);

    let form = resource.form.map(r => {
        let obj: any = {...r};
        obj.Component = {
            'text': Text,
            'select': Select,
        }[r.type] || Text;

        return obj;
    });

    const apiUrl = 'http://localhost:3001/';
    const {data = [], error} = useSWR(apiUrl + entityName, fetcher);
    console.log(data);

    const edit = (row) => {
        console.log(row);
        setShowForm(true);
    }

    const cancel = (row) => {
        console.log('cancel');
        setShowForm(false);
    }

    const onSubmit = (data) => {
        console.log(data);
        setShowForm(false);
    }

    const buttons = [
        <Button variant="contained" color="primary" onClick={onSubmit}>Save</Button>,
        <Button variant="contained" color="secondary" onClick={cancel}>Cancel</Button>,
    ];

    return (
        <Layout>
            <h1>{router.query.entity}</h1>
            <p>This is the blog post content.</p>
            {showForm ?
                <Form
                    onSubmit={onSubmit}
                    fields={form}
                    buttons={buttons}
                    formName="entity-form"/> :
                <Loader loaded={!showLoader}>
                <Table
                    headCells={list}
                    rows={data}
                    edit={edit}/>
                </Loader>
            }

        </Layout>
    );
};

export default Entity;