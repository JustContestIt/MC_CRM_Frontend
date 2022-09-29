import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, resetItem}) => {

    const rootClasses = [cl.overlay];
    if (visible !== 0) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {
            setVisible(0)
            if (resetItem) resetItem()
        }}>
            <div className={cl.popup} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;