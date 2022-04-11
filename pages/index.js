import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useAppContext } from '../context';
import Loader from '../components/Loader';

export default function Auth() {
  const { username, secret, loading, setUsername, setSecret, setLoading } =
    useAppContext();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !secret) return;

    setLoading(true);
    axios
      .put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { 'Private-key': process.env.NEXT_PUBLIC_CHAT_KEY } }
      )
      .then(() => router.push('/chats'))
      .catch((e) => {
        alert(e);
        setLoading(false);
      });
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              type="email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              placeholder="Password"
              className="text-input"
              type="password"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button
            disabled={!username || !secret}
            type="submit"
            className="submit-button"
          >
            {loading ? <Loader /> : 'Login / Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
