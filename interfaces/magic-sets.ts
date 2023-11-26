export interface SetsListResponse {
    object:   string;
    has_more: boolean;
    data:     UniqueSet[];
}

export interface UniqueSet {
    id:               string;
    code:             string;
    name:             string;
    uri:              string;
    icon_svg_uri:     string;
}

export enum ObjectSet {
    Set = "set",
}

