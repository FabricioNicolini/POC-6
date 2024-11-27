"use client";
import styles from './Button.module.css'

export default function Botao(props) {
    const { totalPrice } = props;

    return (
        <div className={styles.botao}>
            <button id="buyButton" onClick={() => {
                alert(`Compra realizada com sucesso!`);
            }}>
                <p className={styles.Comprar}>Comprar</p>
                <p id="preco" className={styles.Preco}>
                    R$ {totalPrice}
                </p>
            </button>
        </div>
    );
}