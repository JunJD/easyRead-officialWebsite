import React from 'react';
import Lottie from 'lottie-react'; // 接受json格式文件 转成动画

// Define the Lottie component
const LottieComponent = ({
    animationData,
    height,
    width,
    style,
    ...otherOptions
}) => {
    const defaultOptions = {
        // 循环播放
        loop: true,
        // 自动播放
        autoplay: true,

        animationData: animationData, // Replace with your animation data
        // renderer: 'svg',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div
            style={{
                display: 'flex',
                width: `${width}px`,
                height: `${height}px`,
                ...style,
            }}
        >
            <Lottie {...defaultOptions} {...otherOptions} />
        </div>
    );
};

export default LottieComponent;
