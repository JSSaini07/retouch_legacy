export function removeSuggestedPages(mutationObserverInstance) {
    mutationObserverInstance.updateWatchlist({
        'type': 'nodeAdded',
        'DOMIdentifier': '.pagelet .egoOrganicColumn',
        'action': performRemoval
    });

    function performRemoval() {
        const suggestedPagesPanel = document.querySelector('.pagelet .egoOrganicColumn');
        suggestedPagesPanel.remove();
    }
}