import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images).map(i => ({name: i[0], src: i[1].default}) );
}

const images = importAll(require.context("../../assets/img/gallery/small", false, /\.(png|jpe?g|svg)$/));

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    
        this.mountGalleryImages = this.mountGalleryImages.bind(this);
    }

    mountGalleryImages() {
        return (
            <>
                {images.map((image, index) => (
                    <Col key={index} sm={6} md={4} lg={4} className="gallery-item">
                        <div className="hover-bg">
                            <a href={"/img/gallery/large/" + image.name} title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <FontAwesomeIcon icon="search-plus" size="2x"/>
                                </div>
                                <img src={image.src} alt=""/>
                            </a>
                        </div>
                    </Col>
                ))}
            </>
        )
    }

    render() {
        return (
            <Container id="gallery">
            <Row>
                <Col className="section-title">
                    <h2>Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </Col>
            </Row>
            <Row>
                {this.mountGalleryImages()}
            </Row>
        </Container>
        );
    }
}