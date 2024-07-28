/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id); // This should log the id from the URL

  return (
    <div>BlogDetails: {id}</div>
  );
}

export default BlogDetails;
