import './App.css';
import router from "../src/routes/routes";
import { RouterProvider } from 'react-router-dom';
function App() {
  
  return <RouterProvider router={router}/>
}

export default App;
