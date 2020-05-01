import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Film} from './pages/Film'
import {MovieState} from './context/movieState'

function App() {
    return (
        <MovieState>
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/film/:name" component={Film}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </MovieState>
    );
}

export default App;
