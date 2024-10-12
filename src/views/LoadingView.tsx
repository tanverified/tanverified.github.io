import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function LoadingView() {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <FontAwesomeIcon icon={faCircle} className="animate-ping" />
    </div>
  );
}
