import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import image from "./image/image.png";
import gpro from "../images/gpro.png";
import book from "../images/book.png";
import controller from "../images/controller.png";
import "../admin.css";
import storeItems from "../data/items.json";
import { StoreItem } from "../StoreItem";
import { ShowOrderHistory } from "../ShowOrderHistory";
import { EditItems } from "../EditItems";
import { CreateNewItem } from "../CreateNewItem";

function AdminPage(): JSX.Element {
    return (
        <>
            <header className="admin-header">
                SecondSail ADMIN VIEW
                <br></br>
                <br></br>
                <p>
                    <ShowOrderHistory></ShowOrderHistory>
                    <br></br>
                    <EditItems></EditItems>
                    <br></br>
                    <CreateNewItem></CreateNewItem>
                </p>
                <br></br>
            </header>
            <Row className="g-3">
                {storeItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default AdminPage;
