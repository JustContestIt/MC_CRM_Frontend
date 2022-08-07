import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, setItem}) => {

    const rootClasses = [cl.myModal];
    if (visible !== 0) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {
            setVisible(0)
            setItem.setNewItem(setItem.newItemExample)
        }}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;