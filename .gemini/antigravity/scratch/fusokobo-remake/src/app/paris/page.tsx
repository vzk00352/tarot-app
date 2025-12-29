import styles from '../common-page.module.scss';
import Image from 'next/image';

export default function ParisPage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Paris</h2>

            <div className={styles.textBlock}>
                <p>2002年10月18日～24日までパリ・Galerie GRAND PARISにて人形工房展を開催しました。ここではその様子についてご紹介します。</p>
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/paris-poster-h15.jpg" alt="Paris Poster" width={620} height={924} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.textBlock}>
                <p>昔はあこがれのパリでの展覧会が、海外旅行が日常的になった今日、私は軽い旅行気分の乗りで実現してしまった。とはいっても作品の輸送は大問題で、税関やら保険やら分からないことばかり、輸出と輸入を体験するのだから・・・<br />
                    しかもインボイスを作るにはフランス語のリストが必要というわけで、フランス語をパソコンで打つことを覚え、挨拶ぐらいはと半年間ＣＤで毎日フランス語を聞いた。こんなに頑張れる自分が自分で驚きだった。目的意識を持つことが実力以上の力を発揮できるという発見をまず準備で体験した。</p>
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/galerie.jpg" alt="Galerie" width={600} height={400} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/paris02.jpg" alt="Paris 02" width={600} height={400} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.textBlock}>
                <p>二つ目の体験は、フランス人はマイペースということ、作品は早めに送ったにもかかわらず開始時間に届かず、オープニングパーティの直前にかろうじて届いた。遅れても昼休みは働かない。これにはまいってしまった。</p>
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/american.jpg" alt="American" width={600} height={400} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.textBlock}>
                <p>どうにか間に合ったパーティには、在仏の日本人やイタリア人、ロシア人、アメリカ人、勿論フランス人とたくさんの方が来てくださった。ギャラリーのお隣はサルトルとボーヴォアールの暮らしたところで、その数件先の並びのホテルに宿泊した。窓からモンパルナス墓地のこんもりした緑が見え、パリの雑踏の中にしては静かなホテルだった。</p>
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/paris01.jpg" alt="Paris 01" width={600} height={400} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>

            <div className={styles.textBlock}>
                <p>ギャラリーで感じたことは、予想と違って伝統的なものへの技術的な称賛ばかりでなく、私の現代の作品に対する共感をジェスチャーいっぱいで表現してくれた方が多かったこと、作品を通じて心が通いあうという感動を味わった。追い求めていた「かたち」のまえに「想い」が何よりも大切であることを自分の人形達に教えられた旅だった。これからも自分の心を研ぎ澄まし、人の心の優しさや温かさをテーマにして「かたち」を追い求めていきたい。</p>
            </div>

            <div className={styles.imageBlock} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <Image src="/images/paris/galerie03.jpg" alt="Galerie 03" width={600} height={400} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
}
