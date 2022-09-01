import React from 'react';
import cl from "./ItemList.module.css";

const ItemList = ({children}) => {
    return (
        <div className={`p-2 mx-3 rounded-5 mt-2 ${cl.itemList}`}>
            {children}
        </div>
    );
};

export default ItemList;