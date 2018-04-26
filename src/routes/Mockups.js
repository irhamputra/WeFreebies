import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Mockups extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Pixeden",
                description: "Over 410000 high quality photos, illustrations, and vector graphics. Free for commercial use. No attribution required.",
                uri: "http://www.pixeden.com/free-graphics",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixeden-100x100.gif"
            },
            {
                id: 2,
                title: "Graphics Burger",
                description: "Free high quality photos you can use everywhere. Free for commercial use. No attribution required.",
                uri: "http://graphicburger.com/mock-ups/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_graphic_burger-100x100.gif"
            },
            {
                id: 3,
                title: "Media Loot",
                description: "High quality and high resolution images free from all copyright restrictions – no attribution required.",
                uri: "http://medialoot.com/free/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnails_media_loot-100x100.gif"
            },
            {
                id: 4,
                title: "Pixel Buddha",
                description: "Free (do whatever you want) high-resolution stock photos. Download 10 new free stock photos every 10 days.",
                uri: "http://pixelbuddha.net/freebies/tag/mockups",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixel_buddha-100x100.gif"
            },
            {
                id: 5,
                title: "http://p-px.com/",
                description: "Great place to get breathtaking Free Pictures for business or personal projects",
                uri: "https://kaboompics.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_perfect_pixels-100x100.gif"
            },
            {
                id: 6,
                title: "Sketch App Sources (Sketch)",
                description: "Free high-resolution pictures for personal and commercial projects.",
                uri: "http://www.sketchappsources.com/all-free-sources.html",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_sketch_sources-100x100.png"
            },
            {
                id: 7,
                title: "Do",
                description: "High-quality, free photos for creatives",
                uri: "http://www.invisionapp.com/do",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_do-100x100.gif"
            },
            {
                id: 8,
                title: "Tethr",
                description: "Totally free photos for your commercial and personal works",
                uri: "http://www.invisionapp.com/tethr",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_tethr-100x100.gif"
            },
            {
                id: 9,
                title: "UI Space",
                description: "Brilliant selection of completely free HD stock photography",
                uri: "http://uispace.net/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_uispace-100x100.gif"
            },
            {
                id: 10,
                title: "Teehan Lax Tools",
                description: "Brilliant selection of completely free HD stock photography",
                uri: "http://teehanlax.com/tools/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_teehan_lax-100x100.gif"
            }
        ]
    }

    renderData() {
        return this.getData().map(({id, title, description, uri, imageUri}) => (
            <li className="collection-item" key={id}>
                <a href={uri} target="_blank">
                    <div className="valign-wrapper">
                        <img src={imageUri} alt="" className="circle responsive-img"/>
                        <h5>{title}</h5>
                    </div>
                    <p>{description}</p>
                </a>
            </li>
        ))
    }

    render() {
        return (
            <div className="row">
                <Header/>
                <h4>Mockups</h4>
                <p>The best sites to get free stock mockups</p>
                <ul className="collection">
                    {this.renderData()}
                </ul>
                <Footer/>
            </div>
        )
    }
}

export default Mockups