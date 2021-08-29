import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Welcome to ECESS",
                    "ECE Student Society",
                    "Purdue University",
                ],
                autoStart: true,
                loop: true,
                delay: 100, // SET TO USE A 1 SECOND DELAY
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
