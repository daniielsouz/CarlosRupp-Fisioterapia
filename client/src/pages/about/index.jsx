import style from "./index.module.css";
import ImgCarlos from "./../../assets/img/carlosRupp.png";

export default function About() {
  return (
    <section
      className={style.sectionAbout}
      aria-label="Sobre Carlos Rupp - Fisioterapeuta"
    >
      <div className={style.containerText}>
        <header className={style.titleAbout}>
          <h1 className={style.subTitle}>Carlos Rupp</h1>
          <h2 className={style.title}>Fisioterapeuta </h2>
        </header>

        <article className={style.textAbout}>
          <p>
            Minha missão é oferecer um cuidado próximo, individualizado e de
            qualidade, respeitando a história e as necessidades de cada pessoa.
            Com uma abordagem integrativa que une osteopatia, fisioterapia
            funcional e terapias manuais, busco sempre aliviar dores, restaurar
            a funcionalidade e promover autonomia.
          </p>
          <p>
            Acredito que a reabilitação vai além do físico — envolve confiança,
            acolhimento e escuta ativa. Por isso, realizo{" "}
            <strong>atendimento domiciliar em Porto Alegre</strong>, levando
            cuidado, conforto e resultados até você. Será um prazer contribuir
            para sua saúde e qualidade de vida.
          </p>
        </article>

        <div className={style.buttonAbout}>
          <a
            href="https://wa.me/555184825686?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp com Carlos Rupp"
          >
            Saiba mais
          </a>
        </div>
      </div>

      <div className={style.imgAbout}>
        <div className={style.circleImg}></div>
        <img
          src={ImgCarlos}
          alt="Carlos Rupp - Fisioterapeuta"
          loading="lazy"
        />
      </div>
    </section>
  );
}
