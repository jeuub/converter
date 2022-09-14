export enum DirectionTags {
  "crypto",
  "cash",
  "bank",
}

export type TDirection = {
  code: string;
  name: string;
  tag: keyof typeof DirectionTags;
};

export type TDirections = TDirection[];

export type TConvertation = {
  from: TDirection;
  to: TDirections;
};
export type TConvertations = TConvertation[];

export type ClassName = string;
