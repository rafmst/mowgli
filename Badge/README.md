# @mowgli/badge

Badge component for React Native apps.

<p>
    <a href="https://www.npmjs.com/package/@mowgli/badge"><img src="https://img.shields.io/npm/v/@mowgli/badge"></a>
    <a href="https://github.com/rafmst/mowgli/labels/%40mowgli%2Fbadge"><img src="https://img.shields.io/github/issues/rafmst/mowgli/@mowgli/badge?label=open%20issues"></a>
    <a href="https://www.npmjs.com/package/@mowgli/badge"><img src="https://img.shields.io/npm/dt/@mowgli/badge"></a>
    <a href="https://github.com/rafmst/nau/blob/master/LICENSE"><img src="https://img.shields.io/github/license/rafmst/mowgli"></a>
</p>

## Instalation

```
npm install @mowgli/badge
```

```
yarn add @mowgli/badge
```

## Usage

```jsx
<Badge
    text="Sent"
    success
    big
>
```

## Props

| Name      | Type      | Description                                       |
| --------- | --------- | ------------------------------------------------- |
| `text`    | `string`  | The text to be displayed                          |
| `primary` | `boolean` | Gives a blue accent color                         |
| `success` | `boolean` | Gives a green accent color                        |
| `info`    | `boolean` | Gives a light blue accent color                   |
| `warning` | `boolean` | Gives a yellow accent color                       |
| `danger`  | `boolean` | Gives a red accent color                          |
| `color`   | `string`  | Custom accent color                               |
| `small`   | `boolean` | Smaller badge                                     |
| `medium`  | `boolean` | Normal size badge                                 |
| `big`     | `boolean` | Bigger badge                                      |
| `full`    | `boolean` | If should display with full with, default `false` |
