"use client";
import Link from 'next/link'
import styles from './Sinopse.module.css'

export default function Sinopse() {
    return (
        <div className={styles.containerSinopse}>
            <div className={styles.sinopse}>
                <h3>Sinopse do filme</h3>
                <br></br>
                <p>
                    Um ano depois de encerrar o ensino médio, o jovem Isaías Wright não tem planos para o futuro
                    e é desafiado por sua mãe solo e um empresário de sucesso a começar a traçar um rumo melhor
                    para sua vida. Ele passa a ser discipulado pelo seu novo mentor, conta com orações de sua mãe
                    e de uma guerreira de orações, Dona Clara, e começa a descobrir o propósito de Deus para sua vida.
                </p>
                <br></br>
                <div className={styles.Sinopse}>
                    <h3>Data de lançamento</h3>
                </div>

                <div className={styles.Sinopse}>
                    <p>26 de setembro de 2024 (Brasil)</p>
                </div>
                <br></br>

                <div className={styles.Sinopse}>
                    <h3>Direção</h3>
                </div>

                <div className={styles.Sinopse}>
                    <p>Alex Kendrick</p>
                </div>

            </div>
        </div>

    );
}