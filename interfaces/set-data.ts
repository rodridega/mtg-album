export interface SetData {
    object:      string;
    total_cards: number;
    has_more:    boolean;
    next_page:   string;
    data:        CardData[];
}

export interface CardData {
    object:            Object;
    id:                string;
    oracle_id:         string;
    multiverse_ids:    number[];
    mtgo_id:           number;
    mtgo_foil_id:      number;
    tcgplayer_id:      number;
    cardmarket_id:     number;
    name:              string;
    lang:              Lang;
    released_at:       Date;
    uri:               string;
    scryfall_uri:      string;
    layout:            Layout;
    highres_image:     boolean;
    image_status:      ImageStatus;
    image_uris:        ImageUrls;
    mana_cost:         string;
    cmc:               number;
    type_line:         string;
    oracle_text:       string;
    colors:            ColorIdentity[];
    color_identity:    ColorIdentity[];
    keywords:          string[];
    all_parts?:        AllPart[];
    games:             Game[];
    reserved:          boolean;
    foil:              boolean;
    nonfoil:           boolean;
    finishes:          Finish[];
    oversized:         boolean;
    promo:             boolean;
    reprint:           boolean;
    variation:         boolean;
    set_id:            string;
    set:               Set;
    set_name:          SetName;
    set_type:          SetType;
    set_uri:           string;
    set_search_uri:    string;
    scryfall_set_uri:  string;
    rulings_uri:       string;
    prints_search_uri: string;
    collector_number:  string;
    digital:           boolean;
    rarity:            Rarity;
    card_back_id:      string;
    artist:            string;
    artist_ids:        string[];
    illustration_id:   string;
    border_color:      BorderColor;
    frame:             string;
    full_art:          boolean;
    textless:          boolean;
    booster:           boolean;
    story_spotlight:   boolean;
    edhrec_rank:       number;
    penny_rank?:       number;
    prices:            { [key: string]: null | string };
    power?:            string;
    toughness?:        string;
    flavor_text?:      string;
    produced_mana?:    ColorIdentity[];
}

export interface AllPart {
    object:    string;
    id:        string;
    component: string;
    name:      string;
    type_line: string;
    uri:       string;
}

export enum BorderColor {
    Black = "black",
}

export enum ColorIdentity {
    B = "B",
    R = "R",
    U = "U",
    W = "W",
}

export enum Finish {
    Foil = "foil",
    Nonfoil = "nonfoil",
}

export enum Game {
    Mtgo = "mtgo",
    Paper = "paper",
}

export enum ImageStatus {
    HighresScan = "highres_scan",
}

export interface ImageUrls {
    small:       string;
    normal:      string;
    large:       string;
    png:         string;
    art_crop:    string;
    border_crop: string;
}

export enum Lang {
    En = "en",
}

export enum Layout {
    Normal = "normal",
}


export enum Alchemy {
    Banned = "banned",
    Legal = "legal",
    NotLegal = "not_legal",
}

export enum Paupercommander {
    Legal = "legal",
    NotLegal = "not_legal",
    Restricted = "restricted",
}

export enum Object {
    Card = "card",
}


export enum Rarity {
    Common = "common",
    Rare = "rare",
    Uncommon = "uncommon",
}



export enum Set {
    Mmq = "mmq",
}

export enum SetName {
    MercadianMasques = "Mercadian Masques",
}

export enum SetType {
    Expansion = "expansion",
}
