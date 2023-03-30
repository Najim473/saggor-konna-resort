import GalleryImg from '../../components/Gallery/galleryImg';
const Gallery = ({ imgData }) => {
  return (
    <div className='p-container'>
      <GalleryImg imgData={imgData} />
    </div>
  );
};
export default Gallery;

export async function getStaticProps() {
  // const roomdata = await import('./api/roomData.json');
  // return { props: { roomdata: roomdata.default } };
  const res = await fetch('http://localhost:3000/api/gallery', {
    accept: 'application/json',
  });
  // console.log((res));
  const imgData = await res.json();
  return {
    props: { imgData: imgData },
  };
}
