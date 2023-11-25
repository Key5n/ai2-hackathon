import {
  Button,
  Divider,
  Link,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL;

export function Test() {
  const { classId } = useParams();

  async function handleClick() {
    const data = {
      studentID: 25,
      progScore: 1,
      leadScore: 3,
      ideaScore: 5,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${baseUrl}/score-save`, options);
  }

  return (
    <div className="m-4">
      <h1>テスト</h1>
      <div className="py-4">
        <h2>Q1 int 型のビット数を答えよ。</h2>
        <RadioGroup>
          <Radio value={"16"}>16ビット</Radio>
          <Radio value={"32"}>32ビット</Radio>
          <Radio value={"64"}>64ビット</Radio>
          <Radio value={"不定"}>不定</Radio>
        </RadioGroup>
      </div>
      <Divider />
      <div className="py-4">
        <h2>
          Q2
          Javaがプラットフォームに依存しない言語であると言われる理由は何ですか。"
        </h2>
        <RadioGroup>
          <Radio value={"everyone"}>誰でも使えるから</Radio>
          <Radio value={"JVM"}>Java が JVM 上で実行されるから</Radio>
          <Radio value={"easy"}>簡単な言語だから</Radio>
        </RadioGroup>
      </div>
      <Divider />
      <div className="py-4">
        <h2>
          Q3 チームメンバーとのコミュニケーションで大事にすることは何ですか
        </h2>
        <Textarea
          isRequired
          labelPlacement="outside"
          placeholder="Enter your description"
        />
      </div>
      <Divider />
      <div className="py-4">
        <h2>
          Q3
          日常生活における小さな不便を解消するための新しいガジェットを考えてください。それはどのように機能し、どのように役立つでしょうか？
        </h2>
        <Textarea
          isRequired
          labelPlacement="outside"
          placeholder="Enter your description"
        />
      </div>
      <Button
        href={`/${classId}/result`}
        color="primary"
        as={Link}
        showAnchorIcon
        onClick={handleClick}
      >
        送信
      </Button>
    </div>
  );
}
