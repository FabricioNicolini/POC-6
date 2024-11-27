"use client";
import { useEffect, useState } from "react";
import styles from "./Fileira.module.css"

export default function Fileira(props) {
    const { toggleSeat } = props;

    const branco = <div className={styles.AcentoBranco} onClick={(e) => toggleSeat(e.target)}></div>;
    const cinza = <div className={`${styles.AcentoCinza} ${styles.unavailable}`} onClick={(e) => toggleSeat(e.target)}></div>;

    const [assentos, setAssentos] = useState([]);

    function randomizarAssento() {
        let novosAssentos = [];
        for (let i = 0; i < 8; i++) {
            const num = Math.floor(Math.random() * 5);

            if (num === 0) {
                novosAssentos.push(cinza);
            } else {
                novosAssentos.push(branco);
            }
        }
        setAssentos(novosAssentos); 
    }

    useEffect(() => {
        randomizarAssento();
    }, []);

    return (
        <div className={styles.Fileira}>
            {assentos.map((assento, index) => (
                <div key={index}>
                    {assento}
                </div>
            ))}
        </div>
    );
}