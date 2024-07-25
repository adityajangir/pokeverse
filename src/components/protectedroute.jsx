// src/components/ProtectedRoute.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.authdetails.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.loggedin) {
      navigate('/signup');
    }
  }, [user, navigate]);

  return user && user.loggedin ? children : null;
};

export default ProtectedRoute;
