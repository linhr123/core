/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z"/><path d="M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z"/><path d="M21.91,17.65a20.6,20.6,0,0,0-13,2A1.77,1.77,0,0,0,8,21.25v3.56a1,1,0,0,0,2,0V21.38a18.92,18.92,0,0,1,12-1.68Z"/><path d="M33,22H26.3V20.52a1,1,0,0,0-2,0V22H17a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V23A1,1,0,0,0,33,22ZM32,32H18V24h6.3v.41a1,1,0,0,0,2,0V24H32Z"/><rect x="21.81" y="27.42" width="5.96" height="1.4"/><path d="M10.84,12.24a18,18,0,0,0-7.95,2A1.67,1.67,0,0,0,2,15.71v3.1a1,1,0,0,0,2,0v-2.9a16,16,0,0,1,7.58-1.67A7.28,7.28,0,0,1,10.84,12.24Z"/><path d="M33.11,14.23a17.8,17.8,0,0,0-7.12-2,7.46,7.46,0,0,1-.73,2A15.89,15.89,0,0,1,32,15.91v2.9a1,1,0,1,0,2,0v-3.1A1.67,1.67,0,0,0,33.11,14.23Z"/><path d="M10.66,10.61c0-.23,0-.45,0-.67a3.07,3.07,0,0,1,.54-6.11,3.15,3.15,0,0,1,2.2.89,8.16,8.16,0,0,1,1.7-1.08,5.13,5.13,0,0,0-9,3.27,5.1,5.1,0,0,0,4.7,5A7.42,7.42,0,0,1,10.66,10.61Z"/><path d="M24.77,1.83a5.17,5.17,0,0,0-3.69,1.55,7.87,7.87,0,0,1,1.9,1,3.14,3.14,0,0,1,4.93,2.52,3.09,3.09,0,0,1-1.79,2.77,7.14,7.14,0,0,1,.06.93,7.88,7.88,0,0,1-.1,1.2,5.1,5.1,0,0,0,3.83-4.9A5.12,5.12,0,0,0,24.77,1.83Z"/>',
  solid:
    '<ellipse cx="18" cy="11.28" rx="4.76" ry="4.7"/><path d="M10.78,11.75c.16,0,.32,0,.48,0,0-.15,0-.28,0-.43a6.7,6.7,0,0,1,3.75-6,4.62,4.62,0,1,0-4.21,6.46Z"/><path d="M24.76,11.28c0,.15,0,.28,0,.43.16,0,.32,0,.48,0A4.58,4.58,0,1,0,21,5.29,6.7,6.7,0,0,1,24.76,11.28Z"/><path d="M22.29,16.45a21.45,21.45,0,0,1,5.71,2,2.71,2.71,0,0,1,.68.53H34V15.56a.72.72,0,0,0-.38-.64,18,18,0,0,0-8.4-2.05l-.66,0A6.66,6.66,0,0,1,22.29,16.45Z"/><path d="M6.53,20.92A2.76,2.76,0,0,1,8,18.47a21.45,21.45,0,0,1,5.71-2,6.66,6.66,0,0,1-2.27-3.55l-.66,0a18,18,0,0,0-8.4,2.05.72.72,0,0,0-.38.64V22H6.53Z"/><rect x="21.46" y="26.69" width="5.96" height="1.4"/><path d="M32.81,21.26H25.94v-1a1,1,0,0,0-2,0v1H22V18.43A20.17,20.17,0,0,0,18,18a19.27,19.27,0,0,0-9.06,2.22.76.76,0,0,0-.41.68v5.61h7.11v6.09a1,1,0,0,0,1,1H32.81a1,1,0,0,0,1-1V22.26A1,1,0,0,0,32.81,21.26Zm-1,10.36H17.64V23.26h6.3v.91a1,1,0,0,0,2,0v-.91h5.87Z"/>',
};

export const employeeGroupIconName = 'employee-group';
export const employeeGroupIcon: IconShapeTuple = [employeeGroupIconName, renderIcon(icon)];
