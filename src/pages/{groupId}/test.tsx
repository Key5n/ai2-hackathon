import { useParams } from "react-router-dom";

export function Test() {
  const { classId } = useParams();
  return <div>test :{classId}</div>;
}
