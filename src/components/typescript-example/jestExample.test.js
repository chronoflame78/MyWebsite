// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// jest cheat sheet
// https://github.com/sapegin/jest-cheat-sheet

it('is a test', () => {
    expect('hello').toBe('hello')
})


it('is a test 2', () => {
    expect([]).toEqual([])
})


const getPeople = () => {
    //expect.assertions(1)
    return fetch("https://swapi.dev/api/people")
    .then(res => res.json)
    .then(data => {
        return {
            count: data.count,
            result: data.result
        }
    })
}

const getPeople2 = async () => {
    const getRequest = await fetch("https://swapi.dev/api/people");
    const data = await getRequest.json();
    return {
        count: data.count,
        result: data.result
    }
}


// it('call api to get people', () => {
//     return getPeople().then(data => {
//         expect(data.count).toEqual(87)
//     })
// })

