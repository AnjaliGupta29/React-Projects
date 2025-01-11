import React from 'react';

const Filter = (props) => {
  let filterData = props.filterData;
  let catagory = props.catagory;
  let setCatagory = props.setCatagory

  function filterHandler(title){
    setCatagory(title)

  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((data) => {
          return (
            <button onClick={()=> filterHandler(data.title)}
              className='border-solid border-2 rounded bg-slate-50 shadow-2xl font-bold text-center p-2'
              key={data.id}>
              {data.title}
              
            </button>
          );
        })
      }
    </div>
  );
}

export default Filter;
