import React from 'react';
import Card from './Card';

const Cards = (props) => {
  let data = props.data;
  const likeCourses = props.likeCourses;
  const setLikeCourses = props.setLikeCourses;
  let catagory = props.catagory;
  // const setCatagory = props.setCatagory;

  function getData() {
    if(catagory === "All"){
      let allData = [];

    Object.values(data).forEach(array => {
      array.forEach(coursesData => {
        allData.push(coursesData);
      });
    });

    
    return allData;
    }
    else{
      return data[catagory];
    }

    
  }

  return (
    <div className='flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {getData().map((dataItem) => (
        <Card key={dataItem.id} course={dataItem} likeCourses={likeCourses} 
          setLikeCourses={setLikeCourses} /> 
      ))}
    </div>
  );
};

export default Cards;

// flex flex-wrap justify-center gap-4 mb-4 pl-64