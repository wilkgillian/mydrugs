import styles from './style.module.scss';
import { IoIosLogIn } from 'react-icons/io';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Bem vindo ao <strong>Mydrugs</strong>
        </h1>
      </div>
      <h2>
        Faça login ou{' '}
        <Link href="Cadastro">
          <a>cadastre-se</a>
        </Link>{' '}
        para ver os produtos.
      </h2>
      <label>
        E-mail:
        <input type="email" placeholder="email@email.com" />
      </label>
      <label>
        Password:
        <input type="password" placeholder="********" />
      </label>
      <button type="submit">
        <IoIosLogIn />
      </button>
    </div>
  );
}
