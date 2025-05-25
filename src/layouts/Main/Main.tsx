import { Chip } from "@heroui/react";
import Card from "@/components/Card/Card";
import northAmericanPopularSports from "@/utils/northAmericanPopular";
import { useState } from "react";

function Main() {
  const [currentlySelectedSport, setCurrentlySelectedSport] =
    useState<number>(0);

  const currentMajorLeagueSports = northAmericanPopularSports.map(
    (sportName, index) => {
      const selected = index === currentlySelectedSport;

      return (
        <Chip
          key={index}
          color={selected ? "primary" : "default"}
          variant={selected ? "solid" : "light"}
          onClick={() => setCurrentlySelectedSport(index)}
        >
          {sportName}
        </Chip>
      );
    }
  );

  return (
    <Card
      title={<div className="flex gap-4">{currentMajorLeagueSports}</div>}
      className="bg-stone-800 text-white min-w-full h-5/10"
    >
      <p className="text-sm m-auto">No current picks</p>
    </Card>
  );
}

export default Main;
