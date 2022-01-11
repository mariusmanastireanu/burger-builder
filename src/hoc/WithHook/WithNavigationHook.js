import { useNavigate } from 'react-router-dom'

const withNavigationHook = (Component) => {
    return function WrappedComponent(props) {
        const navValue = useNavigate();
        return <Component {...props} nav={navValue} />;
    }
}

export default withNavigationHook;