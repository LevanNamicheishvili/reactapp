import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = { 
    setSelectedPage : (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage}: Props) => {
    const isAbovMediumScreens =  useMediaQuery("(min-width:1060px)")


    return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER*/}
        <div className="md:flex mx-auto w-5/6 items-center justify-items-center md:"></div>
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis:barsis-3/5">
              {/*HEADING*/}  
              <div className="md:-mt-20">
                <div className="relaive" >
                   <div className="before:absolute before:-top-20">
                    <img alt="home-page-text" src={HomePageText}  />
                    </div> 
                </div>
                <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
              </div>
                {/* ACTIONS*/}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                       Join Now
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            {/* IMAGES*/}
            <div>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        
        {/* SPONSORS*/}
        {isAbovMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
};

export default Home;