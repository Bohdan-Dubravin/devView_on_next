"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterT } from "@/types";

import clsx from "clsx";

interface FilterProps {
  filters: FilterT[];
  classes?: string;
  containerClasses?: string;
}

const Filter = ({ filters, classes, containerClasses }: FilterProps) => {
  return (
    <div className={clsx("relative ", containerClasses)}>
      <Select>
        <SelectTrigger
          className={clsx(
            "background-light800_dark300 body-regular  text-dark500_light700  px-5 py-2.5",
            classes
          )}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem
                className="p-2"
                key={filter.value}
                value={filter.value}
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
