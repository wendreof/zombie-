let movieData = {}

module.exports = {

    'New movie': function(browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Available',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: [
                'Milla Jovovich',
                'Ali Larter',
                'Ian Glen',
                'Shawn Roberts'
            ],
            cover: 'resisent-evil-2002.jpg',
            plot: 'The Alice and squad mission is to turn down the Red Queen and colect datas',
        }
    },

    'When I try to register a movie': function(browser) {
        console.log(movieData)
    }

}