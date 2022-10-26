import React, { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [image, setImage] = useState('');
    const handleError = () => {
        setImage(images.noImage);
    };
    return <img ref={ref} src={image || src} {...props} alt={alt} onError={handleError} />;
});

export default Image;
