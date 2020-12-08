import React from 'react';
import {mount, shallow} from 'enzyme';
import { expect } from 'chai';
import { LeaderboardItem } from '../LeaderboardItem';
import  LeaderboardRanking  from '../LeaderboardRanking';
import { ImportMock } from 'ts-mock-imports';
import * as axios from '../../utils/axios';
import { SinonStub } from 'sinon';

const runAllPromises = () => new Promise(setImmediate); 

describe('Leaderboard Ranking tests', function() {
    let stub: SinonStub;
    
    beforeAll(function() {
        stub = ImportMock.mockFunction(axios, 'httpRequest', () => { 
            console.log('stub happens')
            return Promise.resolve({data: [
            {
                ranking: 1, userName: 'User1', value: 15
            }, 
            {
                ranking: 2, userName: 'User2', value: 10
            }, 
            {
                ranking: 3, userName: 'User3', value: 7
            }
        ]})})
    })
    afterAll(function() {
        stub.restore();
    })

    it('should have the correct elements', async () => {
        const wrapper = shallow(<LeaderboardRanking gameUsers={[]} metric='someMetric'/>);
        await runAllPromises();
        wrapper.update();
        console.log(wrapper.html());
        expect(wrapper.find('LeaderboardItem')).to.have.lengthOf(3);


    });
});
