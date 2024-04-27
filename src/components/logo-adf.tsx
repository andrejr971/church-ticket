interface LogoAdfProps {
  className?: string
  variant?: 'light' | 'dark'
}

const variants = {
  light: (className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 81"
      className={className}
    >
      <path
        fill="#F9F9FF"
        d="M52 28.486l3.135-.54c-1.892-6.433-4.909-11.807-15.405-18.108-8.967 5.378-12.221 9.446-15.838 18v36.054h31.19V47.946h-2.758v13.676H26.703V27.838c3.911-7.459 6.973-11.622 13.027-14.757 7.94 4.965 10.486 9.135 12.27 15.405z"
      ></path>
      <path
        fill="#F9F9FF"
        d="M36.923 20.494c.863.974 1.833 2.068 1.24 5.29-.179-.446-.68-.98-1.26-1.597-1.18-1.256-2.688-2.861-2.47-4.782.27-2.162 2.756-2.756 3.189-1.351-1.735-.066-1.85.746-1.352 1.622.187.291.416.55.653.818zM33.081 20.108c.646 3.632 2.165 4.637 3.541 5.548 1.964 1.3 3.638 2.407 2.08 10.668-.877-3.38-2.646-5.378-4.163-7.092-2.219-2.507-3.898-4.404-1.458-9.124zM36.919 44.378c1.1-8.994-.269-10.176-2.096-11.752-1.314-1.133-2.864-2.47-3.904-7.058-2.38 7.909-.976 9.451 1.484 12.152 1.34 1.471 2.992 3.285 4.516 6.658zM33.618 41.071c1.919 1.816 3.407 3.224 1.517 7.361-.652-1.976-1.888-3.254-3.039-4.443-1.901-1.966-3.57-3.692-1.988-7.935.795 2.448 2.246 3.821 3.51 5.017z"
      ></path>
      <path
        fill="#F9F9FF"
        fillRule="evenodd"
        d="M46.648 30.079l-.128.409c.128-.41.128-.41.129-.409h.002l.005.002.017.006a5.209 5.209 0 01.279.1 12.454 12.454 0 013.052 1.695c1.066.813 2.157 1.952 2.807 3.474v-4.87h8.162a.54.54 0 010 1.082h-7.081v6.216h2.48l-.397-.631a.54.54 0 11.915-.576l1.1 1.747-1.1 1.748a.54.54 0 01-.915-.576l.397-.631h-2.48v7.946a.54.54 0 11-1.081 0v-5.453c-.645 1.583-1.725 2.835-2.778 3.764a14.555 14.555 0 01-3.032 2.043c-.092.046-.165.08-.216.104l-.04.018a1.307 1.307 0 01-.02.01l-.017.007-.006.002s-.001.001-.215-.495l.214.496-.755.326v-8.768h-5.243a.54.54 0 01-.51-.36c-.097.181-.19.364-.281.549-1.39 2.835-2.041 6.139-2.346 10.765a.54.54 0 01-1.078-.07c.308-4.684.973-8.15 2.453-11.171 1.482-3.024 3.758-5.552 7.201-8.4l.226-.187.28.088zm-6.052 7.715a.54.54 0 01.107-.01h5.243v-6.025c-2.4 2.075-4.115 3.97-5.35 6.035zm6.431-6.41v6.4h5.276c-.183-2.343-1.544-3.967-2.955-5.043a11.371 11.371 0 00-2.321-1.357zm5.277 7.48h-5.277v7.065l.184-.106a13.47 13.47 0 002.107-1.512c1.43-1.26 2.802-3.068 2.986-5.446z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F9F9FF"
        fillRule="evenodd"
        d="M28.973 45.838v8.919c.137.114.272.226.406.335 2.91 2.369 5.134 3.45 9.09 4.871a94.009 94.009 0 00.558.2 31.29 31.29 0 01.653-.195c3.247-.93 5.09-.854 6.401-.8 1.228.05 1.988.08 2.997-.75a7.59 7.59 0 00.814-.796v-7.406c-.12.441-.303.78-.54 1.037-.833.905-2.327.824-4.052.73-1.866-.101-4.002-.217-5.862.885a6.03 6.03 0 00-.411.267 1.918 1.918 0 00-.14-.19l-.022-.026c-.646-.757-1.991-1.37-3.499-2.057-2.132-.972-4.589-2.091-5.852-3.975a5.014 5.014 0 01-.541-1.05zm8.611 13.225c-2.926-1.1-4.851-2.068-7.073-3.766 1.693.348 2.986.815 4.123 1.462 1.044.593 1.966 1.342 2.95 2.304zm8.522-.435c-1.138-.047-2.683-.11-5.162.456a6.97 6.97 0 011.78-.768c.997-.263 1.86-.205 2.664-.07.272.046.532.1.79.153h.001c.128.026.256.053.385.078.291.057.584.108.876.135-.314.045-.669.041-1.135.023l-.07-.002-.129-.005zm1.627-.537c.361.014.713-.022 1.07-.147.168-.144.35-.319.548-.532v-5.443a2.93 2.93 0 01-.858.407c-.85.254-1.888.217-2.906.164l-.263-.014h-.007c-2.046-.11-4.184-.224-5.977 1.05l-.043.03v5.91l.13-.038c1.175-.927 2.215-1.435 3.16-1.684 1.097-.29 2.045-.223 2.89-.08.283.047.56.104.824.158l.367.075a6.98 6.98 0 001.065.144zm-9.16-4.661l.184.281v5.77c-1.311-1.37-2.475-2.408-3.856-3.192-1.421-.808-3.056-1.34-5.292-1.707a48.651 48.651 0 01-.096-.079v-6.725c1.13 1.321 2.782 2.232 4.314 2.966.463.222.909.425 1.335.62h.001c.598.272 1.157.527 1.673.792.888.457 1.472.865 1.738 1.274z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F9F9FF"
        fillRule="evenodd"
        d="M75.135 40c0 19.405-15.73 35.135-35.135 35.135-19.405 0-35.135-15.73-35.135-35.135C4.865 20.595 20.595 4.865 40 4.865c19.405 0 35.135 15.73 35.135 35.135zM40 73.513c18.509 0 33.513-15.004 33.513-33.513S58.51 6.486 40 6.486 6.486 21.491 6.486 40 21.491 73.513 40 73.513z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F9F9FF"
        fillRule="evenodd"
        d="M76.973 40c0 20.42-16.553 36.973-36.973 36.973C19.58 76.973 3.027 60.42 3.027 40 3.027 19.58 19.58 3.027 40 3.027 60.42 3.027 76.973 19.58 76.973 40zM40 76.757C60.3 76.757 76.757 60.3 76.757 40 76.757 19.7 60.3 3.243 40 3.243 19.7 3.243 3.243 19.7 3.243 40 3.243 60.3 19.7 76.757 40 76.757z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F9F9FF"
        fillRule="evenodd"
        d="M80 40c0 22.091-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0s40 17.909 40 40zM40 78.378c21.196 0 38.378-17.182 38.378-38.378S61.196 1.622 40 1.622 1.622 18.804 1.622 40 18.804 78.378 40 78.378z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  dark: (className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 81"
      className={className}
    >
      <path
        fill="url(#paint0_linear_63_52)"
        d="M52 29.078l3.135-.54c-1.892-6.433-4.909-11.808-15.405-18.109-8.967 5.378-12.221 9.446-15.838 18v36.054h31.19V48.537h-2.758v13.676H26.703V28.429c3.911-7.459 6.973-11.622 13.027-14.757 7.94 4.965 10.486 9.135 12.27 15.406z"
      ></path>
      <path
        fill="url(#paint1_linear_63_52)"
        d="M36.923 21.085c.863.974 1.833 2.068 1.24 5.29-.179-.445-.68-.979-1.26-1.597-1.18-1.256-2.688-2.86-2.47-4.781.27-2.163 2.756-2.757 3.189-1.352-1.735-.066-1.85.747-1.352 1.622.187.291.416.55.653.818z"
      ></path>
      <path
        fill="url(#paint2_linear_63_52)"
        d="M33.081 20.7c.646 3.631 2.165 4.636 3.541 5.547 1.964 1.3 3.638 2.407 2.08 10.669-.877-3.38-2.646-5.379-4.163-7.093-2.219-2.507-3.898-4.404-1.458-9.124z"
      ></path>
      <path
        fill="url(#paint3_linear_63_52)"
        d="M36.919 44.97c1.1-8.995-.269-10.176-2.096-11.753-1.314-1.133-2.864-2.47-3.904-7.058-2.38 7.91-.976 9.451 1.484 12.153 1.34 1.47 2.992 3.285 4.516 6.657z"
      ></path>
      <path
        fill="url(#paint4_linear_63_52)"
        d="M33.618 41.662c1.919 1.816 3.407 3.224 1.517 7.362-.652-1.977-1.888-3.255-3.039-4.444-1.901-1.966-3.57-3.692-1.988-7.935.795 2.448 2.246 3.821 3.51 5.017z"
      ></path>
      <path
        fill="url(#paint5_linear_63_52)"
        fillRule="evenodd"
        d="M46.648 30.67l-.128.409.129-.409h.002l.005.002.017.006a5.209 5.209 0 01.279.1 12.456 12.456 0 013.052 1.695c1.066.813 2.157 1.952 2.807 3.475v-4.87h8.162a.54.54 0 010 1.08h-7.081v6.217h2.48l-.397-.63a.54.54 0 01.915-.577l1.1 1.748-1.1 1.747a.54.54 0 01-.915-.576l.397-.63h-2.48v7.945a.54.54 0 01-1.081 0v-5.453c-.645 1.583-1.725 2.836-2.778 3.764a14.555 14.555 0 01-3.032 2.044c-.092.045-.165.08-.216.103l-.04.018-.02.01-.017.007-.006.003-.215-.496.214.496-.755.326v-8.768h-5.243a.54.54 0 01-.51-.36c-.097.181-.19.364-.281.549-1.39 2.835-2.041 6.14-2.346 10.765a.54.54 0 11-1.078-.07c.308-4.684.973-8.15 2.453-11.17 1.482-3.025 3.758-5.553 7.201-8.4l.226-.188.28.088zm-6.052 7.716a.54.54 0 01.107-.011h5.243V32.35c-2.4 2.075-4.115 3.97-5.35 6.036zm6.431-6.41v6.399h5.276c-.183-2.342-1.544-3.967-2.955-5.043a11.371 11.371 0 00-2.321-1.357zm5.277 7.48h-5.277v7.064l.184-.106a13.476 13.476 0 002.107-1.512c1.43-1.26 2.802-3.067 2.986-5.446z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint6_linear_63_52)"
        fillRule="evenodd"
        d="M28.973 46.429v8.919c.137.114.272.226.406.335 2.91 2.369 5.134 3.45 9.09 4.871a94.009 94.009 0 00.424.152l.134.047a31.254 31.254 0 01.653-.194c3.247-.929 5.09-.854 6.401-.8 1.228.05 1.988.08 2.997-.75a7.6 7.6 0 00.814-.796v-7.406c-.12.441-.303.78-.54 1.037-.833.905-2.327.824-4.052.73-1.866-.1-4.002-.217-5.862.885a5.844 5.844 0 00-.411.267 1.945 1.945 0 00-.14-.189l-.022-.027c-.646-.757-1.991-1.37-3.499-2.057-2.132-.972-4.589-2.091-5.852-3.975a5.014 5.014 0 01-.541-1.049zm8.611 13.225c-2.926-1.1-4.851-2.068-7.073-3.766 1.693.348 2.986.815 4.123 1.462 1.044.593 1.966 1.342 2.95 2.304zm8.522-.435c-1.138-.046-2.683-.11-5.162.456a6.97 6.97 0 011.78-.768c.997-.262 1.86-.204 2.664-.07.272.046.532.1.79.153h.001c.128.026.256.053.385.078.291.057.584.108.876.136-.314.044-.669.04-1.135.023l-.07-.003-.129-.005zm1.627-.537c.361.014.713-.022 1.07-.147.168-.144.35-.319.548-.532V52.56a2.93 2.93 0 01-.858.407c-.85.255-1.888.217-2.906.164l-.263-.014h-.007c-2.046-.11-4.184-.224-5.977 1.05l-.043.03v5.91l.13-.038c1.175-.927 2.215-1.435 3.16-1.684 1.097-.29 2.045-.223 2.89-.08.283.047.56.104.824.158l.367.075a6.98 6.98 0 001.065.144zm-9.16-4.661l.184.281v5.77c-1.311-1.37-2.475-2.408-3.856-3.192-1.421-.808-3.056-1.339-5.292-1.707a48.651 48.651 0 01-.096-.079V48.37c1.13 1.321 2.782 2.232 4.314 2.966.463.222.909.425 1.335.62h.001c.598.272 1.157.527 1.673.793.888.456 1.472.865 1.738 1.273z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint7_linear_63_52)"
        fillRule="evenodd"
        d="M75.135 40.591c0 19.405-15.73 35.135-35.135 35.135-19.405 0-35.135-15.73-35.135-35.135C4.865 21.187 20.595 5.456 40 5.456c19.405 0 35.135 15.73 35.135 35.135zM40 74.105c18.509 0 33.513-15.005 33.513-33.514S58.51 7.078 40 7.078 6.486 22.082 6.486 40.59c0 18.51 15.005 33.514 33.514 33.514z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint8_linear_63_52)"
        fillRule="evenodd"
        d="M76.973 40.591c0 20.42-16.553 36.973-36.973 36.973-20.42 0-36.973-16.553-36.973-36.973C3.027 20.171 19.58 3.618 40 3.618c20.42 0 36.973 16.554 36.973 36.973zM40 77.348c20.3 0 36.757-16.457 36.757-36.757C76.757 20.291 60.3 3.834 40 3.834c-20.3 0-36.757 16.457-36.757 36.757 0 20.3 16.457 36.757 36.757 36.757z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint9_linear_63_52)"
        fillRule="evenodd"
        d="M80 40.591c0 22.092-17.909 40-40 40s-40-17.908-40-40c0-22.091 17.909-40 40-40s40 17.909 40 40zM40 78.97c21.196 0 38.378-17.183 38.378-38.379C78.378 19.395 61.196 2.213 40 2.213S1.622 19.395 1.622 40.59 18.804 78.97 40 78.97z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_63_52"
          x1="0"
          x2="100.78"
          y1="19.091"
          y2="27.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#688FE8"></stop>
          <stop offset="1" stopColor="#5B32FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
}

export function LogoAdf({ className, variant = 'dark' }: LogoAdfProps) {
  return variants[variant](className)
}
