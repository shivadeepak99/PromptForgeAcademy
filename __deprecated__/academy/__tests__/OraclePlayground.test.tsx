import { render, screen, fireEvent } from '@testing-library/react';
import OraclePlayground from '../components/OraclePlayground';

describe('OraclePlayground', () => {
  it('renders and forges output', async () => {
    render(<OraclePlayground labId="lab-1" />);
    fireEvent.click(screen.getByText('Forge It!'));
    expect(await screen.findByText(/Sample output/)).toBeInTheDocument();
  });
});
