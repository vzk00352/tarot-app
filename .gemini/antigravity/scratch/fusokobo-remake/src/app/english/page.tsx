import styles from '../common-page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function EnglishPage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>English</h2>

            <div className={styles.textBlock}>
                <h3>Introduction</h3>
                <p>The Japanese dolls are made traditionally of wood, Japanese paper, silk and white Spanish chalk (shell powder fixed with glue) and fine stone powder. I use Meiji, Taisho, Showa period cloth which were used 100 years ago. In this time is going on, the way of thinking and the atmosphere become to get fixed which give to the cloth some charms.</p>
            </div>

            <div className={styles.textBlock}>
                <h3>Gofun (white Spanish chalk)</h3>
                <p>Gofun which is a white color dyeing product is made with burned shells. Gofun is mainly used in Japanese painting. When the mixture of the Gofun arrived at its end some fish glue is added (because the fish glue is rich in proteins) which make the mixture becoming gelatin.</p>
                <p>In the antiquity period Gofun was glued on piece of wood. It is said that the beauty of the Japanese dolls appear of the Gofun utilisasion.</p>
            </div>

            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/english/gofun.png" alt="Gofun" width={400} height={300} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.textBlock}>
                <h3>Art dolls</h3>
            </div>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Link href="/art-dolls">
                    <Image src="/images/english/art-dolls.jpg" alt="Art dolls" width={400} height={300} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                </Link>
            </div>

            <div className={styles.textBlock}>
                <h3>Hina dolls</h3>
            </div>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Link href="/hina-dolls">
                    <Image src="/images/english/hina-dolls.jpg" alt="Hina dolls" width={400} height={300} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                </Link>
            </div>

            <div className={styles.textBlock}>
                <h4>Fusako NAKAGAWA</h4>
                <p>Doll artist<br />
                    Born in Osaka, Japan 1948.<br />
                    Currently living in Tokyo.<br />
                    Graduated from Musashino Art University, Junior college of Art and Design</p>
            </div>

            <div className={styles.textBlock}>
                <ul className={styles.list}>
                    <li><span className={styles.year}>1985</span> Participated in the Nihon Shin-kogeiten Exhibition</li>
                    <li><span className={styles.year}>1986-2005</span> Participated in the Kofu-kai Exhibition. To the present, she has been awarded four times.</li>
                    <li><span className={styles.year}>1995</span> Private Exhibition held in the Gallery"Mido", Nihonbashi, Tokyo.</li>
                    <li><span className={styles.year}>1995-2005</span> The "Asu he no Katachi" Exhibition in The Museum of Kyoto.</li>
                    <li><span className={styles.year}>1999</span> Private Exhibition held in the Keio Gallery, Tokyo.</li>
                    <li><span className={styles.year}>2000</span> Group Exhibition held in the Keio Gallery, Tokyo.</li>
                    <li><span className={styles.year}>2002</span> Private Exhibition held in the Keio Gallery, Tokyo. Private Exhibition held at the Gallery Grand Paris, Paris.</li>
                </ul>
            </div>
        </div>
    );
}

