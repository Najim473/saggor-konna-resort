import Image from 'next/image';
import reviewStyles from '../../styles/reviews.module.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
const Reviews = () => {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let newdate = year + '/' + month + '/' + day;
  // console.log(newdate);
  // FORM
  // const [value1, setValue1] = useState('');
  return (
    <div className={`${reviewStyles.review_container}  `}>
      <h2>Reviews</h2>
      <div className={`${reviewStyles.review}  `}>
        <div className={`${reviewStyles.review_profile_flex}  `}>
          <div className={`${reviewStyles.review_img_date}`}>
            <Image
              className={reviewStyles.review_image}
              src='/images/Room/review_female.jpg'
              width={55}
              height={55}
            />
            <div className={reviewStyles.review_name_date}>
              <h3>Rabeya Akter</h3>
              <h5>{newdate}</h5>
            </div>
          </div>
          <div className={reviewStyles.rating}>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
          </div>
        </div>
        <div className={reviewStyles.review_comment}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugiat, dignissimos, repudiandae perferendis numquam
            iure quasi laboriosam vitae ullam veritatis iste dolore. Impedit,
            fuga dolorem voluptatum, tempora voluptates blanditiis ex, pariatur
            exercitationem reprehenderit laborum minima.
          </p>
        </div>
      </div>
      <div className={`${reviewStyles.review}  `}>
        <div className={`${reviewStyles.review_profile_flex}  `}>
          <div className={`${reviewStyles.review_img_date}`}>
            <Image
              className={reviewStyles.review_image}
              src='/images/Room/review_men.jpg'
              width={55}
              height={55}
            />
            <div className={reviewStyles.review_name_date}>
              <h3>Ratul Hasan</h3>
              <h5>{newdate}</h5>
            </div>
          </div>
          <div className={reviewStyles.rating}>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
            <span className='material-icons-sharp'>star</span>
          </div>
        </div>
        <div className={reviewStyles.review_comment}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugiat, dignissimos, repudiandae perferendis numquam
            iure quasi laboriosam vitae ullam veritatis iste dolore. Impedit,
            fuga dolorem voluptatum, tempora voluptates blanditiis ex, pariatur
            exercitationem reprehenderit laborum minima.
          </p>
        </div>
      </div>
      <div className={reviewStyles.review_message}>
        <h2>Leave a message</h2>
        <form>
          <div>
            <div className={`${reviewStyles.review_input}`}>
              <InputText
                type='text'
                className={`${reviewStyles.review_input_name}`}
                placeholder='Name'
              />
              <InputText type='email' placeholder='Email' />
            </div>
            {/* <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} /> */}
            <InputTextarea
              className={`${reviewStyles.review_textarea}`}
              onChange={(e) => setValue1(e.target.value)}
              rows={5}
              cols={30}
              placeholder='Text'
            />
            <div className={`${reviewStyles.review_submit_btn}`}>
              <button type='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
