import { speakersCountry, speakers } from "./speakers";
import { participantsCountry, countByCompany } from "./participants";

const speakersAndParticipantsCountry = [...speakersCountry, ...participantsCountry];
const speakersAndParticipantsCompany = [...speakers, ...countByCompany];

const countries = speakersAndParticipantsCountry.reduce((acc, value) => {
    if (!acc[value.country]) {
        acc[value.country] = value.count_country;
    } else {
        acc[value.country] += value.count_country;
    }

    return acc;
}, {});

const companies = speakersAndParticipantsCompany.reduce((acc, value) => {
    if (!acc[value.company]) {
        acc[value.company] = value.count;
    } else {
        acc[value.company] += value.count;
    }

    return acc;
}, {});


export const countByCompanyTotal = Object.entries(companies).map((key) => ({company: key[0], count: key[1]}));
export const countByCountryTotal = Object.entries(countries).map((key) => ({company: key[0], count: key[1]}));
