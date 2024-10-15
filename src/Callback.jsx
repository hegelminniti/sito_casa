import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Callback = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Ottieni il codice di autorizzazione dalla query string
    const authorizationCode = searchParams.get('code');

    if (authorizationCode) {
      // Scambia il codice di autorizzazione con un token di accesso
      fetch('https://api.calendly.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: 'http://localhost:3000/callback',
          client_id: 'muADXITEYOYihNQP8lTozqePtm9DODikkgLHBEaTOGk',
          client_secret: 'mLe4ftlnImE9aXVwEAx4LlANxwiCtR8tDrFawKXn9_I',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            // Salva il token di accesso per effettuare richieste all'API
            localStorage.setItem('calendly_access_token', data.access_token);
            alert('Autenticazione riuscita!');
          } else {
            alert('Autenticazione fallita!');
          }
        })
        .catch((error) => {
          console.error('Errore durante lo scambio del token:', error);
        });
    } else {
      alert('Codice di autorizzazione non trovato!');
    }
  }, [searchParams]);

  return <div>Autenticazione in corso...</div>;
};

export default Callback;
