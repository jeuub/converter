export type TDirection = {
  code: string;
  name: string;
}

export type TDirections = TDirection[]

export type TConvertaion = {
  from: TDirection,
  to: TDirections
}