
import './component/CSSmag.css'
import { useEffect,useState } from 'react'

import Preloadingpage from "./Preloadingpage"


import DemoBook from './component/Mag';

function App() {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() =>{
    const fakeDataFetch = () =>{
  setTimeout(() => {
    setIsLoading(false);
  }, 7000);
    }
    fakeDataFetch();
  }, []) 
  return (
    <>{
      isLoading ? (<Preloadingpage/>) : (<DemoBook/>)
    }
    
    
    </>
  );
}

export default App;
