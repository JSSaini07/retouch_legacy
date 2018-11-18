import {removeStories} from './rightPanel/stories/stories.js';
import {removeSuggestedPages} from './rightPanel/suggestedPages/suggestedPages.js';
import { MutationObserverService } from '../../commons/mutationObserver.js';

const mutationObserverInstance = new MutationObserverService();
removeStories(mutationObserverInstance);
removeSuggestedPages(mutationObserverInstance);