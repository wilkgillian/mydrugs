import Link from 'next/link';
import styles from './style.module.scss';
import { BsSearch } from 'react-icons/bs';
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart
} from 'react-icons/ai';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <Link href="home">
            <a>
              MY<strong>DRUGS</strong>
            </a>
          </Link>
          <div className={styles.search}>
            <input type="text" placeholder="Buscar produtos ..." />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className={styles.links}>
            <Link href="home">
              <a>
                <span>1</span>
                <AiOutlineHeart />
              </a>
            </Link>
            <Link href="home">
              <a>
                <AiOutlineUser />
              </a>
            </Link>
            <Link href="home">
              <a>
                <span>1</span>
                <AiOutlineShoppingCart />
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
