import { StaticImageData } from "next/image";
import Image from "next/image"; // Import Image component from next/image

interface Menu {
  icon?: StaticImageData;
  title: string;
  clickHandler?: (event: MouseEvent) => void;
}

const IconMenuOption = ({ icon, title, clickHandler }: Menu) => {
  return (
    <a className="w-full mb-1 p-3 cursor-pointer text-sm flex gap-4 items-center hover:bg-violet-100 rounded-md transition ease-in delay-150 ">
      <Image src={icon || ""} alt={title} width={18} />
      {title}
    </a>
  );
};

export default IconMenuOption;
