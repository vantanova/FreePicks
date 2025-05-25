export interface Sport {
  active: boolean;
  description: string;
  group: string;
  has_outrights: boolean;
  key: string;
  title: string;
}

export interface Event {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
}

interface Bookmaker {
  key: string;
  title: string;
  last_update: string;
  markets: Market[];
}

interface Market {
  key: string;
  last_update: string;
  outcomes: Outcome[];
}

interface Outcome {
  name: string;
  price: number;
}
