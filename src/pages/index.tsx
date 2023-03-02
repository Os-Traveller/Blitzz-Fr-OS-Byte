import { LeftSidebar } from "@/components/left_sidebar/leftSidebar";

export default function Home() {
  return (
    <section className="grid grid-cols-[250px_1fr_300px] h-screen grid-rows-[auto_1fr] bg-white_gray-500">
      <div className="col-span-3">
        <nav>navbar</nav>
      </div>
      <div className="">
        <LeftSidebar />
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
