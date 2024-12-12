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
        className="z-index-negative blur"  
        animationData={animation} 
        style={style}
        />
    );
}