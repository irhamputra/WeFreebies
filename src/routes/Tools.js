import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Tools extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Grammarly (Copywriting)",
                description: "Spell check and grammar check your writing when communicating online. Boost your productivity and credibility everywhere you write!",
                uri: "http://tr.grammarly.com/aff_c?offer_id=3&aff_id=6157",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_grammarly-100x100.png"
            },
            {
                id: 2,
                title: "Hemmingway Editor (Copywriting)",
                description: "Hemmingway App makes your writing bold and clear",
                uri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_grammarly-100x100.png",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_hemmingway-100x100.gif"
            },
            {
                id: 3,
                title: "Colordot (Colour Picker)",
                description: "Fun way to explore colours with a small cursor in a vast colour space",
                uri: "http://color.hailpixel.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_colordot-100x100.gif"
            },
            {
                id: 4,
                title: "0 to 255 (Colour Picker)",
                description: "A simple tool that helps designer finds variations of any color",
                uri: "http://www.0to255.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_0_to_255-100x100.gif"
            },
            {
                id: 5,
                title: "Dunnnk (Mockups Generator)",
                description: "Upload your designs and download the final mockup within seconds",
                uri: "https://kaboompics.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_dunnnk-100x100.gif"
            },
            {
                id: 6,
                title: "Frame (Mockups Generator)",
                description: "Create great looking Products Mockups for free with Frame",
                uri: "https://gratisography.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_frame-100x100.gif"
            },
            {
                id: 7,
                title: "UI Faces (Mockups Generator)",
                description: "Find and generate sampe avatars for user interfaces",
                uri: "http://www.uifaces.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_UI_faces-100x100.gif"
            },
            {
                id: 8,
                title: "Wordmark.it (Font Library)",
                description: "Wordmark.it helps you choose fonts by previewing a word of your choice with the fonts installed on your computer.",
                uri: "http://wordmark.it/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_wordmarkit-100x100.gif"
            },
            {
                id: 9,
                title: "Type Genius (Font Library)",
                description: "Find the perfect font combo for your next project",
                uri: "http://www.typegenius.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_type_genius-100x100.gif"
            },
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
                <div className="body-wrapper container">
                    <h4>Tools</h4>
                    <p>The best sites to get free stock tools</p>
                    <ul className="collection z-depth-3">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Tools