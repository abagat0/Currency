import { render, screen , fireEvent} from '@testing-library/react';
import UserExchangeList from './../components/UserExchangeList';
beforeAll(() => {
    window.localStorage.setItem('calculations',[{timestamp:new Date().getTime(),calculation:1.2 , currency: 'EUR', rate: 1, value: 1}])})

test('User list componenent',() => {
    render(<UserExchangeList items={[{timestamp:new Date().getTime(),calculation:1.2 , currency: 'EUR', rate: 1, value: 1}]}/>)
    // await fireEvent.click(screen.getByText(/Delete/i))
    expect(screen.getByText('Currency')).toBeInTheDocument()
})