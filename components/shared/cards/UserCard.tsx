import RenderTag from "@/components/ui/RenderTag";
import Link from "next/link";
import { IUser } from "@/database/user.model";
import { ITag } from "@/database/tag.model";
import Image from "next/image";

interface UserCardProps {
  user: IUser;
  tags: ITag[];
}

const UserCard = ({
  user: { _id, picture, name, username, joinedAt },
  tags,
}: UserCardProps) => {
  return (
    <div className="card-wrapper light-border h-[280px] w-[260px] rounded-[10px] border p-[30px]">
      <Link href={`/profile/${_id}`}>
        <div className="flex-center flex-col">
          <Image
            src={picture}
            width={100}
            height={100}
            alt="user avatar"
            className="mb-5 rounded-full"
          />
          <h3 className="sm:h3-semibold base-semibold text-dark200_light800 mb-2 line-clamp-1 flex-1">
            {name}
          </h3>

          <p className="body-regular text-light400_light500">@{username}</p>
        </div>
      </Link>
      <div className="flex-center mt-4 gap-2">
        {tags &&
          tags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name.slice(0, 3)}
            />
          ))}
      </div>
    </div>
  );
};

export default UserCard;
