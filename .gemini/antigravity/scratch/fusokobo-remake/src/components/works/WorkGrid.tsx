import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkGrid.module.scss';
import { Work } from '@/types';

type Props = {
    works: Work[];
    disableLink?: boolean;
};

export default function WorkGrid({ works, disableLink = false }: Props) {
    if (!works || works.length === 0) {
        return <div className={styles.empty}>No works found.</div>;
    }

    return (
        <div className={styles.grid}>
            {works.map((work) => {
                const Content = (
                    <div className={styles.imageWrapper}>
                        {work.thumbnail && (
                            <Image
                                src={work.thumbnail.url}
                                alt={work.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.image}
                            />
                        )}
                    </div>
                );

                return disableLink ? (
                    <div key={work.id} className={styles.card}>
                        {Content}
                    </div>
                ) : (
                    <Link href={`/works/${work.id}`} key={work.id} className={styles.card}>
                        {Content}
                    </Link>
                );
            })}
        </div>
    );
}

