# Visual Field Test UI Redesign

Redesigned using principle of Eel Python and Electon.js
Front end developed in HTML 5, CSS 3 and JavaScript


## Getting Started
- Clone the repo and cd into the directory
```sh
$ git clone git@github.com:AayushGithub/vfaUIRedesign.git
$ cd vfaUIRedesign
```

- Install eel and pyinstaller

```sh
$ pip install eel pyinstaller
```

- Run the app

```sh
$ python back_python.py
```

## Packaging the app
You can pass any valid `pyinstaller` flag in the following command to further customize the way the app is built.
```sh
$ python -m eel back_python.py web --noconsole --onefile --icon=app_icon.icns
```
