import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';

describe('IconLinkWidget', () => {
  test('should render with a text, href target and fallback title', async () => {
    const text = 'Dummy Link';
    const target = 'https://hello.world';
    render(<IconLinkWidget text={text} target={target} icon={faEarth} />);

    await screen.findByTestId('icon-link');

    expect(screen.getByTestId('icon-link')).toHaveTextContent(text);
    expect(screen.getByTestId('icon-link')).toHaveAttribute('href', target);
    expect(screen.getByTestId('icon-link')).toHaveAttribute('title', text);
  });

  test('should render with a function target and handle click', async () => {
    const target = vi.fn();
    render(<IconLinkWidget text="Dummy Link" target={target} icon={faEarth} />);

    await screen.findByTestId('icon-link');
    await userEvent.click(screen.getByTestId('icon-link'));

    expect(screen.getByTestId('icon-link')).toHaveAttribute('href', '#');
    expect(target).toHaveBeenCalledOnce();
  });
});
