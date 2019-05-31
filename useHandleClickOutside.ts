import { useEffect, MutableRefObject, useState } from "react";

export const useHandleClickOutside = (
  node: MutableRefObject<Element>,
  initialValue: boolean
): [boolean, (v: boolean) => void] => {
  const [open, setOpen] = useState(initialValue);

  const handleClickOutside = (e: Event) => {
    if (node.current.contains(e.target as Node)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return [open, setOpen];
};
