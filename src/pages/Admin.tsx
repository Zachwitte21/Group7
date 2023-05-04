import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import image from "./image/image.png";
import gpro from "../images/gpro.png";
import book from "../images/book.png";
import controller from "../images/controller.png";
import "../admin.css";

function AdminPage() {
    return (
        <div className="admin">
            <header className="admin-header">SecondSail ADMIN VIEW</header>
            <br></br>
            <br></br>
            <p>
                <Button disabled>Store</Button>
                <Button>Orders</Button>
            </p>
            <br></br>
            <div>
                <Container>
                    <Row></Row>
                    <Row>
                        <Col>
                            <img
                                src={gpro}
                                height={200}
                                width={200}
                                alt={"gpro"}
                            ></img>
                            <Col>Logitech G Pro Superlight</Col>
                            <p>Price: $150.00</p>
                            <Button>Add to Cart</Button>
                            <Col>
                                <Button>Edit</Button>
                            </Col>
                        </Col>
                        <Col>
                            <img
                                src={
                                    "https://mma.prnewswire.com/media/2005357/Sony_WH_CH520_headphone.jpg?w=200"
                                }
                                height={200}
                                width={200}
                                alt={"Pair of Sony Headphones"}
                            ></img>
                            <Col>Sony Headphones</Col>
                            <p>Price: $60.00</p>
                            <Button>Add to Cart</Button>
                            <Col>
                                <Button>Edit</Button>
                            </Col>
                        </Col>
                        <Col>
                            <img
                                src={book}
                                height={200}
                                width={200}
                                alt={"book"}
                            ></img>
                            <Col>Used Python Textbook</Col>
                            <p>Price: $15.00</p>
                            <Button>Add to Cart</Button>
                            <Col>
                                <Button>Edit</Button>
                            </Col>
                        </Col>
                        <Col>
                            <img
                                src={controller}
                                height={200}
                                width={200}
                                alt={"Controller"}
                            ></img>
                            <Col>Nintendo Switch Pro Controller</Col>
                            <p>Price: $74.99</p>
                            <Button>Add to Cart</Button>
                            <Col>
                                <Button>Edit</Button>
                            </Col>
                        </Col>
                        <Col>
                            <Button>Create New Item</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            <p>
                Edited by Zachary Witte, ZhongYiJiang, Sean Hennessey and Yuhan
                Lin
            </p>
        </div>
    );
}

export default AdminPage;
