# Countdown

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/spalberg/countdown)

## Features

- Display a countdown/countup to/from a target epoch
  - Shared via URL, either
    - Server-persisted and editable
    - Self-contained in URL
- Create a countdown/countup via a wizard
  - Switch between mode (countdown/countup)
  - Set target epoch
  - Select theme template
  - Select target action (countdown: what happens when 0, countup: what happens when the countdown is not started yet)
  - Preview
  - Create self-contained link
  - Create persisted link
    - One link to share
    - One link to edit
- Light mode and dark mode (default by system, manual switch possible)
- Theme templates
  - Default
  - New Year
  - Christmas
  - Happy Birthday
- Quick-Creators
  - Like "in 10 Minutes" with sensible defaults

## Countdown / Countup

### Viewmodes
- Full
- Weeks
- Days
- Hours
- Minutes
- Seconds

Switch between them by clicking.
Only show 
### Full

- Pad every unit except the greatest
  - seconds: 2
  - minutes: 2
  - hours: 2
  - days: 2


----------------------------------------------------------------



Next (user triggered)
Hide view -> Maybe update current index



views = full, seconds, minutes, hours, days, weeks
viewLen = 6
viewHiddenLen = 0
index = 0
shows = views[(index + viewLen - viewHiddenLen) % viewLen] = full

-> next
index <= (index + viewLen - 1) % viewLen 
index = 5
shows = week

-> hide view weeks (check total seconds smaller UNITS)
viewLen = 5
viewHiddenLen = 1
shows = views[(5 + 5 - 1) % 5] = views[4] = days

-> next

