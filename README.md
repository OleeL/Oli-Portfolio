# Portfolio Page

## Requirements
- Node V19
- Yarn or NPM

## Run with

### Installation
```bash
yarn install
```
or
```bash
npm install
```

### Execute Dev Testing
```bash
yarn dev
```
or
```bash
npm run dev
```

### Execute Production
```bash
yarn build && yarn start
```
or
```bash
npm run build && npm start
```

## .env config for emails

Create a file called `.env.local` (`touch .env.local`)
and fill it with this content:
```properties
# Your mailer email address
EMAIL_ADDRESS=""

# Your mailer email key/password
EMAIL_PASSWORD=""

# Your mailer email type "gmail" | "hotmail"...
EMAIL_TYPE=""

# The email you'd like to send the emails to
EMAIL_ADDRESS_TO=""
```