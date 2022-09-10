const ItemList = ({children}) => {
    return (
        <div className={`p-2 mx-3 rounded-5 mt-2`}>
            {children}
        </div>
    );
};

export default ItemList;