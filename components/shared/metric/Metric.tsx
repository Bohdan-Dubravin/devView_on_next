import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface MetricProps {
  imgUrl?: string;
  title: string;
  alt?: string;
  value: number | string;
  textStyle?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl = "",
  alt = "",
  title,
  value,
  textStyle,
  href,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        className={clsx("object-contain", { "rounded-full": href })}
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
      />
      <p className={clsx("flex items-center gap-1", textStyle)}>
        {value}
        <span
          className={clsx("small-regular line-clamp-1", {
            "max-sm:hidden": isAuthor,
          })}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center  gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1"> {metricContent}</div>;
};

export default Metric;
