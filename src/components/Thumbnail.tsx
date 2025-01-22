import { ButtonGroup } from "./ButtonGroup";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ImageSizes = {
  m: "w-16 h-16",
  s: "h-10 w-10",
};

type SizeKeys = keyof typeof ImageSizes;

type ThumbnailProps = {
  size: SizeKeys;
  src: string;
  filename: string;
  date: string;
  fileType: string;
  buttonVisible: boolean;
};

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div className="flex border border-grey-100 p-2 flex-row gap-2 items-center rounded-lg">
      <img
        src={props.src}
        alt="Thumbnail.png"
        className={`${
          ImageSizes[props.size]
        } rounded-lg resize-cover object-cover self-start`}
      />
      <div className="gap-4">
        <div className="flex flex-col">
          <p className="text-grey-200 text-start text-sm font-semibold">
            {props.filename}
          </p>
          <p className="text-grey-200 text-start text-xs">{props.date}</p>
          <p className="text-grey-200 text-start text-xs mb-2">
            {props.fileType}
          </p>
        </div>

        {props.buttonVisible && (
          <ButtonGroup>
            <MdOutlineFileDownload />
            <RiDeleteBin6Line />
            <RiDeleteBin6Line />
          </ButtonGroup>
        )}
      </div>
    </div>
  );
};
