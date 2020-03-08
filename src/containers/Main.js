import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Page from './Page';
import { Layout } from 'antd';
import WorldMap from '../components/WorldMap';
import ClassIndex from '../components/ClassIndex';
import ClassView from '../components/ClassView';
import SpellIndex from '../components/SpellIndex';
import CombatIndex from '../components/CombatIndex';
import ExplorationIndex from '../components/ExplorationIndex';
import RaceIndex from '../components/RaceIndex';
import RaceView from '../components/RaceView';
import CreatorIndex from '../components/CreatorIndex';
import DeitiesIndex from '../components/DeitiesIndex';

const { Content } = Layout;

function Main(props) {
  const { theme } = props;
  return (
    <Layout>
      <Navbar {...props} theme={theme} />
      <Content>
        <Switch>
          <Route exact path='/worldmap' render={props => <WorldMap {...props} theme={theme} />} />
          <Route
            exact path='/class/:classname'
            render={props => 
              <Page content={<ClassView {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/class'
            render={props => 
              <Page content={<ClassIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/race/:racename'
            render={props => 
              <Page content={<RaceView {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/race'
            render={props => 
              <Page content={<RaceIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/combat'
            render={props => 
              <Page content={<CombatIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/spells'
            render={props => 
              <Page content={<SpellIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/adventure'
            render={props => 
              <Page content={<ExplorationIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route
            exact path='/deities'
            render={props => <DeitiesIndex {...props} theme={theme} />}
          />
          <Route
            exact path='/creator'
            render={props => 
              <Page content={<CreatorIndex {...props} theme={theme} />} theme={theme} />
            }
          />
          <Route exact path='/' render={props => <div>main</div>} />
          <Route
            exact path='/'
            render={props =>
              <Redirect
                to={{
                  pathname: '/hello',
                  state: { from: props.location }
                }}
              />
            }
          />
        </Switch>
      </Content>
    </Layout>
  )
}

export default withRouter(Main);