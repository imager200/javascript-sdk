export * from './blendApi';
import { BlendApi } from './blendApi';
export * from './blurApi';
import { BlurApi } from './blurApi';
export * from './blurhashApi';
import { BlurhashApi } from './blurhashApi';
export * from './blurpartialApi';
import { BlurpartialApi } from './blurpartialApi';
export * from './brightnessApi';
import { BrightnessApi } from './brightnessApi';
export * from './compressApi';
import { CompressApi } from './compressApi';
export * from './concatApi';
import { ConcatApi } from './concatApi';
export * from './contrastApi';
import { ContrastApi } from './contrastApi';
export * from './convertApi';
import { ConvertApi } from './convertApi';
export * from './cropApi';
import { CropApi } from './cropApi';
export * from './equalizeApi';
import { EqualizeApi } from './equalizeApi';
export * from './grayscaleApi';
import { GrayscaleApi } from './grayscaleApi';
export * from './imageinfoApi';
import { ImageinfoApi } from './imageinfoApi';
export * from './pipelineApi';
import { PipelineApi } from './pipelineApi';
export * from './resizeApi';
import { ResizeApi } from './resizeApi';
export * from './rotateApi';
import { RotateApi } from './rotateApi';
export * from './textApi';
import { TextApi } from './textApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [BlendApi, BlurApi, BlurhashApi, BlurpartialApi, BrightnessApi, CompressApi, ConcatApi, ContrastApi, ConvertApi, CropApi, EqualizeApi, GrayscaleApi, ImageinfoApi, PipelineApi, ResizeApi, RotateApi, TextApi];
