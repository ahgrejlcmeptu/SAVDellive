import {renderBlockBr} from "./app.block";

export const Banners: any = {
    base: {
        filters: {
            visible: true
        }
    }
}
export const Advantages: any = {
    base: {
        filters: {
            visible: true
        },
        populate: {
            list: {
                fields: ['title', 'description'],
                populate: {
                    img: {
                        fields: ['url']
                    }
                }
            }
        }
    },
    list(arr: any): any {
        return arr.map((i: any) => {
            return {...i, description: renderBlockBr(i.description)}
        })
    }
}
export const Categories: any = {
    base: {
        filters: {
            visible: true
        },
        populate: {
            list: {
                fields: ["name"],
                populate: {
                    img: {
                        fields: ['url']
                    },
                    products: {
                        fields: []
                    }
                }
            }
        }
    }
}
export const About: any = {
    base: {
        filters: {
            visible: true
        },
        populate: {
            img: {
                fields: ['url']
            }
        }
    }
}
export const Stories: any = {
    base: {
        filters: {
            visible: true
        }
    }
}
export const News: any = {
    base: {
        filters: {
            visible: true
        }
    }
}
export const Reviews: any = {
    base: {
        filters: {
            visible: true
        }
    },
    list(arr: any): any {
        return arr.map((i: any) => {
            const data = {...i}
            if (data.review.description) data.review.description = renderBlockBr(i.review.description)
            if (data.ask?.description) data.ask.description = renderBlockBr(i.ask.description)
            return data
        })
    }
}
export const Seo: any = {
    base: {
        filters: {
            visible: true
        },
        populate: {
            list: {
                fields: ['title', 'description'],
                populate: {
                    img: {
                        fields: ['url']
                    }
                }
            }
        }
    },
    list(arr: any): any {
        return arr.map((i: any) => {
            return {...i, description: renderBlockBr(i.description)}
        })
    }
}
export const Social: any = {
    base: {
        fields: ['title', 'link'],
        filters: {
            visible: true
        },
        populate: {
            linkImg: {
                fields: ['url']
            },
            images: {
                fields: ['url']
            }
        }
    }
}
export const Team: any = {
    base: {
        fields: ['title', 'description'],
        filters: {
            visible: true
        },
        populate: {
            images: {
                fields: ['url']
            }
        }
    }
}
export const Gallery: any = {
    base: {
        fields: ['linkVideo'],
        populate: {
            poster: {
                fields: ['url']
            },
            gallery: {
                fields: ['url', 'mime']
            }
        }
    }
}
export const Popular: any = {
    base: {
        fields: ['title', 'linkBottom', 'linkBottomText', 'linkBottomHref'],
        filters: {
            visible: true
        },
        populate: {
            statuses: {
                fields: ['name', 'icon'],
                populate: {
                    products: {
                        populate: {
                            img: {
                                fields: ['url']
                            },
                            statuses: {
                                fields: []
                            }
                        }
                    }
                }
            }
        }
    }
}

export const Declaration: any = {
    base: {
        fields: ['title', 'description', 'linkText', 'linkHref', 'link'],
        populate: {
            img: {
                fields: ['url']
            }
        }
    }
}

export const Products: any = {
    base: {
        fields: ['name', 'price', 'oldPrice', 'weight', 'compound'],
        populate: {
            img: {
                fields: ['url']
            }
        }
    }
}