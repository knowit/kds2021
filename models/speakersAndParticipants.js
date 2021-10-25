import { speakersCountry, speakers } from "./speakers";
import { participantsCountry, participants } from "./participants";

const getCountByCity = (arr) => {
    const cities = arr.reduce((acc, value) => {
        if (!acc[value.city]) {
            acc[value.city] = value.count_city;
        } else {
            acc[value.city] += value.count_country;
        }
        return acc;
    }, {});

    return Object.entries(cities).map((key) => ({company: key[0], count: key[1]}));
}

const getCountByCompany = (arr) => {
    let total = 0;
    const companies = arr.reduce((acc, value) => {
        if (!acc[value.company]) {
            acc[value.company] = value.count_country;
        } else {
            acc[value.company] += value.count_country;
        }

        total += value.count_company;
        return acc;
    }, {})

    return Object.entries(companies).map((key) => ({company: key[0], count: key[1]}));
}

const getCountByCountry = (arr) => {
    let total = 0;
    const countries = arr.reduce((acc, value) => {
        if (!acc[value.country]) {
            acc[value.country] = value.count_country;
        } else {
            acc[value.country] += value.count_country;
        }

        total += value.count_country;
        return acc;
    }, {});

    return Object.entries({...countries, Total: total}).map((key) => ({company: key[0], count: key[1]}));;
}


const speakersAndParticipantsCountry = [...speakersCountry, ...participantsCountry];
const speakersAndParticipantsCompany = [...speakers, ...participants];

export const speakersAncParticipantsCountries = getCountByCountry(speakersAndParticipantsCountry);
export const speakersAndParticipantsCities = getCountByCity(speakersAndParticipantsCompany);
export const speakersAndParticipantsCompanies = getCountByCompany(speakersAndParticipantsCompany);

export const speakersCountries = getCountByCountry(speakers);
export const speakersCompanies = getCountByCompany(speakers);
export const speakersCities = getCountByCity(speakers);

export const participantsCountries = getCountByCountry(participants);
export const participantsCompanies = getCountByCompany(participants);
export const participantsCities = getCountByCity(participants);
