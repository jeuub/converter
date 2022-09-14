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
  from: Omit<TDirection, "tag">;
  to: TDirections;
};

export type ClassName = string;
