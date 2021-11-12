import './App.css';
import SplashPage from './pages/SplashPage';
import Header from './pages/Header';
import MyNav from './pages/MyNav';
import MyFooter from './Components/Footer';
import Projects from './pages/Projects';
import Social from './pages/Social';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
    return (
        <div className='Container container-fluid bg-light'>
            <Router>
                <Header />
                <MyNav />
                <Switch>
                    <Route exact path='/Projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/Social'>
                        <Social />
                    </Route>
                    <Route path={["/", '*']}>
                        <SplashPage />
                    </Route>
                </Switch>
                <MyFooter />
            </Router>
        </div>
    );
}

export default App;
