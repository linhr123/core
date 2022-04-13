/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="8" y="8.2002" width="16" height="1.5996"/><rect x="8" y="16.2002" width="8.0864" height="1.5996"/><polygon points="23.378 12.2 8 12.2 8 13.8 21.779 13.8 23.378 12.2"/><path d="M12.7935,29.0723a2.4694,2.4694,0,0,0,2.1948.8237h7.8032a.7.7,0,0,0,0-1.4H14.9883c-.9113-.0157-.749-.8071-.6216-1.0522a3.962,3.962,0,0,0,.3872-.9151,1.1827,1.1827,0,0,0-.6157-1.3213,1.8987,1.8987,0,0,0-2.24.5171c-.3442.3545-.8222.8975-1.28,1.4258.2832-1.1089.65-2.5322,1.01-3.9209a1.3154,1.3154,0,0,0-.7553-1.6255,1.4252,1.4252,0,0,0-1.7754.793c-.4312.8315-3.8511,6.562-3.8858,6.62a.7.7,0,1,0,1.2022.7178c.1279-.2144,2.8579-4.7881,3.7187-6.315C9.4854,25.92,8.771,28.7021,8.729,28.9521a.8686.8686,0,0,0,.4072.9688.9192.9192,0,0,0,1.106-.2236c.1255-.1143.3618-.3858.9565-1.0767.563-.6543,1.2686-1.4645,1.7032-1.9209.2179-.229.35-.1279.2221.0982A2.291,2.291,0,0,0,12.7935,29.0723Z"/><path d="M28,21.6951V32H4V4H28V8.9926l1.33-1.33a4.3043,4.3043,0,0,1,.67-.54V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V33a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V21.4274A2.91,2.91,0,0,1,28,21.6951Z"/><path d="M34.1282,11.8613l-.5227-.5229a1.8983,1.8983,0,0,0-.11-2.4234,1.9555,1.9555,0,0,0-2.7513.1618L18.22,21.6005l-.8368,3.1423a.2344.2344,0,0,0,.2958.2944L20.81,24.19,32.5021,12.4979l.4943.4948a.3711.3711,0,0,1,0,.5249l-4.917,4.917a.8.8,0,0,0,1.1318,1.1318l4.917-4.917a1.9721,1.9721,0,0,0,0-2.7881Z"/>',
  solid:
    '<path d="M34.4863,13.8608l-.4325-.4325a3.1693,3.1693,0,0,0-.5626-3.5631,3.0111,3.0111,0,0,0-2.3266-.87A3.4385,3.4385,0,0,0,30,9.2724V2H2V34H30V17.8193l3.0906-3.09.2639.2639a.3711.3711,0,0,1,0,.5249l-2.354,2.354a.8.8,0,0,0,1.1318,1.1318l2.354-2.354A1.9745,1.9745,0,0,0,34.4863,13.8608ZM8,8.2H24.0015V9.8H8Zm0,4H24.0015v1.6H8Zm0,4H18.5v1.6H8ZM22.7915,29.896H14.9883c-.9027,0-1.7461-.0855-2.1948-.8237-.4585-.7549-.0025-1.6328.3305-2.2744.0586-.1128-.0722-.2525-.2221-.0982-.439.4522-1.14,1.2666-1.7032,1.9209-.5947.6909-.831.9624-.9565,1.0767a.9192.9192,0,0,1-1.106.2236.8686.8686,0,0,1-.4072-.9688c.042-.25.7564-3.0322,1.4033-5.5332-.8608,1.5269-3.5908,6.1006-3.7187,6.315a.7.7,0,0,1-1.2022-.7178c.0347-.0576,3.4546-5.7881,3.8858-6.62a1.4247,1.4247,0,0,1,1.7754-.793,1.3154,1.3154,0,0,1,.7553,1.6255c-.36,1.3887-.7265,2.812-1.01,3.9209.4575-.5283.9355-1.0713,1.28-1.4258a1.8989,1.8989,0,0,1,2.24-.5171,1.1827,1.1827,0,0,1,.6157,1.3213,4.5566,4.5566,0,0,1-.3872.9151c-.2673.5549-.1411,1.0522.6216,1.0522h7.8032a.7.7,0,0,1,0,1.4Zm-2.0806-5.0508-2.6035.688a.2181.2181,0,0,1-.2168-.0581.2152.2152,0,0,1-.0586-.2158l.6636-2.5991,6.59-6.59,2.2,2.2ZM32.1768,13.3789l-3.7593,3.7593-2.2-2.2,3.7591-3.759a1.9488,1.9488,0,0,1,1.271-.5864c.03-.0015.059-.0025.0888-.0025a1.423,1.423,0,0,1,1.023.4063A1.7007,1.7007,0,0,1,32.1768,13.3789Z"/>',
};

export const contractIconName = 'contract';
export const contractIcon: IconShapeTuple = [contractIconName, renderIcon(icon)];
