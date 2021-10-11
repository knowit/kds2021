import React, {useState, useRef, FunctionComponent, useEffect, RefObject} from 'react';
import { Layout } from "../components";
import BarChart from '../components/BarChart';

import { speakersCountry, speakers } from '../models/speakers';
import { countByCity, countByCountry, countByCompany, participants, participantsCountry } from '../models/participants';
import { countByCountryTotal, countByCompanyTotal } from '../models/speakersAndParticipants';

const statistics: FunctionComponent = () => {
    return (
        <div className="page" id="chart">
            <Layout title="Statistics" background={true}>'
                <div className="document content">
                    <h1>Statistics</h1>
                    <h2>Speakers and Participants</h2>
                    <div style={{height: 500}}>
                    <BarChart data={countByCountryTotal} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 40 }}/>
                    </div>
                    <div style={{height: 800}}>
                        <BarChart data={countByCompanyTotal} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                    <h2>Speakers</h2>
                    <div style={{height: 500}}>
                    <BarChart data={speakers} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                    <h2>Participants</h2>
                    <h3>By company</h3>
                    <div style={{height: 500}}>
                    <BarChart data={countByCompany} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 170 }}/>
                    </div>
                    <h3>By city</h3>
                    <div style={{height: 500}}>
                        <BarChart data={countByCity} layout="horizontal" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}/>
                    </div>
                    <h3>By country</h3>
                    <div style={{height: 500}}>
                        <BarChart data={countByCountry} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 40 }}/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default statistics;
