import QuestionForm from "@/components/widgets/forms/QuestionForm";
import { getUser } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("sign-in");
  }

  const user = await getUser({ userId });

  console.log(user);

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
