import React from 'react';
import Pagination from '@mui/material/Pagination';
import { setCurrentPage, setPageFrom, setPageTo } from '../../redux/reducers/mainReducer';
import { useDispatch, useSelector } from 'react-redux';

const PaginationPage = ()=>{
  const dispatch = useDispatch();
  const {currentPage} = useSelector((state)=>state.mainReducer);
  const dispatches = [setCurrentPage, setPageFrom, setPageTo];

  const handleChange = (_, value) => {
    dispatches.map((item)=>{
      dispatch(item(value));
    })
  };

  return (
      <Pagination
       count={19} 
       page={currentPage} 
       onChange={handleChange} 
       shape="rounded" 
      />
  )
}

export default PaginationPage;