export type Movie = {
    title: string,
    thumbnail: {
        trending?: {
            small: string,
            large: string
        },
        regular: {
            small: string,
            medium: string,
            large: string
        }
    },
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

export type MoviecardProps = {
    imgSrc: string,
    bookmarkValue: boolean,
    releaseYear: number,
    type: string,
    rating: string,
    title: string
    data: Array,
    setData?: any
}