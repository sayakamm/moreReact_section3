import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
  };
  return (
    // レンダリング確認用のコードを書く
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
