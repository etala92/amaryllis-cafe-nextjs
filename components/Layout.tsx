import Header from "@components/Header";
import Footer from "@components/Footer";
import style from "@components/Layout.module.css";
type Props = {
  children: JSX.Element;
  className?: string;
};

export default function Layout({ children, className }: Props) {
  return (
    <>
      <div className={`${className} ${style.container}`}>
        <Header className={style.header}>Amaryllis cafè</Header>
        <main className={style.main}>{children}</main>
        <Footer className={style.footer} />
      </div>
    </>
  );
}
