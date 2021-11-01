import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {


    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Spinner animation="border" variant="secondary" />
    }
    return (
        <Route
            {...rest}
            render={props =>
                user.email ? (

                    children

                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
        // <Route
        //     {...rest}
        //     render={props =>
        //         user.email ? (
        //             <Component {...props} />
        //         ) : (
        //             <Redirect
        //                 to={{
        //                     pathname: "/Login",
        //                     state: { from: props.location }
        //                 }}
        //             />
        //         )
        //     }
        // />
    );
};

export default PrivateRoute;