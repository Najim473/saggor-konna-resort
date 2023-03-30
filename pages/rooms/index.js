const room = () => {
  console.log();
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      dfdsfsd
    </div>
  );
};
export default room;
export async function getStaticProps() {
  // const url = process.env.API_URL;
  // const roomdata = await import('./api/roomData.json');
  // return { props: { roomdata: roomdata.default } };
  const res = await fetch(`${process.env.API_URL}/api/room/`, {
    accept: 'application/json',
  });
  const roomData = await res.json();
  if (roomData.status !== 'success') {
    const message = `An error occured: ${roomData.message}`;
    // throw new Error(message);
  }

  const data = roomData?.data?.data;
  // console.log(data.data.data, 'data');
  return {
    props: { data },
  };
}
