[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# StudORG

## Как скачать?

1. Клонируй репозиторий

   `gh repo clone Z3R0ing/VKHack`

2. Открой в VS Code

3. Открой терминал проекта

4. Установи всё необходимое

   `npx @vkontakte/create-vk-mini-app {directory name}`

## Как запустить?

0. Установи vk-tunnel при !первом! запуске

   `npm install @vkontakte/vk-tunnel -g`

1. Запусти проект

   `npm start`

2. Открой вторую консоль проекта

3. Пропиши

   `vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888`

4. В терминале будет предложено перейти по адресу в формате
`https://oauth.vk.com/code_auth?stage=check&code=2a2aaaa` 
для авторизации

5. Открой ссылку в браузере, вернись в терминал и нажми enter

6. После успешной авторизации в терминале появится ссылка вида:

   `https://user12345-jv7zlzzz.wormhole.vk-apps.com`

7. Вставь её в настройках приложения

8. Открой приложение, чтобы проверить
