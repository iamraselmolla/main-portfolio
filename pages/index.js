import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import TabRouting from "@/Components/Home/TabRouting";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Md Rasel Molla";
  }, []);
  return (
    <>
      <Navbar />
      <div className=" sm:px-0 xl:px-44 grid grid-cols-12 md:gap-10 justify-between lg:mt-[150px] mt-36">
        <div className="col-span-12 lg:col-span-4  lg:block h-screen  lg:sticky lg:top-36 ">
          <FixedDetails />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <TabRouting />
        </div>
      </div>
    </>
  );
}
