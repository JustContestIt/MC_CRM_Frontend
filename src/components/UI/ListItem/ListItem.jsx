import React, {useEffect, useState} from 'react';

const ListItem = ({children, isActive}) => {

    const [styles, setStyles] = useState('')

    useEffect(() => {
        if (isActive) setStyles('active')
        else setStyles('')
    }, [isActive])

    return (
        <li className={styles}>
            {children}
        </li>
    );
};

export default ListItem;