export type User = {
  id: string;
  username: string;
  token: string;
  coins: number;
};

export type Game = {
  id: number;
  gameStatus: string;
  idPlayerOne: string | null;
  idPlayerTwo: string;
  pointPlayerOne: number | null;
  pointPlayerTwo: number | null;
  questions: Question[];
  idFormat: string;
};

export type Question = {
  id: number;
  text: string;
  catText: string;
  answers: Answer[];
};

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export type GameBets = {
  id: string;
  questionsBet: Record<number, number> | null;
  bets: Record<number, boolean>;
};
