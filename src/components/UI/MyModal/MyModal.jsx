import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, resetItem}) => {

    const rootClasses = [cl.overlay];
    if (visible !== 0) {
        rootClasses.push(cl.active)
    }

    // if(!visible) return (
    //     <div className={rootClasses.join(' ')} onClick={() => {
    //         setVisible(0)
    //         resetItem()
    //     }}>
    //         <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
    //             {children}
    //         </div>
    //     </div>
    // )

    return (
        <div className={rootClasses.join(' ')} onClick={() => {
            setVisible(0)
            resetItem()
        }}>
            <div className={cl.popup}>
                {/*<h2>Here i am</h2>*/}
                {/*<a className="close" href="#">значок</a>*/}
                <div className={''} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;