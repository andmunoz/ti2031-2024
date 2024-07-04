import Image from "next/image";

export default function Post() {
  return (
    <div className={`flex flex-col items-center justify-between p-24`}>
      <h1>Single Post</h1>
      <hr style={{ width: '100%' }} />
    </div>
  );
}