# dayschedule-widget
[Appointment scheduling widget](https://dayschedule.com/widget) to embed the booking calendar on your website for 1:1, round-robin and group bookings with Google meet, Zoom and MS Teams integrations

## Installation
```
npm i dayschedule-widget
```

## Setup
Add `dayschedule-widget.css` stylesheet and the JavaScript `dayschedule-widget.js` library into your website HTML `head` section:

```
<link href="/dist/dayschedule-widget.css" rel="stylesheet" />
<script src="/dist/dayschedule-widget.js" defer></script>
```

## Usage
Call the `daySchedule.initPopupWidget(...)` function from any button or link from your website:
```
<button type="button" onClick="daySchedule.initPopupWidget({ url: 'https://meet.dayschedule.com' });">Book an appointment</button>
```
## Examples

1. [Inline example](https://dayschedule.github.io/dayschedule-widget/examples/inline.html)
2. [Popup example](https://dayschedule.github.io/dayschedule-widget/examples/popup.html)

## Widget Types
There are 2 types of embed option available on [DaySchedule](https://dayschedule.com/) for appointment bookings:
1. Popup widget
2. Inline widget

### Popup widget
To embed as a button and open the appointment scheduling popup when clicked: 
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

