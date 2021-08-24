import {
    APILanguages
} from './enums'

export class WeatherClient {
    public constructor (apiKey: string, language: APILanguage)
    public apiKey: string | null;
    public language: APILanguage | null;
    public setLanguage(language: APILanguage): this;
    public static resolveLanguage(language: APILanguageResolvable): APILanguage
}

export const Constants: {
    APILanguages: typeof APILanguages;
}

export type APILanguage = keyof typeof APILanguages;

export type APILanguageResolvable = APILanguage | APILanguage;