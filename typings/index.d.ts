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

export class Current {
    public constructor(WeatherClient: WeatherClient);
    public displayAqi: boolean;
    public client: WeatherClient
    public location: Location
    public weather: APICurrentWeather
    public aqi: Aqi
    public get(location: LocationResolvable, aqi?: boolean): Promise<Current>;
}

export class Forecast {
    public constructor(WeatherClient: WeatherClient);
    public client: WeatherClient;
    public location: Location;
    public displayAqi: boolean;
    public displayAlerts: boolean;
    public displayDays: number;
    public currentWeather: APICurrentWeather;
    public days: Array<ForecastDay>
    public alerts: Array<Alert>|null
    public aqi: Aqi|null
    public get(location: LocationResolvable, displayDays?: number, aqi?: boolean, displayAlerts?: boolean): Promise<Forecast>;
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

export interface APICurrentWeather {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    isDay: boolean;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_direction: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface ForecastDay {
    date: string;
    timestamp: number;
    day: Day;
    astro: Astro;
    hours: Array<Hour>;
}

export interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    minemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: boolean;
    daily_chance_of_rain: number;
    daily_will_it_snow: boolean;
    daily_chance_of_snow: number;
    condition: Condition
    uv: number;
}

export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
}

export interface Hour {
    timestamp: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: boolean;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: boolean;
    chance_of_rain: number;
    will_it_snow: boolean;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
}
