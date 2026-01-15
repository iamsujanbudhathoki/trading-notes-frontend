export function BackgroundPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="absolute w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#B85C38', stopOpacity: 0.03 }} />
                        <stop offset="100%" style={{ stopColor: '#B85C38', stopOpacity: 0.08 }} />
                    </linearGradient>
                </defs>

                {/* Subtle chart lines */}
                <path
                    d="M0,300 Q150,250 300,280 T600,300 T900,250 T1200,280"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                >
                    <animate
                        attributeName="d"
                        dur="20s"
                        repeatCount="indefinite"
                        values="
                            M0,300 Q150,250 300,280 T600,300 T900,250 T1200,280;
                            M0,280 Q150,270 300,250 T600,280 T900,270 T1200,260;
                            M0,300 Q150,250 300,280 T600,300 T900,250 T1200,280
                        "
                    />
                </path>

                <path
                    d="M0,350 Q150,320 300,340 T600,360 T900,320 T1200,340"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                >
                    <animate
                        attributeName="d"
                        dur="25s"
                        repeatCount="indefinite"
                        values="
                            M0,350 Q150,320 300,340 T600,360 T900,320 T1200,340;
                            M0,330 Q150,340 300,320 T600,340 T900,350 T1200,330;
                            M0,350 Q150,320 300,340 T600,360 T900,320 T1200,340
                        "
                    />
                </path>

                <path
                    d="M0,250 Q150,220 300,240 T600,260 T900,220 T1200,240"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.2"
                >
                    <animate
                        attributeName="d"
                        dur="30s"
                        repeatCount="indefinite"
                        values="
                            M0,250 Q150,220 300,240 T600,260 T900,220 T1200,240;
                            M0,230 Q150,250 300,220 T600,240 T900,250 T1200,230;
                            M0,250 Q150,220 300,240 T600,260 T900,220 T1200,240
                        "
                    />
                </path>

                {/* Subtle grid dots */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <circle
                        key={i}
                        cx={60 * (i % 10) + 100}
                        cy={60 * Math.floor(i / 10) + 150}
                        r="2"
                        fill="#059669"
                        opacity="0.1"
                    />
                ))}
            </svg>
        </div>
    );
}
