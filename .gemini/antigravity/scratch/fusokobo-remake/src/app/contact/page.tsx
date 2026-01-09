'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mkgdawrd', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>CONTACT</h2>
                <div className={styles.successMessage}>
                    <p>お問い合わせありがとうございます。</p>
                    <p>内容を確認の上、ご連絡いたします。</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>CONTACT</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">お名前 *</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">メールアドレス *</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">お問い合わせ内容 *</label>
                    <textarea id="message" name="message" required />
                </div>

                {status === 'error' && (
                    <div className={styles.errorMessage}>
                        送信に失敗しました。時間をおいて再度お試しください。
                    </div>
                )}

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? '送信中...' : '送信する'}
                </button>
            </form>
        </div>
    );
}
