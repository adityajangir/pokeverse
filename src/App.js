import './App.css';
import Pokemonspage from './components/pokemonspage';
import Pokemonpage from './components/pokemonpage';
import Login from './components/login';
import Signup from './components/signup';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/protectedroute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/auth/:username',
      element: <ProtectedRoute><Pokemonspage></Pokemonspage> </ProtectedRoute>  
    },
    {
      path: '/auth/:username/:pokemonname',
      element: <ProtectedRoute><Pokemonpage></Pokemonpage></ProtectedRoute> 
    }
  ])
  return (
    <>
      <div className="w-screen h-screen bg-red place-content-center">
        <RouterProvider router = {router}>
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
