import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
        <div>
            <h1 className="flex-center h-[100vh]">Hello Alvin David</h1>
        </div>
    );
};

export default App;