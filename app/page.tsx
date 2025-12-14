"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0); // useState!
  return (
    <div className="min-h-screen bg-linear-to-br from-[#388fff] to-[#4538ff] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 bg-linear-to-br from-[#388fff] to-[#4538ff]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className={"text-6xl self-center my-10"}>Ha<s>xmas</s>nukkah Orpheus Clicker!</h1>
          <p className={"text-3xl font-bold"}>Count: {count}</p>
          <JollyOrpheusClick onClick={() => {setCount(count + 1)}} />
          <p className={"text-3xl font-bold"}>Created by Elliott for day 1 of Haxmas!</p>
        </div>
      </main>
    </div>
  );
}