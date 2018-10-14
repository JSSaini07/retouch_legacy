
export function removeStories() {
    var callback = function(mutationsList, observer) {
        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                var addedNodes = mutation.addedNodes;
                for(var i=0;i<addedNodes.length;i++) {
                    if(addedNodes[i].id === "stories_pagelet_rhc") {
                        performRemoval();
                    }
                }
            }
        }
    };

    var observer = new MutationObserver(callback);

    observer.observe(document, {childList: true, subtree: true});

    function performRemoval() {
        let storiesPanel = document.getElementById('stories_pagelet_rhc');
        storiesPanel.remove();
        observer.disconnect();
    }
}