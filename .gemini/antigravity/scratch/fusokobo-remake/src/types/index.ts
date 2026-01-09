export type MicroCMSImage = {
    url: string;
    height?: number;
    width?: number;
};

export type Work = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    revisedAt?: string;
    title: string;
    thumbnail: MicroCMSImage;
    category: string[];
    description?: string;
    size?: string;
    year?: string;
};

export type Profile = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    revisedAt?: string;
    body: string;
    image?: MicroCMSImage;
};

export type News = {
    id: string;
    title: string;
    publishedAt: string;
    content: string;
};
