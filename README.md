<h1 align="center">Welcome to trellolibrus 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kamilmichna/trellolibrus#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kamilmichna/trellolibrus/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/kamilmichna/trellolibrus/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/kamilmichna/trellolibrus" />
  </a>
</p>

> trellolibrus - prosty skrypt w node.js który z zadań domowych w systemie librus tworzy karty w trello.

### 🏠 [Homepage](kamilmichna.pl)

## Install

```sh
pobierz z github, następnie npm install 
```

## Usage

```sh
Utwórz plik .env w katalogu głównym projektu. Uzupełnij go następująco: 
LIBRUS_LOGIN=Login librus
LIBRUS_PASSWORD=Hasło librus
TRELLO_API_KEY=Klucz api trello
TRELLO_API_TOKEN=Token api trello
TRELLO_LIST_ID=Id listy trello do której ma dodawać 
Api key do trello i token możesz pobrać ze strony https://trello.com/app-key. Aby pobrać id listy wejdź na trello, stwórz liste, dodaj do niej kartę a nastepnie kliknij prawym przyciskiem na podgląd karty. Do adresu w przeglądarce dopisz zakończenie .json i skopiuj stamtąd idList.
```

## Run tests

```sh
npm run test
```

## Author

👤 **Kamil Michna**

* Website: kamilmichna.pl
* Github: [@kamilmichna](https://github.com/kamilmichna)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kamilmichna/trellolibrus/issues). You can also take a look at the [contributing guide](https://github.com/kamilmichna/trellolibrus/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Kamil Michna](https://github.com/kamilmichna).<br />
This project is [ISC](https://github.com/kamilmichna/trellolibrus/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
