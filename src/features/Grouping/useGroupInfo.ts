import useSWR from "swr";
import { GroupInfo } from "../../types/Group";

const baseUrl = import.meta.env.VITE_API_URL;
export function useGroupInfo(groupId: string) {
  const { data } = useSWR(`${baseUrl}/api/groups/${groupId}`, fetcher, {
    suspense: true,
  });
  return { groupInfo: data };
}

async function fetcher(url: string) {
  const result = await fetch(url);
  const json = (await result.json()) as GroupInfo;
  return json;
}
