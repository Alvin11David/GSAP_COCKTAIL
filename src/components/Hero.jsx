import gsap from 'gsap';
import { useGSAP } from "@gsap/react"; 
import { SplitText } from "gsap/all";

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: 'chars, words' });
        const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.11
        })
    }, []);
    return (
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>
            <img
                src="/images/hero-left-leaf.png"
                alt="leaf-image"
                className="left-leaf"/>
            <img
                src="/images/hero-right-leaf.png"
                alt="leaf-image"
                className="right-leaf"/>
            <div className="body">
                <div  className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crispy. Classic</p>
                        <p className="subtitle">
                            Sip the Spirit  <br />of Summer
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every Cocktail on our Menu is a blend of premium indgredients, creative flair, and timeless recipes - designed to delight your senses.
                        </p>
                        <a href='#cocktails'>View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;