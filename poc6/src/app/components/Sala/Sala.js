import Fileira from "../Fileira/Fileira";
import styles from "./Sala.module.css"

export default function Sala(props) {
    const { toggleSeat } = props;

    return (
        <div className={styles.container_filas}>
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />
            <Fileira toggleSeat={toggleSeat} />

        
        </div>
    );
}