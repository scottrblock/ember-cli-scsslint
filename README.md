# Ember CLI ScssLint

[Lint](https://github.com/causes/scss-lint) your Ember app's Sass (.scss files) as part of the build process.

## Credit
This wouldn't be possible without the great work from [johnotander](https://github.com/johnotander) on [ember-cli-csslint](https://github.com/johnotander/ember-cli-csslint).

## Known limitations

Currently only works on .scss files, not .sass syntax, and would seemingly only work on files in `app/styles`. 

## Installation

First, you need to install the sass-lint ruby gem via
```
gem install scss-lint
```
or using bundler. Then install the addon via:
```
npm i ember-cli-scsslint
```
Use the `--save` option to add the package to your package.json dependencies.

## Usage

Now, when you run `ember build`, the Scss Linting will be automatically run:

```
ember build
version: 0.1.12
Building
Building...Processing app.scss
Processing components/_media_element.scss
[default] Errors
components/_media_element.scss:1 [W] SpaceAfterPropertyColon: Colon after property should be followed by at least one
components/_media_element.scss:2 [W] SpaceAfterPropertyColon: Colon after property should be followed by at least one
Processing modules/_user_box.scss
Built project successfully. Stored in "dist/".
```

To customize your linting, create a `.scss-lint.yml` file in `app/styles/`.  Below is an example file indicating how to include and exclude specific files:

```yml
scss_files: '**/*.css.scss'

exclude: ['bootstrap-custom.scss', 'bootstrap-vb.scss']

linters:
  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true
    convention: zero # or `none`
```

For more information on the available rules see the [scsslint linters documentation](https://github.com/causes/scss-lint/blob/master/lib/scss_lint/linter/README.md).

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## TODO:

- [ ] Ensure the linting occurs on every build, including when the server is running.
- [ ] Create better tests 
- [ ] Beautify the output (more).
- [ ] Allow configuration for the styles directory (in case `app/styles` isn't used).
- [ ] Allow all of the configuration options in [broccoli-scss-lint](https://www.npmjs.com/package/broccoli-scss-lint) such as exporting results to a .json file.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Made with <3 by [Scott Block](http://twitter.com/insidetheblock) from the [VentureBoard](http://ventureboard.co) team.
