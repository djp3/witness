Startup
  To install dependencies: `yarn install`

Building the extension:

  `yarn build`
    Bundles the app into static files for production.
    For a react chrome extension we must build it, before 
    importing into chrome.


To load the extension, navigate to `chrome://extensions` and enable developer mode.  Once developer mode is enabled click `Load unpacked`.  From the file selector, navigate to the build folder of this project.  If build does not exist, then run `yarn build`.  Once the build folder has been selected chrome will load the extension.  

## TODO
1. Add Tests
2. Fix styling when images do not exist on page
3. Add icons
4. Research how and why some pages have images that have no preview. 
5. Make magic number in ImageTable shortenString a constant

