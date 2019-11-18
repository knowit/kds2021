import Layout from "./components/Layout";
import ApiHandler from '../helpers/apiHandler';
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

class Stats extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notFound: false,
      talks: [],
      speakers: [],
      tags: [],
      participants: [],
      types: [],
      countries: [],
      companies: []
    }
  }

  async componentDidMount() {
    // use Promise.all since talks and tags dont have any common calls except defaultid
    const [talks, tags, participants] = await Promise.all([ApiHandler.getTalks(), ApiHandler.getTags(), ApiHandler.getParticipants()]);

    this.setState({
      talks,
      tags,
      participants
    });
  }

  filterParticipants(skip: string = '') {
    const filtered = this.state.participants.filter(p => {
      const types = this.state.types.map(t => t == 'speaker');

      if (skip != 'speaker' && types.length > 0 && types.indexOf(!!p.speaker) == -1) {
        return false;
      }
      if (skip != 'country' && this.state.countries.length > 0 && this.state.countries.indexOf(p.country) == -1) {
        return false
      }
      if (skip != 'company' && this.state.companies.length > 0 && this.state.companies.indexOf(p.company) == -1) {
        return false
      }

      return true;
    });
    return filtered;
  }

  updateSelection(val, prop) {
    this.setState(prev => {
      const obj = {};
      
      if (prev[prop].indexOf(val) > -1) {
        obj[prop] = prev[prop].filter(t => t != val)
        
      }
      else {
        obj[prop] = prev[prop].concat([val])
      }
      return obj;
    });
  }
  
  tagsPopularity() {
    return this.state.tags.map(tag => ({ name: tag, value: this.state.talks.filter(talk => talk.tags.indexOf(tag) >= 0).length }));
  }

  participantAndSpeakerDist() {
    const dist = this.filterParticipants('speaker').reduce((acc, p) => {
      acc[p.speaker ? 'speaker' : 'attendes']++;
      return acc;
    }, { 'attendes': 0, 'speaker': 0 });

    return Object.keys(dist).map(key => ({ name: key, value: dist[key] }));
  }

  countryDist() {
    const countries = this.state.participants.map(p => p.country).filter(c => !!c);
    const uniq = countries.filter((v, i) => countries.indexOf(v) === i);
    return uniq.map(c => ({
      name: c,
      value: this.filterParticipants('country').filter(p => p.country == c).length
    }));
  }

  companyDist() {
    const companies = this.state.participants.map(p => p.company).filter(c => !!c);
    const uniq = companies.filter((v, i) => companies.indexOf(v) === i);
    return uniq.map(c => ({
      name: c,
      value: this.filterParticipants('company').filter(p => p.company == c).length
    }));
  }

  render() {
    const attendeData = this.participantAndSpeakerDist();
    const countryData = this.countryDist();
    const companyData = this.companyDist();
    return (<div className="page">
      <Layout title="Stats" filter={false} background={false}>
        <div>
        <h2>Tags</h2>
          <BarChart
            margin={{ bottom: 25, top: 0, left: 0, right: 0 }}
            width={600}
            height={600}
            data={this.tagsPopularity()}
          >
            <XAxis
              dataKey="name"
              type="category"
            />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8884d8"
              barSize={170}
              label
            >
            </Bar>
          </BarChart>
          <br/><br/>
          <h2>Attendes</h2>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              outerRadius={80}
              fill="#8884d8"
              isAnimationActive={false}
              data={attendeData}
              label={true}
              onClick={(e) => this.updateSelection(e.name, "types")}>
              {attendeData.map((entry) => (
                <Cell key={entry.name} fill={this.state.types.indexOf(entry.name) > -1 ? '#5554d8' : '#8884d8'} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
          <br /><br />
          <h2>Countries</h2>
          <BarChart
            margin={{ bottom: 25, top: 0, left: 0, right: 0 }}
            width={600}
            height={600}
            data={countryData}
          >
            <XAxis
              dataKey="name"
              type="category"
            />
            <Tooltip />
            <Bar
              dataKey="value"
              barSize={170}
              label
              onClick={(e) => this.updateSelection(e.name, "countries")}
            >
              {
                countryData.map((entry, index) => (
                  <Cell key={entry.name} fill={this.state.countries.indexOf(entry.name) > -1 ? '#5554d8' : '#8884d8'} />
                ))
              }
            </Bar>
          </BarChart>
          <br /><br />
          <h2>Companies</h2>
          <BarChart
            margin={{ bottom: 25, top: 0, left: 0, right: 0 }}
            width={600}
            height={600}
            data={companyData}
          >
            <XAxis
              dataKey="name"
              type="category"
            />
            <Tooltip />
            <Bar
              dataKey="value"
              barSize={170}
              label
              onClick={(e) => this.updateSelection(e.name, "companies")}
            >
              {
                companyData.map((entry, index) => (
                  <Cell key={entry.name} fill={this.state.companies.indexOf(entry.name) > -1 ? '#5554d8' : '#8884d8'} />
                ))
              }
            </Bar>
          </BarChart>
          {
            this.filterParticipants().map((p, i) =>
              <p key={i}>
                {p.name}
              </p>
            )
          }
        </div>
      </Layout >
    </div >
    )
  }
}

export default Stats;


