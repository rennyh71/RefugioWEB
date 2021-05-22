import React from "react";
import * as style from "../componentes/home.module.css";
import Card from "../componentes/card";
export default class home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}> cabecera</header>
        <div className={style.portada}> portada</div>
        <div className={style.menu}> menu</div>
        <div className={style.carrusel}> carrusel</div>
        <main className={style.contenido}></main>
        <aside className={style.sidebar}>sidebar</aside>
        <div className={style.destacado}> historia destacada</div>
        <section className={style.videos}></section>
        <section className={style.contentCard}>
          <Card />
          <Card reverse={true} />
          <Card />
          <Card reverse={true} />
        </section>
        <article className={style.articulo}> intereses</article>
        <footer className={style.footer}> pie de pagina </footer>
      </div>
    );
  }
}
