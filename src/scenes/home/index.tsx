import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/shared/HomePageText.png";
import HomePageGraphic from "@/shared/HomePageGraphic.png";
import SponsorRedBull from "@/shared/SponsorRedBull.png";
import SponsorForbes  from "@/shared/ SponsorForbes.png";
import SponsorFortune from "@/shared/SponsorFortune.png";


type Props = { 
    setSelectedPage : (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage}: Props) => {
    const isAbovMediumScreens =  useMediaQuery("(min-width:1060px)")


    return <section
    id="home" 
    className="gap-16 bg-gray-20 py-10 md:h-full"
    >
        {/* IMAGE AND MAIN HEADER*/}
        <div>
            
        </div>
    </section>
};

export default Home;