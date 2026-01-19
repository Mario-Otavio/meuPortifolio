"use client";

import dynamic from "next/dynamic";

const AnimacaoDoCursor = dynamic(
  () => import("@/components/AnimacaoDoCursor"),
  { ssr: false }
);

export default function CursorWrapper() {
  return <AnimacaoDoCursor />;
}
