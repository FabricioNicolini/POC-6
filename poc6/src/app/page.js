"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Botao from "./components/button/Button";
import Sala from "./components/Sala/Sala";
import Screen from "./components/Tela/Tela"; // Certifique-se de que o nome e caminho estão corretos
import filaStyles from "./components/fileira/fileira.module.css";
import Sinopse from "./components/sinopse/Sinopse";

export default function Home() {
  let basePrice = 0;
  let seatPrice = 25;
  let selectedSeats = 0;
  let totalPrice = 0;

  function toggleSeat(element) {
    if (element.classList.contains(filaStyles.unavailable)) {
      return;
    }

    element.classList.toggle(filaStyles.AcentoBranco);
    element.classList.toggle(filaStyles.AcentoVermelho);

    if (element.classList.contains(filaStyles.AcentoVermelho)) {
      selectedSeats++;
    } else {
      selectedSeats--;
    }

    updatePrice();
  }

  function updatePrice() {
    totalPrice = basePrice + selectedSeats * seatPrice;
    console.log(totalPrice);
    document.getElementById("preco").innerHTML = `R$ ${totalPrice.toFixed(2)}`;
  }

  function applyColorScheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add(styles.dark);
      document.body.classList.remove(styles.light);
    } else {
      document.body.classList.add(styles.light);
      document.body.classList.remove(styles.dark);
    }
  }

  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", applyColorScheme);
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", applyColorScheme);
  }

  applyColorScheme();

  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <div className={styles.titlePage}>
          <h1>A Forja</h1>
        </div>
        <div className={styles.horario}>
          <p>16:40</p>
        </div>
      </header>
      <main className={styles.main}>
        {/* Colocando Sala e Screen na mesma div */}
        <div className={styles.salaScreenContainer}>
          <Sala toggleSeat={toggleSeat} />
          <Screen /> {/* Tela agora está dentro da mesma div que Sala */}
        </div>
        <Sinopse />
      </main>
      <Botao totalPrice={totalPrice} />
    </div>
  );
}
