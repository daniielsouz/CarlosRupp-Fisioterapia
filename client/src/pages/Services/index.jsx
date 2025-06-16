import style from "./index.module.css";

export default function Services() {
  return (
    <section id="services" className={style.sectionServices}>
      <h3>Serviços</h3>
      <div className={style.containerServices}>
        <div className={style.serviceCard}>
          <h2>Osteopatia e Terapias Manuais Aplicadas à Fisioterapia</h2>
          <p>
            Abordagem manual que atua sobre o sistema musculoesquelético,
            visceral e craniano, buscando tratar a causa das disfunções e
            aliviar dores. Indicado para dores na coluna, restrições
            articulares, cefaleias, entre outros quadros funcionais.
          </p>
        </div>
        <div className={style.serviceCard}>
          <h2>Reabilitação Funcional no Pós-Operatório</h2>
          <p>
            Atendimento especializado para recuperação após cirurgias
            ortopédicas, neurológicas ou abdominais. Objetivo: restaurar
            movimentos, reduzir dores, prevenir complicações e retomar as
            atividades da vida diária com segurança.
          </p>
        </div>
        <div className={style.serviceCard}>
          <h2>Fisioterapia Funcional em Condições Neurológicas</h2>
          <p>
            Atendimento a pacientes com AVC, Alzheimer, Parkinson, esclerose
            múltipla e outras condições neurológicas. Foco na reabilitação
            motora, equilíbrio, marcha, coordenação e independência funcional.
          </p>
        </div>
        <div className={style.serviceCard}>
          <h2>
            Fisioterapia Geriátrica e Cuidados Integrados no Envelhecimento
          </h2>
          <p>
            Voltada às necessidades específicas do processo de envelhecimento,
            respeitando as limitações e capacidades do idoso. Promove a
            mobilidade, previne quedas e contribui para a autonomia nas
            atividades cotidianas.
          </p>
        </div>
        <div className={style.serviceCard}>
          <h2>Programa de Manutenção da Capacidade Funcional</h2>
          <p>
            Intervenção contínua para preservar força muscular, mobilidade,
            equilíbrio e condicionamento físico, especialmente em casos de
            sedentarismo, fragilidade ou pós-internações. Indicado para quem
            deseja envelhecer com mais saúde, independência e segurança.
          </p>
        </div>
        <div className={style.serviceCard}>
          <h2>Promoção da Qualidade de Vida e Prevenção de Incapacidades</h2>
          <p>
            Sessões voltadas ao bem-estar físico e emocional, com foco na
            diminuição de dores crônicas, prevenção de incapacidades e melhora
            global da qualidade de vida.
          </p>
        </div>
      </div>
    </section>
  );
}
