import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "./";

export default function Gallery() {
    function readImagesFromFolder(folderPath) {
        let images = {};
        let imageList = [];
        let req = require.context("../../assets/img/gallery/small", false, /\.(png|jpe?g|svg)$/);

        req.keys().forEach((item) => { images[item.replace('./', '')] = req(item); });
        imageList = Object.entries(images).map(i => ({ name: i[0], src: i[1].default }))

        return imageList;
    }

    function mountGalleryImagesRow() {
        let images = readImagesFromFolder();

        return (
            <Row>
                {images.map((image, index) => (
                    <Col key={index} sm={6} md={4} lg={4} className="gallery-item">
                        <div className="hover-bg">
                            <a href={"/img/gallery/large/" + image.name} title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <FontAwesomeIcon icon="search-plus" size="2x" />
                                </div>
                                <img src={image.src} alt="" />
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        )
    }

    return (
        <Container id="gallery">
            <Row>
                <Col className="section-title">
                    <Header title="Gallery" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec." />
                </Col>
            </Row>
            {mountGalleryImagesRow()}
        </Container>
    )

}