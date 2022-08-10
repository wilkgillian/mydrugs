import Link from 'next/link';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Navigator from '../../components/Navigator';

export default function Home() {
  return (
    <>
      <Header />
      <Navigator />
      <Hero />
    </>
  );
}
