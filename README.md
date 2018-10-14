# retouch

# To add a feature:

1) Clone the repository
2) Run ```npm install```
3) Running ```npm run dev``` will start webpack and will watch for the changes inside ```features/``` directory, it creates the resulting files in ```prod/``` directory
4) If the website you want to create a feature for does not already exist inside features folder create a directory with the website as folder name, create a content script entry point in ```prod/manifest.json```
5) Run ```npm run prod``` to generate the minified files in ```prod/``` directory. 