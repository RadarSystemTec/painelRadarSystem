import { deviceColor } from '../../../../common/util/formatter';

const pickup = (position, device) => `<?xml version="1.0" encoding="UTF-16"?>
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100px" height="100px"
  version="1.1"
  style="shape-rendering:geometricPrecision; transform:rotate(${position.course}deg); text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 100 100"
  xmlns:xlink="http://www.w3.org/1999/xlink">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil3 {fill:#05212A}
    .fil4 {fill:#24323B}
    .fil8 {fill:#707D82}
    .fil7 {fill:#94989A}
    .fil6 {fill:#B57270}
    .fil1 {fill:#B6B9BD}
    .fil5 {fill:#B85053}
    .fil2 {fill:${deviceColor(device)}}
    .fil0 {fill:${deviceColor(device)}}
    // .fil2 {fill:#E2E4E6}
    // .fil0 {fill:#FDFEFF}
   ]]>
  </style>
 </defs>
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2206336356032">
   <path class="fil0" d="M52.44 53.54c4.78,0 5.71,-0.67 5.7,2.65l-0.02 13.12c0,6.42 2.23,5.4 -13.05,5.4 -1.54,0 -2.93,0.13 -3.19,-1.28l-0.03 -12.51c0,-9.17 -1.6,-7.38 10.59,-7.38zm-9.9 -0.76l-0.37 -0.18 0.62 -0.25c1.1,-0.1 13.16,-0.59 14.38,0.12 0.27,0.16 0.15,0.12 0.26,0.26 -1.54,0.49 -12.88,0.28 -14.89,0.05zm-0.69 -13.34c0.03,0.42 -0.03,0.18 0.16,0.82 0.29,0.37 0.67,1.26 0.68,1.85l0.26 0.05c0.59,0.47 0.38,1.26 0.38,2.55 0,0.42 0.02,0.88 0,1.29 -0.02,0.6 -0.16,0.91 -0.16,0.97l0.17 4.32c-0.18,0.67 0,0.29 -0.46,0.58 -0.23,0.02 -0.35,0.03 -0.68,0.06 -0.25,0.26 0.41,0.17 -0.61,0.33l0.02 -3.06c-0.16,0.24 -0.14,-0.17 -0.25,0.6l-0.04 11.49c0,4.03 -0.29,9.07 0.04,12.97 0.57,1.1 2.67,0.95 3.61,1.04 1.51,0.13 3.19,0.07 4.76,0.07l6.99 -0.13c0.48,-0.03 0.72,-0.08 0.99,-0.23 0.36,-0.2 0.29,-0.32 0.78,-0.51 0.17,-1.75 0.43,-20.16 -0.05,-22.24l-0.3 -0.18c-0.56,-0.04 -0.35,0.11 -0.85,-0.32 -0.37,-0.28 -0.25,0.32 -0.34,-0.49l-0.12 -3.43 0.07 -1.22c0.1,-0.71 0.05,-1.53 0.05,-2.28 0,-0.35 -0.02,-0.75 -0.02,-1.1 0.01,-0.6 -0.13,-0.64 0.25,-0.88 0.02,-0.62 0.51,-1.87 0.91,-2.39l-0.03 -0.46c0.08,-0.74 0.07,-0.06 0.01,-0.81l0.41 -0.19c0.38,-1.44 0.15,-0.79 -0.26,-1.15l-0.19 0.21c-0.07,0.3 0.05,0.13 -0.11,0.46 -0.28,0.59 -0.09,0.2 -0.34,0.43 -0.05,0.84 -0.6,2.04 -1.07,2.66 -4.06,-0.85 -8.82,-1.02 -12.87,-0.04 -0.27,0.18 0.4,0.39 -0.42,0.08l-0.19 -0.4c-0.14,-0.98 -0.69,-1.54 -0.76,-2.52 -0.45,-0.36 -0.41,-0.49 -0.51,-1.07 1.98,-0.81 5.49,-1 7.97,-1.01 4.23,-0.03 7.2,0.76 8.13,0.76l0.35 0.4c0.56,-0.35 0.12,0.25 0.38,-0.32 0.25,-0.56 -0.01,-0.3 -0.01,-1.76 0,-1.85 0.11,-6.42 -0.09,-7.72 -2.49,-1.1 -3.04,0.36 -4,-2.19 -2.68,-0.04 -6.55,-0.74 -8.95,0.13 -0.42,0.59 -0.3,0.72 -0.78,1.27l-3.29 0.69c-0.25,0.62 -0.18,0.32 -0.17,0.9l0.04 10.01c0.17,0.2 0.04,0.1 0.3,0.31l0.35 0.24c-0.15,0.28 -0.09,0.12 -0.14,0.56z"/>
   <path class="fil1" d="M52.44 53.54c-12.19,0 -10.59,-1.79 -10.59,7.38l0.03 12.51c0.26,1.41 1.65,1.28 3.19,1.28 15.28,0 13.05,1.02 13.05,-5.4l0.02 -13.12c0.01,-3.32 -0.92,-2.65 -5.7,-2.65z"/>
   <path class="fil2" d="M58.06 39.51c0.39,0.23 0.29,-0.16 0.31,0.81l-0.02 7.05c-0.64,-0.13 -0.7,-0.47 -1.45,-0.75l-0.07 1.22c0.59,0.16 0.39,0.09 0.85,0.52 0.25,0.23 0.43,0.39 0.66,0.6l0.1 3.3c0.48,2.08 0.22,20.49 0.05,22.24 -0.49,0.19 -0.42,0.31 -0.78,0.51 -0.27,0.15 -0.51,0.2 -0.99,0.23l-6.99 0.13c-1.57,0 -3.25,0.06 -4.76,-0.07 -0.94,-0.09 -3.04,0.06 -3.61,-1.04 -0.33,-3.9 -0.04,-8.94 -0.04,-12.97l0.04 -11.49c0.11,-0.77 0.09,-0.36 0.25,-0.6 0.18,-0.59 0.88,-1.07 1.35,-1.38l0.04 1.29 -0.12 2.76c0.46,-0.29 0.28,0.09 0.46,-0.58l-0.17 -4.32c0,-0.06 0.14,-0.37 0.16,-0.97 0.02,-0.41 0,-0.87 0,-1.29 0,-1.29 0.21,-2.08 -0.38,-2.55l0.01 4.44 -1.3 0.84c-0.09,-1.34 -0.04,-2.83 -0.04,-4.19 0,-0.84 -0.36,-3.37 0.23,-3.81 0.05,-0.44 -0.01,-0.28 0.14,-0.56l-0.35 -0.24c-0.26,-0.21 -0.13,-0.11 -0.3,-0.31l-0.04 -10.01c-0.01,-0.58 -0.08,-0.28 0.17,-0.9l3.29 -0.69c0.48,-0.55 0.36,-0.68 0.78,-1.27 2.4,-0.87 6.27,-0.17 8.95,-0.13 0.96,2.55 1.51,1.09 4,2.19 0.2,1.3 0.09,5.87 0.09,7.72 0,1.46 0.26,1.2 0.01,1.76 -0.26,0.57 0.18,-0.03 -0.38,0.32l0.01 0.04c0.41,0.36 0.64,-0.29 0.26,1.15l-0.41 0.19c0.06,0.75 0.07,0.07 -0.01,0.81zm1.94 -12.84l-0.49 -0.14 -0.01 0.04c0.02,0.02 0.27,-0.09 0.34,0.48 0.06,0.56 -0.06,0.2 -0.22,0.44 -0.57,-0.2 -0.33,0.03 -0.6,-0.45l-0.42 0.05 -0.15 -1.28c0,-0.8 0.11,-0.28 -0.37,-0.44l0.18 1.51 -2.71 -0.46 -0.61 -1.63 0.52 -0.14c-0.47,-0.26 -0.47,-0.21 -1.28,-0.24 -1.92,-0.06 -8.27,-0.52 -9.81,0.23l0.72 0.03c-0.11,0.69 -0.33,1.2 -0.66,1.73l-2.55 0.43 0.04 -1.61 -0.39 0.05c0.21,0.95 0.26,0.82 -0.19,1.74l-0.78 0.39c-0.05,0.04 -0.06,0.09 -0.15,0.12l-0.46 0.43 -0.02 10.68 1.59 0.18 -1.31 0.8c-0.38,1.02 -0.36,18.66 -0.12,20.59 -0.34,1.12 -0.35,8.62 0.03,9.65 -0.18,0.99 -0.48,4.28 0.54,5.24 1.61,1.52 6.12,1.14 9.45,1.14 10.71,0 9.95,-0.11 9.89,-6.56l-0.03 -9.29 0.03 -20.95c0.57,0.12 0.59,0.18 1.36,0.18 -0.66,-0.92 -0.79,-0.26 -0.78,-1.82l-0.38 -8.2c0,-0.55 -0.01,-1.1 0,-1.64 0.02,-2.07 0.02,-1.16 -0.2,-1.28z"/>
   <path class="fil3" d="M42.27 38.24c0.07,0.98 0.62,1.54 0.76,2.52 0.16,0.09 0.46,0.24 0.61,0.32 4.05,-0.98 8.81,-0.81 12.87,0.04 0.47,-0.62 1.02,-1.82 1.07,-2.66l-0.1 -0.29c-1.16,0.05 -2.26,0.28 -3.68,0.31l-10.57 -0.21c-0.01,0 -0.43,-0.13 -0.45,-0.14l-0.51 0.11z"/>
   <path class="fil4" d="M57.86 36.92c-0.93,0 -3.9,-0.79 -8.13,-0.76 -2.48,0.01 -5.99,0.2 -7.97,1.01 0.1,0.58 0.06,0.71 0.51,1.07l0.51 -0.11c0.02,0.01 0.44,0.14 0.45,0.14l10.57 0.21c1.42,-0.03 2.52,-0.26 3.68,-0.31l0.1 0.29c0.25,-0.23 0.06,0.16 0.34,-0.43 0.16,-0.33 0.04,-0.16 0.11,-0.46 -0.02,-0.51 0.04,-0.24 -0.17,-0.65z"/>
   <path class="fil1" d="M40.21 39.61l1.31 -0.8 -1.59 -0.18 0.02 -10.68 0.46 -0.43c0.09,-0.03 0.1,-0.08 0.15,-0.12 -0.4,-0.3 -0.3,0.12 -0.25,-0.44 0.05,-0.57 0.74,-0.94 1.24,-1.12l-0.21 1.17c0.45,-0.92 0.4,-0.79 0.19,-1.74l0.39 -0.05 2.45 -0.58c1.54,-0.75 7.89,-0.29 9.81,-0.23 0.81,0.03 0.81,-0.02 1.28,0.24 0.82,-0.01 2.17,0.27 2.62,0.72 0.48,0.16 0.37,-0.36 0.37,0.44 0.63,0.12 0.51,0.21 1.06,0.72l0.49 0.14c0,-0.7 -1.03,-1.56 -1.67,-1.89 -2.57,-1.32 -13.91,-1.42 -16.4,-0.15 -0.31,0.16 -0.82,0.42 -1.05,0.66 -0.96,1.01 -1.79,2.46 -1.04,3.93 -0.66,0.93 -0.39,2.74 -0.39,4.56 0,1.64 0,3.28 0,4.92l-0.81 0.88c1.05,0.01 0.7,-0.22 1.57,0.03z"/>
   <path class="fil3" d="M42.79 52.35c-0.01,0 -0.25,0.43 -0.25,0.43 2.01,0.23 13.35,0.44 14.89,-0.05 -0.11,-0.14 0.01,-0.1 -0.26,-0.26 -1.22,-0.71 -13.28,-0.22 -14.38,-0.12z"/>
   <path class="fil4" d="M42.01 40.26c-0.19,-0.64 -0.13,-0.4 -0.16,-0.82 -0.59,0.44 -0.23,2.97 -0.23,3.81 0,1.36 -0.05,2.85 0.04,4.19l1.3 -0.84 -0.01 -4.44 -0.26 -0.05c0.23,1 -0.45,1.94 -0.75,2.83l0.07 -4.68z"/>
   <path class="fil4" d="M58.09 39.97l-0.03 5.37c0.13,-0.48 -0.25,-0.77 -0.51,-1.41 -0.2,-0.52 -0.23,-1 -0.37,-1.57 -0.38,0.24 -0.24,0.28 -0.25,0.88 0,0.35 0.02,0.75 0.02,1.1 0,0.75 0.05,1.57 -0.05,2.28 0.75,0.28 0.81,0.62 1.45,0.75l0.02 -7.05c-0.02,-0.97 0.08,-0.58 -0.31,-0.81l0.03 0.46z"/>
   <polygon class="fil1" points="59.97,60.38 60,69.67 60.58,69.67 60.58,60.38 "/>
   <path class="fil0" d="M55.46 24.65l-0.52 0.14 0.61 1.63 2.71 0.46 -0.18 -1.51c-0.45,-0.45 -1.8,-0.73 -2.62,-0.72z"/>
   <path class="fil0" d="M44.37 24.64l-2.45 0.58 -0.04 1.61 2.55 -0.43c0.33,-0.53 0.55,-1.04 0.66,-1.73l-0.72 -0.03z"/>
   <path class="fil1" d="M40.12 69.85c-0.38,-1.03 -0.37,-8.53 -0.03,-9.65l-0.63 0.21 -0.01 9.26 0.67 0.18z"/>
   <path class="fil4" d="M56.83 47.84l0.12 3.43c0.09,0.81 -0.03,0.21 0.34,0.49l0.11 -2.42c0.13,0.28 0.5,0.99 0.63,1.43 0.17,0.56 -0.08,0.74 0.11,1.31l0.3 0.18 -0.1 -3.3c-0.23,-0.21 -0.41,-0.37 -0.66,-0.6 -0.46,-0.43 -0.26,-0.36 -0.85,-0.52z"/>
   <path class="fil3" d="M57.18 42.36c0.14,0.57 0.17,1.05 0.37,1.57 0.26,0.64 0.64,0.93 0.51,1.41l0.03 -5.37c-0.4,0.52 -0.89,1.77 -0.91,2.39z"/>
   <path class="fil4" d="M41.61 49.2l-0.02 3.06c1.02,-0.16 0.36,-0.07 0.61,-0.33 -0.73,0.12 -0.22,0.06 -0.35,-0.11 -0.12,-0.46 0.25,-1.48 0.51,-2.01 0.27,-0.55 0.13,0.48 0.22,-0.74l0.42 0.04 -0.04 -1.29c-0.47,0.31 -1.17,0.79 -1.35,1.38z"/>
   <path class="fil3" d="M42.2 51.93c0.33,-0.03 0.45,-0.04 0.68,-0.06l0.12 -2.76 -0.42 -0.04c-0.09,1.22 0.05,0.19 -0.22,0.74 -0.26,0.53 -0.63,1.55 -0.51,2.01 0.13,0.17 -0.38,0.23 0.35,0.11z"/>
   <path class="fil3" d="M42.01 40.26l-0.07 4.68c0.3,-0.89 0.98,-1.83 0.75,-2.83 -0.01,-0.59 -0.39,-1.48 -0.68,-1.85z"/>
   <path class="fil3" d="M57.29 51.76c0.5,0.43 0.29,0.28 0.85,0.32 -0.19,-0.57 0.06,-0.75 -0.11,-1.31 -0.13,-0.44 -0.5,-1.15 -0.63,-1.43l-0.11 2.42z"/>
   <path class="fil5" d="M40.56 27.4l0.78 -0.39 0.21 -1.17c-0.5,0.18 -1.19,0.55 -1.24,1.12 -0.05,0.56 -0.15,0.14 0.25,0.44z"/>
   <path class="fil5" d="M58.45 25.81l0.15 1.28 0.42 -0.05 0.59 0 -0.11 -0.47 0.01 -0.04c-0.55,-0.51 -0.43,-0.6 -1.06,-0.72z"/>
   <path class="fil6" d="M59.5 26.57l0.11 0.47 -0.59 0c0.27,0.48 0.03,0.25 0.6,0.45 0.16,-0.24 0.28,0.12 0.22,-0.44 -0.07,-0.57 -0.32,-0.46 -0.34,-0.48z"/>
   <path class="fil7" d="M43.03 40.76l0.19 0.4c0.82,0.31 0.15,0.1 0.42,-0.08 -0.15,-0.08 -0.45,-0.23 -0.61,-0.32z"/>
   <path class="fil8" d="M42.54 52.78c0,0 0.24,-0.43 0.25,-0.43l-0.62 0.25 0.37 0.18z"/>
   <path class="fil7" d="M57.86 36.92c0.21,0.41 0.15,0.14 0.17,0.65l0.19 -0.21 -0.01 -0.04 -0.35 -0.4z"/>
  </g>
 </g>
</svg>`;

export default pickup;
