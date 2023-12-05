import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { TagFilters } from "@/constants/filters";
import NoResult from "@/components/shared/no-result/NoResult";
import TagCard from "@/components/shared/cards/TagCard";
import { getAllTags } from "@/lib/actions/tag.actions";

const Tags = async () => {
  const result = await getAllTags({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/tags"
          iconPosition="left"
          imgIcon="/assets/icons/search.svg"
          placeholder="Search for tags"
          classes="flex-1"
        />
        <Filter filters={TagFilters} classes="min-h-[56px] sm:min-w-[170px]" />
      </div>
      {/* <HomePageFilter /> */}

      <section className="mt-10 flex w-full gap-[10px] flex-wrap">
        {result!.tags.length ? (
          result!.tags.map((tag) => <TagCard key={tag._id} tag={tag} />)
        ) : (
          <NoResult
            title="There no tags to show"
            description="It looks like there are no tags found."
            linkText="Ask a question"
            linkUrl="/ask-question"
          />
        )}
      </section>
    </>
  );
};

export default Tags;
