import { useLocation } from 'react-router-dom'

const withLocationHook = (Component) => {
    return function WrappedComponent(props) {
        const location = useLocation();
        return <Component {...props} loc={location} />;
    }
}

export default withLocationHook;