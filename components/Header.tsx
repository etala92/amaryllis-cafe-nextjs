import Image from "next/image";
import imgHeader from "../public/header.jpg";
import { Courgette } from "@next/font/google";
import { useInView } from "react-intersection-observer";
import style from "@components/Header.module.css";

const courgette = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({ children, className }: Props) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: "-150px 0px 0px 0px",
    initialInView: true,
  });

  return (
    <>
      <header
        className={`${className} ${style.container} ${
          !inView ? style.minimized : ""
        }`}
        ref={ref}
      >
        <div className={style.bgImg}>
          <Image src={imgHeader} alt="Immagine di un amaryllis" priority fill />
        </div>
        <h1 className={`${style.title} ${courgette.className}`}>{children}</h1>
      </header>
    </>
  );
}
