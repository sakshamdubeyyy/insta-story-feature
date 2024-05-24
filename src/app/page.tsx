import Image from "next/image";
import Stories from "./Stories/Stories"

export default function Home() {
  return (
    <div className="h-screen relative">
      <div className="flex justify-center">
        <Stories/>
      </div>
    </div>
  );
}
