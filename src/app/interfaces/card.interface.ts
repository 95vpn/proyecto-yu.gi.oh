export interface CardResponse {
    data: Card[];
}

export interface Card {
    id:                    number;
    name:                  string;
    typeline:              string[];
    type:                  string;
    humanReadableCardType: string;
    frameType:             string;
    desc:                  string;
    race:                  string;
    atk:                   number;
    def:                   number;
    level:                 number;
    attribute:             string;
    ygoprodeck_url:        string;
    card_sets:             CardSet[];
    card_images:           CardImage[];
    card_prices:           CardPrice[];
}

export interface CardImage {
    id:                number;
    image_url:         string;
    image_url_small:   string;
    image_url_cropped: string;
}

export interface CardPrice {
    cardmarket_price:   string;
    tcgplayer_price:    string;
    ebay_price:         string;
    amazon_price:       string;
    coolstuffinc_price: string;
}

export interface CardSet {
    set_name:        string;
    set_code:        string;
    set_rarity:      string;
    set_rarity_code: string;
    set_price:       string;
}