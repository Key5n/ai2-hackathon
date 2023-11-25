export type User = {
  id: number;
  name: string;
  studentNumber: number;
  score: {
    programming: number;
    leader: number;
    idea: number;
  };
};
