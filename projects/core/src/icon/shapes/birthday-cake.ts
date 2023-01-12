/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.05,16H19V12.28a1,1,0,0,0-2,0V16H8A4,4,0,0,0,4,20V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V20A4,4,0,0,0,28.05,16ZM6,32V25.91a2.7,2.7,0,0,0,.77.11,3.63,3.63,0,0,0,3-1.93c.59-.81,1-1.27,1.68-1.27s1.09.46,1.68,1.27a3.63,3.63,0,0,0,3,1.93,3.63,3.63,0,0,0,3-1.93c.59-.81,1-1.27,1.68-1.27s1.09.46,1.68,1.27a3.61,3.61,0,0,0,3,1.93,3.6,3.6,0,0,0,3-1.92.8.8,0,0,0-1.3-.94c-.58.81-.95,1.26-1.67,1.26s-1.1-.46-1.69-1.27a3.59,3.59,0,0,0-3-1.93,3.63,3.63,0,0,0-3,1.93c-.59.81-1,1.27-1.68,1.27S15,24,14.41,23.15a3.63,3.63,0,0,0-3-1.93,3.59,3.59,0,0,0-3,1.93c-.6.81-1,1.27-1.69,1.27A1.27,1.27,0,0,1,6,24.17V20A2,2,0,0,1,8,18h20.1A2,2,0,0,1,30,20V32Z"/><path d="M17.64,10.46l.38.2.38-.22c.12-.06,2.72-1.58,2.39-4s-3.06-4-3.18-4a.8.8,0,0,0-.77,1.4S19,5,19.21,6.64A2.61,2.61,0,0,1,18,8.79a2.52,2.52,0,0,1-1-1.34,2.56,2.56,0,0,1,.18-1.58,6.61,6.61,0,0,0-1.21-1.14,4.31,4.31,0,0,0-.54,3.05A4.47,4.47,0,0,0,17.64,10.46Z"/>',
  solid:
    '<path d="M29,16H19V12.28a1,1,0,0,0-2,0V16H7a3,3,0,0,0-3,3V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V19A3,3,0,0,0,29,16Zm-1.93,8.89c-2.4,0-2.4-3.2-4.8-3.2s-2.39,3.2-4.79,3.2-2.4-3.2-4.79-3.2-2.39,3.2-4.79,3.2a2.37,2.37,0,0,1-1.9-1V19a1,1,0,0,1,1-1H29a1,1,0,0,1,1,1v3.63C29.16,23.57,28.61,24.89,27.07,24.89Z"/><path d="M17.62,10.46l.39.2.38-.21c.11-.07,2.71-1.59,2.39-4s-3.07-4-3.18-4a.8.8,0,0,0-.77,1.41S19,5,19.19,6.64A2.56,2.56,0,0,1,18,8.79a2.54,2.54,0,0,1-1-1.33,2.63,2.63,0,0,1,.18-1.58,6.67,6.67,0,0,0-1.2-1.15,4.24,4.24,0,0,0-.54,3.06A4.46,4.46,0,0,0,17.62,10.46Z"/>',
};

export const birthdayCakeIconName = 'birthday-cake';
export const birthdayCakeIcon: IconShapeTuple = [birthdayCakeIconName, renderIcon(icon)];
