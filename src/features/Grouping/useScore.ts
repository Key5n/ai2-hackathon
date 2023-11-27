import useSWR from "swr";

const baseUrl = import.meta.env.VITE_API_URL;
export function useScore() {
  const { data } = useSWR(`${baseUrl}/score`, fetcher, {
    suspense: true,
    refreshInterval: 500,
  });
  return { scores: data };
}

async function fetcher(url: string) {
  const result = await fetch(url);
  const json = (await result.json()) as { studentID: number }[];

  return json.map((value) => {
    return {
      studentNumber: value.studentID,
    };
  });
}
