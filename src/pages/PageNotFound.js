import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    let location = useLocation();

    <h2> Sorry, 404 Page {location.pathname} was not Found</h2>
}

export default PageNotFound;