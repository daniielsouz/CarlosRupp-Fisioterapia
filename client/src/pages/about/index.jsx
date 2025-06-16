import style from "./index.module.css";
import ImgCarlos from "./../../assets/img/carlosRupp.png";
export default function About() {
  return (
    <section className={style.sectionAbout}>
      <div className={style.containerText}>
        <div className={style.titleAbout}>
          <h2 className={style.subTitle}>Carlos Rupp</h2>
          <h2 className={style.title}>Fisioterapeuta</h2>
        </div>
        <div className={style.textAbout}>
          <p>
            Minha missão é oferecer um cuidado próximo, individualizado e de
            qualidade, respeitando a história e as necessidades de cada pessoa.
            Ao longo da minha trajetória, desenvolvi uma abordagem integrativa,
            que une técnicas de osteopatia, fisioterapia funcional e terapias
            manuais, sempre com foco na funcionalidade, alívio da dor e promoção
            da autonomia. Acredito que o processo de reabilitação vai além do
            tratamento físico — envolve confiança, acolhimento e escuta ativa.
            Por isso, levo o cuidado até a casa do paciente, proporcionando mais
            conforto, segurança e eficácia no acompanhamento. Será um prazer
            contribuir para sua saúde e qualidade de vida.
          </p>
        </div>
        <div className={style.buttonAbout}>
          <a
            href="//wa.me/555184825686?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
            target="_blank"
          >
            Saiba mais
          </a>
        </div>
      </div>
      <div className={style.imgAbout}>
        <div className={style.circleImg}></div>
        <img src={ImgCarlos} alt="Carlos Rupp" />
      </div>
    </section>
  );
}
