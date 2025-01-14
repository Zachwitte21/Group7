/* eslint-disable no-extra-parens */
import React from "react";
import { Card, Button } from "react-bootstrap";
import { currencyFormat } from "./utilities/currencyFormat";
import { useCart } from "./CartContext";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="fs-2 text-muted">
                        {currencyFormat(price)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => addToCart(id)}>
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d0flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    -
                                </Button>
                                <span className="fs-3">{quantity}</span> in cart
                                <Button
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
