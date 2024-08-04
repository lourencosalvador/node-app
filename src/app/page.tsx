import Image from "next/image";
import { Tags } from "./tags";
import { AddTags } from "./add-tags";

export default function Home() {
  return (
    <>
    <Tags />
    <AddTags />
    </>
  );
}
