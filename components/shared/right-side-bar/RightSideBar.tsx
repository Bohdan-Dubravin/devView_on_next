import RenderTag from "@/components/ui/RenderTag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: "1", title: "test1 grre gerg erg reghewwe juyjyujuy" },
    { _id: "2", title: "test2" },
    { _id: "3", title: "test3" },
    { _id: "4", title: "test4" },
    { _id: "5", title: "test5" },
  ];

  const popularTags = [
    { _id: "1", name: "javaScript", totalQuestions: 8772 },
    { _id: "2", name: "tag 2", totalQuestions: 8772 },
    { _id: "3", name: "tag 3", totalQuestions: 8772 },
    { _id: "4", name: "tag 4", totalQuestions: 8772 },
    { _id: "5", name: "tag 5", totalQuestions: 8772 },
  ];

  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen  w-[350px]  flex-col overflow-y-auto border-l px-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top questions</h3>
      <ul className="mt-7 flex w-full   flex-col  gap-[30px]">
        {hotQuestions.map((question) => (
          <Link
            className="flex-between cursor-pointer  gap-7"
            key={question._id}
            href="/"
          >
            <p className="body-medium text-dark500_light700">
              {question.title}
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              height={20}
              width={20}
              alt="chevron-right"
              className="invert-colors"
            />
          </Link>
        ))}
      </ul>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
