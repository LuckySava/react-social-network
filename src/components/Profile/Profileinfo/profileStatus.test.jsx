import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('my first test', () => {

    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutrra' />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe('it-kamasutrra');
    })

    test('After creation should be visible SPAN ', () => {
        const component = create(<ProfileStatus status='it-kamasutrra' />);
        const root = component.root;

        let span = root.findByType('span')

        expect(span).not.toBeNull();
    })

    test('After creation shouldn\'t be visible SPAN ', () => {
        const component = create(<ProfileStatus status='it-kamasutrra' />);
        const root = component.root;

        expect(() =>{
            let input = root.findByType('input')
        }).toThrow;
    })

    test('After creation SPAN should have text sfrom props ', () => {
        const component = create(<ProfileStatus status='it-kamasutrra' />);
        const root = component.root;

        let span = root.findByType('span')

        expect(span.children[0]).toBe('it-kamasutrra');
    })

    test('input should be displayed in EditMode ', () => {
        const component = create(<ProfileStatus status='it-kamasutrra' />);
        const root = component.root;

        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input');

        expect(input.props.value).toBe('it-kamasutrra');
    })

    test('callback should be called', () => {

        const mockCallback = jest.fn();

        const component = create(<ProfileStatus status='it-kamasutrra' updateStatus={mockCallback}/>);
        const instance = component.getInstance();

        instance.deactivateEditeMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    })

     
})
