import Link from "next/link";
import { Badge } from "./badge";

interface RenderTagProps {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({
  name,
  _id,
  totalQuestions,
  showCount = false,
}: RenderTagProps) => {
  return (
    <Link href={`/tags/${_id}`} className="flex-between cursor-pointer">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}+</p>
      )}
    </Link>
  );
};

export default RenderTag;
