import { memo, SVGProps } from 'react';

const BackSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 188 188' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33.2949 103.198C34.3936 103.31 34.7464 103.481 35.6715 104.157C36.5625 105.3 36.5625 105.3 37.1267 106.158C39.4093 109.622 41.6703 111.158 45.7273 112.063C46.9349 112.27 48.1214 112.379 49.3466 112.392C50.6153 112.768 51.1367 113.39 51.9188 114.441C52.1045 115.548 52.0197 116.614 51.9418 117.731C51.7904 122.204 52.7067 125.897 55.575 129.431L56.1907 130.022C56.6719 130.528 56.6719 130.528 56.6719 131.259L57.3117 131.511C58.3867 132.138 58.9289 132.769 59.5969 133.819C59.7705 135.237 59.7073 136.297 58.8656 137.475C57.9486 138.188 57.3856 138.206 56.2148 138.229C54.311 137.69 53.2888 136.67 51.9188 135.281L51.1729 134.56C47.3408 130.602 45.3035 125.285 45.2688 119.788L45.3375 118.463L43.9434 118.394C41.7679 118.165 39.957 117.248 38.025 116.269C39.6893 124.327 42.5185 131.86 45.9455 139.327L46.4344 140.4L46.7839 141.071C48.0417 143.611 48.4237 146.232 48.8395 149.012C49.1301 150.85 49.4143 152.69 49.6921 154.53C49.8581 155.619 50.0285 156.707 50.1989 157.795C50.4021 159.095 50.6036 160.395 50.8047 161.695L50.9206 162.444C51.0285 163.142 51.1345 163.84 51.2409 164.538L51.4241 165.741C51.5531 166.725 51.5531 166.725 51.5531 167.822H90.675V149.175C92.5031 147.713 92.5031 147.713 93.6 147.53C94.6969 147.713 94.6969 147.713 96.525 149.175V167.822H135.647C136.463 161.837 136.463 161.837 137.244 155.846C138.317 147.913 139.841 141.362 143.502 134.215C145.94 129.257 149.175 121.851 149.175 116.269L148.411 116.656C146.169 117.741 144.352 118.34 141.863 118.463L141.931 119.788C141.895 125.518 139.697 130.769 135.72 134.868L134.916 135.647L134.214 136.345C132.947 137.529 131.974 138.246 130.163 138.206C128.872 137.62 128.397 137.204 127.603 136.013C127.389 134.833 127.404 134.124 128.069 133.108C128.618 132.445 129.149 131.826 129.797 131.259H130.528C130.623 131.052 130.718 130.844 130.817 130.629C131.296 129.727 131.869 128.983 132.493 128.175C134.987 124.593 135.493 121.094 135.195 116.83C135.122 115.306 135.144 114.644 136.021 113.344C137.325 112.468 138.397 112.324 139.92 112.247C142.479 112.02 144.443 111.499 146.616 110.053L147.315 109.588C149.059 108.258 150.089 106.549 151.193 104.676C151.734 103.838 151.734 103.838 152.466 103.472C153.672 103.239 154.243 103.131 155.391 103.472C156.274 104.304 157.008 105.216 157.782 106.151C161.433 110.115 167.411 111.357 172.506 112.455C174.767 112.97 174.767 112.97 175.5 114.075C175.725 115.816 175.732 116.594 174.86 118.12C172.355 119.613 169.321 118.519 166.634 117.868C163.272 116.924 159.769 115.653 156.853 113.709C156.231 115.413 155.826 117.135 155.427 118.9C153.565 127.079 151.221 136.368 146.436 143.394C145.781 144.614 145.571 145.766 145.38 147.118L145.257 147.92C145.17 148.492 145.085 149.065 145.001 149.638C144.867 150.545 144.729 151.451 144.589 152.358C144.194 154.935 143.805 157.512 143.422 160.09C143.186 161.67 142.944 163.248 142.699 164.826C142.608 165.426 142.518 166.027 142.431 166.628C142.308 167.469 142.179 168.309 142.048 169.148L141.945 169.896C141.682 171.524 141.177 172.489 140.034 173.672C139.195 174.092 138.724 174.084 137.791 174.087L136.825 174.092H135.757L134.628 174.095C133.372 174.099 132.115 174.101 130.859 174.102L128.165 174.11C125.466 174.117 122.766 174.121 120.067 174.124L116.254 174.129C110.934 174.137 105.615 174.143 100.295 174.145L99.4697 174.146C95.0545 174.149 90.6392 174.158 86.2239 174.17C81.6927 174.182 77.1615 174.189 72.6303 174.19C70.0856 174.191 67.5408 174.194 64.9961 174.203C62.6027 174.212 60.2093 174.213 57.8159 174.21C56.9366 174.21 56.0573 174.212 55.1776 174.217C53.979 174.223 52.7805 174.221 51.582 174.216L50.5217 174.228C48.9853 174.213 48.1214 174.171 46.7792 173.37C45.7653 172.235 45.5704 171.11 45.3375 169.65L45.1434 168.455C44.9572 167.254 44.7777 166.051 44.6048 164.848C44.4044 163.468 44.1946 162.089 43.9865 160.711C43.7223 158.969 43.4649 157.225 43.2143 155.481C42.0224 146.639 42.0224 146.639 38.3906 138.572C34.5132 130.854 32.4138 122.495 30.7125 114.075C29.5228 114.075 28.5407 114.748 27.4902 115.263C23.5232 117.158 18.0169 119.576 13.5281 118.828C12.477 118.097 11.8353 117.552 11.523 116.279C11.4715 115.514 11.4715 115.514 11.7 114.075C13.2247 112.408 15.0418 112.17 17.1617 111.744C22.3678 110.594 27.3919 109.014 30.7352 104.591C31.5297 103.614 32.0258 103.281 33.2945 103.198H33.2949ZM78.5136 13.0148L79.6075 13.0075C80.8017 13.0002 81.9954 13.002 83.1896 13.0038C84.0195 13.0024 84.8491 13.0002 85.6787 12.9983C87.418 12.9947 89.1573 12.9958 90.8966 12.9994C93.1262 13.0035 95.3554 12.9961 97.5849 12.9855C99.2986 12.979 101.012 12.979 102.726 12.9812C103.548 12.9812 104.369 12.979 105.192 12.9742C106.341 12.9691 107.49 12.9727 108.639 12.979L109.669 12.9684C111.212 12.9859 112.032 13.029 113.368 13.8597C114.449 15.0297 114.475 16.0524 114.557 17.5899L114.603 18.4257L114.646 19.2867L114.694 20.165C114.733 20.8779 114.77 21.5905 114.806 22.3031L116.027 22.3316C125.28 22.6402 133.77 25.574 140.766 31.8094L141.373 32.6236C142.745 33.6638 144.148 33.3925 145.816 33.3176C154.132 33.1446 162.75 34.791 169.147 40.4699C169.686 40.9901 170.219 41.5157 170.747 42.0469L171.729 42.9609C175.667 47.2179 175.667 47.2179 175.626 50.0749C175.5 50.8219 175.5 50.8219 174.723 51.9188C173.672 52.65 173.672 52.65 172.575 52.8555C171.159 52.59 170.661 52.2233 169.65 51.1875C169.315 50.6818 168.988 50.1711 168.667 49.6563C166.481 46.2647 163.379 44.1138 159.778 42.4125L158.93 41.9928C153.899 39.7244 148.567 39.723 143.155 39.9577C139.931 40.0462 139.931 40.0462 138.576 39.0462L137.841 38.025C130.471 31.2924 122.283 28.5257 112.267 28.9754L111.317 29.0014L110.471 29.0387C109.688 28.8844 109.688 28.8844 108.225 27.4219V19.3781H78.975V27.4219C77.5125 28.8844 77.5125 28.8844 76.4266 29.0606L75.163 29.0559L73.7616 29.0683L73.0274 29.0668C68.8724 29.0683 64.9792 29.1794 61.0594 30.7125L59.9709 31.1381C55.5128 33.0419 51.2917 35.6656 48.2625 39.4875C47.2892 39.9738 46.5689 39.8824 45.4801 39.863L44.2165 39.8476L42.8695 39.8301C34.3106 39.7833 26.71 41.1705 20.2721 47.2984C19.1507 48.5078 18.2253 49.7839 17.3442 51.1762C16.8188 51.9188 16.8188 51.9188 15.7219 52.65C14.3873 52.824 13.6861 52.729 12.477 52.1242C11.5124 50.9615 11.3929 50.299 11.4715 48.8139C11.9205 47.0121 13.1058 45.6571 14.2594 44.2406L14.965 43.3167C20.1576 37.1146 28.4778 34.1029 36.296 33.334C37.2879 33.2722 38.248 33.2828 39.2403 33.326L40.2195 33.3647C40.8787 33.3944 41.5379 33.4328 42.1961 33.4788C44.0743 33.5413 44.0743 33.5413 45.7207 32.7359C46.3613 32.0865 46.947 31.4127 47.5313 30.7125C54.5074 24.887 63.3994 22.1748 72.3938 22.3031L72.4479 21.0077L72.5309 19.3094L72.5652 18.4575C72.6588 16.6389 72.7448 15.0769 74.027 13.6714C75.4741 12.8762 76.8884 13.0067 78.5136 13.0148ZM84.0938 60.3281C85.0787 61.806 85.0612 63.0093 84.825 64.7156C83.4649 69.4165 81.0419 73.7974 77.8781 77.5125L77.2339 78.3169C72.5236 83.9749 64.7785 88.569 57.3673 89.2867C56.2584 89.3131 55.349 89.2699 54.318 88.8469C53.5849 87.9083 53.4489 87.1306 53.2668 85.9705C53.4507 84.7164 53.9198 84.2265 54.8438 83.3625C55.9626 82.8879 57.1168 82.6057 58.2945 82.3113C63.0542 80.9976 66.8399 78.9794 70.5656 75.6844L71.2439 75.1103C74.7615 71.9067 77.1216 67.2172 78.5194 62.7347C78.9366 61.4257 79.2441 60.7683 80.3461 59.9168C81.8587 59.5095 82.6631 59.723 84.0938 60.3281ZM107.494 60.3281C108.445 61.6389 108.903 62.999 109.391 64.5328C111.911 71.725 117.046 77.1352 123.8 80.5125C125.899 81.5048 128.054 82.1761 130.315 82.7007C131.584 83.0177 132.313 83.3212 133.264 84.2353C133.988 85.4835 133.938 86.0864 133.672 87.4557C133.453 88.1156 133.453 88.1156 132.882 88.8469C129.358 90.2926 124.987 88.2015 121.685 86.9043C112.723 82.9812 106.645 75.6464 103.073 66.6995C102.393 64.8871 102.117 63.3551 102.375 61.425C103.849 59.3918 105.262 59.4514 107.494 60.3281Z'
      fill='white'
    />
    <path
      d='M93.6 115.355L94.3312 115.343C95.4069 115.629 95.8288 116.141 96.525 117C96.7082 118.041 96.7082 118.041 96.7085 119.257L96.7188 120.64C96.7151 121.137 96.7107 121.634 96.7063 122.13C96.7063 122.641 96.7071 123.152 96.7082 123.663C96.7082 124.732 96.7038 125.802 96.6957 126.872C96.6851 128.241 96.6862 129.61 96.691 130.98C96.6936 132.034 96.6906 133.089 96.6859 134.144C96.6843 134.649 96.6843 135.154 96.6859 135.659C96.6856 136.365 96.6812 137.071 96.6727 137.777L96.6669 138.994C96.5071 140.167 96.2636 140.668 95.4281 141.497C93.9755 141.901 93.2015 142.014 91.8176 141.382C91.0406 140.766 91.0406 140.766 90.675 140.034C90.634 139.31 90.6165 138.585 90.6103 137.86L90.596 136.477C90.5931 135.976 90.5902 135.476 90.588 134.976L90.5832 134.213C90.5759 132.881 90.5704 131.55 90.5671 130.218C90.562 128.843 90.5517 127.467 90.5361 126.092C90.5273 125.034 90.5227 123.977 90.5222 122.919C90.5204 122.412 90.5161 121.905 90.5094 121.398C90.502 120.688 90.4999 119.979 90.5032 119.269L90.4966 118.045C90.7927 116.31 91.8238 115.327 93.6 115.355ZM95.7937 83.7281C96.646 85.0067 96.6208 85.5288 96.631 87.0407L96.6456 88.4238L96.6478 89.9193L96.6552 91.4534C96.6595 92.5254 96.661 93.5971 96.6606 94.6687C96.6606 96.0413 96.6705 97.4135 96.683 98.786C96.691 99.8423 96.6925 100.898 96.6921 101.955C96.6932 102.461 96.6965 102.967 96.702 103.472C96.7093 104.18 96.706 104.888 96.7027 105.597L96.7056 106.816C96.4833 108.1 96.0731 108.527 95.0625 109.322C94.3312 109.516 94.3312 109.516 93.6 109.505L92.8687 109.516C91.7931 109.23 91.3711 108.718 90.675 107.859C90.4893 106.819 90.4893 106.819 90.4856 105.602L90.4717 104.219C90.4743 103.723 90.4776 103.226 90.4808 102.729C90.4798 102.219 90.4783 101.707 90.4765 101.197C90.4743 100.127 90.4776 99.0577 90.4845 97.9879C90.4926 96.6182 90.4882 95.2493 90.479 93.8793C90.4739 92.8249 90.4754 91.7704 90.479 90.7156C90.4801 90.211 90.479 89.7057 90.4754 89.2008C90.4717 88.4948 90.4787 87.7884 90.4856 87.0824L90.4893 85.8656C90.7189 84.5786 91.1174 84.1563 92.1375 83.3625C93.5982 82.8755 94.3674 83.2093 95.7937 83.7281Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(BackSvgIcon);
export { Memo as BackSvgIcon };