import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { RouterProvider } from 'react-router-dom';

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = "REPLACE ME";

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
