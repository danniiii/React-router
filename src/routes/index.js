import Home from '../views/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FourCeroFour from '../views/404';


export default function Routes() {
    
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route>
                    <FourCeroFour />
                </Route>
            </Switch>

        </Router>

    );
}