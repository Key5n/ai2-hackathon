import useSWR from "swr";
import { User } from "../../types/User";

const baseUrl = import.meta.env.VITE_API_URL;

export function useUser(userId: string) {
  const { data } = useSWR(`${baseUrl}/student/${userId}`, fetcher, {
    suspense: true,
  });
  return { user: data };
}

async function fetcher(url: string): Promise<User> {
  const result = await fetch(url);
  const json = await result.json();

  const user: User = {
    id: json.id,
    name: json.name,
    studentNumber: json.num,
    score: {
      programming: json.score[0],
      leader: json.score[1],
      idea: json.score[2],
    },
  };
  return user;
}
