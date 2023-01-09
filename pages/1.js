export default function One() {
  return (
    <>
      <div className="w-screen h-screen flex gap-4">
        <div className=" w-1/3 h-full bg-purple-700"></div>
        <div className=" w-full h-full  gap-4 flex flex-col">
          <div className=" bg-purple-700 h-32 w-full"></div>
          <div className=" h-full w-full flex gap-4">
            <div className="w-1/2 h-full bg-purple-700"></div>
            <div className="w-1/2 h-full bg-purple-700"></div>
          </div>
        </div>
      </div>
    </>
  );
}
