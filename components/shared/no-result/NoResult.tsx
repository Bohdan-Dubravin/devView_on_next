import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface NoResultProps {
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

const NoResult = ({ title, description, linkText, linkUrl }: NoResultProps) => {
  return (
    <div className="flex-center mt-10 w-full flex-col ">
      <Image
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        alt="No result illustration"
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        alt="No result illustration"
        className="hidden object-contain dark:block"
      />
      <h2 className="h2-bold  text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={linkUrl}>
        <Button className="paragraph-medium mt-5  min-h-[46px] rounded-md bg-primary-500 px-4 py-3 text-light-900 ">
          {linkText}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
