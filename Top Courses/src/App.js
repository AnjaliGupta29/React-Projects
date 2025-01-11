import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData } from './data'; 
import { data } from './data';
import Spinner from './components/Spinner';

function App() {
  const[loading, setLoading] = useState(true);
  const[likeCourses, setLikeCourses] = useState([]);
  const[catagory, setCatagory] = useState(filterData[0].title);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  
    }, 2000); 
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>

      <div>
      <NavBar />
      </div>

      <div>
      <Filter 
      filterData={filterData}
      catagory = {catagory}
      setCatagory = {setCatagory}
       />
      </div>

      <div className=' max-w-[1500px] flex flex-wrap justify-center itmes-center min-h-[50vh] pl-40'>
        {
          loading ? <Spinner /> : <Cards
          
          data={data}
          likeCourses = {likeCourses}
          setLikeCourses = {setLikeCourses}
          catagory = {catagory} />
        }
      </div>
    </div>
  );
}

export default App;
