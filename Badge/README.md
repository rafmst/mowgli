# @mowgli/badge

Badge component for React Native apps.

<p>
    <a href="https://www.npmjs.com/package/@mowgli/badge"><img src="https://img.shields.io/npm/v/@mowgli/badge"></a>
    <a href="https://github.com/rafmst/mowgli/labels/%40mowgli%2Fbadge"><img src="https://img.shields.io/github/issues/rafmst/mowgli/@mowgli/badge?label=open%20issues"></a>
    <a href="https://www.npmjs.com/package/@mowgli/badge"><img src="https://img.shields.io/npm/dt/@mowgli/badge"></a>
    <a href="https://github.com/rafmst/nau/blob/master/LICENSE"><img src="https://img.shields.io/github/license/rafmst/mowgli"></a>
</p>

<img src="https://user-images.githubusercontent.com/924985/86044217-1a4fb900-ba4a-11ea-8aa6-b48571d6c3f7.png" />

## Instalation

```
npm install @mowgli/badge
```

```
yarn add @mowgli/badge
```

## Usage

```jsx
import Badge from '@mowgli/badge'

render() {
    <Badge text="Sent" accent="primary" size="big" full />
}
```

## Props

- [`text`](#text)
- [`color`](#color)
- [`accent`](#accent)
- [`size`](#size)
- [`fullWidth`](#fullwidth)

## Reference

#### `text`

Contains the text to display.

| Type   | Default |
| ------ | ------- |
| string | _empty_ |

#### `color`

If you don't like any of the accent colors available you can set a custom background color with the property.

| Type   | Default |
| ------ | ------- |
| string | _empty_ |

#### `accent`

Determines the accent/background color.

| Type                                             | Default |
| ------------------------------------------------ | ------- |
| `primary`, `success`, `info`, `warning`, `error` | primary |

#### `size`

Determines the size of the badge.

| Type                       | Default |
| -------------------------- | ------- |
| `small`, `medium`, `large` | medium  |

#### `fullWidth`

Determines if the badge should occupy all the available space.

| Type    | Default |
| ------- | ------- |
| boolean | false   |
