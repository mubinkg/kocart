import { ChevronDown, X } from "lucide-react";
import React from "react";
import navbarItems from "@/constants/navbar";

type Props = {
  setIsMenuOpen: (value: boolean) => void;
};

type MenuItemProps = {
  text: string;
  url: string;
  subItems: Array<{ text: string; url: string }>;
};

function MenuDropDown({ text, url, subItems }: MenuItemProps) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="font-medium border px-3 py-2 rounded-lg  bg-opacity-20 ">
      <div className="flex justify-between">
        <h2 className="text-xl" onClick={() => setToggle(!toggle)}>
          {text}
        </h2>
        <ChevronDown onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <div className="flex flex-col text-base py-2">
          {subItems.map((subItem, key) => (
            <a
              key={key}
              href={subItem.url}
              className="py-1 px-6 rounded-sm hover:text-white hover:bg-primaryc text-lg"
            >
              {subItem.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const MenuModal = ({ setIsMenuOpen }: Props) => {
  return (
    <div className="w-2/3 fixed bg-white h-screen z-20 right-0 top-0 py-10 px-5 overflow-y-scroll">
      <div className="flex w-full justify-between">
        <h2 className="text-2xl">Browse our collections</h2>
        <X onClick={() => setIsMenuOpen(false)} />{" "}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {navbarItems.map((item, key) => {
          if (item.subItems.length > 0) {
            return (
              <MenuDropDown
                text={item.text}
                url={item.url}
                subItems={item.subItems}
                key={key}
              />
            );
          } else {
            return (
              <a
                key={key}
                href={item.url}
                className="hover:text-secoundaryc text-xl font-medium border px-3 py-2 rounded-lg"
              >
                {item.text}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MenuModal;
