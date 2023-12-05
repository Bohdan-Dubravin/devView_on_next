import Link from "next/link";
import { ITag } from "@/database/tag.model";

interface TagCardProps {
  tag: ITag;
}

const TagCard = ({ tag }: TagCardProps) => {
  return (
    <Link href={`/tags/${tag._id}`}>
      <article className="light-border shadow-light100_darknone card-wrapper background-light900_dark200 text-dark400_light500  w-full rounded-2xl border px-8 py-10 sm:w-[260px]">
        <div className="background-light800_dark400 w-fit rounded-[4px] px-5 py-1.5">
          <p className="paragraph-semibold text-dark300_light900">{tag.name}</p>
        </div>
        <p className="small-medium text-dark400_light500 mt-4">
          <span className="body-semibold primary-text-gradient mr-2.5">
            {tag.questions.length}+
          </span>
          Questions
        </p>
      </article>
    </Link>
  );
};

export default TagCard;
