import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal];
    if (visible !== 0) {
        rootClasses.push(cl.active)
    }

    return (
        // <div className={rootClasses.join(' ')} onClick={() => {
        //     setVisible(0)
        // }}>

            <div className="modal fade" id="todoFormExample" tabIndex="-1" aria-labelledby="todoFormModal"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="todoFormModal">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>);
            {/*<div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>*/}
            {/*    {children}*/}
            {/*</div>*/}
        {/*// </div>*/}

};

export default MyModal;