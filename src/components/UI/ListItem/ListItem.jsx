import React from 'react';

const ListItem = ({children, styles}) => {

    // const [styles, setStyles] = useState('')

    // useEffect(() => {
    //     if (isActive) setStyles('active')
    //     else setStyles('')
    // }, [isActive])

    return (
        <li className={styles}>
            {children}
        </li>
    );
};

export default ListItem;