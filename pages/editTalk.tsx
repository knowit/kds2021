import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
import withSpeakerAuth from '../helpers/withSpeakerAuth';
import React from 'react';
import { firestore, auth } from '../firebase_utils';
import TagSelector from './components/TagSelector';
import SpeakersSelector from './components/SpeakersSelector';
import Talk from '../models/Talk';
import Router from 'next/router';
import FirestoreHandler from '../helpers/firestoreHandler';
import _ from 'lodash';
import languages from '../models/Languages.json';
import AddTalk from './addTalk';

export default AddTalk;
