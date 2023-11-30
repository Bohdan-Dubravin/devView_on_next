import RenderTag from "@/components/ui/RenderTag";
import Link from "next/link";
import { IUser } from "@/database/user.model";
import { ITag } from "@/database/tag.model";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface UserCardProps {
  user: IUser;
  tags: ITag[];
}

const UserCard = ({
  user: { _id, picture, name, username, clerkId },
  tags,
}: UserCardProps) => {
  return (
    <article className="light-border shadow-light100_darknone card-wrapper  w-full rounded-2xl border  p-8  max-xs:min-w-full  xs:w-[260px]">
      <Link href={`/profile/${clerkId}`}>
        <div className="flex-center flex-col">
          <Image
            src={picture}
            width={100}
            height={100}
            alt="user avatar"
            className="mb-4 rounded-full"
          />
          <h3 className="sm:h3-bold base-semibold text-dark500_light500 mb-2 line-clamp-1">
            {name}
          </h3>

          <p className="body-regular text-light400_light500">@{username}</p>
        </div>
      </Link>
      <div className="flex-center mt-5 gap-2">
        {tags.length ? (
          tags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name.slice(0, 3)}
            />
          ))
        ) : (
          <Badge>No Tags yet</Badge>
        )}
      </div>
    </article>
  );
};

export default UserCard;
