import useSWR from "swr";
import { GroupInfo } from "../../../types/Group";

const baseUrl = import.meta.env.VITE_API_URL;

export function useSidebar() {
  const { data } = useSWR(`${baseUrl}/api/groups`, fetcher, {
    suspense: true,
  });
  return { groups: data };
}

async function fetcher(url: string): Promise<GroupInfo[]> {
  const result = await fetch(url);
  const json = (await result.json()) as GroupInfo[];
  return json;
}
