import WorkGrid from "@/components/works/WorkGrid";
import { getWorks } from "@/lib/microcms";

export default async function HinaDollsPage() {
    const { contents: works } = await getWorks({
        limit: 100,
        filters: 'category[contains]Hina Dolls'
    });

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '2rem 0', letterSpacing: '0.1em' }}>Hina Dolls</h2>
            <WorkGrid works={works} />
        </div>
    );
}
