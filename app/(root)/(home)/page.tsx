import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomePageFilter from "@/components/shared/home-page-filter/HomePageFIlter";
import { HomePageFilters } from "@/constants/filters";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import NoResult from "@/components/shared/no-result/NoResult";

const questions = [
  {
    _id: "1",
    title: "Cascading SQL on delete  schema",
    tags: [
      { _id: "1", name: "Python" },
      { _id: "2", name: "SQL" },
    ],
    author: { _id: "1", name: "John Doe", picture: "/assets/icons/avatar.svg" },
    upvotes: 10,
    views: 879,
    answers: [],
    createdAt: "2023-09-01T12:00:00.000Z",
  },
  {
    _id: "2",
    title: "JS closure functionality",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "functions" },
    ],
    author: { _id: "1", name: "Will Toe", picture: "/assets/icons/avatar.svg" },
    upvotes: 23,
    views: 1078,
    answers: [],
    createdAt: "2022-09-01T12:00:00.000Z",
  },
];

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
      </div>
      <HomePageFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length ? (
          questions.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))
        ) : (
          <NoResult
            title="There no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            linkText="Ask a Question"
            linkUrl="/ask-question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
