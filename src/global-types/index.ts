export type TDirection = {
  code: string;
  name: string;
}

export type TDirections = TDirection[]

export type TConvertation = {
  from: TDirection,
  to: TDirections
}