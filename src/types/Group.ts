export type Group = {
  name: string;
  members: string[];
};

export type GroupInfo = {
  id: number;
  name: string;
  memberCount: number;
  isEnd: boolean;
};
