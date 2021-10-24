import {
    APILanguageCode
} from './enums'

import { EventEmitter } from 'events'

//#classes
export class Alert {
    public constructor(data?: APIAlert);
    public heading: string;
    public messageType: string;
    public severity: string;
    public urgency: string;
    public areas: string;
    public category: string;
    public certainty: string;
    public event : string;
    public note: string;
    public effective: Date;
    public expires: string;
    public description: string;
    public instruction: string;
    public toJSON(): unknown;
}

export class Aqi {
    public constructor(data?: APIAqi);
    public co: string;
    public o3: string;
    public no2: string;
    public pm2_5: string;
    public pm10: string;
    public us_epa_index: string;
    public gb_defra_index: string;
    public toJSON(): unknown;
}

export class Location {
    public constructor(data?: APILocation);
    public latitude: number;
    public longitude: number;
    public name: string;
    public region: string;
    public country: string;
    public timezone: string;
    public timestamp: string;
    public time: string;
    public toJSON(): unknown;
}

export class BaseWeatherClient extends EventEmitter {
    public constructor(options: BaseWeatherClientOptions);
    public options: BaseWeatherClientOptions;
    public api: RequestHandler;
    public destroy(): this;
    public destroyAPIKey(): void;
    public changeOption(option: BaseWeatherClientOptions, value: apiKey|LocationResolvable|APILocation|Language): void;
}

export class WeatherClient extends BaseWeatherClient {
    public constructor(options: BaseWeatherClientOptions);
    public options: BaseWeatherClientOptions;
    public apiKey: apiKey;
    public language: Language;
    public _language: APILanguageCode
    public defaultLocation: LocationResolvable|APILocation
    public current: Current;
    public forecast: Forecast;
    public static init(client: WeatherClient): Promise<void>;
    public setLanguage(language: Language): this;
    public setDefaultLocation(location: LocationResolvable|APILocation): this;
    private static resolveLanguage(language: Language): APILanguageCode|Language;
    private static resolveLocation(location: LocationResolvable): Promise<Object>;
}

export class RequestHandler extends null {
    public static makeRequest(request: object): Promise<object>
     
    public static handleError(error: Error): WeatherAPIError
    public static createRequestObj(path: string, method: string, parameters: Array<string>, key: apiKey): object
}

//#interfaces
export interface APIAlert {
    headline: string;
    msgType: string;
    severity: string;
    urgency: string;
    areas: string;
    category: string;
    certainty: string;
    event: string;
    note: string;
    effective: Date;
    expires: string;
    desc: string;
    instruction: string;
}

export interface APIAqi {
    co: number;
    o3: number;
    no2: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    'us-epa-index': number;
    'gb-defra-index': number;
}

export interface APILocation {
    name: string;
    region: string;
    country: string;
    lat: number
    lon: number
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface BaseWeatherClientOptions {
    apiKey: apiKey;
    language: Language;
    defaultLocation: LocationResolvable|APILocation;
}

export type LocationResolvable = string | number;
export type apiKey = string;
export type Language = 
    | 'ARABIC'
    | 'BENGALI'
    | 'BULGARIAN'
    | 'CHINESE_SIMPLIFIED'
    | 'CHINESE_TRADITIONAL'
    | 'CZECH'
    | 'DANISH'
    | 'DUTCH'
    | 'FINISH'
    | 'FRENCH'
    | 'GERMAN'
    | 'GREEK'
    | 'HINDI'
    | 'HUNGARIAN'
    | 'ITALIAN'
    | 'JAPANESE'
    | 'JAVANESE'
    | 'KOREAN'
    | 'MANDARIN'
    | 'MARATHI'
    | 'POLISH'
    | 'PORTUGESE'
    | 'PUNJABI'
    | 'ROMANIAN'
    | 'RUSSIAN'
    | 'SERBIAN'
    | 'SINHALESE'
    | 'SLOVAK'
    | 'SPANISH'
    | 'SWEDISH'
    | 'TAMIL'
    | 'TELUGU'
    | 'TURKISH'
    | 'UKRAINIAN'
    | 'URDU'
    | 'VIETNAMESE'
    | 'WU'
    |' XIANG'
    | 'YUE'
    | 'ZULU';
