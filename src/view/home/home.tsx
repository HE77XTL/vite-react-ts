import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from "antd";
import useSWR from 'swr';
import axios from "axios";


// @ts-ignore
const fetcher = () => axios({
    method: 'post',
    url: 'http://localhost:3001/cats',
    data: {
        he: 123
    },
}).then((res) => res.data);
const Home: React.FunctionComponent = () => {
    const { data, error } = useSWR("/cats", fetcher);
    return (
        <div>
            <div>home</div>
            <div>
                <Button type='primary'>ant button</Button>
            </div>
            <div>
                <Link to="/login">To Login</Link>
            </div>
            <div>
                data:
                {JSON.stringify(data)}
            </div>
            <div>
                err:
                {JSON.stringify(error)}
            </div>
        </div>
    )
};

export default Home;
