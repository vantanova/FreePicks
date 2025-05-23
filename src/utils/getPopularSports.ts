import type { Sport } from "@/types/sports";

function popularSports(sportsListArray: Sport[]) {
  const duplicateGroupArray = sportsListArray.map((sport) => sport.group);
  const groupSet = new Set(duplicateGroupArray);
  const groupArray = Array.from(groupSet);

  return groupArray;
}

export default popularSports;
