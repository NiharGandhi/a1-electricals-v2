import PdfDisplay from "./PdfDisplay";
import Link from "next/link";
import Footer from "./Footer";
import Image from "next/image";
import BlurryBg from "../../public/assets/bbblurry.svg";
import Lug from "../../public/assets/lug.png";

const pdfData = [
    { title: "Technical Details:", pdfUrl: "/assets/A1-Electricals-Cable-Glands.pdf" },
];

export const Product2Page = () => {
    return (
        <>
            <div className="relative flex flex-col lg:flex-row bg-white lg:mb-[700px]">
                <div className="lg:w-1/2 relative bg-white">
                    <Link href="/products">
                        <button className="absolute text-black top-[-1px] lg:top-[10px] lg:ml-4 underline text-sm px-1 lg:text-lg z-20">
                            Back
                        </button>
                    </Link>
                    <div className="absolute text-center items-center justify-center z-10">
                        <h1 className="text-center text-2xl md:text-lg lg:text-6xl leading-tight font-bold px-4 mt-[10px] lg:mt-[100px] lg:px-12 text-orange-500">
                            Compression Copper / Aluminium Cable Lugs & Connectors
                        </h1>
                        <div className="mt-20 hidden sm:block w-[500px] items-center justify-center ml-[130px]">
                            {pdfData.map((item, index) => (
                                <div key={index} className="mb-4 text-center items-center justify-center">
                                    <PdfDisplay title={item.title} pdfUrl={item.pdfUrl} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <Image src={BlurryBg} alt="Blurry Background" className="hidden sm:block w-full h-auto absolute top-0 left-0 blur-effect mt-[-150px] lg:mt-[-0px]" />
                    <Image src={Lug} alt="Cable Lug" className="hidden sm:block w-full h-auto mt-[-150px] lg:mt-[160px] absolute top-0 left-0 z-0 " />
                    <Image src={BlurryBg} alt="Blurry Background" width={1000} height={1000} className="mt-[-20px] opacity-50 top-0 left-0 blur-effect lg:hidden z-0" />
                    <Image src={Lug} alt="Cable Lug" width={400} height={400} className="mt-[-270px] top-0 left-0 lg:hidden -z-10" />L
                </div>
                <div className="mt-20 lg:hidden">
                    {pdfData.map((item, index) => (
                        <div key={index} className="mb-4 text-center items-center justify-center">
                            <PdfDisplay title={item.title} pdfUrl={item.pdfUrl} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[210px] lg:mt-[200px]">
                <Footer />
            </div>
        </>
    );
};
