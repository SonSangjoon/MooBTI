import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: '767px'})
    return isMobile ? children : null
}

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: '767px'})
    return isTablet ? children : null
}

const PC = ({ children }) => {
    const isPC = useMediaQuery({ minWidth: '767px'})
    return isPC? children : null
}


export { Mobile, Tablet, PC }
