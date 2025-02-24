import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const PurchaseContext = createContext();


export const PurchaseProvider = ({children}) => {
    const [purchases, setPurchases] = useState([]);
    const addPurchase = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
    };
    const removePurchase = (purchaseId) => {
        setPurchases(purchases.filter(purchase => purchase.title !== purchaseId));
    };
    const removeAllPurchases = () => {
        setPurchases([]);
    }

    return (
        <PurchaseContext.Provider value={{purchases, addPurchase,removePurchase,removeAllPurchases}}>
            {children}
        </PurchaseContext.Provider>
    );
};
PurchaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};