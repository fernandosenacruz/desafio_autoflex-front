import { createContext, useState } from 'react';

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [feedstock, setFeedstock] = useState({});

  return (
    <Context.Provider
      value={ { product, setProduct, feedstock, setFeedstock }}
      >
        { children }
      </Context.Provider>
  );
}

export default ContextProvider;
