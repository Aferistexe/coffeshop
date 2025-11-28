

import  { createContext, useContext ,useState} from 'react'


const BasketContext = createContext();
export function BasketProvider({ children }) {
const [basket,setbasket] = useState([])

const addToBasket = (product) => {
setbasket(oldBasket => {
    const fintOldBasket = oldBasket.find(item => item.id === product.id)


    if (fintOldBasket){
        return oldBasket.map(item => 
            item.id === product.id
            ? {...item,quantity:item.quantity + 1}
            : item
        );

    }else{
        return [...oldBasket,{...product,quantity: 1}];
    }
});
};
const minusBasket = (product) => {
setbasket(oldBasket => {
    const fintOldBasket = oldBasket.find(item => item.id === product.id)


        if (fintOldBasket){
            return oldBasket.map(item => 
                item.id === product.id
                ? {...item,quantity:item.quantity - 1}
                : item
            ).filter(item => item.quantity>0);
    
        }
   
    
});

};
const plusBasket = (product) => {
setbasket(oldBasket => {
    const fintOldBasket = oldBasket.find(item => item.id === product.id)


        if (fintOldBasket){
            return oldBasket.map(item => 
                item.id === product.id
                ? {...item,quantity:item.quantity + 1}
                : item
            ).filter(item => item.quantity>0);
    
        }
   
    
});

};

const totalItems = basket.reduce((sum,item) => sum + item.quantity,0)
const totalPrice = basket.reduce((sum,item)=> sum + (item.quantity * item.price),0)

  return (
    <BasketContext.Provider value={{
        basket,
        addToBasket,
        totalItems,
        totalPrice,
        minusBasket,
        plusBasket,
        setbasket
    }}>
        {children} 
        

    </BasketContext.Provider>
  )
}

export const useBasket = () => {
    return useContext(BasketContext)
};
