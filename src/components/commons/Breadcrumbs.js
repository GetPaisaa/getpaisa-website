import React from 'react'

const Breadcrumbs = ({title}) => {
  return (
    <div>
        <section
      className="relative z-10 py-16 bg-gradient-to-l from-gradient-1 to-gradient-2 overflow-hidden wow fadeInUp"
      data-wow-delay=".2s"
    >
      <div className="container">
        <div className="max-w-[570px] mx-auto text-center">
          <h1
            className="font-normal text-black dark:text-white text-4xl md:text-[45px] leading-tight md:leading-tight mb-5"
          >
            {title}
          </h1>
          <p className="font-normal text-base text-body-color mb-5">
             
          </p>
          <ul className="flex items-center justify-center">
            <li className="flex items-center">
              <a
                href="/"
                className="font-normal text-base text-body-color hover:text-primary"
              >
                Home
              </a>
              <span
                className="font-normal text-base text-body-color px-2"
              >
                /
              </span>
            </li>

            <li className="font-normal text-base text-primary">
              {title}
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 mx-auto -z-1">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_109_1705"
             
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="300"
          >
            <rect
              width="1440"
              height="300"
              fill="url(#paint0_linear_109_1705)"
            />
          </mask>
          <g mask="url(#mask0_109_1705)">
            <path
              opacity="0.7"
              d="M1291.06 -3.15679C1175.26 243.544 983.032 314.788 901.395 319.573L872 460.514L1562.33 604.489L1702.1 -65.7031C1613.34 -147.646 1406.86 -249.858 1291.06 -3.15679Z"
              fill="url(#paint1_linear_109_1705)"
            />
            <path
              opacity="0.5"
              d="M1222.49 9.45347C1172.63 310.802 986.959 446.139 900.353 476.139L911.528 637.115L1699.98 582.38L1646.84 -183.078C1526.17 -244.463 1272.34 -291.895 1222.49 9.45347Z"
              fill="url(#paint2_linear_109_1705)"
            />
            <path
              opacity="0.7"
              d="M149.358 308.718C222.688 88.7382 378.04 9.42554 446.549 -2.73335L457.377 -124.754L-140.275 -177.786L-191.761 402.434C-108.609 462.853 76.0275 528.697 149.358 308.718Z"
              fill="url(#paint3_linear_109_1705)"
            />
            <path
              opacity="0.5"
              d="M240.436 277.93C254.739 -27.18 423.33 -183.285 505.837 -223.198L475.93 -381.766L-300.729 -235.281L-158.516 518.725C-31.4918 565.589 226.133 583.039 240.436 277.93Z"
              fill="url(#paint4_linear_109_1705)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_109_1705"
              x1="1440"
              y1="149.664"
              x2="-32.6283"
              y2="149.664"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E4F2FE" />
              <stop offset="1" stopColor="#FFEEFE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_109_1705"
              x1="995.731"
              y1="-66.5516"
              x2="1096.08"
              y2="471.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_109_1705"
              x1="884.631"
              y1="30.9273"
              x2="1156.5"
              y2="580.496"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_109_1705"
              x1="405.219"
              y1="332.927"
              x2="266.963"
              y2="-111.532"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_109_1705"
              x1="573.471"
              y1="217.127"
              x2="239.254"
              y2="-296.913"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </div>
  )
}

export default Breadcrumbs