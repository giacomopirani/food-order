import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CardContext';
import Button from './UI/Button';

export default function Header() {

    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant logo" />
                <h1>Food|Order</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}