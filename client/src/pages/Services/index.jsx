import Osteopatia from "../../assets/img/osteopatia.svg";
import Reabilitacao from "../../assets/img/reabilitacao.svg";
import Neurologia from "../../assets/img/neurologia.svg";
import Idoso from "../../assets/img/idoso.svg";
import Funcional from "../../assets/img/funcional.svg";
import Qualidade from "../../assets/img/qualidade.svg";
import { useState } from "react";
import style from "./index.module.css";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Osteopatia e Terapias Manuais Aplicadas à Fisioterapia",
      description:
        "Abordagem manual que atua sobre o sistema musculoesquelético, visceral e craniano, buscando tratar a causa das disfunções e aliviar dores. Indicado para dores na coluna, restrições articulares, cefaleias, entre outros quadros funcionais.",
      url: Osteopatia,
    },
    {
      title: "Reabilitação Funcional no Pós-Operatório",
      description:
        "Atendimento especializado para recuperação após cirurgias ortopédicas, neurológicas ou abdominais. Objetivo: restaurar movimentos, reduzir dores, prevenir complicações e retomar as atividades da vida diária com segurança.",
      url: Reabilitacao,
    },
    {
      title: "Fisioterapia Neurológica: Movimento, Função e Qualidade de Vida",
      description:
        "Atendimento a pacientes com AVC, Alzheimer, Parkinson, esclerose múltipla e outras condições neurológicas. Foco na reabilitação motora, equilíbrio, marcha, coordenação e independência funcional.",
      url: Neurologia,
    },
    {
      title: "Fisioterapia Geriátrica e Cuidados Integrados no Envelhecimento",
      description:
        "Voltada às necessidades específicas do processo de envelhecimento, respeitando as limitações e capacidades do idoso. Promove a mobilidade, previne quedas e contribui para a autonomia nas atividades cotidianas.",
      url: Idoso,
    },
    {
      title: "Programa de Manutenção da Capacidade Funcional",
      description:
        "Intervenção contínua para preservar força muscular, mobilidade, equilíbrio e condicionamento físico, especialmente em casos de sedentarismo, fragilidade ou pós-internações. Indicado para quem deseja envelhecer com mais saúde, independência e segurança.",
      url: Funcional,
    },
    {
      title: "Promoção da Qualidade de Vida e Prevenção de Incapacidades",
      description:
        "Sessões voltadas ao bem-estar físico e emocional, com foco na diminuição de dores crônicas, prevenção de incapacidades e melhora global da qualidade de vida.",
      url: Qualidade,
    },
  ];

  function toggleIndex(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section
      id="services"
      className={style.sectionServices}
      aria-label="Serviços oferecidos por Carlos Rupp"
    >
      <div className={style.containerServices}>
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          const whatsappLink = `https://wa.me/555184825686?text=${encodeURIComponent(
            `Olá Carlos! Gostaria de saber sobre o serviço:  ${service.title}`
          )}`;

          return (
            <div
              key={index}
              className={style.serviceCard}
              onClick={() => toggleIndex(index)}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-controls={`service-desc-${index}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleIndex(index);
                }
              }}
            >
              <div className={style.titleIcons}>
                <img
                  className={style.icons}
                  src={service.url}
                  alt={`Ícone representando ${service.title}`}
                />
                <h2>{service.title}</h2>
              </div>
              <p
                id={`service-desc-${index}`}
                className={isOpen ? style.open : style.closed}
              >
                {service.description}
              </p>
              {isOpen && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.whatsappButton}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Entrar em contato via WhatsApp sobre o serviço ${service.title}`}
                >
                  Entre em Contato
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
