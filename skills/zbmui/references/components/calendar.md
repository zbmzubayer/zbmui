# Calendar

A styled date field for selecting single dates, ranges, or multiple dates.

## Install

```bash
npx @zbmui/cli@latest add calendar --yes --cwd "<app-root>"
```

## Import

```tsx
import { Calendar } from "@/components/ui/calendar";
```

## Anatomy

- `Calendar` — styled wrapper around `@daypicker/react`
- Day picker subcomponents and class-name slots are configured through the installed source

## Example

```tsx
"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}
```

## Options

Common DayPicker props are forwarded. The installed defaults include:

- `mode="single"`
- `showOutsideDays`
- customized navigation and day class slots
- support for range and multiple modes through the underlying day picker API

Read the installed local source and the consumer's `@daypicker/react` version before changing selection types.

## Accessibility

- Keep visible month, year, weekday, and selected-day information available.
- Ensure keyboard navigation reaches every enabled day.
- Do not remove disabled styling from unavailable dates.

## Pitfalls

- Calendar is a date picker primitive, not a complete anchored popover date-input component.
- Controlled `selected` shape changes with the day picker mode; verify it before form integration.
- Preserve `showOutsideDays` behavior so month grids remain stable.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/calendar)
- Underlying package: `@daypicker/react`
