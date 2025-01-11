import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likeCourses = [], setLikeCourses }) => {

  const { image, title, description } = course;

  //like button handler
  function ClickHandler() {
    if (likeCourses.includes(course.id)) {
      setLikeCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      setLikeCourses((prev) => [...prev, course.id]);
      toast.success("Like Added");
    }
  }

  return (

    <div className='w-[300px] rounded-md overflow-hidden border-solid border-2 bg-slate-50 shadow-2xl'>
      <div className='relative'>
        {
          image && image.url ? 
          <img src={image.url} alt={title} /> 
          : 
          <img src="default-image-url" alt="default" />}
      </div>

      <div className='w-[40px] h-[40px] bg-white rounded-full absolute grid-place-items-center'>
        <button onClick={ClickHandler}>
          {
            likeCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
          }
        </button>
      </div>

      <div className='p-4'>
        <h3>{title}</h3>
        <p>{
          description.length>100 ? (description.substr(0,100)) + "...":(description)
          }
        </p>
      </div>

    </div>
  );
};

export default Card;
