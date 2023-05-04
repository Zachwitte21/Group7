import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "./CartContext";
import { CartItem } from "./CartItem";
import { StoreItem } from "./StoreItem";
import { currencyFormat } from "./utilities/currencyFormat";
import storeItems from "./data/items.json";

type CartProps = {
    isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
    const { closeCart, cartItems } = useCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {currencyFormat(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(
                                    (i) => i.id === cartItem.id
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
