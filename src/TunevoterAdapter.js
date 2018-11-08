const TV_API = "http://api.tunevoter.com";
// const TV_API = "http://localhost:3000";

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

    let all_data = await result.json();

    // NOTE: Derek I need to transform data here with "data" variable
    let data = all_data;

    callbackFunction(data);
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

    let auth_data = await result.json();
    if (!!auth_data.jwt) {
      localStorage.token = auth_data.jwt;

      return callbackFunction({
        currentUserEmail: auth_data.venue.email
      });
    } else {
      console.log("Could not log in");
    }
  }
}

export default TunevoterAdapter;
