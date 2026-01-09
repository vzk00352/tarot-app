import { getWorks } from "@/lib/microcms";
import styles from '../common-page.module.scss';
import Image from 'next/image';

export default async function ExhibitionPage() {
    const { contents: works } = await getWorks({
        limit: 100,
        filters: 'category[contains]Exhibition'
    });

    // Sort works to be descending order (Newest first) assuming titles like "平成X年" or just reverse the fetch order if it's consistent
    // The fetch result observed was Ascending (H7 -> H30). So we reverse it.
    const sortedWorks = [...works].reverse();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Exhibition</h2>


            <div className={styles.gallery}>
                {sortedWorks.map((work) => (
                    work.thumbnail && (
                        <div key={work.id} className={styles.galleryItem}>
                            <Image // @ts-ignore
                                src={work.thumbnail.url}
                                alt={work.title}
                                width={work.thumbnail.width}
                                height={work.thumbnail.height}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <p style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9rem' }}>{work.title}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
