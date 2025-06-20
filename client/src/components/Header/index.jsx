import style from "./index.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <nav>
        <ul className={style.listNav}>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
