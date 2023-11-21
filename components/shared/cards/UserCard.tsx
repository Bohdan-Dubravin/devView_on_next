import RenderTag from "@/components/ui/RenderTag";
import Link from "next/link";
import Metric from "../metric/Metric";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { IUser } from "@/database/user.model";
import { title } from "process";
import { ITag } from "@/database/tag.model";

interface UserCardProps {
  user: IUser;
  tags: ITag[];
}

const UserCard = ({
  user: { _id, picture, name, username, joinedAt },
  tags,
}: UserCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 max-sm:px-2">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          {/* <span className="subtle-regular text-dark400_light700 line-clamp-1 ">
            {getTimeStamp(createdAt)}
          </span> */}
          <Link href={`/profile/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light800 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      {/* {if sight in} */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags &&
          tags.map((tag) => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={picture}
          alt="author"
          value={name}
          title={` - asked ${getTimeStamp(joinedAt!)}`}
          href={`/profile/${_id}`}
          isAuthor
          textStyle="body-medium text-dark400_light700"
        />
        <div className="flex-between gap-3">
          <Metric
            imgUrl={picture}
            alt="Upvotes"
            value={formatNumber(5)}
            title="Upvotes"
            textStyle="small-medium text-dark400_light800"
          />
          {/* <Metric
            imgUrl={author.picture}
            alt="Message"
            value={formatNumber(answers?.length)}
            title="Answers"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(views)}
            title="Views"
            textStyle="small-medium text-dark400_light800"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
