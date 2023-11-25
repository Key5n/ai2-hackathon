import useSWR from "swr";
import { separateMembersAndGroupName } from "./separateMembersAndGroupName";

const baseUrl = import.meta.env.VITE_API_URL;

export function useGroup() {
  const { data } = useSWR(`${baseUrl}/student-group-plan`, fetcher, {
    suspense: true,
  });

  return { groups: separateMembersAndGroupName(data) };
}

async function fetcher(url: string): Promise<string[][]> {
  const result = await fetch(url);
  const json = (await result.json()) as string[][];
  return json;
}
