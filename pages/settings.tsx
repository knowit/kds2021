import Layout from "./components/Layout";
import ApiHandler from "../helpers/apiHandler";
import { Component } from 'react'; 
import Loader from "./components/Loader";

class Settings extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      programId: "",
      creatingProgram: false,
      programs: [],
      gettingPrograms: true,
      active : ''
    }
  }

  async componentDidMount() {
    const [program, id] = await Promise.all([ApiHandler.getPrograms(), ApiHandler.getDefaultId()]);
    this.setState({
      programs: program,
      active: id,
      gettingPrograms: false
    });
  }

  updateProgramId = (id) => {
    this.setState({
      programId: id
    });
  }

  createProgram = async () => {
    this.setState({
      creatingProgram: true
    });
    await ApiHandler.createProgram(this.state.programId);
    this.setState(prev => ({
      creatingProgram: false,
      programs: prev.programs.concat([this.state.programId])
    }));  
  }

  setActive = async (id) => {
    await ApiHandler.setActiveProgram(id);
    this.setState({
      active: id
    });
  }

  render() {
    return (
      <div className="aboutUs page">
        <Layout background={true}>
          <div className="document">
              <h2>Settings</h2><br/>
              <Loader loading={this.state.creatingProgram}>
                <div>
                    <label>Create new program</label><br/>
                    <input type="text" placeholder="id" onChange={(e) => this.updateProgramId(e.target.value)}/><button onClick={this.createProgram}>Create</button>
                </div>
              </Loader>
              <br/><br/>
              <p>Programs</p>
              <Loader loading={this.state.gettingPrograms}>
                <ul>
                  {this.state.programs.map(program => 
                  <li>{program}{this.state.active !== program && <button onClick={() => this.setActive(program)}>Set active</button>}</li>)}
                </ul>
              </Loader>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Settings;