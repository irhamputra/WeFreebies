import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Switch, Route} from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// Import Routes
import Audio from "./routes/Audio";
import Colours from "./routes/Colours";
import Fonts from "./routes/Fonts";
import Graphics from "./routes/Graphics";
import Mockups from "./routes/Mockups";
import Photography from "./routes/Photography";
import Textures from "./routes/Textures";
import Tools from "./routes/Tools";
import Video from "./routes/Video";
import NotFound from "./routes/NotFound";

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route component={App} path="/" exact/>
            <Route component={Audio} path="/audio"/>
            <Route component={Colours} path="/colours"/>
            <Route component={Fonts} path="/fonts"/>
            <Route component={Graphics} path="/graphics"/>
            <Route component={Mockups} path="/mockups"/>
            <Route component={Photography} path="/photography"/>
            <Route component={Textures} path="/textures"/>
            <Route component={Tools} path="/tools"/>
            <Route component={Video} path="/video"/>
            <Route component={NotFound} path="*"/>
        </Switch>
    </HashRouter>
);

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
