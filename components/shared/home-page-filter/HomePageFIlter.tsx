"use client";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../../ui/button";
import clsx from "clsx";

const HomePageFilter = () => {
  const active = "Newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          className={clsx(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            {
              "bg-primary-100 text-primary-500": active === filter.name,
              "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400":
                active !== filter.name,
            }
          )}
          onClick={() => {}}
          key={filter.value}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomePageFilter;
