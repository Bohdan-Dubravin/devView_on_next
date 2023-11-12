import QuestionForm from "@/components/widgets/forms/QuestionForm";

const Page = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question </h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default Page;
