# 🎯 Risepoint Playwright Automation Suite

This repository contains automated tests for visual regression, UI validation, broken image detection, and menu verification across multiple university websites. Tests are built using **[Playwright](https://playwright.dev/)** and organized into pods for modularity and team collaboration.

---

## 📁 Repository Structure

```
risepoint/
├── Pod-1/
├── Pod-2/
│   └── playwright-emporia/
│       ├── tests/
│       │   └── visualTest.spec.js
│       ├── screenshots/
│       └── config.js
├── Pod-3/ through Pod-11/
├── .gitmodules
├── package.json
├── playwright.config.mjs
└── README.md
```

Each `Pod-*` folder contains one or more Playwright submodules for a university website.

---

## 🧰 Prerequisites

Before running any tests, ensure the following tools are installed globally:

- **Node.js** (v18 or higher) → [Install Node.js](https://nodejs.org/)
- **Git** → [Install Git](https://git-scm.com/)

---

## 🛠️ First-Time Setup

Clone the repository and install all dependencies:

```bash
git clone git@github.com:mherring11/risepoint.git
cd risepoint
npm init playwright@latest
npm install @playwright/test fs path pngjs sharp pixelmatch chalk axios
```

This will install all necessary testing and image comparison libraries.

---

## 📦 Key Dependencies

Installed during setup:

- `@playwright/test` – Playwright test runner
- `fs`, `path` – Node core modules
- `pngjs`, `sharp` – PNG image manipulation and resizing
- `pixelmatch` – Pixel-by-pixel image diffing
- `chalk` – Colored CLI output
- `axios` – HTTP requests for API integration

---

## 🚀 Running Tests

### 1. Navigate to the test pod and submodule

```bash
cd Pod-2/playwright-emporia
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. Run a specific test file

```bash
npx playwright test tests/visualTest.spec.js
```

### 4. Run a specific test by name

```bash
npx playwright test tests/visualTest.spec.js -g "Verify Online Programs and Getting Started Menus – EMPORIA"
```

---

## 🖼️ Screenshots & Visual Regression

Screenshots for visual comparisons are stored inside the `screenshots/` directory of each submodule. The test script compares staging vs. production images and logs the results.

---

## 🔍 Test Coverage Overview

- ✅ Broken image detection
- ✅ Menu and submenu validation
- ✅ Visual regression testing (staging vs production)
- ✅ Homepage and link navigation checks

---

## 🧪 Customization

Each submodule has its own `config.js` to define:

- `baseUrl` for staging/production
- List of URLs to test
- Custom logic for comparing pages

Update the `config.js` if you need to test additional pages or domains.

---

## 🧯 Troubleshooting

- Ensure you’re in the correct working directory before running tests
- Reinstall dependencies if errors occur:  
  ```bash
  npm install
  ```

- Force reinstall Playwright binaries if needed:  
  ```bash
  npx playwright install --force
  ```

---

## 🤝 Collaboration

If you're contributing to a specific university’s scripts, work inside the appropriate `Pod-*` folder and commit changes only to that submodule.

---
