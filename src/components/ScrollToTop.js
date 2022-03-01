import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); 
    // scroll to 0,0 each time pathname is changed OR changes state

    return null;
}

export default ScrollToTop;


