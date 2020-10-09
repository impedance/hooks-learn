## Установка

1. Установить yarn
### Linux/Mac
```bash
$ npm install -g yarn
```
# Windows
$ ask windows users

2. Клонируем проект
```bash
$ git clone --recurse-submodules --branch=RROS-2086 git@gitlab.lpr.jet.msk.su:rros/rros-client-workspace.git
```

3. Заходим в корневую папку проекта
```bash
$ cd rros-client-workspace 
```

4. Ставим зависимости
```bash
$ yarn 
```
отрабатывает без ошибок

5. Создаем ссылки для пакетов npm
```bash
$ yarn lerna bootstrap
```
отрабатывает без ошибок

6. Разворачиваем библиотеку компонентов
```bash
$ cd packages/rros-ui-lib
$ yarn build:lib:notest
```
отрабатывает без ошибок

7. Запускаем мок-сервер
```bash
$ cd rros-personal-cabinet
$ yarn mock
```

8. Запускаем проект
```bash
$ cd rros-personal-cabinet
$ git checkout master
$ yarn start

если в консоли видим надпись compile succesfully - все установилось и можно работать
```


## особенности проекта

возможная ошибка при получении последних изменений с репозитория
error: cannot stat 'src/pages/EServices/services/realEstate/removalCadastreRegistrationTerminationOfRight/RemovalCadastreRegistrationTerminationOfRight/RemovalCadastreRegistrationTerminationOfRight.tsx': Filename too long

это внутренее ограничение не на имя файла в fs, а на длинну пути в git

возможные пути решения - 
`git config --system core.longpaths true`
