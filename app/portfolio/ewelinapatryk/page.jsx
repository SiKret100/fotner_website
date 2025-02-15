import Image from "next/image";

let images = [];
for (let index = 1; index <= 12; index++) {
    images.push(`/ewelinapatryk/img_${index}.jpg`);
}

export default function EwelinaPatryk() {
    return (
        <div className="bg-neutral-900 pt-3 justify-items-center">
            <div className="columns-3 gap-4 px-4">
                {images.map((image, index) => (
                    <div key={index} className="mb-4">
                        <Image
                            src={image}
                            alt={"Ewelina Patryk " + index}
                            width={400}
                            height={400}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
