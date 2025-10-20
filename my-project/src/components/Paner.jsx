import ImgLB from "../assets/imgLB.png"; 
import ImgSI from "../assets/imgSI.png"; 
import ImgTA from "../assets/imgTA.png"; 

export default function Paner() {
  return (
    <section className="pt-[100px]">
      <div
        className="
          mx-auto w-full
          max-w-[calc(100vw-32px)]
          sm:max-w-[calc(100vw-64px)]
          md:max-w-[1410px]
        "
      >
        <div className="grid md:grid-cols-2 gap-4 md:h-[600px]">
          <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-auto md:h-full">
            <img
              src={ImgTA}
              alt="The Art of Prosperity"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-black">
              <p className="uppercase text-xs sm:text-sm">HOT LIST</p>
              <h3 className="mt-2 font-semibold text-[18px] sm:text-[20px]">
                THE ART OF PROSPERITY
              </h3>
              <button className="mt-3 underline underline-offset-4 text-sm">
                XEM BỘ SƯU TẬP
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-auto md:h-[285px]">
              <img
                src={ImgLB}
                alt="Love Blooms"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <p className="uppercase text-xs sm:text-sm">HOT LIST</p>
                <h3 className="mt-2 font-semibold text-[18px] sm:text-[20px]">
                  LOVE BLOOMS
                </h3>
                <button className="mt-3 underline underline-offset-4 text-sm">
                  XEM BỘ SƯU TẬP
                </button>
              </div>
            </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-auto md:h-[285px]">
                <img
                  src={ImgSI}
                  alt="Step Into Spring"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <p className="uppercase text-xs sm:text-sm">HOT LIST</p>
                  <h3 className="mt-2 font-semibold text-[18px] sm:text-[20px]">
                    STEP INTO SPRING
                  </h3>
                  <button className="mt-3 underline underline-offset-4 text-sm">
                    XEM BỘ SƯU TẬP
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-auto md:h-[285px] bg-[#F4C400]">
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8">
                  <h3 className="font-semibold text-[18px] sm:text-[20px]">
                    THẺ QUÀ TẶNG
                  </h3>
                  <p className="mt-3 text-sm text-black/80 leading-relaxed">
                    Surprise someone with the gift
                    <br /> they really want.
                  </p>
                  <button className="mt-4 underline underline-offset-4 text-sm inline-block self-start">
                    XEM NGAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
