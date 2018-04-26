import React, {Component} from "react";
import Header from "./components/Header";
import CardsList from './components/CardsList'
import Footer from "./components/Footer";
import 'animate.css'
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="row wrapper">
                <Header/>
                <CardsList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
