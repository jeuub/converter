import { ClassName } from "@/global-types";

type ClassNameObject = {
  [key: string]: boolean;
};

type TClsx = Array<ClassName | ClassNameObject>;

export default function clsx(...classNames: TClsx): ClassName {
  const resultClasses: Array<ClassName> = [];

  classNames.forEach((className) => {
    switch (typeof className) {
      case "string":
        resultClasses.push(className);
        break;
      case "object":
        Object.entries(className).forEach((classPare) => {
          const [className, availability] = classPare;
          if (availability) {
            resultClasses.push(className);
          }
        });
        break;
    }
  });

  return resultClasses.join(" ");
}
