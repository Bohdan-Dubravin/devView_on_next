import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomePageFilter from "@/components/home-page-filter/HomePageFIlter";
import { HomePageFilters } from "@/constants/filters";

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="ml-auto">
          <Button className="primary-gradient px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgIcon="/assets/icons/search.svg"
          placeholder="Search for questions"
          classes="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          classes="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
        <HomePageFilter />
      </div>
    </>
  );
};

export default Home;
