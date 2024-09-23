import React from "react";

const Hero = () => {
    return (
        <section className="hero bg-[#000] relative pb-20">
            <div className="wrapper grid lg:grid-cols-2 place-items-center py-6 px-2 gap-16 lg:gap--">
                <div className="hero__info flex flex-col items-center text-center lg:items-start lg:text-start gap-5 lg:gap-7">
                    <h1 className=" text-[1.8rem] sm:text-[2.6rem] lg:text-[3.8rem] font-bold leading-[1.04] text-slate-200">
                        Cars
                    </h1>
                    <p className="text-[#849499] text-[.8rem] sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto distinctio optio sed quasi doloribus impedit
                        placeat dicta beatae totam! Natus dolores labore, quod
                        quis adipisci unde omnis aliquid neque iure vel quos
                        eius, expedita, consectetur animi totam! Itaque non
                        ipsam odio nobis dolorum esse assumenda praesentium.
                        Cumque magnam quia iusto?
                    </p>
                </div>
                <div className="hero__img relative max-w-[18rem]]">
                    <img
                        src="https://i.pinimg.com/736x/2c/8e/98/2c8e981280d108b806c2e07bfbcc15b9.jpg"
                        className="rounded-md max-h-[54rem]"
                        alt="img of businessman"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
