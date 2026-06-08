# GLcamp Proforma Invoice Generator

A Next.js web app for creating GLcamp / Guangzhou Lvguang Trading Co., Ltd. proforma invoices.

## Features

- Company and customer information forms
- GLcamp default company profile
- Save and reload multiple company templates with browser local storage
- Upload company logo, company seal, and product images
- Add, edit, and remove multiple product rows
- Automatic subtotal, tax, and grand total calculation
- Currency selector: USD, EUR, GBP, AUD, CAD, AED
- Automatic PI number API: `/api/pi-number`
- Live proforma invoice preview
- One-click PDF export from the HTML invoice preview

## Run Locally

```bash
npm.cmd install
npm.cmd run dev -- -p 3000
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm.cmd run build
```
