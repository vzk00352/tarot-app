import WorkGrid from "@/components/works/WorkGrid";
import { getWorks } from "@/lib/microcms";

export default async function Home() {
  // Fetch works specifically tagged for Top page
  const { contents: works } = await getWorks({
    limit: 10,
    filters: 'category[contains]Top'
  });

  return (
    <div>
      <WorkGrid works={works} disableLink={true} />
    </div>
  );
}
