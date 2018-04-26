import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Tools extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Pixabay",
                description: "Over 410000 high quality photos, illustrations, and vector graphics. Free for commercial use. No attribution required.",
                uri: "https://pixabay.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pixabay-100x100.gif"
            },
            {
                id: 2,
                title: "Pexels",
                description: "Free high quality photos you can use everywhere. Free for commercial use. No attribution required.",
                uri: "https://www.pexels.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pexels_02-100x100.gif"
            },
            {
                id: 3,
                title: "StockSnap",
                description: "High quality and high resolution images free from all copyright restrictions – no attribution required.",
                uri: "https://stocksnap.io/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_stocksnap-100x100.gif"
            },
            {
                id: 4,
                title: "Unsplash",
                description: "Free (do whatever you want) high-resolution stock photos. Download 10 new free stock photos every 10 days.",
                uri: "https://unsplash.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_unsplash-100x100.gif"
            },
            {
                id: 5,
                title: "Kaboompics",
                description: "Great place to get breathtaking Free Pictures for business or personal projects",
                uri: "https://kaboompics.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/2016/03/makerbook_thumbnail_kaboompics-100x100.png"
            },
            {
                id: 6,
                title: "Gratisography",
                description: "Free high-resolution pictures for personal and commercial projects.",
                uri: "https://gratisography.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_gratisography-100x100.gif"
            },
            {
                id: 7,
                title: "ISO Republic",
                description: "High-quality, free photos for creatives",
                uri: "https://isorepublic.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_ISO-100x100.gif"
            },
            {
                id: 8,
                title: "Pic Jumbo",
                description: "Totally free photos for your commercial and personal works",
                uri: "https://picjumbo.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnails_pic_jumbo-100x100.gif"
            },
            {
                id: 9,
                title: "Negative Space",
                description: "Brilliant selection of completely free HD stock photography",
                uri: "https://negativespace.co/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_negative_space-100x100.gif"
            },
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
                <h4>Tools</h4>
                <p>The best sites to get free stock tools</p>
                <ul className="collection">
                    {this.renderData()}
                </ul>
                <Footer/>
            </div>
        )
    }
}

export default Tools