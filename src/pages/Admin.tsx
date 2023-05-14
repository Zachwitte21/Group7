import React from "react";
import { Col, Row } from "react-bootstrap";
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
                {storeItems.map((item) => 
                    <Col key={item.id}>
                        <StoreItem {...item} />
                        {item.id}
                    </Col>
                )}
            </Row>
        </>
    );
}

export default AdminPage;
