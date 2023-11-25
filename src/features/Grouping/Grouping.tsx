import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import { useScore } from "./useScore";
import { useParams } from "react-router-dom";
import { useGroupInfo } from "./useGroupInfo";
import { Success } from "./Success";

export function Grouping() {
  const { classId } = useParams();
  if (classId === undefined) {
    throw new Error("error");
  }
  const { scores } = useScore();
  const { groupInfo } = useGroupInfo(classId);

  return (
    <div className="p-4">
      {scores.length >= groupInfo.memberCount ? (
        <Suspense fallback={<Spinner />}>
          <Success />
        </Suspense>
      ) : (
        <div>
          <div>未回答ユーザーが存在します。</div>
          <div>回答者数：{scores.length}</div>
          <div>必要回答者数：{groupInfo.memberCount}</div>
        </div>
      )}
    </div>
  );
}
