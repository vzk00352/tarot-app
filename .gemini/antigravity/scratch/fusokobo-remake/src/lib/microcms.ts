import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { Work, Profile } from "@/types";

// If no API key is provided, we will return mock data for development.
const apiKey = process.env.MICROCMS_API_KEY || "mock-key";
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || "mock-domain";

export const client = createClient({
    serviceDomain,
    apiKey,
});

// Mock data generator
const generateMockWorks = (): Work[] => {
    return Array.from({ length: 6 }).map((_, i) => ({
        id: `mock-${i}`,
        title: `Work ${i + 1}`,
        thumbnail: { url: "https://placehold.co/400x600/png", height: 600, width: 400 },
        category: ["Art Dolls"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
    }));
};

export const getWorks = async (queries?: MicroCMSQueries) => {
    if (apiKey === "mock-key") {
        // console.warn("Using mock data for Works");
        return { contents: generateMockWorks(), totalCount: 6, offset: 0, limit: 10 };
    }
    try {
        const listData = await client.getList<Work>({
            endpoint: "works",
            queries,
        });
        return listData;
    } catch (error) {
        console.error("Failed to fetch works:", error);
        return { contents: [], totalCount: 0, offset: 0, limit: 0 };
    }
};

export const getWorkDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    if (apiKey === "mock-key") {
        return generateMockWorks()[0];
    }
    try {
        const detailData = await client.getListDetail<Work>({
            endpoint: "works",
            contentId,
            queries,
        });
        return detailData;
    } catch (error) {
        console.error("Failed to fetch work detail:", error);
        return null;
    }
};

export const getProfile = async (queries?: MicroCMSQueries) => {
    if (apiKey === "mock-key") {
        return {
            id: "mock-profile",
            body: "<p>Fusako Nakagawa is a doll artist...</p>",
            image: { url: "https://placehold.co/400x400", height: 400, width: 400 },
        } as Profile;
    }
    try {
        const objectData = await client.getObject<Profile>({
            endpoint: "profile",
            queries,
        });
        return objectData;
    } catch (error) {
        console.error("Failed to fetch profile:", error);
        return null;
    }
};
