## WeatherClient ```extends``` [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
----------------------------------------------------------------
<br>

## Constructor
```js
new Weather.WeatherClient(options);
```

<br>

### Properties
[options](#options)

[apiKey](#apiKey)

[language](#language)

[defaultLocation](#defaultLocation)

[current](#current)

### Methods
[setDefaultLocation](#setDefaultLocation(``newDefaultLocation``))

[setLanguage](#setLanguage(`language`))


### Events
[ready](#ready)

<br/><br/>

## Properties
    

### options

The options provided when creating the WeatherClient instance.

```Type:``` [WeatherClientOptions]()

### apiKey

The authentification key for the API endpoint.

```Type:``` [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### language

The language to be used by the API.

```Type:``` [Language]()|[APILanguageCodes]()

### defaultLocation

The default location from where to get the weather if no other location is specified.

```Type:``` [LocationResolvable]()

### current

The current weather data

```Type:``` [CurrentWeather](./CurrentWeather)

<br>

## Methods


### setDefaultLocation(``newDefaultLocation``)

Set's the default location.

| Parameter          | Type               | Required | Default |
|--------------------|--------------------|----------|---------|
| newDefaultLocation | [LocationResolvable]() | <img src="./icons/check.png" alt="Required" width="20"/> | none    |

```Returns:``` [DefaultLocation](####defaultLocation)


### setLanguage(`language`)
Set's the new language to be used by the API.

| Parameter          | Type               | Required | Default |
|--------------------|--------------------|----------|---------|
| newDefaultLocation | [language](#language) | <img src="./icons/check.png" alt="Required" width="20"/> | English    |

```Returns:``` [Language](#language)

<br>

## Events

### ready
Set's the new language to be used by the API.

| Parameter          | Type               
|--------------------|--------------------
| weatherClient | [WeatherClient](#WeatherClient-```extends```-[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)) |

