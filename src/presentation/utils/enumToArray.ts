type Descripted<T> = {
  [K in keyof T]: {
    readonly id: T[K];
    readonly description: string;
  };
}[keyof T];

/**
 * Helper to produce an array of enum descriptors.
 * @param enumeration Enumeration object.
 * @param separatorRegex Regex that would catch the separator in your enum key.
 */
export function enumToDescriptedArray<T>(
  enumeration: T,
  separatorRegex: RegExp = /_/g
): Descripted<T>[] {
  // @ts-ignore
  return (Object.keys(enumeration) as Array<keyof T>)
    .filter((key) => isNaN(Number(key)))
    .filter(
      (key) =>
        typeof enumeration[key] === "number" ||
        typeof enumeration[key] === "string"
    )
    .map((key) => ({
      id: enumeration[key],
      description: String(key).replace(separatorRegex, " "),
    }));
}
