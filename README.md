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
Add the JavaScript `dayschedule-widget.js` library into your website HTML `head` section:

```
<script src="/dist/dayschedule-widget.js" defer></script>
```

### CDN
Alternatively, you can install from CDN for better performance and global caching:
- [jsdelivr](https://www.jsdelivr.com/package/npm/dayschedule-widget)
- [unpkg](https://unpkg.com/browse/dayschedule-widget@latest/dist/)

For example: 

```
<script src="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js" defer></script>
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
The dayschedule widget offers easy embedding, customizable designs, and [automatic reminders](https://dayschedule.com/docs/t/how-to-send-automatic-email-reminder-for-meetings/365) to manage online appointments. See these example to learn how to embed the appointment scheduling widget in React, Wordpress, Angular, Vue, Node.js etc.

![Platforms](/assets/platforms.png)

| Platform   | Description                                                           |
|------------|-----------------------------------------------------------------------|
| [HTML Popup](https://stackblitz.com/edit/popup-appointment-widget-for-website) | An example of embedding a popup appointment widget using HTML5.|
| [HTML Inline](https://stackblitz.com/edit/inline-appointment-widget-for-website) | An example of embedding a inline appointment widget using HTML5.|
| [Wordpress](https://wordpress.org/plugins/dayschedule-appointment-event-and-service-booking/) | A WordPress plugin for managing appointments, events, and services.|
| [Node.js](https://stackblitz.com/edit/appointment-booking-widget-in-node-js) | Embed appointment booking widget in Node.js|
| [React](https://stackblitz.com/edit/react-appointment-booking-widget) | React.js and Tailwind CSS example to embed appointment booking widget in React |
| [Angular](https://stackblitz.com/edit/angular-appointment-booking-widget) | Angular 16 example to embed appointment booking widget in Angular|
| [Vue.js](https://stackblitz.com/edit/vue-booking-widget) | Vue.js example to embed appointment dayschedule booking widget in Vue website|
| [Next.js](https://stackblitz.com/edit/next-js-appointment-booking-widget) | Next.js example to embed dayschedule appointment booking widget in Next website|
| [Nuxt](https://stackblitz.com/edit/nuxt-appointment-booking-widget) | Nuxt example to embed dayschedule appointment booking widget|

## Widget Types
There are 2 types of embed option available on [DaySchedule](https://dayschedule.com/) for appointment bookings:
1. Popup widget
2. Inline widget

### Popup widget
To embed as a button and open the appointment scheduling popup when clicked. We **recommends** the popup widget, because it's initialized when someone click on the book now button, instead of having it initialize upon page load to improve website speed and performance by avoiding unnecessary requests.

1. Add the `dayschedule-popup.css` on website header.

```
<link href="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-popup.css" rel="stylesheet" />

```
2. Add a `onClick` function to open the popup when clicked on a button
```
daySchedule.initPopupWidget({
	url: 'https://meet.dayschedule.com',
	color: {
		primary: '#0f0980',
		secondary: '#afeefe'
	}
});
```

- [Popup examples](https://dayschedule.github.io/dayschedule-widget/examples/popup.html)

### Inline widget
To embed the inline appointment scheduling plugin in HTML
```
<dayschedule-widget url='https://meet.dayschedule.com' options='{ "color": {
        "primary": "#0f0980",
        "secondary": "#afeefe"
    }}'></dayschedule-widget>
```

- [Inline examples](https://dayschedule.github.io/dayschedule-widget/examples/inline.html)

## Options
Here is the list of options available to customize your appointment look and feel to match up with your website and brand :
| Name | Description |
|--|--|
|url| To set your main scheduling link or single event link|
|color| To set primary and secondary color of your appointment calendar, e.g. `{color: {primary: '#0f0980', secondary: '#afeefe', mode : 'light' }}`  |
|questions| To auto fill registration form questions, e.g. `{questions: {name : 'Vikash'}}`
|hideHeader| To hide the header `{ hideHeader: true }`|
|hideEvent| To hide the event details from calendar view `{ hideEvent: true }`|

## Dark Mode
To enable the dark mode (night mode) on your appointment scheduling page. Go to [pages setting](https://dayschedule.com/docs/t/branding/285) to apply globally, or use the `color.mode` option in arugments.
```
daySchedule.initPopupWidget({
	url: 'https://meet.dayschedule.com',
	color: {
		primary: '#0f0980',
		secondary: '#afeefe',
		mode: 'dark'
	}
});
```

![Dark mode appointment page](https://github.com/dayschedule/dayschedule-widget/assets/6106479/debf551a-2c73-4d10-acc5-68f6bdfdbab5)

## Performance

The dayschedule appointment pages are designed for optimal performance, providing users with a smooth and responsive booking experience across desktop, tablet and mobiles.

The scheduling pages are hosted on 250+ regions on [Cloudflare](https://www.cloudflare.com/network/) and/or [AWS cloudfront](https://aws.amazon.com/cloudfront/) for high-performance and low-latency. So you will always see lightning-fast loading times and efficient caching mechanisms to ensure swift access of your available time slots and services to your customers for online appointment bookings.

![Appointment page performance](https://github.com/dayschedule/dayschedule-widget/assets/6106479/5512e5eb-20de-495c-9b11-bc6c7729bfec)

