interface QuestionCardProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string; picture?: string };
  upvotes: number;
  answers: Object[];
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  upvotes,
  author,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 max-sm:px-2">
      <div className="flex"></div>
      QuestionCard
    </div>
  );
};

export default QuestionCard;
