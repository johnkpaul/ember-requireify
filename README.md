# ember-requireify

POC for using [requireify](https://github.com/johnkpaul/requireify) with Ember Resolver's to achieve 0 global Ember code
without need to manually require every file. 

The Ember application is setup using a `Resolver` with a custom `resolveRoute` method. The `resolveRoute` method looks up using requireify's browser accessible require. Best of RequireJS and browserify all in one. WOOHOO. :)

The important pieces are in `build.js` and `app/app.js`

## Usage

On OSX

```
npm install
npm start
```

On *nix

```
npm install
node build
//open index.html in browser
```
