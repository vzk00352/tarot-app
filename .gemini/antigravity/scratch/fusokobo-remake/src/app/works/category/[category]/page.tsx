import WorkGrid from "@/components/works/WorkGrid";
import { getWorks } from "@/lib/microcms";
import { notFound } from "next/navigation";

// Map URL slugs to CMS category values
const CATEGORY_MAP: { [key: string]: string } = {
    "art-dolls": "Art Dolls",
    "hina-dolls": "Hina Dolls",
    "paris": "Paris",
};

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryName = CATEGORY_MAP[params.category];

    if (!categoryName) {
        // Or return all if unknown, but better 404
        notFound();
    }

    // Note: microCMS filters look like `category[contains]Art Dolls` if array, or `category[equals]Art Dolls` if select
    // We'll assume simple equals or contains logic.
    const { contents: works } = await getWorks({
        filters: `category[contains]${categoryName}`,
    });

    return (
        <div>
            <h2 style={{ marginBottom: '40px', fontSize: '1.5rem', fontFamily: 'serif' }}>{categoryName}</h2>
            <WorkGrid works={works} />
        </div>
    );
}
