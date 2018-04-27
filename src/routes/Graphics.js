import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Graphics extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Vector Me",
                description: "Over 410000 high quality photos, illustrations, and vector graphics. Free for commercial use. No attribution required.",
                uri: "https://pixabay.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixeden-100x100.gif"
            },
            {
                id: 2,
                title: "Retro Vectors",
                description: "Free high quality photos you can use everywhere. Free for commercial use. No attribution required.",
                uri: "https://www.pexels.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_graphic_burger-100x100.gif"
            },
            {
                id: 3,
                title: "QVectors",
                description: "High quality and high resolution images free from all copyright restrictions – no attribution required.",
                uri: "https://stocksnap.io/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnails_media_loot-100x100.gif"
            },
            {
                id: 4,
                title: "Vector Portal",
                description: "Free (do whatever you want) high-resolution stock photos. Download 10 new free stock photos every 10 days.",
                uri: "https://unsplash.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixel_buddha-100x100.gif"
            },
            {
                id: 5,
                title: "Vecteezy",
                description: "Great place to get breathtaking Free Pictures for business or personal projects",
                uri: "https://kaboompics.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_perfect_pixels-100x100.gif"
            },
            {
                id: 6,
                title: "Freepik",
                description: "Free high-resolution pictures for personal and commercial projects.",
                uri: "https://gratisography.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_sketch_sources-100x100.png"
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
                    <p>{description}</p>
                </a>
            </li>
        ))
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container body-wrapper">
                    <h4>Graphics</h4>
                    <p>The best sites to get free stock Graphic</p>
                    <ul className="collection">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Graphics