"use client";

import Lottie from "lottie-react";
import { CSSProperties } from "react";

interface BlurAnimationProps {
    animation: object;
    style?: CSSProperties
}

export default function BlurAnimation({ animation, style }: BlurAnimationProps) {
    return (
        <Lottie 
        className="blur z-index-negative bluranim"  
        animationData={animation} 
        style={style}
        />
    );
}