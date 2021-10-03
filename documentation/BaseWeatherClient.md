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

[api](#api)

### Methods


<br/><br/>

## Properties
    

### options

The options provided when creating the WeatherClient instance.

```Type:``` [BaseWeatherClientOptions]()

### api

The API to easily make requests to the weather API

```Type:``` [RequestHandler]()

<br>

## Methods


### setDefaultLocation(``newDefaultLocation``)

Set's the default location.

| Parameter          | Type               | Required | Default |
|--------------------|--------------------|----------|---------|
| newDefaultLocation | [LocationResolvable]() | <img src="./icons/check.png" alt="Required" width="20"/> | none    |

```Returns:``` [DefaultLocation](####defaultLocation)
