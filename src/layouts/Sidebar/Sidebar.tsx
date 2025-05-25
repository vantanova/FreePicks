import useFetch from "@/utils/useFetch";
import Card from "@/components/Card/Card";

import popularSports from "@/utils/getPopularSports";
import constants from "@/utils/constants";
import { Sport } from "@/types/sports";

function Sidebar() {
  // const {
  //   data: currentSports,
  //   loading,
  //   error,
  // } = useFetch(constants.urls.currentSports);

  // const contentLoaded = currentSports != null && !loading;

  // if (contentLoaded) {
  //   const typedCurrentSports = currentSports as Sport[];

  //   const popularSportsArray = popularSports(typedCurrentSports);

  //   if (useNorthAmericanSports) {
  //     sportsNameArray = [...northAmericanPopularSports];
  //   } else {
  //     sportsNameArray = [...popularSportsArray];
  //   }
  // }

  return (
    <Card
      title="Popular"
      className="bg-stone-800 text-white min-w-[150px] max-w-[200px]"
    >
      {/* {contentLoaded &&
        sportsNameArray.map((sportsName, index) => {
          return (
            <div key={index}>
              <p className="text-sm pt-2">{sportsName}</p>
            </div>
          );
        })}
      {error != null && (
        <p className="text-sm pt-2">Unable to load popular sports</p>
      )} */}
      <p>rework</p>
    </Card>
  );
}

export default Sidebar;
