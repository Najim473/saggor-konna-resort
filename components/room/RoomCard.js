import { Card } from 'primereact/card';
import { motion } from 'framer-motion';
import roomCardStyles from '../../styles/room.module.css';
import Link from 'next/link';
import { useState } from 'react';
const RoomCard = ({ data }) => {
    const [econonmy, setEconomy] = useState(false);
    return (
        <div className={`${roomCardStyles.room_container}`}>
            {/* <div className={`${roomCardStyles.room_select}`}>
        <button>All Rooms</button>
        <button>Econnomy</button>
        <button>Standart</button>
      </div>
      {econonmy &&
        data.map((c) => (
          <p type={c.category}>
            {c.category}
          </p>
        ))
      }  */}
            <div className={`${roomCardStyles.grid_container} grid`}>
                {data &&
                    data.map((room) => (
                        <div
                            key={room?.id}
                            className={`${roomCardStyles.grid_column} col lg:col-4 md:col-6 `}
                        >
                            <motion.div
                                className={`flex flex align-items-center justify-content-center flex-wrap overflow-hidden ${roomCardStyles.grid_column_flex}`}
                                initial={{ y: 100 }}
                                animate={{ y: 0, pathLength: 3 }}
                                transition={{
                                    delay: 0,
                                    type: 'spring',
                                    y: { duration: 0.5 },
                                    easeIn: [0.17, 0.67, 0.83, 0.67],
                                }}
                            >
                                <Card
                                    className={` ${roomCardStyles.room_card}`}
                                    key={room?._id}
                                >
                                    <div className='flex flex align-items-center justify-content-center flex-wrap overflow-hidden'>
                                        <div className={roomCardStyles.grid_column_bg}>
                                            <div className={roomCardStyles.img_container}>
                                                <div className={`${roomCardStyles.img_box}`}>
                                                    <div
                                                        style={{
                                                            backgroundImage: `url(${room?.img})`,
                                                        }}
                                                        className={`relative ${roomCardStyles.card_img}`}
                                                    ></div>
                                                </div>
                                                {room?.status && (
                                                    <span className={`${roomCardStyles.status}`}>
                                                        {room?.status}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={roomCardStyles.room_text}>
                                                <div className={roomCardStyles.room_idea}>
                                                    <div className={roomCardStyles.bed}>
                                                        <span className='material-icons-sharp'>bed</span>
                                                        <p>
                                                            {room?.Guest_Capacity}
                                                            <span> Guests</span>
                                                        </p>
                                                    </div>
                                                    <div className={`${roomCardStyles.measure} `}>
                                                        <span className='material-icons-sharp'>
                                                            crop_square
                                                        </span>
                                                        <p>
                                                            {room?.Room_Area}
                                                            <span>Ft²</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={roomCardStyles.room_category}>
                                                    <h3>{room?.category}</h3>
                                                    <p>{room?.description}</p>
                                                </div>
                                                <div className={roomCardStyles.booking_details}>
                                                    <div className={roomCardStyles.booing_price}>
                                                        <h1>TK {room?.Rent_Charge}</h1>
                                                        <span>/night</span>
                                                    </div>
                                                    <div className={roomCardStyles.bookingBtn}>
                                                        <Link href={`/room/${room?.id}`} passHref>
                                                            <button>
                                                                <span className='material-icons-sharp'>
                                                                    bookmark_border
                                                                </span>
                                                                <h4>Book Now</h4>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default RoomCard;