# autoform-sandbox-blaze-async
Check autoform not showing with async blaze #if #unless #each

This is a small sample meteor project which allows us to review & fix an issue with autoform not displaying forms with a WIP PR (https://github.com/meteor/blaze/pull/424) to support async data in Blaze `#if`, `#unless` and `#each` template operators.

Loom Video: https://www.loom.com/share/a202e704da8c4600a386c5ece7e5a287?sid=cbfcff77-30fe-4832-9185-df37baf3af5e

## How to check quickly

For being able to quickly test the compatibility with the changes, i've _copied_ the files of the changed blaze package to the `packages` directory.

If you run the project you shouldn't see the form... if you change the name of the package in the `packages/blaze/package.js` file from `blaze` to eg. `blaze-no` then meteor will load the default `2.7.1` from the `2.1.12` release.

Then you should see the form in the browser.

So `blaze` from `packages` - folder - no form  

`blaze` from current release - form is being rendered.

Hopefully this is a good simple replication of the issue.

