export interface Quote {
    id: string;
    categories: string[];
    created_at: string;
    updated_at: string;
    icon_url: string;
    url: string;
    value: string;
}

export enum ColType {
    text,
    date
}

export interface Column {
    field: string;
    name: string;
    type: ColType;
    sortable?: boolean;
}

export enum SortOrder {
    asc,
    desc
}

export interface SortBy {
    sortOrder: SortOrder;
    field: string;
}
