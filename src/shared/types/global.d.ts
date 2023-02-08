//needed to import css Modules and also help with autocomplete in css Modules
declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

//needed to import svg
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
