import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, Route, useHistory } from 'react-router-dom';
import MainLayout from './layout/admin/MainLayout';
import  swal  from 'sweetalert';

function AdminPrivateRoute({...rest}) {

    const history = useHistory();
    const [Authenticated, setAthenticated] = useState (false);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then( res => {
            if(res.status === 200)
            {
                setAthenticated(true);
            }
            setLoading(false);
        }); 
        return () => {
            setAthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized", err.response.data.message, "warning");
            history.push('/');
        }
            return Promise.reject(err);
    });
    
    if(loading)
    {
        return <h1>Loading...</h1>
    }   
    
  return (
    
    <Route {...rest} 
        render = { ({props, location}) =>
            Authenticated ?
            (<MainLayout {...props} /> ) :
            ( <Redirect to= {{pathname: "/login", state: {from: location} }} /> )

        }
    />
  );
}

export default AdminPrivateRoute
