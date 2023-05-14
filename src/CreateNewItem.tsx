import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import storeItems from "../src/data/items.json";

export function CreateNewItem(): JSX.Element {
    const [newItem, setNewItem] = useState<boolean>(false);
    const [id, setId] = useState<string>("Id:");
    const [name, setName] = useState<string>("Name:");
    const [price, setPrice] = useState<string>("Price:");
    const [img, setImg] = useState<string>("Image URL:");

    function createNew(): void {
        setNewItem(true);
    }

    function blankId() {
        setId("");
    }

    function blankName() {
        setName("");
    }

    function blankPrice() {
        setPrice("");
    }

    function blankImg() {
        setImg("");
    }

    function updateId(event: React.ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updatePrice(event: React.ChangeEvent<HTMLInputElement>) {
        setPrice(event.target.value);
    }

    function updateImg(event: React.ChangeEvent<HTMLInputElement>) {
        setImg(event.target.value);
    }

    function cancelItem(): void {
        setId("Id:");
        setName("Name:");
        setPrice("Price:");
        setImg("Image URL:");
        setNewItem(false);
    }

    function saveItem(): void {
        const idNum = parseFloat(id);
        const priceNum = parseFloat(price);
        storeItems.push({ id: idNum, name, price: priceNum, imgUrl: img });
        setId("Id:");
        setName("Name:");
        setPrice("Price:");
        setImg("Image URL:");
        setNewItem(false);
    }

    return (
        <div>
            <Button onClick={createNew} disabled={newItem}>
                Create New Items
            </Button>
            <br></br>
            {newItem && (
                <>
                    <Form.Label>ID:</Form.Label>
                    <Form.Control
                        value={id}
                        onClick={blankId}
                        onChange={updateId}
                    />
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onClick={blankName}
                        onChange={updateName}
                    />
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        value={price}
                        onClick={blankPrice}
                        onChange={updatePrice}
                    />
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        value={img}
                        onClick={blankImg}
                        onChange={updateImg}
                    />
                    <Button onClick={saveItem}>Save Changes</Button>
                    <Button onClick={cancelItem}>Discard</Button>
                </>
            )}
        </div>
    );
}
