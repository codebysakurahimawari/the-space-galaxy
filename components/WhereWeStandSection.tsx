import Image from "next/image";
import { LayoutTextFlip } from "./ui/layout-text-flip";

export default function WhereWeStandSection() {
    return (
        <section className="relative overflow-hidden max-w-7xl mx-auto bg-white dark:bg-black">
            <div className="mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  items-center">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="max-w-xl">
                        <p className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-4">
                            Space Policy & Advocacy
                        </p>

                        <LayoutTextFlip
                            text="WHERE WE STAND ON THE"
                            words={["ISSUES", "MISSIONS", "GOALS", "EXPLORE"]}
                        />

                        <div className="my-8">
                            <p className="my-4 text-left text-base leading-snug !text-[#adb7e9]">
                                We champion a bold, science-driven vision for the future of space exploration.
                                From securing sustained investments in NASA’s science portfolio to driving
                                bipartisan support for next-generation missions, our work ensures that humanity
                                continues to expand its reach across the solar system.</p>

                            <p className="my-2 text-[#adb7e9]"> Our advocacy strengthens
                                the backbone of discovery — advancing planetary defense, accelerating Mars sample
                                return, protecting critical Earth-observation programs, and elevating the search
                                for life beyond Earth from aspiration to actionable policy.
                            </p>

                            <p className="mb-6 text-left text-base leading-snug !text-[#adb7e9]">
                                Together with scientists, policymakers, and supporters across the nation, we’re
                                shaping a future where exploration is prioritized, innovation is empowered, and
                                the next giant leap becomes inevitable.
                            </p>

                        </div>
                        <button className="bg-gray-900 border border-gray-700 text-[#adb7e9] py-2 px-8 rounded-md text-sm hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                            LEARN MORE
                        </button>
                    </div>

                    {/* RIGHT: PERFECT 3×3 IMAGE GRID */}
                    <div className="grid grid-cols-3 gap-3">

  {/* LEFT COLUMN – vertically centered */}
  <div className="flex flex-col gap-3 justify-center">
    {[
      "/card-images/Explore (1).jpg",
      "/card-images/Explore (2).jpg",
    ].map((src, i) => (
      <div
        key={`Explore${i}`}
        className="rounded-md overflow-hidden shadow-lg border border-gray-800"
      >
        <Image
          src={src}
          alt={`Left image ${i + 1}`}
          width={500}
          height={500}
          className="w-full h-40 md:h-48 lg:h-56 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    ))}
  </div>

  {/* CENTER COLUMN – 3 cards */}
  <div className="flex flex-col gap-3">
    {[
      "/card-images/Explore (3).jpg",
      "/card-images/Explore (4).jpg",
      "/card-images/Explore (5).jpg",
    ].map((src, i) => (
      <div
        key={`center-${i}`}
        className="rounded-md overflow-hidden shadow-lg border border-gray-800"
      >
        <Image
          src={src}
          alt={`Center image ${i + 1}`}
          width={500}
          height={500}
          className="w-full h-40 md:h-48 lg:h-56 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    ))}
  </div>

  {/* RIGHT COLUMN – vertically centered */}
  <div className="flex flex-col gap-3 justify-center">
    {[
      "/card-images/Explore (6).jpg",
      "/card-images/Explore (7).jpg",
    ].map((src, i) => (
      <div
        key={`right-${i}`}
        className="rounded-md overflow-hidden shadow-lg border border-gray-800"
      >
        <Image
          src={src}
          alt={`Right image ${i + 1}`}
          width={500}
          height={500}
          className="w-full h-40 md:h-48 lg:h-56 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    ))}
  </div>

</div>




                </div>
            </div>
        </section>
    );
}
