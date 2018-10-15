export class MutationObserverService {
    constructor() {
        this.watchlist = [];
        const callback = this.generateCallbackFromWatchlist();
        const observer = new MutationObserver(callback);
        observer.observe(document, {childList: true, subtree: true});
    }
    updateWatchlist(data) {
        this.watchlist.push(data);
    }
    generateCallbackFromWatchlist() {
        const watchlist = this.watchlist;
        return (mutationsList) => {
            mutationsList.forEach((mutation) => {
                this.watchlist.map((watchItem) => {
                    const watchElement = document.querySelectorAll(watchItem.DOMIdentifier)[0];
                    if(mutation.target === watchElement) {
                        watchItem.action();
                    } else {
                        const addedNodes = mutation.addedNodes;
                        for(var i=0;i<addedNodes.length;i++) {
                            if(addedNodes[i] === document.querySelectorAll(watchItem.DOMIdentifier)[0]) {
                                watchItem.action();
                            }
                        }
                    }
                })
            });
        };
    }
}