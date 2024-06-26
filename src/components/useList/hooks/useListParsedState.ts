/* eslint-disable valid-jsdoc */
import React from 'react';

import type {ListItemId, ListItemType} from '../types';
import {getListParsedState} from '../utils/getListParsedState';

interface UseListParsedStateProps<T> {
    items: ListItemType<T>[];
    /**
     * List item id dependant of data
     */
    getItemId?(item: T): ListItemId;
}

/**
 * From the tree structure of list items we get meta information and
 * flatten list in right order without taking elements that hidden in expanded groups
 */
export function useListParsedState<T>({items, getItemId}: UseListParsedStateProps<T>) {
    const result = React.useMemo(() => {
        return getListParsedState<T>(items, getItemId);
    }, [getItemId, items]);

    return result;
}
