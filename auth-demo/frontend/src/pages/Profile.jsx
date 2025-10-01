import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

export default function Profile() {
  const { token, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const res = await fetch("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProfile(data);
    }
    fetchProfile();
  }, [token]);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? <p>Welcome {profile.user}</p> : <p>Loading...</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
