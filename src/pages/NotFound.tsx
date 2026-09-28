import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PageIntro } from '../components/sections/PageIntro';

export default function NotFound() {
  return (
    <PageIntro
      eyebrow="Page not found"
      title="404"
      description="That page doesn't exist. Let's get you back to the catalog."
      cta={
        <Link to="/">
          <Button variant="primary">Back to home</Button>
        </Link>
      }
    />
  );
}
