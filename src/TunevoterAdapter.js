import { GraphUtils } from './utils'

const TV_API = process.env.NODE_ENV !== 'production' ? "http://localhost:3000" : "http://api.tunevoter.com" 

class TunevoterAdapter {
  static async sendSpotifyData(args) {
    const { venueSlug, accessToken } = args;

    await fetch(`${TV_API}/api/v1/spotify_users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spotify_user: {
          venue_slug: venueSlug,
          access_token: accessToken
        }
      })
    });
  }

  static async getTopArtists(args) {
    const { callbackFunction } = args;

    let result = await fetch(`${TV_API}/api/v1/top_artists`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token
      }
    });

    let allData = await result.json();

    let transformedData = GraphUtils.limitGraphOptions(allData, 15)

    callbackFunction("artists", transformedData);
  }

  static async getTopGenres(args) {
    const { callbackFunction } = args;

    let result = await fetch(`${TV_API}/api/v1/top_genres`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token
      }
    });

    let allData = await result.json();

    let transformedData = GraphUtils.limitGraphOptions(allData, 15)

    callbackFunction("genres", transformedData);
  }

  static async getUsersOverTime(args) {
    const { callbackFunction } = args;

    let result = await fetch(`${TV_API}/api/v1/spotify_users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token
      }
    });
    console.log("result:", result);
    let allData = await result.json();

    callbackFunction("userGrowth", allData);
  }

  static async signupUser(args) {
    const { email, password } = args;

    await fetch(`${TV_API}/api/v1/venues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token
      },
      body: JSON.stringify({
        venue: {
          email,
          password
        }
      })
    });
  }

  static async loginUser(args) {
    const { email, password, callbackFunction } = args;

    let result = await fetch(`${TV_API}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        venue: {
          email,
          password
        }
      })
    });

    let authData = await result.json();
    if (!!authData.jwt) {
      localStorage.token = authData.jwt;

      return callbackFunction({
        currentUserEmail: authData.venue.email
      });
    } else {
      console.log("Could not log in");
    }
  }
}

export default TunevoterAdapter;
