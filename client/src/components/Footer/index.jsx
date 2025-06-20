import { useEffect } from "react";
import style from "./index.module.css";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer id="contato" className={style.containerFooter}>
      <div
        className="elfsight-app-c9969f91-b0ad-42eb-82a6-81d6aac151f1"
        data-elfsight-app-lazy
      ></div>

      <div className={style.socialContainer}>
        <a
          href="https://wa.me/555184825686?text=Olá%20Carlos!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20seus%20serviços"
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialLink}
        >
          <img src="./whatsapp.svg" alt="WhatsApp" />
          <span>Fale conosco no WhatsApp</span>
        </a>

        <a
          href="https://www.instagram.com/fisiocarlosrupp?utm_source=qr&igsh=MTFlbTB3YW1tMmZwNA=="
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialLink}
        >
          <img src="./instagram.svg" alt="Instagram" />
          <span>Siga no Instagram</span>
        </a>
      </div>
      <p className={style.copy}>
        © {new Date().getFullYear()} Carlos Rupp. Todos os direitos reservados.
      </p>
    </footer>
  );
}
