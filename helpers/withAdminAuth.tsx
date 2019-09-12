import React from 'react';
import router from 'next/router'
import { auth, firestore } from '../firebase';
import { User } from 'firebase';
import Loader from '../pages/components/Loader';
import FirestoreHandler from '../helpers/firestoreHandler';

interface IState {
    status: String
}

const withAdminAuth = (Component, Redirect?) =>  {
    return class extends React.Component<any, IState> {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING'
            }
        }

        async isAdmin(uid: string) : Promise<boolean> {
            const res = await FirestoreHandler.get('settings', 'admins');

            console.log(res.admins.includes(uid));
            return res.admins.includes(uid);
        }

        async authenticate(authUser: User) {
            if (authUser) {
                const isSpeaker = await this.isAdmin(authUser.uid);
                if (isSpeaker) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                    return;
                }
            }
            this.setState({
                status: 'SIGNED_OUT'
            });
            if (typeof Redirect == 'string') {
                router.push(Redirect);
            }
            
        }

        async componentDidMount() {
            auth.onAuthStateChanged((authUser) => this.authenticate(authUser));
        }

        renderContent() {
            if (this.state.status == 'LOADING') {
                return (<Loader loading={false}></Loader>);
            }
            else if (this.state.status == 'SIGNED_IN') {
                return (<Component {...this.props } />);
            }
            else if (this.state.status == 'SIGNED_OUT' && Redirect) {
                return (<Redirect {...this.props }/>);
            }
            else {
                return (<React.Fragment></React.Fragment>);
            }
        }

        render() {
            return (<React.Fragment>
                {this.renderContent()}
            </React.Fragment>);
        }

    }
}

export default withAdminAuth;