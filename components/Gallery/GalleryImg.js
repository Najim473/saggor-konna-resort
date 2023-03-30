import { Image } from 'primereact/image';
import galleryStyles from '../../styles/galleryImg.module.css'
const GalleryImg = ({ imgData }) => {
    return (
        <>
            <div className={`${galleryStyles.gallery}`} >
                {imgData.map((item, i) => (
                    <div className={`${galleryStyles.pics}`} key={i}>
                        <Image src={item.galleryImg} alt="sagor konna resort" preview />
                    </div>
                ))}
            </div>
        </>
    )
}
export default GalleryImg

