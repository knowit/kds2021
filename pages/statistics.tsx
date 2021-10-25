import React, {useState, useRef, FunctionComponent, useEffect, RefObject} from 'react';
import { Layout } from "../components";
import BarChart from '../components/BarChart';

import {
    speakersAncParticipantsCountries,
    speakersAndParticipantsCities,
    speakersAndParticipantsCompanies,
    speakersCities,
    speakersCompanies,
    speakersCountries,
    participantsCities,
    participantsCompanies,
    participantsCountries
} from '../models/speakersAndParticipants';

const statistics: FunctionComponent = () => {
    return (
        <div className="page" id="chart">
            <Layout title="Statistics" background={true}>'
                <div className="document content">
                    <h1>Statistics</h1>
                    <h2>Speakers and Participants</h2>
                    <h3>By country</h3>
                    <div style={{height: 500}}>
                        <BarChart data={speakersAncParticipantsCountries} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 40 }}/>
                    </div>
                    <h3>By city</h3>
                    <div style={{height: 500}}>
                        <BarChart data={speakersAndParticipantsCities} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}/>
                    </div>
                    <h3>By company</h3>
                    <div style={{height: 800}}>
                        <BarChart data={speakersAndParticipantsCompanies} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                    <h2>Speakers</h2>
                    <h3>By country</h3>
                    <div style={{height: 500}}>
                        <BarChart data={speakersCountries} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 40 }}/>
                    </div>
                    <h3>By city</h3>
                    <div style={{height: 500}}>
                        <BarChart data={speakersCities} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}/>
                    </div>
                    <h3>By company</h3>
                    <div style={{height: 500}}>
                        <BarChart data={speakersCompanies} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                    <h2>Participants</h2>
                    <h3>By country</h3>
                    <div style={{height: 500}}>
                        <BarChart data={participantsCountries} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 40 }}/>
                    </div>
                    <h3>By city</h3>
                    <div style={{height: 500}}>
                        <BarChart data={participantsCities} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}/>
                    </div>
                    <h3>By company</h3>
                    <div style={{height: 500}}>
                        <BarChart data={participantsCompanies} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default statistics;
