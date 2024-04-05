import { useRef, useState } from 'react';
import Button from '../button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import scss from './Home.module.scss';

import textsHeaders from '../../assets/texts/textsHeaders';
import homeImages from '../../assets/images/homeImages';

const Home = () => {
    const [numberSlide, setNumberSlide] = useState(1);
    const swiperRef = useRef();

    const handlerInfo = () => {
        console.log('More info');
    }

    return (
        <section className={scss.home}>
            <div className='container'>
                <div className={scss.wrraper}>

                    <div className={scss.info}>

                        <h1 className={scss.title}>
                            {textsHeaders.home1} <span className={scss.titleBold}>{textsHeaders.home2}</span>
                        </h1>

                        <div className={scss.paginationSlider}>
                            <Button styles={scss.buttonPrevios} 
                                onClick={() => {
                                    setNumberSlide(() => numberSlide - 1);
                                    swiperRef.current.slidePrev();
                                }} 
                                disabled={numberSlide === 1 ? true : false}
                            />
                            <Button styles={scss.buttonNext} 
                                onClick={() => {
                                    setNumberSlide(() => numberSlide + 1);
                                    swiperRef.current.slideNext();
                                }} 
                                disabled={numberSlide === homeImages.length ? true : false}
                            />
                        </div>

                        <p className={scss.countSliders}>
                            <span className={scss.count}>{numberSlide.toString().padStart(2, '0')}</span>
                            <span className={scss.count}>{homeImages.length.toString().padStart(2, '0')}</span>
                        </p>

                    </div>

                    <div className={scss.swiper}>
                        
                        <Swiper 
                            className={scss.slider}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            onSlideChange={(swiper) => setNumberSlide(() => swiper.activeIndex + 1)}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => swiperRef.current = swiper}
                            wrapperTag='ul'
                        >
                            {homeImages.map((item) => 
                                <SwiperSlide className={scss.slide} key={item.id} tag='li'>
                                    <img className={scss.homeImage} src={item.image} alt="home" width="770" />
                                    {/* <Button styles={scss.buttonInfo} text="ВЗГЛЯНУТЬ" onClick={handlerInfo}/> */}
                                </SwiperSlide>
                            )}
                        </Swiper>

                        <Button styles={scss.buttonInfo} text="ВЗГЛЯНУТЬ" onClick={handlerInfo}/>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;