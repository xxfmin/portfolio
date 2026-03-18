import Image from "next/image";

export function Traveling() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="section-title">Traveling</h2>
        
      </div>

      <div className="space-y-3.5">
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/japan1.jpg"
              alt="Japan"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Kyoto, Japan
              </span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/japan2.jpg"
              alt="Japan"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Kyoto, Japan
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/paris.jpg"
              alt="Paris"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Paris, France
              </span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/england.jpg"
              alt="England"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                London, England
              </span>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/spain.jpg"
              alt="Spain"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Barcelona, Spain
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/korea.JPG"
              alt="Korea"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Seoul, South Korea
              </span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/rome.jpg"
              alt="Rome"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Rome, Italy
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/utah.jpg"
              alt="Utah"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm text-center">
                Zion National Park, USA
              </span>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/yosemite.jpg"
              alt="Portugal"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm text-center">
                Yosemite National Park, USA
              </span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/mexico.jpg"
              alt="Mexico"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Isla Mujeres, Mexico
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/la.jpg"
              alt="Los Angeles"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Los Angeles, USA
              </span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg group">
            <Image
              src="/pics/colorado.jpg"
              alt="Colorado"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-67 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                Colorado, USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
