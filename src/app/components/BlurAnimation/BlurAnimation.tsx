"use client";

import Lottie from "lottie-react";
import { CSSProperties } from "react";

interface BlurAnimationProps {
    animation: object;
    style?: CSSProperties;
    classname?: string;
}

export default function BlurAnimation({ animation, style, classname }: BlurAnimationProps) {
    return (
        <Lottie 
        className={classname} 
        animationData={animation} 
        style={style}
        />
    );
}