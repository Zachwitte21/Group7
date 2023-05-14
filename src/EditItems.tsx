import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import storeItems from "../src/data/items.json";

export function EditItems(): JSX.Element {
    const [newItem, setNewItem] = useState<boolean>(false);
    const [id, setId] = useState<string>("Id:");
    const [name, setName] = useState<string>("Name:");
    const [price, setPrice] = useState<string>("Price:");
    const [img, setImg] = useState<string>("Image URL:");
    const [correctID, setCorrectID] = useState<boolean>(false);

    function createNew(): void {
        setNewItem(true);
    }

    function blankId() {
        setId("");
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
        setCorrectID(false);
    }

    function saveItem(): void {
        const idNum = parseFloat(id);
        const priceNum = parseFloat(price);
        const itemIndex = storeItems.findIndex((i) => i.id === idNum);
        storeItems[itemIndex] = {
            id: idNum,
            name,
            price: priceNum,
            imgUrl: img
        };
        setId("Id:");
        setName("Name:");
        setPrice("Price:");
        setImg("Image URL:");
        setNewItem(false);
        setCorrectID(false);
    }

    function startEdit(): void {
        const idNum = parseInt(id);
        const item1 = storeItems.find((i) => i.id === idNum);
        if (item1 != null) {
            setName(item1.name);
            const priceString = item1.price.toString();
            setPrice(priceString);
            setImg(item1.imgUrl);
            setCorrectID(true);
        } else {
            cancelItem();
        }
    }

    function deleteItem(): void {
        const idNum = parseFloat(id);
        let itemIndex = storeItems.findIndex((i) => i.id === idNum);
        storeItems.splice(itemIndex, 1);
        setId("Id:");
        setName("Name:");
        setPrice("Price:");
        setImg("Image URL:");
        setNewItem(false);
        setCorrectID(false);
    }

    return (
        <div>
            <Button onClick={createNew} disabled={newItem}>
                Edit Items
            </Button>
            <br></br>
            {newItem && !correctID && (
                <>
                    <Form.Label>ID of Item:</Form.Label>
                    <Form.Control
                        value={id}
                        onClick={blankId}
                        onChange={updateId}
                    />
                    <Button onClick={startEdit}>Enter</Button>
                    <Button onClick={cancelItem}>Cancel</Button>
                </>
            )}
            {newItem && correctID && (
                <>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        //onClick={blankName}
                        onChange={updateName}
                    />
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        value={price}
                        //onClick={blankPrice}
                        onChange={updatePrice}
                    />
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        value={img}
                        //onClick={blankImg}
                        onChange={updateImg}
                    />
                    <Button onClick={saveItem}>Save Changes</Button>
                    <Button onClick={cancelItem}>Discard</Button>
                    <Button onClick={deleteItem} background-color="red">
                        Delete Item
                    </Button>
                </>
            )}
        </div>
    );
}
