import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Textures extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Subtle Patterns",
                description: "Free textures for your next web project",
                uri: "http://subtlepatterns.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_subtle_patterns-100x100.gif"
            },
            {
                id: 2,
                title: "Textures",
                description: "Free textures for 3d modeling, texturing, photoshop and game development. All images are free for personal and commercial use.",
                uri: "http://texturer.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_texturer-100x100.gif"
            },
            {
                id: 3,
                title: "Pattern Library",
                description: "Patterns shared by the most talented designers out there for you to use freely in your designs.",
                uri: "http://thepatternlibrary.com/?makerbook",
                imageUri: "http://makerbook.net/wp-content/uploads/2015/05/makerbook_thumbnail_patern_library-100x100.png"
            },
            {
                id: 4,
                title: "Texture King",
                description: "Free (do whatever you want) high-resolution stock photos. Download 10 new free stock photos every 10 days.",
                uri: "http://www.textureking.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_texture_king-100x100.gif"
            },
            {
                id: 5,
                title: "Transparent Textures",
                description: "Great place to get breathtaking Free Pictures for business or personal projects",
                uri: "http://www.transparenttextures.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_trans_textures1-100x100.gif"
            },
            {
                id: 6,
                title: "Freebies Gallery",
                description: "Free high-resolution pictures for personal and commercial projects.",
                uri: "http://www.freebiesgallery.com/backgrounds/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_freebies_gallery-100x100.gif"
            },
            {
                id: 7,
                title: "Patternico",
                description: "High-quality, free photos for creatives",
                uri: "http://patternico.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_patternico-100x100.gif"
            },
            {
                id: 8,
                title: "Pixeden",
                description: "Free graphic and web backgrounds to make your design project stands out with great style.",
                uri: "http://www.pixeden.com/graphic-web-backgrounds",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixeden-100x100.gif"
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
            <div className="row wrapper">
                <Header/>
                <div className="container body-wrapper">
                    <h4>Textures</h4>
                    <p>The best sites to get free stock textures</p>
                    <ul className="collection z-depth-3">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Textures