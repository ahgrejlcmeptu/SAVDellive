# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

TODO
time
18.12 - 6.55
19.12 - 9,30
20.12 - 3.52
21.12 - ?
14.01 - 1.00
17.01 - 2.00

git add .
git commit -m "28.02 path 1"
git push

11.06

по дизайну в карточки не добавил еще информационный блок
ингредиенты делать массивом?

добавить яндекс карту

карточку подарков
интерфейсы заенить на type -> и вообще потом перевести на ts, Но думаю в конце лучше

zod - как можно динамически изменить валадацию
вынести форму в отдельный компонент, чтобы не дублировать active
есть какой то косяк с подгрузкой картинок при обновлении переменных
сверстать все блоки или уже начать функционал с вдминкой пилить?

сделал все блоки, кроме связанные с карточками товаров и внутренних страниц
возможно разделить populate и формирование блока для логики
ну и видимо надо формировать карточки/статусы
занимаюсь избранными товарами, надо на странице избранное, выгружать сразу товары, если есть в куках, пока без юзера