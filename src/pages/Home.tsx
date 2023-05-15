/* eslint-disable no-extra-parens */
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import storeItems from "../data/items.json";
import { StoreItem } from "../StoreItem";

export function Home() {
    return (
        <>
            <body>
                <div id="bg-right"></div>
                <header className="App-header">
                    <div className="wrap">
                        <div className="search">
                            <input
                                type="text"
                                className="searchTerm"
                                placeholder="Search:"
                            ></input>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </header>
                <Row className="g-3">
                    {storeItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            </body>
        </>
    );
}
