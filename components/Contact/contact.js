import Link from 'next/link'
import contactStyle from '../../styles/contact.module.css'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
const Contact = () => {
    return (
        <div className={`${contactStyle.contact_container} `}>
            <div className={`${contactStyle.contact_text} p-container`}>
                <h1>Get in Touch</h1>
                <p>
                    Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
                </p>
            </div>
            <div className={`${contactStyle.contact_box}`}>
                <div className={`${contactStyle.contact_flex} p-container `}>
                    <div  >
                        <span class="material-icons-sharp">
                            pin_drop
                        </span>
                        <h3>Welcome</h3>
                        <p>Sagor Konna Resort ltd, Kuakata</p>
                    </div>
                    <div>
                        <span class="material-icons-sharp">
                            call
                        </span>
                        <h3>Call</h3>
                        <p>+93 (736) 6X8 84 84</p>
                    </div>
                    <div>
                        <span class="material-icons-sharp">
                            mail
                        </span>
                        <h3>Write</h3>
                        <p>kinsley.inbox@mail.com</p>
                    </div>
                </div>
                <span className={`${contactStyle.contact_hr}`} />
            </div>
            <div className={`${contactStyle.contact_lotcation_txt} p-container`}>
                <h2>Location</h2>
            </div>
            <div className={`${contactStyle.contact_map_iframe} p-container`}>
                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Sagorkonna%20Resort%20Ltd,Kuakata%20Parjatan%20Area,%20Kolapara,%20Patuakhali,%20Bangladesh.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
            </div>
            <div className={`${contactStyle.contact_waiting_text} p-container`}>
                <div className={`${contactStyle.contact_waiting_sort_des} p-container`}>
                    <h2>Sagor konna resort is waiting for you!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, alias fuga laborum aut quibusdam odit facilis soluta eaque eveniet consequuntur reiciendis necessitatibus sint atque aliquam officia  </p>
                    <Link href="#">
                        <button>More about us</button>
                    </Link>
                </div>
            </div>
            <div className={`${contactStyle.contact_message} p-container`}>
                <h2>Leave a message</h2>
                <form>
                    <div>
                        <div className={`${contactStyle.contact_input_container}`}>
                            <div className={`${contactStyle.contact_input}`}>
                                <InputText
                                    type='text'
                                    className={`${contactStyle.contact_input_name}block col lg:col-6 md:col-6 `}
                                    placeholder='Name'
                                />
                                <InputText
                                    type='email'
                                    className='block col lg:col-6 md:col-6  '
                                    placeholder='Email'
                                />
                            </div>
                            {/* <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} /> */}
                            {/* <InputTextarea
                            className={`${contactStyle.contact_textarea}`}
                            onChange={(e) => setValue1(e.target.value)}
                            rows={5}
                            cols={30}
                            placeholder='Text'
                        /> */}
                            <InputTextarea
                                className={`${contactStyle.contact_textarea}`}
                                rows={5}
                                cols={30}
                                placeholder='Text'
                            />
                        </div>
                        <div className={`${contactStyle.contact_submit_btn}`}>
                            <button type='submit'>Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact