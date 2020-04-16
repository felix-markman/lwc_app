import { LightningElement, track } from 'lwc';
import axios from 'axios';

export default class App extends LightningElement {
    @track orgs = '';
    @track user = '';

    connectedCallback() {
        axios
            .get('/api/v1/orgs') // http://localhost:3001/api/v1/orgs
            .then((result) => {
                this.orgs = result.data;
            });

        axios
            .get('/api/v1/user') // http://localhost:3001/api/v1/user
            .then((result) => {
                this.user = result.data;
            });
    }
}
