import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import { LeaderboardItem } from '../LeaderboardItem';


describe('Leaderboard item tests', function() {
    it('should have the correct elements when value is a string', () => {
        const wrapper = shallow(<LeaderboardItem userName='someUserName' value='someValue' ranking={1} metric='someMetric'/>);
        expect(wrapper.containsAllMatchingElements([
            <div>{1}</div> ,
            <div>someUserName</div> ,
            <div>someMetric: someValue</div>
        ])).to.be.true;
    });
    it('should have the correct elements when value is a number', () => {
        const wrapper = shallow(<LeaderboardItem userName='someUserName' value={1.943} ranking={1} metric='someMetric'/>);
        expect(wrapper.containsAllMatchingElements([
            <div>{1}</div> ,
            <div>someUserName</div> ,
            <div>someMetric: 1.94</div>
        ])).to.be.true;
    });
});
