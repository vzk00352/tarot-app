"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.scss';
import { useState } from 'react';

const MENU_ITEMS = [
  { label: 'TOP', href: '/' },
  { label: 'PROFILE', href: '/profile' },
  { label: 'ABOUT', href: '/about' },
  { label: 'ART DOLLS', href: '/works/art-dolls' },
  { label: 'HINA DOLLS', href: '/works/hina-dolls' },
  { label: 'PARIS', href: '/works/paris' },
  { label: 'EXHIBITION', href: '/exhibition' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoBox}>
              FUSAKO<br/>NAKAGAWA<br/>WORKS
            </div>
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className={pathname === item.href ? styles.active : ''}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          © {new Date().getFullYear()} Fusako NAKAGAWA Works.
        </div>
      </aside>
    </>
  );
}
