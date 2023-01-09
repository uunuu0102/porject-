export default function plan() {
  return (
    <div className="w-screen h-full ">
      <div className="h-20 w-full bg-slate-300 flex justify-between items-center px-10 shadow shadow-slate-800">
        <div className="border-slate-50/40 border-2 hover:shadow-lg hover:shadow-pink-400 bg-slate-50 bg-opacity-100 backdrop-blur-md  mt-0  w-30 h-30 rounded-full items-center justify-center flex">
          <img
            src="dribbble_girl.gif"
            className=" w-16 h-16  rounded-full hover:scale-125 hover:cursor-pointer animate-pulse "
          />
          {/* <div className=" w-32 h-32  rounded-full bg-slate-400 animate-pulse"></div> */}
        </div>
        <div className="w-96 h-16  flex items-center justify-end gap-4">
          <div> Нүүр</div>
          <div> Танилцуулга</div>
          <div> Холбоо барих</div>
        </div>
      </div>
      <div className=" flex items-center">
        <div className="z-10 w-1/3 h-1/3 bg-slate-50 bg-opacity-20 backdrop-blur-md flex flex-col items-center border border-slate-50/40">
          <div className="border-slate-50/40 border-2 bg-slate-50 bg-opacity-50 backdrop-blur-md w-20 h-20 rounded-full mt-4 items-center justify-center flex">
            <img src="women.jfif" className=" w-16 h-16 rounded-full" />
          </div>
          <h1 className=" font-bold text-slate-50">
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </h1>
          <div className=" text-sm text-slate-50">
            hhhhhhhhhhhhhhhhhhhhhhhhhh
          </div>

          <button className="text-slate-50 text-sm backdrop-blur-md border border-slate-50/20 mt-8 w-40 h-12 rounded">
            View Profile
          </button>
          <div className=" relative w-full h-full flex justify-center mt-12">
            <button className="  bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              95% <div> Rating</div>
            </button>
            <button className="bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              92%<div> Activity</div>
            </button>
            <div className=" absolute z-30 w-[1px] h-10 bg-slate-50  rounded-full top-2"></div>
          </div>
        </div>
        <div className="z-10 w-1/3 h-1/3 bg-slate-50 bg-opacity-20 backdrop-blur-md flex flex-col items-center border border-slate-50/40">
          <div className="border-slate-50/40 border-2 bg-slate-50 bg-opacity-50 backdrop-blur-md w-20 h-20 rounded-full mt-4 items-center justify-center flex">
            <img src="women.jfif" className=" w-16 h-16 rounded-full" />
          </div>
          <h1 className=" font-bold text-slate-50">
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </h1>
          <div className=" text-sm text-slate-50">
            hhhhhhhhhhhhhhhhhhhhhhhhhh
          </div>

          <button className="text-slate-50 text-sm backdrop-blur-md border border-slate-50/20 mt-8 w-40 h-12 rounded">
            View Profile
          </button>
          <div className=" relative w-full h-full flex justify-center mt-12">
            <button className="  bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              95% <div> Rating</div>
            </button>
            <button className="bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              92%<div> Activity</div>
            </button>
            <div className=" absolute z-30 w-[1px] h-10 bg-slate-50  rounded-full top-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
