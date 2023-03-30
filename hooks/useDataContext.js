import React, { useContext } from 'react';
import { ContextApi } from '../contexts/ContextProvider';

const useDataContext = () => {
  return useContext(ContextApi);
};

export default useDataContext;
