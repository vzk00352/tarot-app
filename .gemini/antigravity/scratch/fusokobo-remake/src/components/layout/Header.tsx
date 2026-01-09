import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                FUSAKO NAKAGAWA WORKS
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Top</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/art-dolls">Art Dolls</Link></li>
                    <li><Link href="/hina-dolls">Hina Dolls</Link></li>
                    <li><Link href="/paris">Paris</Link></li>
                    <li><Link href="/exhibition">Exhibition</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/english">English</Link></li>
                </ul>
            </nav>
        </header>
    );
}
