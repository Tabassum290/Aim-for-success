import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Page/Loading';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
return <Loading/>;
    }
if(user && user?.email){
    return children;
}
    return (
       <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRout;