/* eslint-disable no-extra-parens */
import React from "react";
import { useCart } from "./CartContext";
import storeItems from "./data/items.json";
import { Stack } from "react-bootstrap";
import { currencyFormat } from "./utilities/currencyFormat";
import { Button } from "react-bootstrap";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useCart();
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: ".65rem" }}
                        >
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {currencyFormat(item.price)}
                </div>
            </div>
            <div> {currencyFormat(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
}
