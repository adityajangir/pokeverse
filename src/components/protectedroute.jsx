// src/components/ProtectedRoute.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// this is the parent component to protect the routes
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.authdetails.user);
  const navigate = useNavigate();

  useEffect(() => {
    // check if user is present in redux store and see if the person is loggedin
    if (!user || !user.loggedin) {
      navigate('/signup');
    }
  }, [user, navigate]);
  
  return user && user.loggedin ? children : null;
};

export default ProtectedRoute;
