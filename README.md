# Piano Tiles 2 HTML Version

**Play the web version of Piano Tiles 2 [here](https://tastyforreal.github.io/pianotiles2web/)!**

This repository contains the production files for the HTML5 version of Piano Tiles 2, originally developed by Cheetah Games and hosted on Poki. These are not the original source files; they are the deployed assets, retrieved by intercepting network requests using browser developer tools. The actual source code remains proprietary and is not publicly available. This repository houses compiled, partial, and incomplete assets. Contributions to complete these assets are welcome; please see the [contributing guidelines](#contributing) below.

## Running Locally

No build process is required. Start a local web server to play the game immediately. For example, with Python installed, run the following command from the project's root directory:

```sh
python -m http.server
```

Then, open your web browser and navigate to:

```
http://localhost:8000/
```

To reset the game, clear the page's cookies and data, then refresh the page.

## Purpose

This repository documents this specific version of Piano Tiles 2. Although intended as an archive, I've implemented modifications to address issues encountered while playing. These improvements are worth preserving.

As of 2023, Piano Tiles 2 is no longer available on Poki. Preserving this version is crucial. This preservation effort relies on the prior existence of this particular build.

## Contributing

Local modifications and contributions are welcome. Accepted pull requests will primarily consist of bug fixes and additions of missing assets. Changes that disrupt existing functionality will not be merged. Please submit an issue or pull request to report problems or propose changes. While breaking changes are generally discouraged, several enhancements improve the player experience, such as:

- Enabling offline play and removing advertisements.
- Ensuring smooth gameplay for displays with higher refresh rates.

Because server connection is unavailable, other adjustments include:

- Unlocking all levels.
- Unlocking all skins.
- Providing unlimited lives, gold, and diamonds.

Cheetah Games developed the project using [Cocos Creator](https://www.cocos.com/en/creator). The entire project is written in JavaScript. The files are already bundled for production, eliminating the need to download or install Cocos Creator. Direct modification using a text editor is possible.

## Modding Support

For experienced modders familiar with the mobile version, the process is similar. However, modifying files is significantly easier, requiring only file replacement and a page refresh, without rebuilding the source code.

## License

This code is not formally licensed. It should be used only for educational, documentation, and modding purposes. Commercial use is strongly discouraged. Derivative works should remain open source and include appropriate attribution.
