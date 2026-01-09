import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Fusako Nakagawa All Rights Reserved.</p>
        </footer>
    );
}
