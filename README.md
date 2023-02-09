# dayschedule-widget
[![version](https://img.shields.io/npm/v/dayschedule-widget.svg)](https://www.npmjs.com/package/dayschedule-widget)
[![license](https://img.shields.io/npm/l/dayschedule-widget.svg)](https://www.npmjs.com/package/dayschedule-widget)
[![hits per month](https://data.jsdelivr.com/v1/package/npm/dayschedule-widget/badge)](https://www.jsdelivr.com/package/npm/dayschedule-widget)

[Appointment scheduling widget](https://dayschedule.com/widget) to embed the booking calendar on your website for 1:1, round-robin and group bookings with Google meet, Zoom and MS Teams integrations

![appointment scheduling widget](https://user-images.githubusercontent.com/6106479/212533356-d9a9e6fe-733f-48f4-a047-d8b9079f1813.png)


## Installation
Install the `dayschedule-widget` [from NPM](https://www.npmjs.com/package/dayschedule-widget)
```
npm i dayschedule-widget
```

## Setup
Add `dayschedule-widget.css` stylesheet and the JavaScript `dayschedule-widget.js` library into your website HTML `head` section:

```
<link href="/dist/dayschedule-widget.css" rel="stylesheet" />
<script src="/dist/dayschedule-widget.js" defer></script>
```

### CDN
Alternatively, you can install from CDN for better performance and caching globally:
- [jsdelivr](https://www.jsdelivr.com/package/npm/dayschedule-widget)
- [unpkg](https://unpkg.com/browse/dayschedule-widget@1.0.2/dist/)

For example: 

```
<link href="https://cdn.jsdelivr.net/npm/dayschedule-widget@1.0.2/dist/dayschedule-widget.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/dayschedule-widget@1.0.2/dist/dayschedule-widget.min.js" defer></script>
```

## Usage
Call the `daySchedule.initPopupWidget(...)` function from any button or link from your website to open the scheduling popup:
```
<button type="button" 
	onClick="daySchedule.initPopupWidget({ url: 'https://meet.dayschedule.com' });">
	Book an appointment
</button>
```
## Examples

1. [Inline example](https://dayschedule.github.io/dayschedule-widget/examples/inline.html) - [See code](/examples/inline.html)
2. [Popup example](https://dayschedule.github.io/dayschedule-widget/examples/popup.html) - [See code](/examples/popup.html)

## Widget Types
There are 2 types of embed option available on [DaySchedule](https://dayschedule.com/) for appointment bookings:
1. Popup widget
2. Inline widget

### Popup widget
To embed as a button and open the appointment scheduling popup when clicked. We **recommend** the popup widget, because it's initialized when someone click on the book now button, instead of having it initialize upon page load to improve website speed and performance by avoiding unnecessary requests.
```
daySchedule.initPopupWidget({
	url: 'https://meet.dayschedule.com',
	color: {
		primary: '#0f0980',
		secondary: '#afeefe'
	}
});
```

### Inline widget
To embed the inline appointment scheduling plugin in HTML
```
<dayschedule-widget url='https://meet.dayschedule.com' options='{ "color": {
        "primary": "#0f0980",
        "secondary": "#afeefe"
    }}'></dayschedule-widget>
```

## Options
Here is the list of options available to customize your appointment look and feel to match up with your website and brand :
| Name | Description |
|--|--|
| url | To set your main scheduling link or single event link|
| color | To set primary and secondary color of your appointment calendar, e.g. `{color: {primary: '#0f0980', secondary: '#afeefe' }}`  |
| questions | To auto fill registration form questions, e.g. `{questions: {name : 'Vikash'}}`
|hideHeader| To hide the header `{ hideHeader: true }`|
|hideEvent| To hide the event details from calendar view `{ hideEvent: true }`|

