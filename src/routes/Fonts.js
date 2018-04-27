import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Fonts extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Google Fonts",
                description: "Hundreds of free, open-source fonts optimized for the web. Just 3 quick steps between you and a good lookin’ website.",
                uri: "http://google.com/fonts",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_font_google-100x100.gif"
            },
            {
                id: 2,
                title: "Font Squirrel",
                description: "Font Squirrel scours the internet in search of free, highest-quality, designer-",
                uri: "http://www.fontsquirrel.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_font_squirrel-100x100.gif"
            },
            {
                id: 3,
                title: "DaFont",
                description: "Archive of freely downloadable fonts. Browse by alphabetical listing, by style, by author or by popularity.",
                uri: "https://dafont.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_dafont-100x100.gif"
            },
            {
                id: 4,
                title: "Abstract Fonts",
                description: "Archive of freely downloadable fonts and dingbats. Organised alphabetically, by category, by author or by popularity. Includes discussion forum.",
                uri: "http://abstractfonts.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_abstractfonts-100x100.gif"
            },
            {
                id: 5,
                title: "Fontspace",
                description: "Browse through collection of thousands of fonts that have been shared by designers around the world.",
                uri: "http://abstractfonts.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/2015/05/makerbook_thumbnail_fontspace3-100x100.png"
            }
        ]
    }

    renderData() {
        return this.getData().map(({id, title, description, uri, imageUri}) => (
            <li className="collection-item" key={id}>
                <a href={uri} target="_blank">
                    <div className="valign-wrapper">
                        <img src={imageUri} alt="" className="circle responsive-img"/>
                        <h3>{title}</h3>
                    </div>
                    <p className="lead">{description}</p>
                </a>
            </li>
        ))
    }

    render() {
        return (
            <div className="row">
                <Header/>
                <div className="container body-wrapper">
                    <h4>Fonts</h4>
                    <p>The best sites to get free stock fonts</p>
                    <ul className="collection">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Fonts