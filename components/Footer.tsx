import { divide } from "cypress/types/lodash";
import Image from "next/image";
import styles from "./Footer.module.css";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <>
      <footer className={`${className} ${styles.container}`}>
        <div className={styles.companyInfo}>
          <h5 className={styles.title}>
            Amaryllis Cafè di Delledonne Stefania
          </h5>
          <p>Via Antonio Emmanueli, 23, 29121 Piacenza PC</p>
          {/* Numero di partita IVA;
          Ufficio del registro delle imprese presso il quale è iscritta l’azienda;
          Numero di iscrizione REA. */}
        </div>
        <div className={styles.socialInfo}>
          {/* https://icons8.it/icon/set/social%20media/material-outlined */}
          <a href="https://www.instagram.com/amaryllis_cafe_/" target="_blank">
            <Image
              src="/svg/instagram.svg"
              alt="Logo di Instagram"
              width={36}
              height={36}
            />
          </a>{" "}
          <a href="https://goo.gl/maps/eyBJKPyCG2rHHNss5" target="_blank">
            <Image
              src="/svg/map-pin.svg"
              alt="Logo di Instagram"
              width={36}
              height={36}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
