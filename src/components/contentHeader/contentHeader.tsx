import { Props } from "./";

const ContentHeader = ({ title }: Props) => {
  return (
    <div className="h-[100px] w-full flex justify-start items-center px-6 border-b border-neutral-st3-default">
      <h2 className="text-lg font-semibold ">{title}</h2>
    </div>
  );
};

export default ContentHeader;
