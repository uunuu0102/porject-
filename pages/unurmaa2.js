export default function Profile() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center gap-8 relative">
        <img
          className="absolute w-screen h-screen -z-10 left-0 top-0"
          src="digitale.jpg"
        />

        <div className="z-10 pl-12 py-8 bg-slate-10 bg-opacity-50 backdrop-blur-md rounded-xl flex items-center border border-slate-50/50">
          <div className="w-1/2 h-full flex flex-col items-end justify-center">
            <div className="flex flex-col items-center w-80">
              <div className="border-slate-50/40 border-2 hover:shadow-lg hover:shadow-pink-400 bg-slate-50 bg-opacity-100 backdrop-blur-md  mt-5  w-40 h-40 rounded-full items-center justify-center flex">
                <img
                  src="OIP.jpg"
                  className=" w-32 h-32  rounded-full hover:scale-125 hover:cursor-pointer"
                />
              </div>
              <h1 className=" font-bold text-slate-50">С.Өнөрмаа</h1>
              <div className=" text-sm text-slate-50">Програмист</div>
              <div className=" text-sm text-slate-50">
                Мэдээлэл технологийн төв
              </div>

              <div className="w-full h-өглл flex justify-center gap-1 mt-10">
                <button className="bg-slate-50 bg-opacity-20 backdrop-blur-md rounded text-slate-50 w-[40%] py-1 hover:bg-sky-800">
                  Буцах
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-end pr-10 justify-center gap-2 flex-col">
            <div className="relative">
              <div className=" absolute h-[1px] w-20 -left-20 top-10 bg-slate-50  rounded-full ">
                <div className=" text-sm text-slate-50">HTML</div>
              </div>

              <img
                className=" w-28 h-20 rounded-xl hover:scale-125 hover:cursor-pointer"
                src="OIP (2).jfif"
              />
            </div>
            <div className="relative">
              <div className=" absolute h-[1px] w-20 -left-20 top-10 bg-slate-50  rounded-full ">
                <div className=" text-sm text-slate-50">SQL</div>
              </div>
              <img
                className=" w-28 h-20 rounded-xl hover:scale-125 hover:cursor-pointer "
                src="oracle_sql.png"
              />
            </div>
            <div className="relative">
              <div className=" absolute h-[1px] w-20 -left-20 top-10 bg-slate-50  rounded-full ">
                <div className=" text-sm text-slate-50">Office 365</div>
              </div>
              <img
                className=" w-28 h-20 rounded-xl hover:scale-125 hover:cursor-pointer"
                src="R.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className=" absolute z-30 w-[1px] h-10 bg-slate-50  rounded-full top-2"></div> */
}
