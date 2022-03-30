import React from 'react';
import ColorContext from '../contexts/color';

// Consumer 컴포넌트를 통해 색상 조회
const ColorBox = () => {
    return (
        // Funtion as child patten, Render Props
        <ColorContext.Consumer>
            {
                (value) => (
                    <div
                        style={{
                            width: "64px",
                            height: "64px",
                            background: value.color
                        }}/>
                )
            }
        </ColorContext.Consumer>
    );
};

export default ColorBox;