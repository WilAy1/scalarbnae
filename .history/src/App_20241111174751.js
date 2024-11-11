import './App.css';
import Header from './header';
import Img1 from './assets/img1.webp';

function App() {
  return (
    <div className="App bg-[#2B50AA] w-full min-h-screen p-[1.667vw]">
      <Header />
      <div className='py-[1.458vw]'>

        <div className='w-full flex gap-[1.701vw]'>


        <div className='flex items-center gap-[1.701vw] font-satoshi'>
          <div className='bg-[#FCFCFC] p-[1.667vw] rounded-[1.389vw] flex flex-col'>
            <div className='ml-auto'>
              <svg width="119" height="120" viewBox="0 0 119 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_0_44)">
              <path d="M118.104 70.4647C117.594 73.3171 111.498 75.1589 102.562 75.1589H102.336C98.9952 72.4387 94.9377 69.6713 90.3705 67.0739C89.0589 66.3277 87.7473 65.6193 86.4356 64.9581C87.9077 64.7692 89.3797 64.552 90.8612 64.297C95.9096 63.4186 100.684 62.1907 104.865 60.7361C113.206 63.6925 118.641 67.4328 118.094 70.4552L118.104 70.4647ZM111.036 89.6101C110.215 91.008 108.045 91.3008 106.365 91.3008C103.279 91.3008 99.1651 90.3657 94.5885 88.7033C92.8145 85.7281 90.6065 82.5734 88.0398 79.3621C87.9549 79.2582 87.8605 79.1448 87.7756 79.0409C87.5586 78.767 87.3415 78.5025 87.1151 78.2286C86.7942 77.8414 86.4734 77.4541 86.1431 77.0763C85.1712 75.9334 84.1804 74.8284 83.1896 73.7705C84.6145 74.0822 86.0676 74.375 87.568 74.63C92.5409 75.4895 97.4949 75.9618 101.958 75.9996C108.771 81.5911 112.583 86.9465 111.026 89.6006L111.036 89.6101ZM79.8586 115.395C79.5944 115.49 79.3019 115.537 78.9999 115.537C76.0181 115.537 71.819 111.079 67.8463 104.25C68.5635 100.047 68.9598 95.2111 68.9598 90.0257C68.9598 88.5428 68.9221 87.0693 68.856 85.6242C69.743 86.7671 70.6677 87.91 71.6491 89.0623C74.0648 91.8958 76.5559 94.5027 79.0188 96.779C79.953 97.6385 80.8683 98.4602 81.7836 99.2253C83.35 107.83 82.7838 114.347 79.8586 115.395ZM59.5047 118.937C56.3813 118.937 53.5882 113.006 52.0784 104.382C54.2299 100.652 56.2964 96.2406 58.0704 91.4236C58.5894 90.0162 59.0612 88.6278 59.5047 87.2582C59.9388 88.6278 60.42 90.0162 60.939 91.4236C62.713 96.2312 64.7796 100.642 66.931 104.382C65.4212 113.006 62.6281 118.937 59.5047 118.937ZM40.0095 115.547C39.7076 115.547 39.415 115.499 39.1508 115.405C36.2162 114.356 35.65 107.839 37.2258 99.2347C40.5568 96.439 44.0293 92.9726 47.3509 89.0717C48.3322 87.9288 49.257 86.7765 50.144 85.6337C50.0779 87.0693 50.0402 88.5333 50.0402 90.0351C50.0402 95.2205 50.446 100.056 51.1537 104.26C47.1905 111.088 42.9819 115.547 40.0095 115.547ZM23.2791 105.846C22.4299 105.846 21.7505 105.639 21.2503 105.223C19.5801 103.844 19.8821 100.151 22.0807 95.0883C22.8639 93.2843 23.8547 91.3669 25.0248 89.3929C29.1484 87.8722 33.6306 85.7848 38.094 83.244C39.4056 82.4979 40.6795 81.7328 41.9156 80.9583C41.3495 82.2901 40.8116 83.6502 40.2926 85.0575C38.4903 89.9501 37.1881 94.6444 36.3954 98.8475C31.1678 103.211 26.3931 105.846 23.2886 105.846H23.2791ZM12.6351 91.3102C10.9554 91.3102 8.78511 91.0174 7.96416 89.6195C6.40718 86.956 10.2194 81.61 17.0323 76.0185C21.4862 75.9807 26.4402 75.5084 31.4226 74.6489C32.9229 74.3844 34.3855 74.0916 35.8104 73.7894C34.8196 74.8473 33.8288 75.9523 32.8569 77.0952C29.5542 80.9772 26.6856 84.9536 24.4303 88.7222C19.8443 90.394 15.7302 91.3291 12.6351 91.3291V91.3102ZM16.4379 75.1684C7.51122 75.1684 1.41543 73.3266 0.896437 70.4741C0.358574 67.4517 5.78439 63.7114 14.1166 60.755C18.193 62.1812 22.9489 63.4091 28.1293 64.3064C29.6108 64.5614 31.0923 64.7881 32.5549 64.977C31.2433 65.6382 29.9411 66.3466 28.62 67.0928C24.0529 69.6902 20.0048 72.4576 16.6643 75.1778H16.4284L16.4379 75.1684ZM7.96416 30.9554C8.78511 29.5576 10.9554 29.2647 12.6351 29.2647C15.7207 29.2647 19.8349 30.1998 24.4115 31.8622C26.6101 35.5364 29.4598 39.5033 32.8474 43.4892C33.8194 44.6321 34.8102 45.7372 35.801 46.795C34.3761 46.4833 32.9135 46.1905 31.4131 45.9355C28.8182 45.4821 26.2232 45.1421 23.7037 44.906C21.4013 44.6982 19.1555 44.5849 17.0229 44.566C10.21 38.9744 6.39775 33.6284 7.95472 30.9649L7.96416 30.9554ZM21.2503 15.352C21.7505 14.9364 22.4299 14.7286 23.2791 14.7286C26.3836 14.7286 31.1678 17.3732 36.3954 21.7275C37.1881 25.9306 38.4808 30.6249 40.2926 35.508C40.8116 36.9154 41.3589 38.2849 41.9156 39.6167C40.6889 38.8422 39.415 38.0771 38.094 37.3309C33.6401 34.7902 29.1673 32.7122 25.0437 31.1916C20.5804 23.6354 18.8535 17.326 21.2409 15.352H21.2503ZM39.1508 5.17006C39.415 5.07561 39.7076 5.02838 40.0095 5.02838C42.9819 5.02838 47.1905 9.48651 51.1537 16.3059C50.4365 20.5091 50.0402 25.345 50.0402 30.5399C50.0402 31.0404 50.0402 31.541 50.0496 32.0416C50.0496 32.3911 50.0591 32.7406 50.0779 33.09C50.0779 33.2223 50.0779 33.364 50.0874 33.4962C50.0968 33.9873 50.1251 34.469 50.144 34.9413C49.257 33.7984 48.3322 32.6556 47.3509 31.5033C44.0293 27.6024 40.5568 24.136 37.2258 21.3402C35.65 12.7357 36.2162 6.22792 39.1508 5.17006ZM78.9999 5.02838C79.3019 5.02838 79.585 5.07561 79.8586 5.17006C81.8968 5.89734 82.8971 9.47707 82.5951 14.9742C82.4913 16.9388 82.2177 19.0734 81.8119 21.3213C78.4809 24.1266 74.9895 27.5929 71.6585 31.5033C70.6866 32.6461 69.7619 33.789 68.8654 34.9413C68.9315 33.5056 68.9692 32.0416 68.9692 30.5399C68.9692 30.0204 68.9692 29.5103 68.9598 28.9908C68.9598 28.9342 68.9598 28.8775 68.9598 28.8208C68.9598 28.3958 68.9409 27.9708 68.9315 27.5457C68.9221 27.1774 68.9032 26.8279 68.8937 26.469C68.8937 26.3556 68.8937 26.2423 68.8843 26.1384C68.7239 22.6059 68.3747 19.3001 67.8652 16.3059C71.8378 9.47707 76.0369 5.02838 79.0188 5.02838H78.9999ZM95.7303 14.7286C96.5701 14.7286 97.259 14.9458 97.7591 15.352C100.146 17.326 98.4291 23.6354 93.9657 31.1916C89.8421 32.7122 85.3788 34.7902 80.9249 37.3309C79.6038 38.0771 78.3299 38.8422 77.1032 39.6167C77.6694 38.2849 78.2073 36.9154 78.7263 35.508C80.4814 30.7476 81.8025 26.0345 82.6045 21.7369C87.8322 17.3638 92.6258 14.7192 95.7303 14.7192V14.7286ZM106.374 29.2647C108.054 29.2647 110.224 29.5576 111.045 30.9554C112.13 32.8161 110.564 36.1786 106.752 40.2023C105.393 41.638 103.798 43.102 102.015 44.5565C97.5515 44.5943 92.5786 45.0666 87.5963 45.9261C86.0959 46.1811 84.6333 46.4739 83.2179 46.7856C84.2087 45.7277 85.1901 44.6226 86.1714 43.4798C89.559 39.5033 92.4088 35.5364 94.6074 31.8527C99.184 30.1904 103.298 29.2553 106.384 29.2553L106.374 29.2647ZM75.4613 60.2828C78.4904 59.2721 81.7459 57.9215 85.0768 56.2874C86.9358 56.5047 88.8324 56.7692 90.7291 57.0997C95.3717 57.9026 99.7407 59.0171 103.572 60.2922C99.6935 61.5862 95.3246 62.6724 90.7291 63.4658C88.8324 63.7964 86.9452 64.0608 85.0768 64.2781C81.7364 62.6441 78.4809 61.2934 75.4519 60.2828H75.4613ZM75.8954 64.8353C75.0178 64.8353 74.1686 64.8165 73.3476 64.7787C71.8945 63.683 70.479 62.7385 69.1485 61.9546C70.6866 61.6712 72.338 61.2556 74.0931 60.7172C77.0089 61.6334 80.1889 62.8896 83.4632 64.4386C80.8305 64.6937 78.2828 64.8259 75.8954 64.8259V64.8353ZM74.4988 65.6665C74.9612 65.676 75.4142 65.6854 75.8954 65.6854C78.7263 65.6854 81.7836 65.506 84.9258 65.1565C86.5866 65.9782 88.2757 66.8661 89.9459 67.8295C94.0318 70.153 97.7497 72.6654 100.901 75.1589C96.7777 75.0645 92.2672 74.6017 87.7378 73.8177C85.8223 73.4871 83.9539 73.0999 82.1422 72.6749C79.5661 70.0113 76.9711 67.65 74.4894 65.6854L74.4988 65.6665ZM93.258 88.2122C89.4741 86.7482 85.4071 84.8119 81.3495 82.5073C79.6604 81.5533 78.0374 80.5521 76.4899 79.5415C74.9895 76.1601 73.3759 73.081 71.7246 70.408C74.6687 71.532 78.0374 72.5615 81.7175 73.4305C82.9914 74.7622 84.2559 76.1601 85.5015 77.6241C88.5305 81.185 91.1538 84.8025 93.258 88.2028V88.2122ZM72.3191 88.5239C71.0735 87.0599 69.894 85.577 68.7805 84.1035C68.554 80.4766 68.1105 77.0291 67.4877 73.9311C69.8562 75.9807 72.6588 78.0775 75.7916 80.1177C76.5371 81.7989 77.2353 83.5463 77.9053 85.3409C79.5189 89.714 80.7362 94.0021 81.5288 97.9124C81.274 97.6952 81.0287 97.4685 80.7645 97.2418C77.9714 94.7388 75.0933 91.7919 72.3096 88.5239H72.3191ZM57.4382 74.5072C58.278 72.9015 58.9763 71.3809 59.5141 69.9546C60.052 71.3809 60.7503 72.9015 61.5901 74.5072C61.1844 77.4825 60.4955 80.7788 59.5141 84.2452C58.5422 80.7788 57.8439 77.473 57.4382 74.5072ZM52.6352 72.9393C53.5222 72.1365 54.3431 71.3242 55.098 70.5308C55.4755 70.1341 55.8246 69.7468 56.1549 69.369C56.1643 70.8897 56.2964 72.5615 56.5229 74.3467C55.1074 77.0008 53.3146 79.8721 51.1914 82.8001C51.4745 79.2109 51.9746 75.8673 52.6257 72.9393H52.6352ZM51.5217 73.9216C50.9083 76.9724 50.4648 80.401 50.2384 84.113C49.1343 85.577 47.9548 87.0599 46.6998 88.5239C43.6708 92.0847 40.5191 95.2772 37.49 97.9124C38.2827 94.0021 39.4905 89.714 41.1041 85.3409C41.7741 83.5368 42.4724 81.7895 43.2178 80.1177C46.294 78.1058 49.106 76.009 51.5122 73.9311L51.5217 73.9216ZM48.6531 69.8696C50.3422 69.1801 51.8708 68.4434 53.2108 67.6972C52.6918 69.1329 52.2294 70.7575 51.8236 72.5237C49.5401 74.5733 46.8508 76.6513 43.8878 78.6537C45.3976 75.3856 47.0206 72.4104 48.6531 69.8696ZM47.3037 70.3986C45.6524 73.0716 44.0293 76.1601 42.5384 79.5415C40.9814 80.5521 39.3584 81.5439 37.6788 82.4979C33.6118 84.8119 29.5353 86.7482 25.742 88.2122C27.884 84.7553 30.5261 81.1472 33.5268 77.6241C34.7819 76.1601 36.0463 74.7622 37.3108 73.4305C40.9909 72.5615 44.3596 71.532 47.3037 70.3986ZM45.9449 65.6193C46.1619 65.6099 46.3695 65.6004 46.5865 65.591C47.2754 65.5532 47.9454 65.4965 48.587 65.4398C49.4552 65.3548 50.2855 65.2509 51.0687 65.1187C50.0874 66.2899 49.0966 67.6406 48.1152 69.1518C45.2844 70.2947 42.01 71.362 38.4525 72.2782C41.0003 69.7091 43.5481 67.4611 45.9543 65.6287L45.9449 65.6193ZM43.1329 65.6854C43.6047 65.6854 44.0671 65.6854 44.5295 65.6665C42.0477 67.6311 39.4622 69.9924 36.8861 72.656C35.0744 73.081 33.206 73.4683 31.2905 73.7988C26.7611 74.5828 22.2411 75.0456 18.1175 75.1495C21.2786 72.656 24.9871 70.1435 29.0729 67.82C30.7526 66.8661 32.4322 65.9688 34.093 65.147C37.2353 65.4965 40.2926 65.676 43.1235 65.676L43.1329 65.6854ZM15.4848 60.2922C19.3065 59.0171 23.666 57.912 28.2992 57.1092C30.1959 56.7786 32.0831 56.5047 33.942 56.2969C37.2824 57.9309 40.5379 59.2721 43.567 60.2922C40.5379 61.3028 37.2824 62.6535 33.942 64.2875C32.0831 64.0703 30.1959 63.8058 28.2992 63.4752C23.666 62.6724 19.3065 61.5673 15.4848 60.2922ZM16.4567 45.4066C16.5322 45.4066 16.6172 45.4066 16.6926 45.4066C20.0331 48.1268 24.0906 50.8848 28.6483 53.4822C29.96 54.2284 31.2716 54.9273 32.5832 55.5979C31.1206 55.7869 29.6391 56.0041 28.1576 56.2591C22.9772 57.1564 18.2213 58.3937 14.1449 59.8105C5.78439 56.8542 0.349137 53.1233 0.896437 50.0914C1.02854 49.3452 1.54754 48.6746 2.38736 48.0796C4.77472 46.3983 9.83252 45.3877 16.4379 45.3877L16.4567 45.4066ZM31.2905 46.7761C33.206 47.1067 35.0744 47.494 36.8861 47.919C39.4622 50.592 42.0477 52.9438 44.5295 54.9085C44.0765 54.899 43.6141 54.8896 43.1329 54.8896C40.2926 54.8896 37.2447 55.069 34.1024 55.4185C32.4417 54.5968 30.762 53.7089 29.0824 52.7455C24.9965 50.422 21.2786 47.9096 18.1269 45.416C19.9104 45.4538 21.7599 45.5672 23.6566 45.7466C26.1477 45.9733 28.7238 46.3228 31.2905 46.7667V46.7761ZM47.3037 50.1764C44.3596 49.043 40.9909 48.0135 37.3108 47.1445C36.0369 45.8222 34.7724 44.4148 33.5268 42.9508C30.4978 39.39 27.8745 35.7725 25.7703 32.3722C29.5542 33.8362 33.6212 35.7725 37.6788 38.0771C39.3679 39.0405 40.9909 40.0323 42.5384 41.0335C44.0388 44.4148 45.6524 47.5034 47.3037 50.1764ZM51.8331 48.089C52.2388 49.8458 52.7012 51.4515 53.2108 52.8872C51.8614 52.141 50.3422 51.4137 48.6531 50.7148C47.0206 48.1835 45.407 45.2082 43.8972 41.9402C46.9074 43.9804 49.5873 46.0677 51.8331 48.089ZM51.5217 46.6439C49.1532 44.6037 46.3601 42.5069 43.2178 40.4667C42.4818 38.7855 41.7741 37.0381 41.1041 35.2436C39.4905 30.8704 38.2733 26.5823 37.49 22.672C40.5191 25.3072 43.6708 28.4997 46.6998 32.0605C47.9454 33.5245 49.1249 35.0074 50.2384 36.4714C50.4648 40.1739 50.9083 43.6026 51.5217 46.6439ZM51.8708 17.5527C53.8052 21.0569 55.6736 25.0994 57.2778 29.4442C57.9477 31.2482 58.5328 33.0334 59.0612 34.7807C57.9949 38.3321 57.2212 41.7041 56.7399 44.7738C55.2207 42.0535 53.324 39.1444 51.0876 36.1692C50.9744 34.3463 50.9178 32.4667 50.9178 30.5493C50.9178 25.9117 51.2669 21.4819 51.8708 17.5527ZM67.5161 46.6439C68.1294 43.6026 68.5729 40.1645 68.7994 36.462C69.9034 34.9885 71.0924 33.5151 72.3285 32.0605C75.367 28.4902 78.5281 25.2978 81.5666 22.6531C80.7645 26.6201 79.5283 30.9082 77.9242 35.2436C77.2637 37.0381 76.5559 38.7855 75.8105 40.4667C72.6777 42.5069 69.8845 44.6037 67.5161 46.6439ZM70.3847 50.7148C68.6956 51.4137 67.1669 52.141 65.8175 52.8872C65.9025 52.6416 65.9968 52.396 66.0723 52.141C66.4875 50.9037 66.865 49.5436 67.1952 48.089C69.441 46.0677 72.1304 43.9804 75.1311 41.9402C73.6213 45.1988 71.9983 48.174 70.3752 50.7053L70.3847 50.7148ZM71.7246 50.1859C73.3759 47.5129 74.9895 44.4337 76.4899 41.0523C78.0374 40.0417 79.6604 39.05 81.3495 38.0866C85.4071 35.7819 89.4741 33.8457 93.258 32.3817C91.1538 35.7819 88.5305 39.3994 85.5015 42.9603C84.2559 44.4243 82.982 45.8316 81.7175 47.1539C78.0374 48.0229 74.6687 49.0524 71.7246 50.1859ZM73.0928 54.9651C71.215 55.0501 69.4977 55.2201 67.969 55.4657C68.9504 54.2945 69.9412 52.9438 70.9225 51.4326C73.7534 50.2803 77.0277 49.213 80.5852 48.3063C78.0374 50.8754 75.4896 53.1233 73.0834 54.9557L73.0928 54.9651ZM75.8954 54.899C75.4236 54.899 74.9612 54.899 74.4988 54.9179C76.9806 52.9533 79.5661 50.6014 82.1516 47.9284C83.9539 47.5034 85.8223 47.1162 87.7473 46.7856C92.2861 45.9922 96.806 45.5388 100.949 45.4349C97.7402 47.9568 94.0035 50.4598 89.9554 52.7644C88.2757 53.7184 86.5961 54.6156 84.9353 55.4374C81.793 55.0879 78.7451 54.9085 75.9048 54.9085L75.8954 54.899ZM69.1485 58.6204C70.479 57.8459 71.8945 56.8919 73.3476 55.7963C74.1686 55.768 75.0178 55.7491 75.886 55.7491C78.2733 55.7491 80.8305 55.8813 83.4632 56.1363C80.1794 57.6853 77.0089 58.9415 74.0931 59.8672C72.3474 59.3288 70.6866 58.9132 69.1485 58.6299V58.6204ZM65.7515 60.3017C66.4592 60.0277 67.1952 59.6877 67.9595 59.2816C69.3939 59.4894 70.9508 59.8388 72.6116 60.3017C70.9508 60.7645 69.3939 61.1045 67.9595 61.3217C67.1952 60.9156 66.4498 60.5756 65.7515 60.3017ZM67.969 65.1281C69.4977 65.3832 71.215 65.5532 73.0928 65.6287C75.4991 67.4611 78.0374 69.7091 80.5946 72.2782C77.0372 71.3714 73.7628 70.3041 70.932 69.1518C69.9506 67.6406 68.9598 66.2899 67.9784 65.1187L67.969 65.1281ZM65.3269 66.441C64.9966 65.6382 64.6474 64.9203 64.2983 64.2592C65.0155 64.4953 65.7987 64.7031 66.6574 64.8826C67.5915 65.931 68.5446 67.1589 69.4977 68.5473C67.9407 67.8578 66.5441 67.1494 65.3363 66.4316L65.3269 66.441ZM66.3082 69.1896C66.1478 68.6701 65.978 68.1789 65.8175 67.7067C67.1575 68.4529 68.6956 69.1896 70.3847 69.8885C72.0171 72.4293 73.6307 75.3951 75.1405 78.6631C72.1304 76.6229 69.441 74.5356 67.1952 72.5143C66.931 71.3431 66.6291 70.2474 66.3177 69.199L66.3082 69.1896ZM62.8451 68.0278C62.8074 67.1589 62.7319 66.356 62.6187 65.6193C63.2131 66.0821 63.8831 66.5544 64.6286 67.0172C64.9305 67.7634 65.2136 68.5662 65.4778 69.4352C65.676 70.0774 65.8647 70.748 66.044 71.4375C64.8079 70.2663 63.7321 69.114 62.8451 68.0278ZM62.496 74.3655C62.7225 72.5804 62.8451 70.9086 62.864 69.3879C63.8737 70.5497 65.0626 71.7587 66.412 72.9865C67.082 75.9618 67.5538 79.2959 67.8369 82.8379C65.7137 79.9004 63.9114 77.0291 62.5054 74.3655H62.496ZM57.4099 64.7409C57.6835 64.4764 57.9289 64.2214 58.1553 63.9664C58.1553 64.297 58.1742 64.6464 58.212 65.0148C57.9194 65.5815 57.542 66.1766 57.1079 66.7999C57.174 66.0538 57.2683 65.3643 57.4099 64.7503V64.7409ZM55.985 63.7775C56.3247 63.6264 56.655 63.4658 56.9475 63.3052C56.8343 63.6169 56.7305 63.9569 56.6455 64.3159C56.1643 64.7409 55.617 65.1754 54.9848 65.6098C55.3056 64.9298 55.6359 64.3253 55.985 63.7869V63.7775ZM54.7206 64.2592C54.3525 64.9109 54.0128 65.6476 53.6826 66.441C52.4747 67.1589 51.0687 67.8673 49.5118 68.5568C50.4648 67.1683 51.4179 65.9404 52.3521 64.892C53.2108 64.7126 54.0034 64.5048 54.7206 64.2592ZM51.0499 59.2816C51.8142 59.6877 52.5597 60.0277 53.2579 60.3017C52.5502 60.5756 51.8142 60.9156 51.0499 61.3217C49.6156 61.1139 48.0586 60.7739 46.3978 60.3017C48.0586 59.8388 49.6156 59.4894 51.0499 59.2816ZM49.8609 58.6204C48.3228 58.9038 46.6715 59.3194 44.9258 59.8577C42.01 58.9415 38.83 57.6759 35.5462 56.1269C38.1789 55.8719 40.7267 55.7396 43.1235 55.7396C44.001 55.7396 44.8503 55.7585 45.6618 55.7869C47.115 56.8825 48.5304 57.827 49.8609 58.611V58.6204ZM51.9557 56.5141C52.5314 57.147 53.107 57.7042 53.6637 58.1954C52.8805 58.2143 52.0501 58.2898 51.1631 58.4126C49.9081 57.7326 48.5682 56.8919 47.1716 55.8907C48.9362 56.0135 50.5403 56.2213 51.9557 56.5141ZM48.0869 51.4421C49.0683 52.9533 50.0685 54.304 51.0404 55.4752C49.5118 55.2201 47.7944 55.0596 45.926 54.9746C43.5198 53.1422 40.972 50.8942 38.4242 48.3251C41.9817 49.2319 45.256 50.2992 48.0869 51.4515V51.4421ZM56.1454 51.2154C55.1452 50.0631 53.9657 48.8635 52.6163 47.6357C51.9652 44.7076 51.4745 41.3735 51.182 37.7843C53.2957 40.7123 55.098 43.5837 56.5134 46.2378C56.2775 48.0323 56.1549 49.6947 56.1454 51.2154ZM59.0518 51.9238C58.7781 52.7549 58.5705 53.5294 58.4196 54.2567C58.0232 53.6145 57.5609 52.9627 57.023 52.2827C56.9947 50.8942 57.0702 49.3452 57.2495 47.6734C57.9949 49.1847 58.6083 50.6203 59.0612 51.9332L59.0518 51.9238ZM61.5807 46.0961C61.0239 47.1539 60.5333 48.1929 60.0992 49.1941C59.8822 49.6947 59.6934 50.1764 59.5141 50.6392C58.9763 49.213 58.278 47.6923 57.4382 46.0772C57.8439 43.102 58.5328 39.8056 59.5141 36.3392C60.4955 39.8056 61.1844 43.1114 61.5901 46.0866L61.5807 46.0961ZM62.2884 44.8021C61.8072 41.7324 61.0334 38.351 59.9577 34.7902C60.4861 33.0428 61.0806 31.2482 61.7411 29.4537C63.3452 25.1089 65.2042 21.0663 67.148 17.5622C67.7614 21.4914 68.1011 25.9212 68.1011 30.5587C68.1011 32.4761 68.0445 34.3557 67.9218 36.1786C65.7326 39.1066 63.8171 42.0252 62.2695 44.7926L62.2884 44.8021ZM66.3931 47.6451C65.0532 48.8635 63.8642 50.0631 62.8734 51.2248C62.8546 49.7041 62.7319 48.0229 62.496 46.2283C63.9303 43.527 65.7326 40.6745 67.8274 37.7843C67.5444 41.3829 67.0442 44.7265 66.3931 47.6545V47.6451ZM64.6286 53.605C63.8831 54.0584 63.2131 54.5306 62.6187 54.9935C62.7319 54.2473 62.8074 53.4444 62.8451 52.5849C63.7227 51.4987 64.7984 50.3653 66.0157 49.1941C65.9685 49.383 65.9213 49.5719 65.8742 49.7514C65.4967 51.1587 65.0815 52.4527 64.6286 53.5956V53.605ZM64.2889 56.3536C64.6569 55.7018 64.9966 54.9746 65.3269 54.1717C66.5347 53.4539 67.9312 52.7361 69.4882 52.056C68.5352 53.4444 67.5821 54.6818 66.6574 55.7207C65.7987 55.9002 65.006 56.108 64.2889 56.3536ZM64.0341 58.2237C63.6566 58.252 63.2886 58.2898 62.9584 58.3465C63.166 58.1009 63.3736 57.827 63.5717 57.5437C64.1662 57.2981 64.8456 57.0808 65.5816 56.873C65.0532 57.3925 64.5342 57.8459 64.0341 58.2237ZM65.3457 58.2143C65.9119 57.7231 66.4781 57.1564 67.0537 56.533C68.4691 56.2402 70.0733 56.0324 71.8378 55.9096C70.4413 56.9014 69.1013 57.7515 67.8463 58.4315C66.9593 58.3087 66.1195 58.2332 65.3457 58.2143ZM64.2983 59.8294C63.9963 59.7444 63.7038 59.6783 63.4207 59.631C63.7133 59.4705 63.9963 59.2816 64.2889 59.0643C64.5059 59.0549 64.7229 59.0549 64.9305 59.0549C65.4118 59.0549 65.9308 59.0832 66.4592 59.1304C65.7704 59.4421 65.1098 59.6972 64.487 59.8861C64.4304 59.8672 64.3644 59.8483 64.3077 59.8294H64.2983ZM65.3457 62.4268C66.1289 62.4079 66.9593 62.3324 67.8463 62.2096C69.1013 62.8802 70.4413 63.7303 71.8378 64.7314C70.0733 64.6087 68.4691 64.3914 67.0537 64.1081C66.4781 63.4752 65.9025 62.9085 65.3457 62.4268ZM62.9678 62.2946C63.3075 62.3513 63.6566 62.3796 64.0341 62.4079C64.5342 62.7857 65.0532 63.2391 65.5816 63.7586C64.8456 63.5602 64.1756 63.343 63.5812 63.0974C63.383 62.8046 63.1754 62.5402 62.9678 62.2946ZM62.0619 63.3241C62.3544 63.4847 62.6753 63.6453 63.015 63.7964C63.3641 64.3253 63.6944 64.9392 64.0247 65.6193C63.4019 65.1943 62.8451 64.7598 62.3733 64.3348C62.2884 63.9758 62.1846 63.6453 62.0714 63.3241H62.0619ZM60.8069 65.0526C60.8447 64.6842 60.8635 64.3253 60.873 63.9853C61.0994 64.2403 61.3353 64.5048 61.6184 64.7598C61.76 65.3832 61.8543 66.0727 61.9204 66.8188C61.4769 66.2049 61.1089 65.6099 60.8163 65.0431L60.8069 65.0526ZM54.9942 62.4079C55.3717 62.3796 55.7397 62.3418 56.0699 62.2851C55.8623 62.5307 55.6642 62.8046 55.466 63.088C54.8715 63.3336 54.1921 63.5602 53.4561 63.7586C53.9845 63.2391 54.5035 62.7857 55.0036 62.4079H54.9942ZM53.6826 62.4268C53.1164 62.9085 52.5502 63.4752 51.9746 64.1081C50.5592 64.3914 48.955 64.5992 47.1905 64.7314C48.587 63.7303 49.927 62.8802 51.182 62.2096C52.069 62.3324 52.9088 62.4079 53.6826 62.4268ZM55.6076 61.01C55.3245 61.1801 55.032 61.3595 54.7394 61.5768C54.5224 61.5862 54.3054 61.5956 54.0978 61.5956C53.6165 61.5956 53.0975 61.5673 52.5691 61.5201C53.2579 61.2084 53.9279 60.9534 54.5413 60.755C54.9093 60.8684 55.2584 60.9439 55.6076 61.01ZM54.7394 59.0643C55.032 59.2816 55.3245 59.4705 55.6076 59.631C55.2679 59.6972 54.9093 59.7822 54.5413 59.8861C53.9185 59.6972 53.2579 59.4421 52.5691 59.1304C53.0975 59.0832 53.6165 59.0549 54.0978 59.0549C54.3054 59.0549 54.5224 59.0549 54.7394 59.0643ZM55.4566 57.5437C55.6547 57.8365 55.8623 58.1009 56.0699 58.3465C55.7302 58.2898 55.3811 58.252 55.0036 58.2237C54.5035 57.8459 53.9845 57.3925 53.4561 56.873C54.1921 57.0714 54.8621 57.2886 55.4566 57.5437ZM53.7014 54.1812C53.7014 54.1812 53.7109 54.2189 53.7203 54.2378C53.7486 54.2945 53.7675 54.3512 53.7958 54.4079C53.8619 54.559 53.9185 54.6912 53.9845 54.8329C54.2299 55.3807 54.4846 55.8907 54.7394 56.3536C54.0223 56.1174 53.2296 55.9096 52.3709 55.7207C51.4462 54.6723 50.4931 53.4444 49.5401 52.056C51.0971 52.7455 52.503 53.4539 53.7109 54.1717L53.7014 54.1812ZM58.1553 56.6464C57.9383 56.3913 57.693 56.1269 57.4193 55.8719C57.2778 55.2485 57.174 54.559 57.1079 53.8128C57.5514 54.4267 57.91 55.0123 58.212 55.5791C58.1742 55.9569 58.1553 56.3063 58.1459 56.6464H58.1553ZM59.9388 55.4374C59.7689 55.768 59.6274 56.0985 59.5141 56.4197C59.4009 56.108 59.2594 55.7868 59.099 55.4563C59.1839 54.8234 59.3254 54.1434 59.5236 53.4067C59.7217 54.1339 59.8633 54.814 59.9482 55.4468L59.9388 55.4374ZM61.609 55.8719C61.3353 56.1363 61.09 56.3913 60.8635 56.6558C60.8635 56.3158 60.8447 55.9663 60.7975 55.5885C61.0994 55.0218 61.4674 54.4267 61.9015 53.8128C61.8355 54.559 61.7317 55.2485 61.5996 55.8719H61.609ZM63.0339 56.8353C62.6847 56.9864 62.3639 57.147 62.0619 57.317C62.1752 57.0053 62.279 56.6653 62.3639 56.3063C62.8451 55.8813 63.3924 55.4468 64.0247 55.0218C63.7038 55.7018 63.3736 56.3063 63.0339 56.8447V56.8353ZM56.6644 56.3063C56.7493 56.6653 56.8531 56.9958 56.9664 57.317C56.6739 57.147 56.353 56.9958 56.0133 56.8447C55.6642 56.3158 55.3339 55.7018 55.0036 55.0218C55.6264 55.4468 56.1832 55.8813 56.655 56.3063H56.6644ZM64.2983 61.5673C64.0058 61.3501 63.7133 61.1706 63.4302 61.0006C63.7699 60.9345 64.1285 60.8589 64.4965 60.7456C65.1193 60.9345 65.7798 61.1895 66.4686 61.5106C65.9402 61.5579 65.4212 61.5862 64.94 61.5862C64.7324 61.5862 64.5248 61.5862 64.2983 61.5673ZM62.0053 52.2827C61.4674 52.9627 60.9956 53.6333 60.5993 54.2662C60.4483 53.5294 60.2407 52.7455 59.9671 51.9238C60.2313 51.1682 60.5333 50.3748 60.9013 49.5341C61.1655 48.9202 61.4674 48.2874 61.7788 47.6451C61.9581 49.3263 62.0336 50.8942 62.0053 52.2921V52.2827ZM56.1832 52.5849C56.2115 53.4444 56.287 54.2473 56.4002 54.9935C55.8057 54.5306 55.1358 54.0584 54.3997 53.605C53.8902 52.311 53.4184 50.8281 53.0032 49.1941C54.2204 50.3653 55.2962 51.4987 56.1832 52.5849ZM59.4575 67.0172C59.2877 66.3749 59.165 65.7704 59.0895 65.2037C59.2594 64.8731 59.4009 64.5425 59.5141 64.2214C59.6368 64.5425 59.7689 64.8637 59.9388 65.1943C59.8539 65.8271 59.7123 66.5071 59.5141 67.2344C59.4953 67.1589 59.4764 67.0927 59.4575 67.0172ZM61.7788 72.9488C61.0334 71.4375 60.4295 70.0113 59.9671 68.689C60.2407 67.8673 60.4483 67.0833 60.5993 66.3466C60.9956 66.9888 61.4674 67.65 62.0053 68.3395C62.0336 69.728 61.9581 71.277 61.7788 72.9488ZM35.5556 64.4764C38.8394 62.9274 42.01 61.6712 44.9352 60.755C46.6809 61.2934 48.3417 61.709 49.8703 61.9923C48.5398 62.7763 47.1244 63.7208 45.6712 64.807C44.8503 64.8448 44.0105 64.8637 43.1329 64.8637C40.7455 64.8637 38.1883 64.7315 35.5556 64.4764ZM54.4752 69.983C54.0128 70.4741 53.5127 70.9653 52.9937 71.4659C53.4089 69.8224 53.8807 68.3301 54.3903 67.0266C55.1357 66.5638 55.7963 66.101 56.3908 65.6287C56.2775 66.3749 56.202 67.1778 56.1643 68.0467C55.6642 68.6701 55.098 69.3218 54.4658 69.983H54.4752ZM57.0324 68.349C57.5703 67.6689 58.0421 66.9983 58.4384 66.3655C58.5894 67.1022 58.797 67.8767 59.0706 68.6984C58.6177 70.0113 58.0044 71.447 57.2589 72.9582C57.0796 71.2864 57.0041 69.7374 57.0324 68.349ZM64.1096 6.28459C64.1473 6.3696 64.1851 6.45461 64.2323 6.54906C64.2794 6.65296 64.3266 6.75685 64.3738 6.86075C65.4212 9.3165 66.2988 12.5184 66.9499 16.2115C64.8079 19.9423 62.7413 24.3532 60.9579 29.1609C60.4389 30.5682 59.9577 31.9661 59.5236 33.3356C59.0895 31.9661 58.6083 30.5776 58.0893 29.1609C56.3153 24.3532 54.2487 19.9423 52.0973 16.2115C53.6071 7.59747 56.4002 1.65645 59.5236 1.65645C59.6651 1.65645 59.7972 1.66589 59.9388 1.69423C61.4014 1.94925 62.8546 3.56438 64.119 6.28459H64.1096ZM51.0876 84.4436C53.324 81.4683 55.2301 78.5592 56.7399 75.839C57.2212 78.8992 57.9949 82.2712 59.0706 85.832C58.5422 87.5794 57.9477 89.374 57.2872 91.1685C55.683 95.5133 53.8241 99.5653 51.8803 103.06C51.2763 99.1308 50.9272 94.701 50.9272 90.0635C50.9272 88.1461 50.9838 86.2665 51.0971 84.4436H51.0876ZM68.12 90.0635C68.12 94.701 67.7708 99.1308 67.1669 103.06C65.2325 99.5653 63.3641 95.5133 61.76 91.1685C61.09 89.3645 60.505 87.5794 59.9765 85.832C61.0428 82.2806 61.8166 78.9087 62.2978 75.839C63.8171 78.5592 65.7137 81.4683 67.9595 84.453C68.0633 86.2854 68.12 88.1555 68.12 90.0635ZM98.1743 98.4697C98.212 98.6019 98.2498 98.7341 98.2875 98.8569C98.3347 99.0364 98.3913 99.2253 98.4385 99.4048C98.4385 99.4236 98.4385 99.4425 98.4479 99.452C99.0613 102.002 98.9481 103.91 98.0611 104.949C97.9761 105.053 97.8723 105.147 97.7685 105.242C97.2684 105.657 96.589 105.865 95.7397 105.865C92.6352 105.865 87.8511 103.221 82.6234 98.8664C81.8402 94.6633 80.538 89.969 78.7263 85.0764C78.2073 83.6691 77.66 82.309 77.1032 80.9772C78.3299 81.7422 79.6038 82.5167 80.9249 83.2629C85.3788 85.7942 89.8421 87.8816 93.9657 89.4023C95.8907 92.6703 97.3156 95.7022 98.1082 98.2524C98.1271 98.3186 98.1554 98.3941 98.1743 98.4697ZM102.581 45.4349C111.508 45.4349 117.603 47.2767 118.122 50.1386C118.5 52.2449 115.858 54.8896 110.875 57.3736C109.101 58.2615 107.101 59.0927 104.931 59.8672C100.845 58.441 96.07 57.2131 90.8801 56.3063C89.3986 56.0513 87.9171 55.8246 86.4545 55.6452C87.7662 54.9746 89.0684 54.2756 90.3894 53.5294C94.8339 50.9981 98.9103 48.2307 102.336 45.4538C102.421 45.4538 102.506 45.4538 102.59 45.4538L102.581 45.4349ZM106.176 60.3111C108.016 59.631 109.724 58.8943 111.262 58.1293C116.688 55.4185 119.425 52.5283 118.962 49.9875C118.377 46.7006 112.555 44.6982 103.345 44.5943C104.836 43.3286 106.195 42.063 107.375 40.8162C111.527 36.4431 113.102 32.8067 111.791 30.5682C110.97 29.1609 109.149 28.4525 106.374 28.4525C103.421 28.4525 99.552 29.2742 95.2585 30.7571C99.5992 23.1443 100.977 16.9388 98.3158 14.738C97.6553 14.1997 96.7872 13.9163 95.7397 13.9163C92.6164 13.9163 87.9454 16.3909 82.8405 20.5185C83.1613 18.5917 83.3689 16.7688 83.4727 15.0497C83.8029 9.07093 82.6329 5.29285 80.17 4.405C79.8114 4.27277 79.4245 4.20665 79.0188 4.20665C75.8577 4.20665 71.6397 8.40976 67.6387 15.0403C67.0254 11.8573 66.2327 9.07093 65.2985 6.84186C65.2891 6.80408 65.2702 6.7663 65.2608 6.73796C65.1853 6.56795 65.1098 6.40738 65.0438 6.23737C64.9777 6.10513 64.9211 5.9729 64.8645 5.84067C64.855 5.81233 64.8362 5.79344 64.8267 5.76511C63.2886 2.5443 61.4674 0.815826 59.533 0.815826C56.0511 0.815826 53.0598 6.45461 51.4179 15.0497C47.4075 8.41921 43.1895 4.2161 40.0378 4.2161C39.6321 4.2161 39.2452 4.28221 38.8866 4.41445C35.6122 5.58565 34.763 11.8856 36.1973 20.5091C31.0923 16.3909 26.4214 13.9258 23.3074 13.9258C22.26 13.9258 21.3824 14.1997 20.7313 14.7475C18.0609 16.9482 19.448 23.1537 23.7887 30.7665C19.4858 29.2836 15.6358 28.4619 12.6728 28.4619C9.90801 28.4619 8.07739 29.1703 7.25644 30.5776C5.52018 33.5529 8.96439 38.9083 15.683 44.6037C10.1345 44.6699 5.82214 45.416 3.14225 46.7289C1.37768 47.5884 0.320829 48.6935 0.0849237 49.9969C-0.518994 53.3689 4.57656 57.2414 12.8521 60.33C4.53881 63.3619 -0.556738 67.2344 0.0471788 70.6158C0.64166 73.9027 6.44493 75.8957 15.6452 76.009C8.92665 81.7045 5.473 87.0599 7.2187 90.0351C8.03965 91.4425 9.86083 92.1508 12.6351 92.1508C15.598 92.1508 19.4669 91.3197 23.7698 89.8368C22.7979 91.5369 21.9675 93.1804 21.2881 94.7483C18.9007 100.264 18.6931 104.203 20.6936 105.865C21.3541 106.413 22.2223 106.687 23.2697 106.687C26.3836 106.687 31.0546 104.222 36.1595 100.104C34.7252 108.727 35.5745 115.027 38.8489 116.198C39.2169 116.331 39.5943 116.397 40.0001 116.397C43.1518 116.397 47.3698 112.194 51.3801 105.563C53.022 114.149 56.0133 119.787 59.4953 119.787C62.9772 119.787 65.9685 114.149 67.6104 105.563C71.6114 112.194 75.8388 116.397 78.9905 116.397C79.3962 116.397 79.7831 116.331 80.1417 116.198C83.4161 115.027 84.2653 108.727 82.831 100.104C87.9266 104.222 92.5975 106.687 95.7209 106.687C96.7777 106.687 97.6459 106.413 98.297 105.865C99.8728 104.562 100.071 101.842 98.9292 98.0541C98.9009 97.9408 98.8631 97.8369 98.8348 97.7235C98.8065 97.6385 98.7688 97.5441 98.7405 97.4496C97.995 95.1828 96.8155 92.6042 95.2396 89.8368C99.5331 91.3197 103.393 92.1508 106.355 92.1508C109.12 92.1508 110.951 91.4425 111.772 90.0351C113.508 87.0599 110.064 81.7045 103.345 76.009C112.546 75.8957 118.358 73.9027 118.943 70.6158C119.547 67.2344 114.442 63.3619 106.157 60.2733L106.176 60.3111Z" fill="#2B50AA"/>
              </g>
              <defs>
              <clipPath id="clip0_0_44">
              <rect width="119" height="119" fill="white" transform="translate(0 0.778046)"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <div className='pt-[6.443vw]'>
              <div className='italic text-[1.736vw] font-[300]'>
                Two Passions, One Creative Mind:
              </div>
              <div className='font-bold text-[3.333vw] leading-[3.333vw]'>
                Senior Product Designer  | <span className='text-[#636363]'>House & Techno Music DJ</span>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={Img1} className='w-[22.917vw] h-[33.056vw]' alt='dj' />
          </div>
        </div>

        <div className='w-[31.042vw]'></div>

        </div>

      </div>
    </div>
  );
}

export default App;




