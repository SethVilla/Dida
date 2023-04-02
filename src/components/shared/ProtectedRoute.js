import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

export const ProtectedRoute = ({children}) => {
  const {username} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // if no token user.js is not logged in navigate to log in
    if (!username) {
      navigate('/login');
    }
  }, [username]);
  return children;
};
