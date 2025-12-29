import { getWorkDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log("WorkDetailPage params:", id);
    const work = await getWorkDetail(id);
    console.log("WorkDetailPage fetched work:", work);

    if (!work) {
        notFound();
    }

    return (
        <article className={styles.container}>

            <h1 className={styles.title}>{work.title?.trim() ? work.title : "No Title"}</h1>

            <div className={styles.images}>
                {work.thumbnail ? (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={work.thumbnail.url}
                            alt={work.title || "Work"}
                            width={work.thumbnail.width}
                            height={work.thumbnail.height}
                            className={styles.image}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ) : (
                    <p>No Image Available</p>
                )}
            </div>

            <div className={styles.info}>
                {work.description && (
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: work.description }} />
                )}

                <div className={styles.meta}>
                    {work.size && <p>Size: {work.size}</p>}
                    {work.year && <p>Year: {work.year}</p>}
                </div>
            </div>
        </article>
    );
}
