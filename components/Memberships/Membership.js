import { useState, useRef } from "react";
import Link from "next/link";
import membershipStyle from "../../styles/memberships.module.css";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import videoFrameImg from "../../public/images/videoFrame.jpg";
import { Button } from "primereact/button";
const Memberships = () => {
    const parentRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
    const [isOpenFour, setIsOpenFour] = useState(false);
    const [isOpenFive, setIsOpenFive] = useState(false);
    // FORM
    const [value1, setValue1] = useState("");
    return (
        <div className={`${membershipStyle.membership_container}`}>
            <div className={`${membershipStyle.membership_header}`}>
                <div className={`${membershipStyle.membership_header_txt}`}>
                    <h3>Let's Collaborate together ot show the beauty of Kuakata</h3>
                    <p>Join 3000+ locals & 1400+ groups from Bangladesh</p>
                    <Link href="#">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            <h3 style={{ textAlign: "center", padding: "50px 0" }}>
                How Membership process work?
            </h3>
            <div className={`${membershipStyle.membership_process}`}>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">login</span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Sign up</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">settings_suggest</span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Add Your services</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">bookmark_border</span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Get Booking</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${membershipStyle.membership_video_container}`}>
                <div className={membershipStyle.membership_VideoFrame}>
                    <Image
                        src={videoFrameImg}
                        alt="Video Frame Cover"
                        className={membershipStyle.membership_VideoFrameCoverImg}
                    />
                    <a
                        data-fancybox=""
                        href="https://www.youtube.com/watch?v=wsq-r8lMMsk"
                        class={`${membershipStyle.membership_PlayButton} flex align-items-center justify-content-center`}
                    >
                        <i class="fas fa-play"></i>
                    </a>
                </div>
            </div>
            <div className={`${membershipStyle.steps_container}`}>
                <h3 style={{ textAlign: "center", padding: "50px 0" }}>
                    Why be a Member of Sagor Konna?
                </h3>
                <div className={`${membershipStyle.membership_steps}`}>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">payments</span>
                        <h4>Earn an additional income</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">diversity_3</span>
                        <h4>Open your network</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">translate</span>
                        <h4>Practice your language</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            sunt.
                        </p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_registerBtn}`}>
                    <Link href="#">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            <div className={`${membershipStyle.membership_faq_container}`}>
                <h3>Frequently Asked Questions</h3>
                <div className={`${membershipStyle.membership_faq}`}>
                    <div className={`${membershipStyle.membership_collapse_container}`}>
                        <div className={`${membershipStyle.membership_collapsible}`}>
                            <div
                                className={`${membershipStyle.membership_toggle}`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <h5>How will I open a account ?</h5>

                                <div className={`${membershipStyle.membership_collapse_icon}`}>
                                    {isOpen ? (
                                        <span class="material-icons-sharp">remove</span>
                                    ) : (
                                        <span class="material-icons-sharp">add</span>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${membershipStyle.membership_content_parent}`}
                                ref={parentRef}
                                style={
                                    isOpen
                                        ? { height: parentRef.current.scrollHeight + "px" }
                                        : {
                                            height: "0px",
                                        }
                                }
                            >
                                <div
                                    className={`${membershipStyle.membership_collapse_content}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                                    illum eius fugit ullam rerum voluptatibus.
                                </div>
                            </div>
                        </div>
                        <div className={`${membershipStyle.membership_collapsible}`}>
                            <div
                                className={`${membershipStyle.membership_toggle}`}
                                onClick={() => setIsOpenTwo(!isOpenTwo)}
                            >
                                <h5>How I Update or extend my availabilities ?</h5>
                                <div className={`${membershipStyle.membership_collapse_icon}`}>
                                    {isOpenTwo ? (
                                        <span class="material-icons-sharp">remove</span>
                                    ) : (
                                        <span class="material-icons-sharp">add</span>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${membershipStyle.membership_content_parent}`}
                                ref={parentRef}
                                style={
                                    isOpenTwo
                                        ? { height: parentRef.current.scrollHeight + "px" }
                                        : {
                                            height: "0px",
                                        }
                                }
                            >
                                <div
                                    className={`${membershipStyle.membership_collapse_content}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                                    illum eius fugit ullam rerum voluptatibus.
                                </div>
                            </div>
                        </div>
                        <div className={`${membershipStyle.membership_collapsible}`}>
                            <div
                                className={`${membershipStyle.membership_toggle}`}
                                onClick={() => setIsOpenThree(!isOpenThree)}
                            >
                                <h5>How do I increase converstion rate ?</h5>

                                <div className={`${membershipStyle.membership_collapse_icon}`}>
                                    {isOpenThree ? (
                                        <span class="material-icons-sharp">remove</span>
                                    ) : (
                                        <span class="material-icons-sharp">add</span>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${membershipStyle.membership_content_parent}`}
                                ref={parentRef}
                                style={
                                    isOpenThree
                                        ? { height: parentRef.current.scrollHeight + "px" }
                                        : {
                                            height: "0px",
                                        }
                                }
                            >
                                <div
                                    className={`${membershipStyle.membership_collapse_content}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                                    illum eius fugit ullam rerum voluptatibus.
                                </div>
                            </div>
                        </div>
                        <div className={`${membershipStyle.membership_collapsible}`}>
                            <div
                                className={`${membershipStyle.membership_toggle}`}
                                onClick={() => setIsOpenFour(!isOpenFour)}
                            >
                                <h5>How do I Upload products</h5>

                                <div className={`${membershipStyle.membership_collapse_icon}`}>
                                    {isOpenFour ? (
                                        <span class="material-icons-sharp">remove</span>
                                    ) : (
                                        <span class="material-icons-sharp">add</span>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${membershipStyle.membership_content_parent}`}
                                ref={parentRef}
                                style={
                                    isOpenFour
                                        ? { height: parentRef.current.scrollHeight + "px" }
                                        : {
                                            height: "0px",
                                        }
                                }
                            >
                                <div
                                    className={`${membershipStyle.membership_collapse_content}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                                    illum eius fugit ullam rerum voluptatibus.
                                </div>
                            </div>
                        </div>
                        <div className={`${membershipStyle.membership_collapsible}`}>
                            <div
                                className={`${membershipStyle.membership_toggle}`}
                                onClick={() => setIsOpenFive(!isOpenFive)}
                            >
                                <h5>How I will receive my payment ?</h5>

                                <div className={`${membershipStyle.membership_collapse_icon}`}>
                                    {isOpenFive ? (
                                        <span class="material-icons-sharp">remove</span>
                                    ) : (
                                        <span class="material-icons-sharp">add</span>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${membershipStyle.membership_content_parent}`}
                                ref={parentRef}
                                style={
                                    isOpenFive
                                        ? { height: parentRef.current.scrollHeight + "px" }
                                        : {
                                            height: "0px",
                                        }
                                }
                            >
                                <div
                                    className={`${membershipStyle.membership_collapse_content}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                                    illum eius fugit ullam rerum voluptatibus.
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className={`${membershipStyle.membership_ask_que_form}`}>
                        <h4>Still have question?</h4>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText type="text" placeholder="Your name" />
                        </div>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                            </span>
                            <InputText type="email" placeholder="Email address" />
                        </div>
                        <div className={`${membershipStyle.membership_message}`}>
                            <h5>Message</h5>
                            <InputTextarea
                                placeholder="Write"
                                style={{ width: "100%", position: "relative" }}
                                value={value1}
                                onChange={(e) => setValue1(e.target.value)}
                                rows={3}
                                autoResize
                            />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className={`${membershipStyle.membership_subscribe_container}`}>
                <div className={`${membershipStyle.membership_getUpdate}`}>
                    <h3>Get Updates & More</h3>
                    <h5>Thoughtful thoughts to your inbox</h5>
                </div>
                <div className={`${membershipStyle.membership_subscribe}`}>
                    <h2>Enter email address</h2>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-envelope"></i>
                        </span>
                        <InputText type="email" placeholder="Email address" />
                        {/* <button className={`${membershipStyle.membership_subscribe_btn}`}>subscribe</button> */}
                        <Button
                            className={`${membershipStyle.membership_subscribe_btn}`}
                            label="Subscribe"
                        />
                    </div>
                    <div className={`${membershipStyle.membership_lock_text}`}>
                        <i className="pi pi-lock"></i>
                        <h3>Don't worry information is safe with us</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Memberships;
