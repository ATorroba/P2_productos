import logo from './logo.svg';
export default function Header() {
    return (
        <div id="cabecera">
            <img src={logo} className="logo" alt="logo" />
            <h3 className="mensaje">Bienvenido a la página de Álvaro Torroba de Linos</h3>
        </div>)
    }