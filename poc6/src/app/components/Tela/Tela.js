// components/Screen.js
import React from "react";
import styles from "./Tela.module.css"; // Importando o CSS separado

const Screen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}></div>
      <p className={styles.label}>Tela</p>
      {/* Adicionando a legenda */}
      <div className={styles.legenda}>
        <div className={styles.status}>
          <div className={styles.AcentoBrancoBOLINHA}></div>
          <p>Livre</p>
        </div>
        <div className={styles.status}>
          <div className={styles.AcentoCinzaBOLINHA}></div>
          <p>Indisponível</p>
        </div>
        <div className={styles.status}>
          <div className={styles.AcentoVermelhoBOLINHA}></div>
          <p>Selecionado</p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
