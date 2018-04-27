import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Graphics extends Component {
    getData() {
        return [
            {
                id: 1,
                title: "Vector Me",
                description: "Vector.me features an extensive database of free vector graphics. It enables you to quickly find the vector files you need by browsing or search through the entire collection of more than 150,000 vectors.",
                uri: "http://vector.me/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_vectorme-100x100.gif"
            },
            {
                id: 2,
                title: "Retro Vectors",
                description: "Retro Vectors is a source of premium quality vintage vector stock files that are free for personal and commercial use. Victorian, 40’s, 50’s.",
                uri: "http://retrovectors.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_retro_vectors-100x100.gif"
            },
            {
                id: 3,
                title: "QVectors",
                description: "Qvectors.net is the place to find free Vector graphics, vector icons, vector backgrounds and more.",
                uri: "http://qvectors.net/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_qvectors-100x100.gif"
            },
            {
                id: 4,
                title: "Vector Portal",
                description: "Free stock vectors which designers can use in commercial projects.",
                uri: "http://www.vectorportal.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_vector_portal-100x100.gif"
            },
            {
                id: 5,
                title: "Vecteezy",
                description: "Free Vector Art – Vecteezy is a HUGE collection of free vector art, vector graphics, illustrator brushes, Vector Wallpaper Backgrounds, Silhouettes and more!",
                uri: "http://www.vecteezy.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/makerbook_thumbnail_vecteezy_portal-100x100.gif"
            },
            {
                id: 6,
                title: "Freepik",
                description: "Freepik helps you to find free vector art, icons illustrations, PSD and photos for using in websites, magazines banners, presentations …",
                uri: "https://www.freepik.com/",
                imageUri: "http://makerbook.net/wp-content/uploads/2015/05/makerbook_thumbnail_freepik-100x100.png"
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
            <div>
                <Header/>
                <div className="container body-wrapper">
                    <h4>Graphics</h4>
                    <p>The best sites to get free stock Graphic</p>
                    <ul className="collection z-depth-3">
                        {this.renderData()}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Graphics