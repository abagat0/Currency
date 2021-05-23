import { render, screen , fireEvent} from '@testing-library/react';
import UserExchangeList from './../components/UserExchangeList';
const calc = [{timestamp:new Date().getTime(),calculation:1.2 , currency: 'EUR', rate: 1, value: 1}]
beforeAll(() => {
    window.localStorage.setItem('calculations',calc)})

test('User list componenent',() => {
    render(<UserExchangeList items={calc}/>)
    expect(screen.getByText('Currency')).toBeInTheDocument()
})