import Chance from 'chance';
import _ from 'lodash';

const chance = new Chance();

const songs = [
    'Bathtub Gin',
    'Down With Disease',
    'Ghost',
    'Light',
    'Mike\'s Song',
    'Tweezer',
];

export const makeRandomNote = () => ({
    link: chance.url(),
    note: chance.sentence(),
    showDate: chance.date({string: true, year: chance.year({min:1990, max: 2016})}),
    song: songs[_.random(0, songs.length)],
    userUid: 'bQM13tvkq9Xeg5OXr0Azq4lHVx12'
});
