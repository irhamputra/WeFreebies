import React, {Component} from "react";
import Header from "./components/Header";
import CardsList from './components/CardsList'
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="">
                <Header/>
                <CardsList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
