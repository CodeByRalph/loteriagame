import Image from 'next/image'

const cardImages = require.context('@/public/LoteriaCards', true);


export default function GameCard() {
    const GenerateUniqueCardImages = () => {
        //imports all card image paths and puts them into arrays
        const cardImagePaths = Array.from(cardImages.keys());
        // creates a new set because a set ensures there is no duplicates
        const uniqueCardImages = new Set();

        // Fills the set with 16 unique images
        while (uniqueCardImages.size < 16) {
            const randomIndex = Math.floor(Math.random() * cardImagePaths.length);
            const randomImage = cardImages(cardImagePaths[randomIndex]).default;
            uniqueCardImages.add(randomImage);
        }

        return Array.from(uniqueCardImages);
    };

    const cardPictures = GenerateUniqueCardImages();
    console.log(cardPictures)
    return (
        <div className="grid grid-cols-4 relative gap-4 ">
            {console.log(cardPictures)}
            {cardPictures.map((cardPicture, index) => (
                <Image
                key={index}
                src={cardPicture}
                alt={`Loteria Card ${index + 1}`}
                width={150}
                height={250}
                className="border border-gray-200 rounded-lg"
                />
            )
            )}
        </div>
    )
}
