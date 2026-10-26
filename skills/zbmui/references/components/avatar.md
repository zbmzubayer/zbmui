# Avatar

An image element with a fallback for representing a user or entity.

## Install

```bash
npx @zbmui/cli@latest add avatar --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
```

## Anatomy

- `Avatar` — root container
- `AvatarImage` — user or entity image
- `AvatarFallback` — initials, icon, or placeholder while image is unavailable
- `AvatarBadge` — status or accent badge
- `AvatarGroup` — stacked group
- `AvatarGroupCount` — overflow count

## Example

```tsx
<Avatar size="default" aria-label="Zubayer Ahmed">
  <AvatarImage src="/avatars/zubayer.png" alt="Zubayer Ahmed" />
  <AvatarFallback>ZA</AvatarFallback>
</Avatar>
```

Grouped:

```tsx
<AvatarGroup aria-label="Team members">
  <Avatar>
    <AvatarImage src="/avatars/one.png" alt="Member one" />
    <AvatarFallback>M1</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>
```

## Options

- `Avatar` sizes are `sm`, `default`, and `lg`.
- Use `AvatarBadge` for compact visual status; do not rely on badge color alone.

## Accessibility

- Provide meaningful image `alt` text.
- If the avatar is the only visible label for a link or button, give the interactive parent an accessible name.
- Fallback initials remain readable and are not a replacement for alt text on meaningful images.

## Pitfalls

- Do not use an avatar alone for identification in administrative or security-sensitive flows.
- Do not remove `AvatarFallback`; slow or failed image loads need a stable size and content.
- Preserve the root `size` prop so badge and group sizing respond correctly.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/avatar.md)
- [Base UI Avatar](https://base-ui.com/react/components/avatar)
