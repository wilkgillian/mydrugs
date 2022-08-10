import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './style.module.scss';

export default function Navigator() {
  return (
    <>
      <nav className={styles.container}>
        <select name="select">
          <option value="Categories" selected>
            Categories
            <GiHamburgerMenu />
          </option>
          <option value="Categories">gories</option>
          <option value="Categories">Categories</option>
          <option value="Categories">Categories</option>
        </select>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>New Arrivals</a>
        </Link>
        <Link href="/">
          <a>Trending</a>
        </Link>
        <Link href="/">
          <a>Deals For You</a>
        </Link>
        <Link href="/">
          <a>Discounts</a>
        </Link>
        <Link href="/">
          <a>Weekly Offers</a>
        </Link>
        <Link href="/">
          <a>Become A Vendor</a>
        </Link>
      </nav>
    </>
  );
}
