import React, { useEffect, useState } from "react";

import { TDirections } from "@/global-types";
import { getFilteredDirections } from "@/back";

export const useFilteredDirection = (
  direction: string | undefined
): TDirections => {
  const [filteredDirections, setFilteredDirections] = useState<TDirections>([]);

  useEffect(() => {
    if (direction) {
      getFilteredDirections().then(({ data }) => {
        const directionTo = data.find((el) => el.from.code === direction);
        setFilteredDirections(directionTo?.to ?? []);
      });
    }
  }, [direction]);

  return filteredDirections;
};
