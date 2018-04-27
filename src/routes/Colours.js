import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Colours extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Adobe Color CC",
                description: "Over 410000 high quality photos, illustrations, and vector graphics. Free for commercial use. No attribution required.",
                uri: "https://color.adobe.com/explore/most-popular/?time=all",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_adobe-100x100.gif"
            },
            {
                id: 2,
                title: "Colourlovers",
                description: "Free high quality photos you can use everywhere. Free for commercial use. No attribution required.",
                uri: "http://www.colourlovers.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_colour_lovers-100x100.gif"
            },
            {
                id: 3,
                title: "Coolors",
                description: "High quality and high resolution images free from all copyright restrictions – no attribution required.",
                uri: "http://coolors.co/browser",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_coolors-100x100.gif"
            },
            {
                id: 4,
                title: "Material Palette",
                description: "Free (do whatever you want) high-resolution stock photos. Download 10 new free stock photos every 10 days.",
                uri: "http://design-seeds.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_material_pallette-100x100.gif"
            },
            {
                id: 5,
                title: "Design Seeds",
                description: "Great place to get breathtaking Free Pictures for business or personal projects",
                uri: "http://design-seeds.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_design_seeds-100x100.gif"
            },
            {
                id: 6,
                title: "Pictaculous",
                description: "Free high-resolution pictures for personal and commercial projects.",
                uri: "http://www.pictaculous.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_pictaculous-100x100.gif"
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
                    <h4>Colour</h4>
                    <p>The best sites to get free stock colours</p>
                    <ul className="collection z-depth-3">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Colours