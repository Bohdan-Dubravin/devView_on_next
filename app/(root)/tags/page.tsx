import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { UserFilters } from "@/constants/filters";
import NoResult from "@/components/shared/no-result/NoResult";
import { getAllUsers } from "@/lib/actions/user.actions";

import TagCard from "@/components/shared/cards/TagCard";

const Home = async () => {
  const data = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/tags"
          iconPosition="left"
          imgIcon="/assets/icons/search.svg"
          placeholder="Search by tag name"
          classes="flex-1"
        />
        <Filter filters={UserFilters} classes="min-h-[56px] sm:min-w-[170px]" />
      </div>
      {/* <HomePageFilter /> */}

      <section className="mt-10 flex w-full gap-[10px]">
        {data!.users.length ? (
          data!.users.map((user) => (
            <TagCard key={user._id} user={user} tags={data!.tags} />
          ))
        ) : (
          <NoResult
            title="There no tags to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            linkText="Sign Up"
            linkUrl="/sign-up"
          />
        )}
      </section>
    </>
  );
};

export default Home;
