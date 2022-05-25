import {
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode
} from 'react';

type Props = {
  children?: ReactNode
}

type ProductType = {
  code: string;
  name: string;
  price: number;
}

type FeedstockType = {
  code: string;
  name: string;
  quantity: number;
}

type PropsProductType = {
  productState: ProductType;
  productSetState: Dispatch<SetStateAction<ProductType>>
}

type PropsFeedstockType = {
  feedstockState: FeedstockType;
  feedstockSetState: Dispatch<SetStateAction<FeedstockType>>
}

const DEFAULT_VALUE = {
  productState: {
    code: '',
    name: '',
    price: 0,
  },
  feedstockState: {
    code: '',
    name: '',
    quantity: 0,
  },
  productSetState: () => {},
  feedstockSetState: () => {}
}

export const Context = createContext<PropsProductType | PropsFeedstockType>(DEFAULT_VALUE);

const ContextProvider: FC = ({ children }: Props) => {
  const [productState, productSetState] = useState(DEFAULT_VALUE.productState);
  const [feedstockState, feedstockSetState] = useState(DEFAULT_VALUE.feedstockState);

  return (
    <Context.Provider
      value={{
        productState,
        productSetState,
        feedstockState,
        feedstockSetState
      }}
      >
        { children }
      </Context.Provider>
  );
}

export default ContextProvider;
