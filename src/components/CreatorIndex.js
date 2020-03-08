import React, { Component } from 'react';
import {
  Select,
  Row,
  Button,
  Divider,
  Steps } from 'antd';
import Subtitle from '../subcomponents/Subtitle';
import CreatorClassView from '../subcomponents/CreatorClassView';
import CreatorRaceView from '../subcomponents/CreatorRaceView';
import CreatorSubclassView from '../subcomponents/CreatorSubclassView';
import CreatorSpellView from '../subcomponents/CreatorSpellView';
import CreatorInfoView from '../subcomponents/CreatorInfoView';

//DEBUG:
import CLASSES_DEBUG from '../assets/data/classes';
import RACES_DEBUG from '../assets/data/races';

// import WEAPONS from '../assets/data/weapons';
// import ARMOR from '../assets/data/armor';
// import ITEMS from '../assets/data/items';

// TODO:
// Have an instructions screen:
// Welcome to character creator! This is a tool to simplify the development of your unique character.
// By the end of this step-by-step process, you will have everything you need to get started.
// Enter the starting level of your character to begin.
// - gods/religion
// - equipment
// final page/review
// -> printout?

const { Step } = Steps;
const { Option } = Select;

const LEVELS = [
  { value: 1, text: '1st' },
  { value: 2, text: '2nd' },
  { value: 3, text: '3rd' },
  { value: 4, text: '4th' },
  { value: 5, text: '5th' },
  { value: 6, text: '6th' },
];
const STEPS = [
  { title: 'Class', buttonText: 'Choose this Class', component: (props) => <CreatorClassView {...props} /> },
  { title: 'Subclass', buttonText: 'Choose this Subclass', component: (props) => <CreatorSubclassView {...props} /> },
  { title: 'Race', buttonText: 'Choose this Race', component: (props) => <CreatorRaceView {...props} /> },

  // TODO: Subrace, if relevant!!!!!

  // TODO: Deities, if relevant!!!

  { title: 'Spells', buttonText: 'Choose these Spells', component: (props) => <CreatorSpellView {...props} /> },
  { title: 'Info', buttonText: 'Finish', component: (props) => <CreatorInfoView {...props} /> },
];

export default class CreatorIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: -1,
      character: {
        level: 1,
        class: CLASSES_DEBUG.BARBARIAN,
        subclass: null,
        race: RACES_DEBUG.HUMAN,
        subrace: null,
        name: '',
        stats: {
          'STR': 10,
          'DEX': 10,
          'CON': 10,
          'INT': 10,
          'WIS': 10,
          'CHA': 10
        },
        skills: [],
        equipment: [],
        spells: [],
      },
      window: {
        width: 0,
        height: 0
      }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ window: {width: window.innerWidth, height: window.innerHeight} });
  }

  didChangeItem = (name, value) => {
    console.log(name, value);
    var characterCopy = Object.assign({}, this.state.character);
    characterCopy[name] = value;
    this.setState({ character: characterCopy });
  }

  nextStep = () => this.setState({ currentStep: this.state.currentStep + 1 })

  prevStep = () => this.setState({ currentStep: this.state.currentStep - 1 })

  render() {
    const { currentStep, window, character } = this.state;
    const filteredSteps = character.class ? STEPS.filter(s => {
      if (s.title === 'Spells') {
        if (character.class.spellcasting) {
          const spellsKnown = character.class.levelTable.rows[character.level - 1].spellsKnown;
          if (spellsKnown && spellsKnown !== '-') {
            return true;
          }
        }
        return false;
      }
      return true;
    }) : STEPS;
    return (
      <div style={{width:'100%',minHeight:'78vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        {currentStep === filteredSteps.length ? (
          <div>
            
          </div>
        ) : currentStep === -1 ? (
          <div>
            <Row>
             <Subtitle title={'Character Creator'} gray={false} underline />
              <p>
                Welcome to character creator! This is a tool to simplify the development of your unique character. By the end of this step-by-step process, you will have everything you need to get started.
              </p>
              <p>
                Enter the starting level of your character to begin.
              </p>
              <div style={{minHeight:'60vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Subtitle title={'Starting Level:'} size={'small'} margin={true} />
                <Select
                  defaultValue={LEVELS[0].value}
                  style={{width:148,marginLeft:18}}
                  onChange={value => this.didChangeItem('level', value)}
                >
                  {LEVELS.map((l,i) =>
                    <Option key={i} value={l.value}>
                      <Subtitle title={l.text} size={'small'} />
                    </Option>
                  )}
                </Select>
              </div>
            </Row>
            <Row style={{textAlign:'center'}}>
              <Button style={{width:200,fontSize:'20px'}} size='large' type='primary' onClick={this.nextStep}>
                Start
              </Button>
            </Row>
          </div>
        ) : (
          <div>
            <Row style={{height:'48px'}}>
              {window.width > 800 ? (
                <Steps current={currentStep}>
                  {filteredSteps.map((s,i) =>
                    <Step key={i} title={s.title} style={{fontFamily:'LoraBold'}} />
                  )}
                </Steps>
              ) : (
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Subtitle title={filteredSteps[currentStep].title.toUpperCase()} gray={true} margin={false} underline />
                </div>
              )}
            </Row>
            <Row style={{overflow:'hidden'}}>
              {filteredSteps[currentStep].component({didChangeItem: this.didChangeItem, isMobile: window.width < 700, character: this.state.character})}
            </Row>
            <Row style={{height:'84px'}}>
              <Divider />
              <div style={{display:'flex',justifyContent:(currentStep > 0 ? 'space-between' : 'flex-end'),margin:'18px 0'}}>
                {currentStep > 0 && 
                  <Button size='large' type='primary' onClick={this.prevStep}>
                    Back
                  </Button>
                }
                <Button size='large' type='primary' onClick={this.nextStep}>
                  {filteredSteps[currentStep].buttonText}
                </Button>
              </div>
            </Row>
          </div>
        )}
      </div>
    );
  }
}