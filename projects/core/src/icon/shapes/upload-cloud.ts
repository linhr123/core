/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.31,13c0-.1,0-.21,0-.32a10.26,10.26,0,0,0-10.45-10,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.26,8.26,0,0,1,8.45,8,7.75,7.75,0,0,1,0,.8l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,3.93-15Z"/><path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z"/>',

  outlineAlerted:
    '<path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z"/><path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.81,8.81,0,0,1,2,.25l1-1.8a10.8,10.8,0,0,0-3.07-.45,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z"/><path d="M32.9,15.4H30.21A6,6,0,0,1,26.38,26H21v2h5.38A8,8,0,0,0,32.9,15.4Z"/>',

  outlineBadged:
    '<path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z"/><path d="M30.92,13.44a7.13,7.13,0,0,1-2.63-.14c0,.08,0,.15,0,.23l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,4.54-14.56Z"/><path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.79,8.79,0,0,1,2.68.42,7.45,7.45,0,0,1,.5-1.94,10.79,10.79,0,0,0-3.18-.48,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z"/>',
};

export const uploadCloudIconName = 'upload-cloud';
export const uploadCloudIcon: IconShapeTuple = [uploadCloudIconName, renderIcon(icon)];
