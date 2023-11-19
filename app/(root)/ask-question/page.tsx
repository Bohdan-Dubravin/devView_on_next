import QuestionForm from "@/components/widgets/forms/QuestionForm";
import { getUser } from "@/lib/actions/user.actions";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  // const { userId } = auth();
  const userId = "clerk123";
  if (!userId) {
    redirect("sign-in");
  }

  const user = await getUser({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question </h1>
      <div className="mt-9">
        <QuestionForm userId={JSON.stringify(user._id)} />
      </div>
    </div>
  );
};

export default Page;
