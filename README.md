# retouch

# Steps to install
1) Clone the repository
2) Run ```npm install```
3) Run ```npm run prod``` to generate the minified files in ```prod/``` directory
4) Open ```chrome://extensions``` in Google Chrome and click on ```Load unpacked```. Load the ```prod``` directory.

# To add a feature

1) Clone the repository
2) Run ```npm install```
3) Running ```npm run dev``` will start webpack and will watch for the changes inside ```features/``` directory, it creates the resulting files in ```prod/``` directory
4) If the website you want to create a feature for does not already exist inside features folder create a directory with the website as folder name, create a content script entry point in ```prod/manifest.json```
5) Run ```npm run prod``` to generate the minified files in ```prod/``` directory.

# Code structure

* The extensions relies heavily on ```Mutation Observers```, A common service is created for this in ```retouch/commons/mutationObserver.js```.
* Every registered website will have a directory in which we have a ```content.js``` for that website. This file register a ```Mutation Observer``` instance and passes it to all features so that only a single instance of ```Mutation Observer``` exists.

> For example, In removal of facebook stories we have

~~~ 
const mutationObserverInstance = new MutationObserverService();
removeStories(mutationObserverInstance);
~~~

* Mutation Observer class provides a method to update the watchlist and expects the arguments in a specific format 

~~~
    {
        'type': 'nodeAdded',
        'DOMIdentifier': '#fb_stories_card_root',
        'action': performRemoval
    }
~~~