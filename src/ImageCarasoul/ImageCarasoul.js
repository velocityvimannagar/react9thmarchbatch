import { useState } from "react"

export function ImageCarasoul() {
    const images = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/UBS/3-1._CB569664487_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3.PC-REC_hero_3000x1200-1day1._CB569789166_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg'
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const onNext = () => {
        const nextIndex = currentImageIndex + 1;
        setCurrentImageIndex(nextIndex == 4 ? 0 : nextIndex)
    }
    const onPrev = () => {
        const nextIndex = currentImageIndex - 1;
        setCurrentImageIndex(nextIndex == -1 ? 3 : nextIndex)
    }

    return <div>
        Image Carasoul
        {/* {images.map(url=> {
            return <img src={url} style={{width: '100px'}}></img>
        })} */}
        <br></br>
        <br></br>
        <button onClick={onPrev}>Prev</button>
        <img src={images[currentImageIndex]} style={{ width: '300px' }}></img>
        <button onClick={onNext}>Next</button>
    </div>
}