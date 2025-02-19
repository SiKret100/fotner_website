import React, {useState} from "react";
import {motion} from "framer-motion";
import transition1 from "@/components/transition1";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";


export default function GalleryPage({FolderName, TopText, BottomText} : {FolderName: string, TopText: string, BottomText: string}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0);

    const rawImages = [];
    for (let index = 1; index <= 14; index++) {
        rawImages.push(`/${FolderName}/img_${index}.jpg`);
    }

    return (
        <div className="bg-neutral-900 min-h-screen">

            <div className={"relative  max-w-screen-lg mx-auto"}>

                <motion.div
                    initial={{opacity: 0, y: "-50%"}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: "-50%"}}
                    transition={transition1}
                    className={"absolute text-white font-integral-medium sm:text-5xl text-xl flex flex-col justify-center h-full"}>
                    <div className={"font-bold"}>
                        {TopText}
                    </div>
                    <div className={""}>
                        {BottomText}
                    </div>
                </motion.div>

                <div className={"flex justify-end"}>
                    <Image
                        src={`/${FolderName}/img_14.jpg`}
                        alt="Image 14"
                        width={800}
                        height={800}
                        className={""}
                    />
                </div>
            </div>


            <div className="mx-auto">


                <div className=" max-w-screen-lg h-[2px] bg-white mx-auto mt-10 mb-6"></div>


                <div>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={rawImages.map((x) => ({
                            src: x,
                            width: 1200,
                        }))}
                        index={currentIndex}
                        styles={{
                            container: {
                                backgroundColor: "rgba(0, 0, 0, .8)",
                                backdropFilter: "blur(10px)",
                            },
                        }}
                    />

                    <div className="columns-3 gap-4 px-4 pb-4">
                        {rawImages.map((image, index) => (
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, y: "-50%"}}
                                transition={transition1}
                                key={index}
                                className="pt-4">
                                <Image
                                    src={image}
                                    alt={"Image " + index}
                                    width={1200}
                                    height={1200}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setOpen(true);
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );


}