import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Resources from "../Resources";
import TocIcon from '@material-ui/icons/Toc';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {FolderShared} from "@material-ui/icons";
import Link from 'next/link'
import {Avatar, ListItemAvatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 250,
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: 'black',
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    const entities = Object.keys(Resources);

    const getIcon = (resource) => {
        // return <TocIcon />;
        const Icon = {
            'Toc': TocIcon,
            'ListItem': InboxIcon,
            'AcountCircle': AccountCircleIcon
        }[resource.icon] || FolderShared;

        return <Icon />;
    }

    const getLink = (resource, entity) => {
        return <Link href={'/manage/'+entity}>
            <a style={{ textDecoration: 'none', color: 'black' }}>
              {resource.title}
            </a>
        </Link>
    };

    const getText = (resource) => {
        return 'resource info';
    };

    return (
        <div className={classes.root}>
            <List component="nav">
                {entities.map(entity => {
                    const resource = Resources[entity];

                    return (
                        <ListItem button key={entity}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    {getIcon(resource)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={getLink(resource, entity)} secondary={getText(resource)} />
                        </ListItem>
                    )
                })}

            </List>
            <Divider/>
        </div>
    );
}
