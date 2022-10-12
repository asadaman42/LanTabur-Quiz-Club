import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main'
import Homepage from './components/Homepage/Homepage';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Homepage></Homepage>
        },
        {
          path: '/quiz/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
    
        }
      ]
    },
    
    {
      path: '/*/', element: <div>This address is unavailable</div>
    }

  ])

  return (
    <div className="App">
      <RouterProvider router = {router} ></RouterProvider>
    </div>
  );
}

export default App;
