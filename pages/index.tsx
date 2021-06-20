import React from "react";
import Layout from "../components/layout";
import Head from 'next/head'
import Typography from "@material-ui/core/Typography";
import {Card, CardContent, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

interface Props {
    key: any,
    window?: () => Window;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function IndexPage(props: Props) {
    const classes = useStyles();
    return (
        <Layout maxWidth={1080}>
            <>
                <Head>
                    <title>ECESS: Home</title>
                </Head>
            </>
            <Typography>ECESS Website is in Development</Typography>
        </Layout>
    )
}