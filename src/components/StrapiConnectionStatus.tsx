
import { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { validateStrapiConfig } from '@/utils/strapiUtils';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';

export const StrapiConnectionStatus = () => {
  const [configErrors, setConfigErrors] = useState<string[]>([]);
  
  useEffect(() => {
    const { isValid, errors } = validateStrapiConfig();
    if (!isValid) {
      setConfigErrors(errors);
    }
  }, []);
  
  if (configErrors.length === 0) {
    return null;
  }
  
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Strapi Configuration Issues</AlertTitle>
      <AlertDescription>
        <p>Please fix the following configuration issues to connect to Strapi:</p>
        <ul className="list-disc list-inside mt-2">
          {configErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <p className="mt-2">
          Add these environment variables to your <code>.env</code> file or configure them in your hosting environment.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default StrapiConnectionStatus;
