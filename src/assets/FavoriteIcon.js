const FavoriteIcon = () => {
    return (
        <svg
            aria-describedby='desc'
            aria-labelledby='title'
            role='img'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <title>Like</title>
            <path
                d='M54.4 30.4A25.4 25.4 0 0 0 58 17.9 13.9 13.9 0 0 0 44 4c-6.1 0-12 3.9-14 9.3C28 7.9 22.1 4 16 4A13.9 13.9 0 0 0 2 17.9C2 29.9 12.3 42 30 54l2.4-1.6'
                data-name='layer2'
                fill='none'
                stroke='#202020'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth={2}
            />
            <circle
                cx='46'
                cy='44'
                data-name='layer1'
                fill='none'
                r='16'
                stroke='#202020'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth={2}
            />
            <path
                d='M46 36v16m-8-8h16'
                data-name='layer1'
                fill='none'
                stroke='#202020'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth={2}
            />
        </svg>
    );
};

export default FavoriteIcon;
