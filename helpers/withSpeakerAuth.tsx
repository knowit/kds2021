import React from 'react';
import router from 'next/router'
import { auth, firestore } from '../firebase';
import { User } from 'firebase';

interface IState {
    status: String
}

const withSpeakerAuth = (Component, redirect) =>  {
    return class extends React.Component<any, IState> {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING'
            }
        }

        async isSpeaker(email: string) : Promise<boolean> {
            const res = await firestore.collection('speakers').where('email', '==', email).get();

            console.log(res.docs);

            return res.docs.length > 0;
        }

        async authenticate(authUser: User) {
            if (authUser) {
                const isSpeaker = await this.isSpeaker(authUser.email);
                if (isSpeaker) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                    return;
                }
            }
            router.push(redirect);
            
        }

        async componentDidMount() {
            auth.onAuthStateChanged((authUser) => this.authenticate(authUser));
        }

        renderContent() {
            if (this.state.status == 'LOADING') {
                return (<h1>Loading...</h1>);
            }
            else if (this.state.status == 'SIGNED_IN') {
                return (<Component {...this.props } />);
            }
        }

        render() {
            return (<React.Fragment>
                {this.renderContent()}
            </React.Fragment>);
        }

    }
}

export default withSpeakerAuth;