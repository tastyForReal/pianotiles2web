# Piano Tiles 2 HTML Version Archive

**Play the archived web version of Piano Tiles 2 [here](https://tastyforreal.github.io/pianotiles2web/)!**

This repository contains the production files for the HTML5 version of Piano Tiles 2, originally developed by Cheetah Games and hosted on Poki.

These are not the original source code files. They are the deployed assets, retrieved by intercepting network requests using browser developer tools. The actual source code remains with the developers and is not publicly available. This repository houses compiled, partial, and incomplete assets. Contributions to complete these assets are welcome; please see the [contributing guidelines](#contributing).

## Running Locally

No build process is necessary. Start a local web server to play the game immediately. For example, if you have Python installed, run the following command from the project's root directory:

```sh
python -m http.server
```

Then, open your web browser and navigate to:

```
http://localhost:8000/
```

To reset the game, clear the page's cookies and data, then perform a hard refresh.

## Purpose

This repository serves as a historical archive, documenting this specific version of Piano Tiles 2.

As of 2023, Piano Tiles 2 is no longer available on Poki. Preserving this version is essential. This preservation effort would not have been possible without the prior existence of this particular build.

## Contributing

Local modifications and contributions are welcome. Accepted pull requests will primarily consist of bug fixes and the addition of missing assets. Changes that disrupt existing functionality will not be merged. Please submit an issue or pull request to report problems or propose changes. While breaking changes are generally discouraged, justified improvements have already been implemented, such as:

- Unlocking all levels.
- Unlocking all skins.
- Providing unlimited lives, gold, and diamonds.
- Enabling offline play and removing advertisements.
- Decoupling the level gameplay scene scrolling from the frame rate.

Cheetah Games developed the project using [Cocos Creator](https://www.cocos.com/en/creator). The entire project is written in JavaScript. The files are already bundled for production, so there's no need to download or install Cocos Creator. Direct modification using a text editor is possible. The minified JavaScript code has been reformatted for improved readability, although some obfuscation persists.

## License

This code is not formally licensed. It should be used only for educational, documentation, and modding purposes. Commercial use is strongly discouraged. Derivative works should remain open source and include appropriate attribution.
