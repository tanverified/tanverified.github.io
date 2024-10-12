import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrownOpen } from '@fortawesome/free-regular-svg-icons';

export default function ErrorView() {
  return (
    <div className="flex h-96 items-center justify-center gap-3">
      <FontAwesomeIcon icon={faFaceFrownOpen} size="3x" />
      <div>
        <p className="text-xl font-light">You broke it!</p>
        <a href="/">Go back</a>
      </div>
    </div>
  );
}
