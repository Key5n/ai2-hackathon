import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

export function useUser() {
  const { data } = useSWR("/api/user", fetcher, { suspense: true });
  return { user: data };
}
