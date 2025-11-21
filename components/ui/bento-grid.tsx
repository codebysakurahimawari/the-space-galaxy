"use client";

import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 my-12 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,                    // ✅ ADDED
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;          // ✅ ADDED
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-900 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-gray-800 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {/* If image exists, display it */}
      {image ? (
        <img
          src={image}
          alt={title?.toString()}
          className="w-full h-40 object-cover rounded-lg"
        />
      ) : (
        header
      )}

      <div className="relative transition duration-200 group-hover/bento:translate-x-2">
       <div className="absloute inset-0"> {icon}</div>
        <div className="mt-2  font-sans font-light text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-[#adb7e9] ">
          {description}
        </div>
      </div>
    </div>
  );
};
