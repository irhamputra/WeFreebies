import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Mockups extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Pixeden",
                description: "Pixeden is hard at work providing high-quality premium and free web resources and graphic design templates.",
                uri: "http://www.pixeden.com/free-graphics",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixeden-100x100.gif"
            },
            {
                id: 2,
                title: "Graphics Burger",
                description: "Tasty design resources made with care for each pixel. Free for both personal and commercial use. Have a bite!",
                uri: "http://graphicburger.com/mock-ups/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_graphic_burger-100x100.gif"
            },
            {
                id: 3,
                title: "Media Loot",
                description: "Design is easy with Medialoot. Unlimited access to fonts, icons, PSDs, templates, patterns, and much more.",
                uri: "http://medialoot.com/free/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnails_media_loot-100x100.gif"
            },
            {
                id: 4,
                title: "Pixel Buddha",
                description: "Mockups for personal and commercial use, including software, web, apps, templates and themes.",
                uri: "http://pixelbuddha.net/freebies/tag/mockups",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixel_buddha-100x100.gif"
            },
            {
                id: 5,
                title: "Perfect Pixels",
                description: "PSD templates of unparalleled quality",
                uri: "http://p-px.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_perfect_pixels-100x100.gif"
            },
            {
                id: 6,
                title: "Sketch App Sources (Sketch)",
                description: "Sketch App Sources is a catalog of free resources for web ui ux designers working with Sketch 3 by Bohemian Coding.",
                uri: "http://www.sketchappsources.com/all-free-sources.html",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_sketch_sources-100x100.png"
            },
            {
                id: 7,
                title: "Do",
                description: "The world’s most versatile to-do app UI kit for PS & Sketch.",
                uri: "http://www.invisionapp.com/do",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_do-100x100.gif"
            },
            {
                id: 8,
                title: "Tethr",
                description: "The last UI kit you'll ever need",
                uri: "http://www.invisionapp.com/tethr",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_tethr-100x100.gif"
            },
            {
                id: 9,
                title: "UI Space",
                description: "High quality hand-crafted PSDs and AI freebies, free fonts, mockups, the latest free icons sets and other free vectorial resources.",
                uri: "http://uispace.net/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_uispace-100x100.gif"
            },
            {
                id: 10,
                title: "Teehan Lax Tools",
                description: "iPhone and iPad user interface elements from Teehan Lax",
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
                    <h4>Mockups</h4>
                    <p>The best sites to get free stock mockups</p>
                    <ul className="collection z-depth-3">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Mockups