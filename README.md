# DevLab

<div align="center">
  <strong>Developer utilities right in your browser</strong>
</div>
<div align="center">
  A web version of the popular DevToys desktop application
</div>

<br />

<div align="center">
  <!-- License -->
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
  </a>
  <!-- Stars -->
  <img src="https://img.shields.io/github/stars/max-programming/dev-lab?style=social" alt="GitHub Stars" />
</div>

<!-- <div align="center">
  <img src="https://via.placeholder.com/800x400?text=DevLab+Screenshot" alt="DevLab screenshot" width="800" />
</div> -->

## Overview

DevLab is a comprehensive set of tools for developers accessible directly from your web browser. Inspired by the popular DevToys desktop application, DevLab brings the same powerful utilities to the web platform, making them available anywhere without installation.

## Features

DevLab includes various tools categorized for different needs:

### Converters
- [🕒 CRON Expression Parser - Parse cron expressions to get scheduled dates](https://devlab.usmans.me/converters/cron-parser)
- [🗂️ JSON to YAML Converter - Convert JSON data to YAML format and vice versa](https://devlab.usmans.me/converters/json-yaml)
- _More converters coming soon!_

### Generators
- [🆔 UUID Generator - Generate various UUID/GUID formats (v1, v4, v7)](https://devlab.usmans.me/generators/uuid)
- _More generators coming soon!_

*More tools are being added regularly!*

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/max-programming/dev-lab.git
cd dev-lab
bun install
```

### Development

Start the development server:

```bash
bun dev
```

The application will be available at http://localhost:3000 by default.

### Building for Production

```bash
bun build
```

## Technology Stack

- [React](https://reactjs.org/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Start](https://tanstack.com/start) - Modern React applications framework
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful, accessible UI components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- [Bun](https://bun.sh/) - JavaScript runtime & package manager

## Contributing

Contributions are welcome! If you'd like to add new features, fix bugs, or improve documentation:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See the [open issues](https://github.com/yourusername/dev-lab/issues) for a list of proposed features and known issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [DevToys](https://devtoys.app/), a fantastic developer tools application
- Built with [TanStack Router](https://tanstack.com/router) and [Radix UI](https://www.radix-ui.com/)
