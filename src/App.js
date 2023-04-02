import './App.css';
import {SignupForm} from './components/forms/SignupForm';
import {LoginForm} from './components/forms/LoginForm';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import {HomePage} from './components/homepage/HomePage';
import {HIWPage} from './components/howitworkspage/HIWPage';
import {ProtectedRoute} from './components/shared/ProtectedRoute';
import {ButtonAppBar} from './components/shared/AppBar';
import {ProfilePage} from './components/profilepage/Profile';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Box from '@mui/material/Box';
import HeaderImage from './assets/adrian-infernus-GLf7bAwCdYg-unsplash.jpg';
import {GoalPage} from './components/goalpage/GoalPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: Infinity,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ButtonAppBar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/how-it-works',
    element: (
      <>
        <ButtonAppBar />
        <HIWPage />
      </>
    ),
  },
  {
    path: '/profile',
    element: (
      <>
        <ButtonAppBar />
        <ProfilePage />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <ButtonAppBar />
        <SignupForm />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <ButtonAppBar />
        <LoginForm />
      </>
    ),
  },
  {
    path: '/goal/:goalId',
    element: (
      <ProtectedRoute>
        <ButtonAppBar />
        <GoalPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  const theme = createTheme(createTheme({
      palette: {
          primary: {
              main: "#551A8B",
          },
          secondary: {
              main: "#00FFFF",
          },
      },
  }));
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box
          sx={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
