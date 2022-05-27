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

type AssociationType = {
  product: {
    code: string;
    name: string;
    price: number;
    feedstocks: [{
      id: number;
      productId: number;
      feedstockId: number;
      stock: number;
    }]
  }
  feedstock: {
    code: string;
    name: string;
    quantity: number;
    pudructs: [{
      id: number;
      productId: number;
      feedstockId: number;
      stock: number;
    }]
  }
}

type PropsProductType = {
  productState: ProductType;
  productSetState: Dispatch<SetStateAction<ProductType>>;
}

type PropsFeedstockType = {
  feedstockState: FeedstockType;
  feedstockSetState: Dispatch<SetStateAction<FeedstockType>>;
}

type PropsAssociation = {
  associateState: AssociationType;
  associateSetState: Dispatch<SetStateAction<AssociationType>>;
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
  associateState: {
    product: {
      code: '',
      name: '',
      price: 0,
      feedstocks: [{
        id: 0,
        productId: 0,
        feedstockId: 0,
        stock: 0,
      }]
  },
    feedstock: {
      code: '',
      name: '',
      quantity: 0,
      pudructs: [{
        id: 0,
        productId: 0,
        feedstockId: 0,
        stock: 0,
      }]
    }
  },
  productSetState: () => {},
  feedstockSetState: () => {},
  associateSetState: () => {}
}

export const Context = createContext<
  PropsProductType | PropsFeedstockType | PropsAssociation>(DEFAULT_VALUE);

const ContextProvider: FC = ({ children }: Props) => {
  const [productState, productSetState] = useState(DEFAULT_VALUE.productState);
  const [feedstockState, feedstockSetState] = useState(DEFAULT_VALUE.feedstockState);
  const [associateState, associateSetState] = useState(DEFAULT_VALUE.associateState);

  return (
    <Context.Provider
      value={{
        productState,
        feedstockState,
        associateState,
        productSetState,
        feedstockSetState,
        associateSetState,
      }}
      >
        { children }
      </Context.Provider>
  );
}

export default ContextProvider;
