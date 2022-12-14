import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return 'Loading now'
    } if (user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;