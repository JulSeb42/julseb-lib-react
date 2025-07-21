# @julseb-lib/react

A comprehensive React component library built with TypeScript and Tailwind CSS, providing a complete set of UI components for modern web applications.

## Features

🎨 Modern Design System - Built with Tailwind CSS v4 and custom design tokens

📱 Responsive Components - Mobile-first approach with flexible layouts

♿ Accessibility First - WCAG compliant components with proper ARIA support

🎯 TypeScript Native - Full type safety with comprehensive TypeScript definitions

🔧 Highly Customizable - Extensive prop interfaces for maximum flexibility

📦 Tree Shakeable - Import only what you need

🎭 Icon Integration - Built-in support for React Icons

🌗 Theme Support - Custom CSS variables and design tokens

## Installation

```shell
# npm
npm install @julseb-lib/react

# yarn
yarn add @julseb-lib/react

# pnpm
pnpm install @julseb-lib/react
```

## Type Exports

Access comprehensive TypeScript definitions:

```typescript
import type { 
  ILibButton, 
  ILibText, 
  LibAllColors,
  LibSpacers 
} from '@julseb-lib/react/types'
```

Component-specific prop types:

```typescript
import type { 
  ILibButton,
  ILibInput,
  ILibModal 
} from '@julseb-lib/react/component-props'
```

## Styling & Customization

### CSS Variables

The library uses CSS custom properties for theming:

```css
:root {
  --color-primary-500: #3b82f6;
  --color-secondary-500: #06b6d4;
  --spacer-xs: 8px;
  --spacer-sm: 16px;
  --radius-sm: 4px;
  --radius-md: 8px;
}
```

### Design Tokens

Access design tokens programmatically:

```typescript
import { COLORS, SPACERS, RADIUS } from '@julseb-lib/react'

// Use in components
<div style={{ color: COLORS.PRIMARY_500 }}>
  Custom styled content
</div>
```

### Tailwind Classes

All components use Tailwind CSS classes that can be extended:

```typescript
<Button className="hover:scale-105 transition-transform">
  Custom Button
</Button>
```

## Advanced Usage

Form Handling

```typescript
import { Input, Button, Flexbox } from '@julseb-lib/react'

function ContactForm() {
  return (
    <form>
      <Flexbox direction="column" gap="md">
        <Input 
          label="Email"
          type="email"
          required
          validation="Please enter a valid email"
        />
        <Input 
          label="Message"
          element="textarea"
          rows={4}
        />
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Flexbox>
    </form>
  )
}
```

Modal with Form

```typescript
import { Modal, Button, Text } from '@julseb-lib/react'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Contact Form"
      >
        <Text>Modal content goes here</Text>
      </Modal>
    </>
  )
}
```

## Browser Support

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Development

```shell
# Install dependencies
yarn install

# Start development server
yarn dev

# Run type checking
yarn check-errors

# Build library
yarn build
```

### License

MIT © [Julien Sebag](https://julien-sebag.com)

### Links

[Documentation](https://doc-julseb-lib-react.vercel.app/)

[GitHub Repository](https://github.com/JulSeb42/julseb-lib-react)

[NPM Package](https://www.npmjs.com/package/@julseb-lib/react)