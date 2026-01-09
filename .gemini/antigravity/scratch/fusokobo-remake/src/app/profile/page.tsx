import { getProfile } from "@/lib/microcms";
import Image from "next/image";
import styles from "./page.module.scss";

export default async function ProfilePage() {
    const profile = await getProfile();

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>PROFILE</h2>
            <div className={styles.content}>
                {profile.image && (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={profile.image.url}
                            alt="Artist Profile"
                            width={profile.image.width}
                            height={profile.image.height}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                )}
                <div className={styles.body} dangerouslySetInnerHTML={{ __html: profile.body }} />
            </div>
        </div>
    );
}
